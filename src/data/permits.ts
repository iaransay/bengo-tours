export interface Permit {
  name: string;
  park: string;
  price: number;
  duration: string;
  blurb: string;
  icon: string;
}

export const permits: Permit[] = [
  {
    name: "Gorilla Permit",
    park: "Bwindi & Mgahinga",
    price: 800,
    duration: "1–4 hours with the family",
    blurb:
      "Hike through the forest with UWA rangers to spend time beside a habituated mountain gorilla family. Standard treks and longer habituation experiences are both available — we match the right one to your dates.",
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    name: "Chimpanzee Permit",
    park: "Kibale National Park",
    price: 250,
    duration: "1–4 hours with the family",
    blurb:
      "Kibale holds the densest primate population in East Africa. Standard tracking and full-day habituation experiences both run from Kanyanchu.",
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    name: "Golden Monkey Permit",
    park: "Mgahinga Gorilla NP",
    price: 100,
    duration: "1 hour with the family",
    blurb:
      "Bright, fast and endemic to the Virunga bamboo belt. The easiest primate permit to add to a Mgahinga gorilla day.",
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  // {
  //   name: "Park Entrance",
  //   park: "All UWA parks",
  //   price: 40,
  //   duration: "Valid 24 hours",
  //   blurb:
  //     "Required on top of any activity permit, for every park you enter. We bundle these into your itinerary so nothing stalls you at the gate.",
  //   icon: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z",
  // },
];
