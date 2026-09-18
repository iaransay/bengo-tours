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
    name: "Gorilla Trekking",
    park: "Bwindi & Mgahinga",
    price: 800,
    duration: "1 hour with the family",
    blurb:
      "The classic Uganda experience. Hike through the Impenetrable Forest with UWA rangers to spend an hour beside a habituated mountain gorilla family.",
    icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4.5 0c0 7-7.5 11.25-7.5 11.25S4.5 17.5 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  },
  {
    name: "Gorilla Habituation",
    park: "Bwindi · Rushaga",
    price: 1500,
    duration: "4 hours with the family",
    blurb:
      "Join researchers working with a family still being habituated. Four hours instead of one, and the smallest groups UWA allows.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    name: "Chimpanzee Tracking",
    park: "Kibale National Park",
    price: 250,
    duration: "1 hour with the troop",
    blurb:
      "Kibale holds the densest primate population in East Africa. Morning and afternoon slots both run daily from Kanyanchu.",
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z",
  },
  {
    name: "Chimpanzee Habituation",
    park: "Kibale National Park",
    price: 300,
    duration: "Full day with researchers",
    blurb:
      "Start before dawn as the chimps leave their nests and stay until they build new ones. A full day inside the research team's routine.",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    name: "Golden Monkey Tracking",
    park: "Mgahinga Gorilla NP",
    price: 100,
    duration: "1 hour with the troop",
    blurb:
      "Bright, fast and endemic to the Virunga bamboo belt. The easiest primate permit to add to a Mgahinga gorilla day.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  },
  {
    name: "Park Entrance",
    park: "All UWA parks",
    price: 40,
    duration: "Valid 24 hours",
    blurb:
      "Required on top of any activity permit, for every park you enter. We bundle these into your itinerary so nothing stalls you at the gate.",
    icon: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z",
  },
];
