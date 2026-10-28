import type { ImageMetadata } from "astro";
import bwindiGorilla from "../assets/tours/bwindi-gorilla.jpg";
import murchisonFalls from "../assets/tours/murchison-falls.jpg";
import murchisonGiraffe from "../assets/tours/murchison-giraffe.jpg";

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
  /** A local photo, or an Unsplash photo URL without query params — see TourImage.astro. */
  image: ImageMetadata | string;
  imageAlt: string;
  tag: string;
  days: number;
  startsFrom: string;
  /** Per person. Leave out until the price is confirmed. */
  priceFrom?: number;
  /** Small print under the price, e.g. "min. 2 people". */
  priceNote?: string;
  blurb: string;
  itinerary: TourDay[];
  /** Stops in driving order, drawn as a route map on the tour page. */
  route?: RouteStop[];
  /** Leave empty until confirmed. */
  includes: string[];
  /** Permit slug from src/data/permits.ts. */
  permit?: string;
  /** Combo deals only: the tour slugs it combines, in the order they run. */
  combines?: string[];
}

export const tours: Tour[] = [
  {
    slug: "3-day-gorilla-trekking-safari",
    name: "Bwindi Gorilla Trek",
    title: "3 Day Uganda Gorilla Trekking Safari from Kampala",
    summary:
      "Experience the magic of mountain gorillas in Bwindi Impenetrable Forest on our popular 3-day budget and luxury tour from Kampala/Entebbe.",
    image: bwindiGorilla,
    imageAlt: "Mountain gorilla resting among the leaves in Bwindi Impenetrable Forest, Uganda",
    tag: "Gorillas",
    days: 3,
    startsFrom: "Kampala or Entebbe",
    priceFrom: 450,
    priceNote: "+ US$800 gorilla permit",
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
      "Return transport from Kampala or Entebbe, with driver and fuel",
      "Accommodation in Bwindi",
    ],
    permit: "gorilla-trekking",
  },
  {
    slug: "2-days-murchison-falls-safari-uganda",
    name: "Murchison Falls Safari",
    title: "2 Days Murchison Falls Safari Uganda",
    summary:
      "A 2-day Murchison Falls safari from Kampala, with an evening game drive, a boat trip to the foot of the falls and a hike to the top.",
    image: murchisonFalls,
    imageAlt: "The Nile forcing its way through the narrow gorge at Murchison Falls, Uganda",
    tag: "Safari",
    days: 2,
    startsFrom: "Kampala",
    priceFrom: 280,
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
    includes: [
      "Return transport from Kampala, with driver and fuel",
      "Accommodation near the park",
      "Park entry fees",
    ],
  },
  {
    slug: "3-days-murchison-falls-safari-uganda",
    name: "Murchison Falls Safari",
    title: "3 Days Murchison Falls Safari Uganda",
    summary:
      "A 3-day Murchison Falls safari from Kampala, with morning and evening game drives and a boat trip up the Nile to the foot of the falls.",
    image: murchisonGiraffe,
    imageAlt: "Rothschild's giraffe on the savanna in Murchison Falls National Park, Uganda",
    tag: "Safari",
    days: 3,
    startsFrom: "Kampala",
    priceFrom: 380,
    blurb:
      "A full day in Murchison Falls between the drives: morning and evening game drives, and a boat trip up the Nile to the foot of the falls, where the river squeezes through a 7-metre gap.",
    itinerary: [
      {
        title: "Kampala to Murchison Falls",
        text: "Drive north from Kampala to Murchison Falls National Park. Overnight near the park.",
      },
      {
        title: "Game drives and the boat to the falls",
        text: "Set out on an early-morning game drive across the park's savanna, when the animals are most active, looking for giraffes, elephants and buffalo. Later, take the boat trip up the Nile, past hippos and crocodiles on the banks, to the foot of Murchison Falls, where the whole river forces its way through the gorge. Head out again for an evening game drive as the light softens. Overnight near the park.",
      },
      {
        title: "Return to Kampala",
        text: "Drive back to Kampala.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Murchison Falls", lat: 2.2783, lng: 31.6861 },
    ],
    includes: [
      "Return transport from Kampala, with driver and fuel",
      "Accommodation near the park",
      "Park entry fees",
      "Boat trip to the foot of the falls",
    ],
  },
  {
    slug: "3-days-queen-elizabeth-safari-uganda",
    name: "Queen Elizabeth Safari",
    title: "3 Days Queen Elizabeth Safari Uganda",
    summary:
      "A 3-day Queen Elizabeth National Park safari from Kampala, with morning and evening game drives across the savanna.",
    image: "https://images.unsplash.com/photo-1660988251043-7998126125c9",
    imageAlt:
      "Elephants drinking from the Kazinga Channel in Queen Elizabeth National Park",
    tag: "Safari",
    days: 3,
    startsFrom: "Kampala",
    priceFrom: 300,
    blurb:
      "A full day in Queen Elizabeth between the drives, with morning and evening game drives across the savanna and the option of a boat trip among the hippos of the Kazinga Channel.",
    itinerary: [
      {
        title: "Kampala to Queen Elizabeth",
        text: "Drive west from Kampala to Queen Elizabeth National Park. Overnight near the park.",
      },
      {
        title: "Game drives in Queen Elizabeth",
        text: "A full day in the park, starting with an early-morning game drive across the savanna, when the animals are most active. A boat trip along the Kazinga Channel, where hippos crowd the water and elephants and buffalo come down to drink, is optional and not included in the price. Head out again for an evening game drive as the light softens. Overnight near the park.",
      },
      {
        title: "Return to Kampala",
        text: "Drive back to Kampala.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Queen Elizabeth", lat: -0.1903, lng: 29.8997 },
    ],
    includes: [
      "Return transport from Kampala, with driver and fuel",
      "Accommodation near the park",
      "Park entry fees",
    ],
  },
  {
    slug: "3-day-kibale-chimpanzee-queen-elizabeth-safari",
    name: "Kibale Chimps & Queen Elizabeth Safari",
    title: "4 Day Kibale Chimpanzee Tracking & Queen Elizabeth Safari",
    summary:
      "Track chimpanzees in Kibale Forest and go on safari in Queen Elizabeth National Park. A 4-day primate tour from Kampala for less than a gorilla trip.",
    image: "https://images.unsplash.com/photo-1782664467973-7d3c93f8c47e",
    imageAlt: "Chimpanzee resting on a branch in Kibale National Park, Uganda",
    tag: "Chimps & safari",
    days: 4,
    startsFrom: "Kampala",
    priceFrom: 550,
    priceNote: "+ US$250 chimp permit",
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
        title: "Game drive in Queen Elizabeth",
        text: "A full day in the park, starting with an early-morning game drive across the savanna, when the animals are most active. A boat trip on the Kazinga Channel is optional and not included in the price. Overnight near the park.",
      },
      {
        title: "Return to Kampala",
        text: "Drive back to Kampala.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Kibale", lat: 0.437, lng: 30.3951 },
      { name: "Queen Elizabeth", lat: -0.1903, lng: 29.8997 },
    ],
    includes: [
      "Return transport from Kampala, with driver and fuel",
      "Accommodation near the parks",
      "Park entry fees",
    ],
    permit: "chimpanzee-tracking",
  },
  {
    slug: "1-day-jinja-source-of-the-nile-rafting",
    name: "Jinja Nile Day Trip",
    title: "1 Day Jinja Source of the Nile Trip",
    summary:
      "A day trip from Kampala to Jinja: take a boat to the Source of the Nile, where the river leaves Lake Victoria, with optional white water rafting on its rapids.",
    image: "https://images.unsplash.com/photo-1708515929759-6d050c6c93cf",
    imageAlt: "Boat on the Nile at Jinja, Uganda",
    tag: "Day trip",
    days: 1,
    startsFrom: "Kampala",
    priceFrom: 120,
    priceNote: "min. 2 people",
    blurb:
      "Already in Kampala? Spend a day at the Source of the Nile in Jinja, with a boat trip on the river and the option to raft its white water, back in the city by evening.",
    itinerary: [
      {
        title: "Jinja and the Source of the Nile",
        text: "Early pickup in Kampala for the drive east to Jinja, about 2–3 hours. Take a boat trip to the Source of the Nile, where the river leaves Lake Victoria. White water rafting on the rapids downstream is optional and not included in the price. Back in Kampala in the evening.",
      },
    ],
    route: [
      { name: "Kampala", lat: 0.3177, lng: 32.5814 },
      { name: "Source of the Nile", lat: 0.417, lng: 33.1958 },
    ],
    includes: [
      "Return transport from Kampala, with driver and fuel",
      "Boat trip on the Nile",
    ],
  },
];

