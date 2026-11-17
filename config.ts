// Auto-generated configuration for BLS Portugal Morocco AutoBot

export const config = {
  botName: "BLS Portugal Morocco",
  country: "Morocco",
  provider: "BLS International",
  destination: "Portugal",
  loginUrl: "https://morocco.blsportugal.com/Global/account/login",
  centers: [
  "Casablanca",
  "Rabat"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family Visit",
  "Student",
  "Work",
  "Transit",
  "National Visa",
  "Job Seeker"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
