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

export type LocationDetail = {
  name: Location;
  fullName: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  phoneDisplay: string;
  hours: string[];
};

// Real addresses, phone numbers, and hours from smileloft.com/contact-us/<location>.
// Operational hours are identical across all 10 locations (Mon-Thu 8-5, Fri 8-3, closed weekends).
const HOURS = ["Mon–Thu: 8 AM–5 PM", "Fri: 8 AM–3 PM", "Sat–Sun: Closed"];

export const LOCATION_DETAILS: LocationDetail[] = [
  {
    name: "Affinity Dental",
    fullName: "Smile Loft Affinity Dental",
    address: "4 E Rolling Crossroads Suite 205",
    city: "Catonsville",
    state: "MD 21228",
    phone: "+14107197900",
    phoneDisplay: "(410) 719-7900",
    hours: HOURS,
  },
  {
    name: "Landover",
    fullName: "Smile Loft Landover",
    address: "7101 Annapolis Rd",
    city: "Landover Hills",
    state: "MD 20784",
    phone: "+13015776333",
    phoneDisplay: "(301) 577-6333",
    hours: HOURS,
  },
  {
    name: "Shady Grove",
    fullName: "Smile Loft Shady Grove",
    address: "9069 Shady Grove Ct",
    city: "Gaithersburg",
    state: "MD 20877",
    phone: "+13019773766",
    phoneDisplay: "(301) 977-3766",
    hours: HOURS,
  },
  {
    name: "Towne Centre",
    fullName: "Smile Loft Towne Centre",
    address: "1003 4th St",
    city: "Laurel",
    state: "MD 20707",
    phone: "+13017251002",
    phoneDisplay: "(301) 725-1002",
    hours: HOURS,
  },
  {
    name: "Middle River",
    fullName: "Smile Loft Middle River",
    address: "1390 Martin Blvd",
    city: "Middle River",
    state: "MD 21220",
    phone: "+14106870900",
    phoneDisplay: "(410) 687-0900",
    hours: HOURS,
  },
  {
    name: "Laurel",
    fullName: "Smile Loft Laurel",
    address: "7350 Van Dusen Rd #440",
    city: "Laurel",
    state: "MD 20707",
    phone: "+13017250131",
    phoneDisplay: "(301) 725-0131",
    hours: HOURS,
  },
  {
    name: "Bowie",
    fullName: "Smile Loft Bowie",
    address: "3233 Superior Ln B-25",
    city: "Bowie",
    state: "MD 20715",
    phone: "+13012623535",
    phoneDisplay: "(301) 262-3535",
    hours: HOURS,
  },
  {
    name: "North Potomac",
    fullName: "Smile Loft North Potomac",
    address: "12116 Darnestown Rd L-1",
    city: "North Potomac",
    state: "MD 20878",
    phone: "+13012587477",
    phoneDisplay: "(301) 258-7477",
    hours: HOURS,
  },
  {
    name: "Glen Burnie",
    fullName: "Smile Loft Glen Burnie",
    address: "325 Hospital Dr # 101",
    city: "Glen Burnie",
    state: "MD 21061",
    phone: "+14107684488",
    phoneDisplay: "(410) 768-4488",
    hours: HOURS,
  },
  {
    name: "Silver Hill",
    fullName: "Smile Loft Silver Hill",
    address: "4033 Silver Hill Road",
    city: "Hillcrest Heights",
    state: "MD 20746",
    phone: "+13018992500",
    phoneDisplay: "(301) 899-2500",
    hours: HOURS,
  },
];
