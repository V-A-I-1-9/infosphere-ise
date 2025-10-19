import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchTechnicalData } from "../services/apiTechnical";

// URLs retrieved from .env file
const eventsUrl = import.meta.env.VITE_TECHNICAL_EVENTS_URL;
const teamUrl = import.meta.env.VITE_TECHNICAL_TEAM_URL;
const achievementsUrl = import.meta.env.VITE_TECHNICAL_ACHIEVEMENT_URL;
const projectsUrl = import.meta.env.VITE_TECHNICAL_PROJECT_URL;

/**
 * Custom hook to fetch and process Technical club data.
 * Uses React Query for data fetching, caching, and state management.
 * The data is memoized to prevent unnecessary re-processing.
 *
 * @returns {Object} An object containing:
 * - isLoading, isError, error: State indicators from React Query
 * - events, team, achievements, projects: Memoized arrays of data for each category
 */
export function useTechnicalData() {
  const {
    data: rawData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["technicalData"],
    queryFn: fetchTechnicalData,
    enabled: !!(eventsUrl && teamUrl && achievementsUrl && projectsUrl),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Auto-refresh every 5 minutes
    retry: 3,
    retryDelay: function calculateRetryDelay(attemptIndex) {
      return Math.min(1000 * Math.pow(2, attemptIndex), 30000);
    },
  });

  // useMemo ensures that we only re-process the data when rawData changes.
  // This is a crucial performance optimization.
  const processedData = useMemo(
    function processRawData() {
      const defaultData = {
        events: [],
        team: [],
        achievements: [],
        projects: [],
      };

      if (!rawData) {
        return defaultData;
      }

      return {
        events: rawData.events || [],
        team: rawData.team || [],
        achievements: rawData.achievements || [],
        projects: rawData.projects || [],
      };
    },
    [rawData]
  );

  return {
    isLoading,
    isError,
    error,
    ...processedData,
  };
}
