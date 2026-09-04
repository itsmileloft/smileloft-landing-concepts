export const LOCATIONS = [
  "Affinity Dental",
  "Landover",
  "Shady Grove",
  "Towne Centre",
  "Middle River",
  "Laurel",
  "Bowie",
  "North Potomac",
  "Glen Burnie",
  "Silver Hill",
] as const;

export type Location = (typeof LOCATIONS)[number];
