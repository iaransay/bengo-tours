export interface TourDay {
  title: string;
  text: string;
}

export interface RouteStop {
  name: string;
  lat: number;
  lng: number;
}

export interface Tour {
  slug: string;
  /** Short name for breadcrumbs and WhatsApp messages. */
  name: string;
  /** The tour page's H1 and the card heading. */
  title: string;
  /** Also used as the tour page's meta description. */
  summary: string;
  /** Unsplash photo URL without query params — see tourImage(). */
  image: string;
  imageAlt: string;
  tag: string;
  days: number;
  startsFrom: string;
  /** Per person. Leave out until the price is confirmed. */
  priceFrom?: number;
  blurb: string;
  itinerary: TourDay[];
  /** Stops in driving order, drawn as a route map on the tour page. */
  route?: RouteStop[];
  /** Leave empty until confirmed. */
  includes: string[];
  /** Permit slug from src/data/permits.ts. */
  permit?: string;
}

export const tours: Tour[] = [
  {
    slug: "3-day-gorilla-trekking-safari",
    name: "Bwindi Gorilla Trek",
    title: "3 Day Uganda Gorilla Trekking Safari from Kampala",
    summary:
      "Experience the magic of mountain gorillas in Bwindi Impenetrable Forest on our popular 3-day budget and luxury tour from Kampala/Entebbe.",
    image: "https://images.unsplash.com/photo-1711198583409-b3dba6a7e144",
    imageAlt: "Mountain gorilla silverback in Bwindi Impenetrable Forest, Uganda",
    tag: "Gorillas",
    days: 3,
    startsFrom: "Kampala or Entebbe",
    priceFrom: 1350,
    blurb:
      "Track mountain gorillas in Bwindi Impenetrable Forest, with a stop at the Equator on the drive down and a Batwa community walk after your trek.",
    itinerary: [
      {
        title: "Kampala to Bwindi",
        text: "Head southwest from Kampala on the long drive to Bwindi, about 8 hours, with a stop at the Equator on the way. Overnight in Bwindi.",
      },
      {
        title: "Gorilla trekking and the Batwa community",
        text: "After an early briefing with Uganda Wildlife Authority rangers, trek into the forest to find a habituated gorilla family and spend an hour with them. Later, join a Batwa community walk to learn about the forest's original inhabitants.",
      },
      {
        title: "Bwindi to Kampala or Entebbe",
        text: "Drive back to Kampala, or straight to Entebbe for your flight home.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Equator", lat: -0.0006, lng: 32.0394 },
      { name: "Bwindi", lat: -1.017, lng: 29.683 },
    ],
    includes: [
      "Gorilla trekking permit (US$800)",
      "Return transport from Kampala or Entebbe",
      "Lodge accommodation in Bwindi",
      "A guide for the whole trip",
    ],
    permit: "gorilla-trekking",
  },
  {
    slug: "2-days-murchison-falls-safari-uganda",
    name: "Murchison Falls Safari",
    title: "2 Days Murchison Falls Safari Uganda",
    summary:
      "A 2-day Murchison Falls safari from Kampala, with an evening game drive, a boat trip to the foot of the falls and a hike to the top.",
    image: "https://images.unsplash.com/photo-1704183683740-1400a49816b7",
    imageAlt: "Murchison Falls on the Nile in Uganda, with a rainbow in the spray",
    tag: "Safari",
    days: 2,
    startsFrom: "Kampala",
    blurb:
      "An evening game drive, then a boat trip up the Nile to the foot of Murchison Falls and a hike to the top, where the river squeezes through a 7-metre gap.",
    itinerary: [
      {
        title: "Kampala to Murchison Falls",
        text: "Drive north from Kampala to Murchison Falls National Park, stopping at Ziwa Rhino Sanctuary on the way, then head out on an evening game drive. Overnight near the park.",
      },
      {
        title: "Boat to the falls and back to Kampala",
        text: "Take the morning boat trip up the Nile to the bottom of the falls, then hike to the top to watch the river force its way through the gorge. Drive back to Kampala in the afternoon.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Ziwa Rhino Sanctuary", lat: 1.4483, lng: 32.0778 },
      { name: "Murchison Falls", lat: 2.2783, lng: 31.6861 },
    ],
    includes: [],
  },
  {
    slug: "4-day-gorilla-queen-elizabeth-safari",
    name: "Gorillas & Queen Elizabeth Safari",
    title: "4 Day Uganda Gorilla Trekking & Queen Elizabeth Safari",
    summary:
      "Four days in western Uganda: a game drive and Kazinga Channel boat trip in Queen Elizabeth National Park, then gorilla trekking in Bwindi.",
    image: "https://images.unsplash.com/photo-1660988251043-7998126125c9",
    imageAlt:
      "Elephants drinking from the Kazinga Channel in Queen Elizabeth National Park",
    tag: "Gorillas & safari",
    days: 4,
    startsFrom: "Kampala",
    blurb:
      "A game drive and a Kazinga Channel boat trip among the hippos of Queen Elizabeth, then a gorilla trek in Bwindi Impenetrable Forest.",
    itinerary: [
      {
        title: "Kampala to Queen Elizabeth",
        text: "Drive west from Kampala to Queen Elizabeth National Park. Overnight near the park.",
      },
      {
        title: "Game drive and Kazinga Channel boat trip",
        text: "Morning game drive across the park's savanna, then a boat trip along the Kazinga Channel, where hippos crowd the water and elephants and buffalo come down to drink.",
      },
      {
        title: "Bwindi and gorilla trekking",
        text: "Head south to Bwindi Impenetrable Forest and trek with Uganda Wildlife Authority rangers to spend an hour with a habituated mountain gorilla family.",
      },
      {
        title: "Return to Kampala",
        text: "Drive back to Kampala.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Queen Elizabeth", lat: -0.1903, lng: 29.8997 },
      { name: "Bwindi", lat: -1.017, lng: 29.683 },
    ],
    includes: [],
    permit: "gorilla-trekking",
  },
  {
    slug: "3-day-kibale-chimpanzee-queen-elizabeth-safari",
    name: "Kibale Chimps & Queen Elizabeth Safari",
    title: "3 Day Kibale Chimpanzee Tracking & Queen Elizabeth Safari",
    summary:
      "Track chimpanzees in Kibale Forest and go on safari in Queen Elizabeth National Park. A 3-day primate tour from Kampala for less than a gorilla trip.",
    image: "https://images.unsplash.com/photo-1782664467973-7d3c93f8c47e",
    imageAlt: "Chimpanzee resting on a branch in Kibale National Park, Uganda",
    tag: "Chimps & safari",
    days: 3,
    startsFrom: "Kampala",
    blurb:
      "Chimpanzee tracking in Kibale, then a game drive in Queen Elizabeth. The chimp permit is US$250 against US$800 for gorillas, so it's the primate trip for a smaller budget.",
    itinerary: [
      {
        title: "Kampala to Kibale",
        text: "Drive west from Kampala to Kibale Forest near Fort Portal, mostly on tarmac. Overnight near the park.",
      },
      {
        title: "Chimpanzee tracking, then Queen Elizabeth",
        text: "Set out from Kanyanchu with Uganda Wildlife Authority rangers to track a chimpanzee community, then drive south to Queen Elizabeth National Park. Overnight near the park.",
      },
      {
        title: "Game drive and return to Kampala",
        text: "Early-morning game drive in Queen Elizabeth, then the drive back to Kampala.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Kibale", lat: 0.437, lng: 30.3951 },
      { name: "Queen Elizabeth", lat: -0.1903, lng: 29.8997 },
    ],
    includes: [],
    permit: "chimpanzee-tracking",
  },
  {
    slug: "1-day-jinja-source-of-the-nile-rafting",
    name: "Jinja Nile Day Trip",
    title: "1 Day Jinja Source of the Nile & White Water Rafting Trip",
    summary:
      "A day trip from Kampala to Jinja: see the Source of the Nile, where the river leaves Lake Victoria, and go white water rafting on its rapids.",
    image: "https://images.unsplash.com/photo-1708515929759-6d050c6c93cf",
    imageAlt: "Boat on the Nile at Jinja, Uganda",
    tag: "Day trip",
    days: 1,
    startsFrom: "Kampala",
    blurb:
      "Already in Kampala? Spend a day at the Source of the Nile in Jinja and raft the river's white water, back in the city by evening.",
    itinerary: [
      {
        title: "Jinja and the Source of the Nile",
        text: "Early pickup in Kampala for the drive east to Jinja, about 2–3 hours. Visit the Source of the Nile, where the river leaves Lake Victoria, then spend the day white water rafting on its rapids. Back in Kampala in the evening.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Source of the Nile", lat: 0.417, lng: 33.1958 },
    ],
    includes: [],
  },
];

