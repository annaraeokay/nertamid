export type City = {
  id: string;
  name: string;
  region: string;
  lat: number;
  lon: number;
  tz: string;
  il: boolean;
  cc: string;
};

export const CITIES: City[] = [
  { id: "skokie", name: "Skokie", region: "Illinois", lat: 42.0334, lon: -87.7334, tz: "America/Chicago", il: false, cc: "US" },
  { id: "chicago", name: "Chicago", region: "Illinois", lat: 41.85003, lon: -87.65005, tz: "America/Chicago", il: false, cc: "US" },
  { id: "new-york", name: "New York", region: "New York", lat: 40.7128, lon: -74.006, tz: "America/New_York", il: false, cc: "US" },
  { id: "los-angeles", name: "Los Angeles", region: "California", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles", il: false, cc: "US" },
  { id: "miami", name: "Miami", region: "Florida", lat: 25.7617, lon: -80.1918, tz: "America/New_York", il: false, cc: "US" },
  { id: "boston", name: "Boston", region: "Massachusetts", lat: 42.3601, lon: -71.0589, tz: "America/New_York", il: false, cc: "US" },
  { id: "philadelphia", name: "Philadelphia", region: "Pennsylvania", lat: 39.9526, lon: -75.1652, tz: "America/New_York", il: false, cc: "US" },
  { id: "washington", name: "Washington", region: "D.C.", lat: 38.9072, lon: -77.0369, tz: "America/New_York", il: false, cc: "US" },
  { id: "atlanta", name: "Atlanta", region: "Georgia", lat: 33.749, lon: -84.388, tz: "America/New_York", il: false, cc: "US" },
  { id: "houston", name: "Houston", region: "Texas", lat: 29.7604, lon: -95.3698, tz: "America/Chicago", il: false, cc: "US" },
  { id: "denver", name: "Denver", region: "Colorado", lat: 39.7392, lon: -104.9903, tz: "America/Denver", il: false, cc: "US" },
  { id: "seattle", name: "Seattle", region: "Washington", lat: 47.6062, lon: -122.3321, tz: "America/Los_Angeles", il: false, cc: "US" },
  { id: "san-francisco", name: "San Francisco", region: "California", lat: 37.7749, lon: -122.4194, tz: "America/Los_Angeles", il: false, cc: "US" },
  { id: "jerusalem", name: "Jerusalem", region: "Israel", lat: 31.7683, lon: 35.2137, tz: "Asia/Jerusalem", il: true, cc: "IL" },
  { id: "tel-aviv", name: "Tel Aviv", region: "Israel", lat: 32.0853, lon: 34.7818, tz: "Asia/Jerusalem", il: true, cc: "IL" },
  { id: "haifa", name: "Haifa", region: "Israel", lat: 32.794, lon: 34.9896, tz: "Asia/Jerusalem", il: true, cc: "IL" },
  { id: "london", name: "London", region: "United Kingdom", lat: 51.5074, lon: -0.1278, tz: "Europe/London", il: false, cc: "GB" },
  { id: "toronto", name: "Toronto", region: "Canada", lat: 43.6532, lon: -79.3832, tz: "America/Toronto", il: false, cc: "CA" },
  { id: "paris", name: "Paris", region: "France", lat: 48.8566, lon: 2.3522, tz: "Europe/Paris", il: false, cc: "FR" },
  { id: "melbourne", name: "Melbourne", region: "Australia", lat: -37.8136, lon: 144.9631, tz: "Australia/Melbourne", il: false, cc: "AU" },
];

export const DEFAULT_CITY_ID = "skokie";

export function cityById(id: string): City {
  return CITIES.find((c) => c.id === id) ?? CITIES[0];
}

export function isChicagoland(id: string): boolean {
  return id === "skokie" || id === "chicago";
}
