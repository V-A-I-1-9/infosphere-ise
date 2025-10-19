import Papa from "papaparse";

/**
 * Fetch data from Google Sheets Event Calendar
 * @param {string} url - CSV export URL
 * @returns {Promise<Array>} Parsed event data array
 */
async function fetchEventCalendar(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch event calendar: ${response.status}`);
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
 * Parse and format event dates
 * @param {string} dateString - Date string in YYYY-MM-DD HH:MM format
 * @returns {Date|null} JavaScript Date object or null if invalid
 */
function parseEventDate(dateString) {
  if (!dateString) return null;

  try {
    // Handle YYYY-MM-DD HH:MM format
    const cleanDate = dateString.trim();
    const date = new Date(cleanDate);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${dateString}`);
      return null;
    }

    return date;
  } catch (error) {
    console.error("Error parsing date:", dateString, error);
    return null;
  }
}

/**
 * Fetch all event calendar data from Google Sheets
 * @returns {Promise<Object>} Object with all events and filtered categories
 */
export async function fetchEventsData() {
  try {
    const calendarUrl = import.meta.env.VITE_EVENT_URL;

    // Validate URL exists
    if (!calendarUrl) {
      throw new Error(
        "Event calendar URL not configured in environment variables"
      );
    }

    // Fetch event calendar data
    const rawEvents = await fetchEventCalendar(calendarUrl);

    // Parse dates and transform events
    const events = rawEvents.map(function transformEvent(event) {
      return {
        ...event,
        start: parseEventDate(event.start),
        end: parseEventDate(event.end) || parseEventDate(event.start), // Default end to start if not provided
      };
    });

    // Filter events by status
    const upcomingEvents = events.filter(function filterUpcoming(event) {
      return event.status === "upcoming";
    });

    const ongoingEvents = events.filter(function filterOngoing(event) {
      return event.status === "ongoing";
    });

    const completedEvents = events.filter(function filterCompleted(event) {
      return event.status === "completed";
    });

    // Filter featured events
    const featuredEvents = events.filter(function filterFeatured(event) {
      return event.featured === "yes" && event.status !== "cancelled";
    });

    return {
      allEvents: events,
      upcoming: upcomingEvents,
      ongoing: ongoingEvents,
      completed: completedEvents,
      featured: featuredEvents,
    };
  } catch (error) {
    console.error("Error fetching events data:", error);
    throw error;
  }
}
