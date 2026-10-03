export interface PermitOption {
  name: string;
  /** Leave out when the current UWA rate hasn't been confirmed. */
  price?: number;
  duration: string;
  text: string;
}

export interface Permit {
  slug: string;
  name: string;
  /** The guide page's H1. */
  pageTitle: string;
  metaTitle: string;
  /** Also used as the guide page's meta description. */
  summary: string;
  park: string;
  price: number;
  duration: string;
  blurb: string;
  /** Tabler icon name — see src/components/Icon.astro. */
  icon: string;
  options: PermitOption[];
  facts: { label: string; value: string }[];
  sections: { title: string; body: string[] }[];
  /** Car slugs from src/data/cars.ts. */
  recommendedCars: string[];
}

export const permits: Permit[] = [
  {
    slug: "gorilla-trekking",
    name: "Gorilla Permit",
    pageTitle: "Gorilla trekking permits in Uganda",
    metaTitle: "Gorilla Trekking Permits in Uganda | Bengo Tours",
    summary:
      "Book gorilla trekking and habituation permits for Bwindi and Mgahinga. We secure the UWA permit in your name and plan the drive to the trailhead.",
    park: "Bwindi & Mgahinga",
    price: 800,
    duration: "1–4 hours with the family",
    blurb:
      "Hike through the forest with UWA rangers to spend time beside a habituated mountain gorilla family. Standard treks and longer habituation experiences are both available — we match the right one to your dates.",
    icon: "trekking",
    options: [
      {
        name: "Gorilla trekking",
        price: 800,
        duration: "1 hour with the gorillas",
        text: "The standard permit. Trek with UWA rangers to a habituated family and spend an hour with them once you find them.",
      },
      {
        name: "Gorilla habituation experience",
        price: 1500,
        duration: "Up to 4 hours with the gorillas",
        text: "Join the researchers and trackers working with a family that is still getting used to people. Groups are capped at four visitors, and it only runs in Bwindi.",
      },
    ],
    facts: [
      { label: "Issued by", value: "Uganda Wildlife Authority (UWA)" },
      {
        label: "Parks",
        value: "Bwindi Impenetrable and Mgahinga Gorilla national parks",
      },
      { label: "Minimum age", value: "15 years" },
      {
        label: "Group size",
        value: "Up to 8 visitors per gorilla family per day",
      },
      {
        label: "Trek time",
        value: "A couple of hours to most of the day, depending on where the family is",
      },
      { label: "Peak season", value: "June–September and December–February" },
    ],
    sections: [
      {
        title: "Choosing a sector in Bwindi",
        body: [
          "Bwindi's gorilla families are spread across four sectors: Buhoma in the north, Ruhija in the east, and Rushaga and Nkuringo in the south. Each permit is for one specific sector, and driving between them can take several hours, so your lodge needs to be near the sector on your permit.",
          "We check availability across all four sectors for your date, then plan the lodge and driving days around the permit we secure.",
        ],
      },
      {
        title: "Getting there",
        body: [
          "Bwindi and Mgahinga are in Uganda's far southwest, a long day's drive from Kampala. Plan on roughly 8 to 10 hours depending on the sector. Many travellers break the journey, or combine the trek with Queen Elizabeth National Park or Lake Bunyonyi on the way.",
          "The last stretch to the trailheads is on steep murram roads that turn to mud after rain, so we strongly recommend a 4x4.",
        ],
      },
      {
        title: "What to bring on the trek",
        body: [
          "Waterproof hiking boots, a rain jacket, long trousers and long sleeves (the forest is full of nettles), gardening gloves for gripping vines, drinking water and a packed lunch. Bring your passport too: rangers check it against your permit at the morning briefing.",
          "Porters can be hired at the trailhead to carry your bag and help on the steep sections. It's a small cost that makes the day much easier, and it supports the local community.",
        ],
      },
    ],
    recommendedCars: [
      "toyota-land-cruiser-prado",
      "safari-land-cruiser",
      "toyota-land-cruiser-j70",
    ],
  },
  {
    slug: "chimpanzee-tracking",
    name: "Chimpanzee Permit",
    pageTitle: "Chimpanzee tracking permits in Kibale",
    metaTitle: "Chimpanzee Tracking Permits in Kibale, Uganda | Bengo Tours",
    summary:
      "Book chimpanzee tracking and habituation permits for Kibale National Park, Uganda. We secure the UWA permit in your name and arrange the drive.",
    park: "Kibale National Park",
    price: 250,
    duration: "1–4 hours with the family",
    blurb:
      "Kibale holds the densest primate population in East Africa. Standard tracking and full-day habituation experiences both run from Kanyanchu.",
    icon: "binoculars",
    options: [
      {
        name: "Chimpanzee tracking",
        price: 250,
        duration: "1 hour with the chimpanzees",
        text: "Morning and afternoon groups set out daily from Kanyanchu with UWA rangers. Once the community is found, you spend an hour watching them.",
      },
      {
        name: "Chimpanzee habituation experience",
        duration: "Up to 4 hours with the chimpanzees",
        text: "Spend longer in the forest alongside the researchers and trackers working with a chimpanzee community.",
      },
    ],
    facts: [
      { label: "Issued by", value: "Uganda Wildlife Authority (UWA)" },
      { label: "Park", value: "Kibale National Park, from Kanyanchu" },
      { label: "Minimum age", value: "12 years" },
      { label: "Sessions", value: "Morning and afternoon, every day" },
      { label: "Primates", value: "13 species live in Kibale" },
      { label: "Peak season", value: "June–September and December–February" },
    ],
    sections: [
      {
        title: "Why Kibale",
        body: [
          "Kibale National Park holds the densest primate population in East Africa, with 13 species in its forest. Its chimpanzee communities have been studied for decades and are well used to people, which is why sightings on a tracking walk are so likely.",
        ],
      },
      {
        title: "Getting there",
        body: [
          "Kibale is near Fort Portal in western Uganda, roughly 5 to 6 hours' drive from Kampala, mostly on tarmac. It fits naturally into a western circuit with Queen Elizabeth National Park to the south and Bwindi beyond.",
          "Our minivans handle the road to Kibale well. Choose a 4x4 if you're continuing on to game drives or to Bwindi.",
        ],
      },
      {
        title: "What to bring",
        body: [
          "Long trousers tucked into your socks (the forest floor has biting ants), closed walking shoes, a light rain jacket and binoculars. Chimpanzees move quickly through the undergrowth, so be ready for some brisk walking.",
        ],
      },
    ],
    recommendedCars: ["toyota-hiace", "toyota-noah", "toyota-land-cruiser-prado"],
  },
  {
    slug: "golden-monkey-tracking",
    name: "Golden Monkey Permit",
    pageTitle: "Golden monkey tracking permits in Mgahinga",
    metaTitle: "Golden Monkey Permits in Mgahinga, Uganda | Bengo Tours",
    summary:
      "Book golden monkey tracking permits for Mgahinga Gorilla National Park, an easy add-on to a gorilla trek in the Virungas, with the UWA permit in your name.",
    park: "Mgahinga Gorilla NP",
    price: 100,
    duration: "1 hour with the family",
    blurb:
      "Bright, fast and endemic to the Virunga bamboo belt. The easiest primate permit to add to a Mgahinga gorilla day.",
    icon: "paw",
    options: [
      {
        name: "Golden monkey tracking",
        price: 100,
        duration: "1 hour with the troop",
        text: "Walk with UWA rangers into the bamboo on the lower slopes of the Virungas, then spend an hour with a habituated troop.",
      },
    ],
    facts: [
      { label: "Issued by", value: "Uganda Wildlife Authority (UWA)" },
      { label: "Park", value: "Mgahinga Gorilla National Park" },
      {
        label: "Species",
        value: "Golden monkey, an endangered primate found only in the Albertine Rift",
      },
      { label: "Terrain", value: "Gentler than a gorilla trek, mostly through bamboo" },
      { label: "Peak season", value: "June–September and December–February" },
    ],
    sections: [
      {
        title: "Pairing it with a gorilla trek",
        body: [
          "Mgahinga is Uganda's corner of the Virunga volcanoes, shared with Rwanda and the DR Congo. It's one of only two places in Uganda to see mountain gorillas, and the place to track golden monkeys.",
          "Many travellers track gorillas one day and golden monkeys the next, or do the monkeys first as a gentler warm-up. We book both permits together so the dates line up.",
        ],
      },
      {
        title: "Getting there",
        body: [
          "Mgahinga is near Kisoro in the far southwest, a long day's drive from Kampala. Most itineraries break the journey at Lake Bunyonyi, or combine it with Bwindi's southern sectors, which are close by.",
          "The final roads are steep, so we recommend a 4x4.",
        ],
      },
      {
        title: "What to bring",
        body: [
          "Walking shoes with good grip, long trousers, a rain jacket and a camera with a fast shutter speed. Golden monkeys rarely sit still for long.",
        ],
      },
    ],
    recommendedCars: ["toyota-land-cruiser-prado", "safari-land-cruiser"],
  },
  // {
  //   name: "Park Entrance",
  //   park: "All UWA parks",
  //   price: 40,
  //   duration: "Valid 24 hours",
  //   blurb:
  //     "Required on top of any activity permit, for every park you enter. We bundle these into your itinerary so nothing stalls you at the gate.",
  //   icon: "ticket",
  // },
];

export const permitBookingSteps = [
  {
    title: "Send us your dates",
    text: "Every permit is tied to one named person on one tracking day, so we start from your travel window.",
  },
  {
    title: "We check UWA availability",
    text: "Gorilla permits sell out months ahead in June–September and December–February. We confirm what is actually open.",
  },
  {
    title: "Passport details",
    text: "The Uganda Wildlife Authority issues each permit against a passport, so we need a scan per trekker to file it.",
  },
  {
    title: "Permit in your name",
    text: "Once paid, UWA issues the permit and we arrange the drive and the pre-dawn transfer to the trailhead.",
  },
];

export const permitRatesNote =
  "Rates shown are the Uganda Wildlife Authority tariff for foreign non-residents, per person, and exclude our service and transport. UWA reviews its tariff periodically — we confirm the current rate and availability in writing before you pay.";

export function permitPath(permit: Permit): string {
  return `/permits/${permit.slug}/`;
}
