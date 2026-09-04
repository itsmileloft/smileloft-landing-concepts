// Verified, working Unsplash photo IDs (HEAD-checked to return 200 on
// images.unsplash.com) used across the concept pages. Grouped by subject so
// each concept can draw a distinct mix for hero variety and section imagery.
export const STOCK_PHOTOS = {
  xrayReview: {
    id: "1606811841689-23dfddce3e95",
    alt: "Dentist showing a patient their digital X-ray results on a screen",
  },
  patientRelaxed: {
    id: "1629909613654-28e377c37b09",
    alt: "Smiling patient relaxing in a dental treatment chair",
  },
  teamReviewing: {
    id: "1588776814546-1ffcf47267a5",
    alt: "Dental team member reviewing X-ray images with a patient",
  },
  emptyOperatory: {
    id: "1445527815219-ecbfec67492e",
    alt: "Bright, modern dental treatment room with two patient chairs",
  },
  modernSuite: {
    id: "1622253692010-333f2da6031d",
    alt: "Dentist attending to a patient in a modern, light-filled treatment room",
  },
  procedureClose: {
    id: "1584515933487-779824d29309",
    alt: "Dental team performing a procedure with a patient in the chair",
  },
  clinicianPortrait: {
    id: "1609207825181-52d3214556dd",
    alt: "Smiling dental clinician in scrubs with a stethoscope",
  },
  warmPortrait: {
    id: "1573497019940-1c28c88b4f3e",
    alt: "Warm, confident smiling professional portrait",
  },
  brightSmile: {
    id: "1607990283143-e81e7a2c9349",
    alt: "Close portrait of a genuine, bright smile",
  },
  friendlyCheckup: {
    id: "1571772996211-2f02c9727629",
    alt: "Dentist and patient smiling together during a friendly checkup",
  },
  handsWithModel: {
    id: "1598256989800-fe5f95da9787",
    alt: "Dental professional holding a tooth model while explaining treatment",
  },
  receptionWelcome: {
    id: "1554224155-6726b3ff858f",
    alt: "Warm, welcoming dental office reception area",
  },
  // Added for /concept-4 (Plumfix port) gallery + team sections.
  // Verified via HEAD request (curl -I) to images.unsplash.com — 200 OK.
  galleryConsult: {
    id: "1622902046580-2b47f47f5471",
    alt: "Dentist consulting with a patient in a bright treatment room",
  },
  galleryEquipment: {
    id: "1519494026892-80bbd2d6fd0d",
    alt: "Close-up of modern dental equipment and tools on a tray",
  },
  teamPortraitOne: {
    id: "1550831107-1553da8c8464",
    alt: "Smiling dental team member in scrubs, professional portrait",
  },
  teamPortraitTwo: {
    id: "1523289333742-be1143f6b766",
    alt: "Confident smiling dental hygienist, professional portrait",
  },
  galleryDetail: {
    id: "1606811971618-4486d14f3f99",
    alt: "Detail shot of a dental treatment room chair and light",
  },
  // Added for /concept-5 (Silenus port) crew section — distinct from the
  // portraits already used by concept-4's team roster, so the two concepts
  // don't show identical faces. Verified via HEAD request (curl -I) to
  // images.unsplash.com — 200 OK.
  crewPortraitOne: {
    id: "1594824476967-48c8b964273f",
    alt: "Smiling dentist in scrubs, professional portrait",
  },
  crewPortraitTwo: {
    id: "1537368910025-700350fe46c7",
    alt: "Confident smiling dental team member, professional portrait",
  },
  // Added for /concept-6 (MedDocX port) team section — distinct from the
  // portraits already used by concept-4's and concept-5's rosters, so no
  // two concepts show identical faces. Verified via HEAD request (curl -I)
  // to images.unsplash.com — 200 OK.
  meddocxPortraitOne: {
    id: "1584467541268-b040f83be3fd",
    alt: "Smiling dental professional in scrubs, professional portrait",
  },
  meddocxPortraitTwo: {
    id: "1559839734-2b71ea197ec2",
    alt: "Confident smiling clinician, professional portrait",
  },
} as const;

export type StockPhotoKey = keyof typeof STOCK_PHOTOS;

export function unsplashUrl(id: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
