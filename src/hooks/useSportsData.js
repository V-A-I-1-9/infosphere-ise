import { useQueries } from "@tanstack/react-query";
import Papa from "papaparse";
import { useMemo } from "react";

/**
 * Fetch data from a single Google Sheets tab
 * @param {string} url - CSV export URL
 * @returns {Promise} Parsed data array
 */
async function fetchSheetTab(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet: ${response.status}`);
  }

  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
}

/**
 * Custom hook to fetch Sports club data with PARALLEL queries.
 * Each data source (events, team, achievements) is fetched independently
 * for better caching, loading states, and performance.
 *
 * @returns {Object} An object containing:
 * - isLoading, isError, error: State indicators from React Query
 * - events, team, achievements: Memoized arrays of data for each category
 * - eventsLoading, teamLoading, achievementsLoading: Individual loading states
 */
export function useSportsData() {
  const eventsUrl = import.meta.env.VITE_SPORTS_EVENTS_URL;
  const teamUrl = import.meta.env.VITE_SPORTS_TEAM_URL;
  const achievementsUrl = import.meta.env.VITE_SPORTS_ACHIEVEMENT_URL;

  // Run 3 queries in PARALLEL with useQueries
  const results = useQueries({
    queries: [
      {
        queryKey: ["sportsEvents"],
        queryFn: () => fetchSheetTab(eventsUrl),
        enabled: !!eventsUrl,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: 3,
        retryDelay: (attemptIndex) =>
          Math.min(1000 * Math.pow(2, attemptIndex), 30000),
        // REMOVED refetchInterval - uses staleTime instead
      },
      {
        queryKey: ["sportsTeam"],
        queryFn: () => fetchSheetTab(teamUrl),
        enabled: !!teamUrl,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 3,
        retryDelay: (attemptIndex) =>
          Math.min(1000 * Math.pow(2, attemptIndex), 30000),
      },
      {
        queryKey: ["sportsAchievements"],
        queryFn: () => fetchSheetTab(achievementsUrl),
        enabled: !!achievementsUrl,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 3,
        retryDelay: (attemptIndex) =>
          Math.min(1000 * Math.pow(2, attemptIndex), 30000),
      },
    ],
  });

  // Destructure results array
  const [eventsQuery, teamQuery, achievementsQuery] = results;

  // Combined loading/error states
  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.isError);
  const error = results.find((query) => query.error)?.error || null;

  // Memoize processed data
  const processedData = useMemo(() => {
    return {
      events: eventsQuery.data || [],
      team: teamQuery.data || [],
      achievements: achievementsQuery.data || [],
    };
  }, [eventsQuery.data, teamQuery.data, achievementsQuery.data]);

  return {
    isLoading,
    isError,
    error,
    ...processedData,
  };
}