export interface ComboDeal {
  title: string;
  blurb: string;
  /** Per person. */
  price: number;
  /** Tour slugs, in the order they run. */
  tours: string[];
}

export const comboDeals: ComboDeal[] = [
  {
    title: "5 Days Murchison Falls & Gorilla Trekking Safari",
    blurb:
      "Do both in one trip: two days at Murchison Falls, back through Kampala, then three days with the mountain gorillas of Bwindi.",
    price: 1680,
    tours: ["2-days-murchison-falls-safari-uganda", "3-day-gorilla-trekking-safari"],
  },
];

// Tour pages live at the site root, e.g. /2-days-murchison-falls-safari-uganda/.
export function tourPath(tour: Tour): string {
  return `/${tour.slug}/`;
}

export function findTour(slug: string): Tour {
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) throw new Error(`Unknown tour slug: ${slug}`);
  return tour;
}

export function combosWith(tour: Tour): ComboDeal[] {
  return comboDeals.filter((combo) => combo.tours.includes(tour.slug));
}

export function formatDays(days: number): string {
  return `${days} ${days === 1 ? "day" : "days"}`;
}

// Unsplash resizes on request, so each page asks for the widths it needs.
export function tourImage(tour: Tour, width: number): string {
  return `${tour.image}?auto=format&fit=crop&q=75&w=${width}`;
}

export function tourImageSrcset(tour: Tour, widths: number[]): string {
  return widths.map((width) => `${tourImage(tour, width)} ${width}w`).join(", ");
}

/** 1200×630 JPEG, for social previews. */
export function tourShareImage(tour: Tour): string {
  return `${tour.image}?fit=crop&q=80&w=1200&h=630&fm=jpg`;
}
