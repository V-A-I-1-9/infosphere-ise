import Papa from "papaparse";

/**
 * Fetch data from a single Google Sheets tab
 * @param {string} url - CSV export URL
 * @returns {Promise<Array>} Parsed data array
 */
async function fetchSheetTab(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet: ${response.status}`);
  }

  const csvText = await response.text();

  return new Promise(function parseCSV(resolve, reject) {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: function onParseComplete(results) {
        resolve(results.data);
      },
      error: function onParseError(error) {
        reject(error);
      },
    });
  });
}

/**
 * Fetch all Cultural club data from Google Sheets tabs
 * @returns {Promise<Object>} Object with events, team, and achievements arrays
 */
export async function fetchCulturalData() {
  try {
    const eventsUrl = import.meta.env.VITE_CULTURAL_EVENTS_URL;
    const teamUrl = import.meta.env.VITE_CULTURAL_TEAM_URL;
    const achievementsUrl = import.meta.env.VITE_CULTURAL_ACHIEVEMENT_URL;

    // Validate URLs exist
    if (!eventsUrl || !teamUrl || !achievementsUrl) {
      throw new Error(
        "Cultural data URLs not configured in environment variables"
      );
    }

    // Fetch all tabs in parallel
    const [events, team, achievements] = await Promise.all([
      fetchSheetTab(eventsUrl),
      fetchSheetTab(teamUrl),
      fetchSheetTab(achievementsUrl),
    ]);

    return {
      events,
      team,
      achievements,
    };
  } catch (error) {
    console.error("Error fetching cultural data:", error);
    throw error;
  }
}
