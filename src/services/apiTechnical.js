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
 * Fetch all Technical club data from Google Sheets tabs
 * @returns {Promise<Object>} Object with events, team, achievements, and projects arrays
 */
export async function fetchTechnicalData() {
  try {
    const eventsUrl = import.meta.env.VITE_TECHNICAL_EVENTS_URL;
    const teamUrl = import.meta.env.VITE_TECHNICAL_TEAM_URL;
    const achievementsUrl = import.meta.env.VITE_TECHNICAL_ACHIEVEMENT_URL;
    const projectsUrl = import.meta.env.VITE_TECHNICAL_PROJECT_URL;

    // Validate URLs exist
    if (!eventsUrl || !teamUrl || !achievementsUrl || !projectsUrl) {
      throw new Error(
        "Technical data URLs not configured in environment variables"
      );
    }

    // Fetch all tabs in parallel
    const [events, team, achievements, projects] = await Promise.all([
      fetchSheetTab(eventsUrl),
      fetchSheetTab(teamUrl),
      fetchSheetTab(achievementsUrl),
      fetchSheetTab(projectsUrl),
    ]);

    return {
      events,
      team,
      achievements,
      projects,
    };
  } catch (error) {
    console.error("Error fetching technical data:", error);
    throw error;
  }
}