export type ComboDeal = Tour & Required<Pick<Tour, "combines" | "priceFrom">>;

// Combo deals get their own tour page, but are promoted with <ComboDeal>
// rather than listed alongside the single tours.
export const comboDeals: ComboDeal[] = [
  {
    slug: "5-days-murchison-falls-gorilla-trekking-safari",
    name: "Murchison Falls & Gorillas Combo",
    title: "5 Days Murchison Falls & Gorilla Trekking Safari",
    summary:
      "Murchison Falls and gorilla trekking in one 5-day Uganda safari: a game drive and boat trip to the falls, then mountain gorillas in Bwindi. $1,630 per person.",
    image: murchisonFalls,
    imageAlt: "The Nile forcing its way through the narrow gorge at Murchison Falls, Uganda",
    tag: "Combo deal",
    days: 5,
    startsFrom: "Kampala",
    priceFrom: 1630,
    blurb:
      "Do both in one trip: two days at Murchison Falls, then straight on to Bwindi for three days with the mountain gorillas.",
    itinerary: [
      {
        title: "Kampala to Murchison Falls",
        text: "Drive north from Kampala to Murchison Falls National Park, stopping at Ziwa Rhino Sanctuary on the way, then head out on an evening game drive. Overnight near the park.",
      },
      {
        title: "Murchison Falls by boat and on foot",
        text: "Take the morning boat trip up the Nile to the bottom of the falls and hike to the top to watch the river force its way through the gorge. In the afternoon, start the drive southwest towards Bwindi and overnight on the way.",
      },
      {
        title: "On to Bwindi",
        text: "Continue southwest through Uganda's western countryside to Bwindi Impenetrable Forest. Overnight in Bwindi.",
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
    includes: [
      "Gorilla trekking permit (US$800)",
      "Car, driver and fuel for all 5 days",
      "Accommodation for all 4 nights",
    ],
    permit: "gorilla-trekking",
    combines: ["2-days-murchison-falls-safari-uganda", "3-day-gorilla-trekking-safari"],
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
  return comboDeals.filter((combo) => combo.combines.includes(tour.slug));
}

export function formatDays(days: number): string {
  return `${days} ${days === 1 ? "day" : "days"}`;
}

/** For social previews: Base sizes local photos to 1200×630 itself. */
export function tourShareImage(tour: Tour): ImageMetadata | string {
  if (typeof tour.image !== "string") return tour.image;
  return `${tour.image}?fit=crop&q=80&w=1200&h=630&fm=jpg`;
}
