import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchEventsData } from "../services/apiEvent";

// URL retrieved from .env file
const calendarUrl = import.meta.env.VITE_EVENT_URL;

/**
 * Custom hook to fetch and process Event Calendar data.
 * Uses React Query for data fetching, caching, and state management.
 * The data is memoized and organized by event status.
 *
 * @returns {Object} An object containing:
 * - isLoading, isError, error: State indicators from React Query
 * - allEvents: All events
 * - upcoming, ongoing, completed: Events filtered by status
 * - featured: Featured events for homepage
 */
export function useEventsData() {
  const {
    data: rawData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["eventsData"],
    queryFn: fetchEventsData,
    enabled: !!calendarUrl,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });

  // useMemo ensures that we only re-process the data when rawData changes.
  // This is a crucial performance optimization.
  const processedData = useMemo(
    function processRawData() {
      const defaultData = {
        allEvents: [],
        upcoming: [],
        ongoing: [],
        completed: [],
        featured: [],
      };

      if (!rawData) {
        return defaultData;
      }

      return {
        allEvents: rawData.allEvents || [],
        upcoming: rawData.upcoming || [],
        ongoing: rawData.ongoing || [],
        completed: rawData.completed || [],
        featured: rawData.featured || [],
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
