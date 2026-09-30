import type { ImageMetadata } from "astro";

const carPhotos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/cars/*",
  { eager: true }
);

// Resolves a filename in src/assets/cars/ so Astro can optimize it at build time.
function photos(...files: string[]): ImageMetadata[] {
  return files.map((file) => {
    const photo = carPhotos[`../assets/cars/${file}`];
    if (!photo) throw new Error(`Car photo not found: src/assets/cars/${file}`);
    return photo.default;
  });
}

export interface Car {
  slug: string;
  model: string;
  /** One or two sentences; also used as the page's meta description. */
  summary: string;
  bestFor: string[];
  description: string[];
  images: ImageMetadata[];
  category: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  luggage: number;
  pricePerDay: number;
  pricePerDayWithDriver: number;
}

export const cars: Car[] = [
  // {
  //   model: "Suzuki Jimny",
  //   image:
  //     "https://images.unsplash.com/photo-1675231305497-1dc08c36b0f5?auto=format&fit=crop&w=900&h=700&q=75&crop=entropy",
  //   category: "Comfort",
  //   seats: 4,
  //   transmission: "Automatic",
  //   luggage: 2,
  //   pricePerDay: 70,
  // },
  {
    slug: "toyota-land-cruiser-prado",
    model: "Toyota Land Cruiser Prado TZ",
    summary:
      "A comfortable 4x4 for self-drive safaris and gorilla trips: five seats, a roof rack for extra bags and the ground clearance Uganda's murram roads call for.",
    bestFor: [
      "Self-drive safaris for couples and small families",
      "Gorilla trips to Bwindi and Mgahinga",
      "Long drives that mix tarmac and murram roads",
    ],
    description: [
      "The Land Cruiser Prado is one of the most popular 4x4s for exploring Uganda on your own, and for good reason. It's comfortable on long stretches of tarmac and capable once the road turns to murram, which is exactly the mix you get on the way to most national parks.",
      "Ours comes with a roof rack for extra luggage. With five seats and space for three bags, it suits couples, friends and small families who want to set their own pace, or you can hire it with one of our drivers and leave the navigating to us.",
    ],
    images: photos(
      "land-cruiser-prado.jpg",
      "land-cruiser-prado-2.jpg",
      "land-cruiser-prado-3.jpg",
      "land-cruiser-prado-5.jpg",
      "land-cruiser-prado-6.jpg",
    ),
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    luggage: 3,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    slug: "toyota-land-cruiser-j70",
    model: "Toyota Land Cruiser J70",
    summary:
      "A rugged Land Cruiser with a pop-up safari roof, bull bar and off-road tyres, built for game drives and rough park tracks. Seats four, with room for two bags.",
    bestFor: [
      "Game drives, with a pop-up roof for wildlife viewing",
      "Remote parks and rough, muddy tracks",
      "Couples and small groups who want a proper safari vehicle",
    ],
    description: [
      "When the destination is a game drive rather than a highway, this is the car to take. The pop-up roof lets everyone stand up for a clear view of the wildlife, and the bull bar and off-road tyres are there for the tracks inside the parks.",
      "With four seats and space for two bags, it suits a couple or a small group travelling light. It has a manual gearbox, so self-drive works best for confident off-road drivers. Otherwise, hire it with one of our drivers.",
    ],
    images: photos(
      "land-cruiser-j70.jpg",
      "land-cruiser-j70-2.jpg",
      "land-cruiser-j70-3.jpg",
      "land-cruiser-j70-4.jpg",
      "land-cruiser-j70-5.jpg",
    ),
    category: "Economy",
    seats: 4,
    transmission: "Manual",
    luggage: 2,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    slug: "toyota-hiace",
    model: "Toyota Hiace",
    summary:
      "A spacious Toyota Hiace with seven seats, a full-length roof rack and room for four bags. Ideal for groups, airport runs and road trips on Uganda's tarmac.",
    bestFor: [
      "Groups and families of up to seven",
      "Airport runs to and from Entebbe",
      "Tarmac road trips such as Kampala to Jinja or Fort Portal",
    ],
    description: [
      "The Hiace is the easiest way to move a group together. Seven seats, a full-length roof rack for extra luggage and an automatic gearbox make it comfortable for long days on the road.",
      "It's at its best on tarmac and good gravel roads: city trips, airport runs and routes like Kampala to Jinja or Fort Portal. For gorilla country or game drives inside the parks, one of our Land Cruisers is the better choice.",
    ],
    images: photos(
      "hiace.jpeg",
      "hiace-2.jpeg",
      "hiace-3.jpeg",
    ),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    slug: "toyota-noah",
    model: "Toyota Noah",
    summary:
      "A seven-seat Toyota Noah minivan with sliding doors and an automatic gearbox. An easy, practical choice for Kampala, Entebbe and trips on Uganda's tarmac roads.",
    bestFor: [
      "Getting around Kampala and Entebbe",
      "Families who want an easy automatic",
      "Day trips on tarmac, such as Jinja and the source of the Nile",
    ],
    description: [
      "The Noah is a comfortable, practical minivan that's easy to drive in Kampala traffic. Sliding doors make getting in and out simple, and the automatic gearbox takes the effort out of stop-start city driving.",
      "With seven seats and room for four bags, it works well for families and small groups staying mostly on tarmac. If your plans include national parks or rough murram roads, choose one of our 4x4s instead.",
    ],
    images: photos(
      "noah.jpeg",
      "noah-2.jpeg",
      "noah-3.jpeg",
      "noah-4.jpeg",
      "noah-5.jpeg",
      "noah-6.jpeg",
      "noah-7.jpeg",
      "noah-8.jpeg",
    ),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    slug: "safari-land-cruiser",
    model: "Safari Land Cruiser",
    summary:
      "A classic extended safari Land Cruiser with a pop-up roof, snorkel and seven seats. The vehicle for full safaris in Queen Elizabeth, Murchison Falls and beyond.",
    bestFor: [
      "Full safari itineraries for groups of up to seven",
      "Game drives, with a pop-up roof for wildlife viewing",
      "Long trips on rough or wet roads",
    ],
    description: [
      "This is the classic East African safari vehicle: an extended Land Cruiser with a pop-up roof, so everyone can stand up for a clear view on game drives, plus a snorkel, bull bar and spare wheel for long days on rough roads.",
      "It seats seven with room for four bags, which makes it the natural choice for groups doing a full circuit, such as Murchison Falls, Queen Elizabeth, Kibale and on to Bwindi. Hire it with one of our drivers or, if you're a confident off-road driver, ask us about self-drive.",
    ],
    images: photos(
      "safari-land-cruiser.jpg",
      "safari-land-cruiser-2.jpg",
      "safari-land-cruiser-3.jpg",
    ),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
];

export function carPath(car: Car): string {
  return `/car-rental/${car.slug}/`;
}

export function findCar(slug: string): Car {
  const car = cars.find((c) => c.slug === slug);
  if (!car) throw new Error(`Unknown car slug: ${slug}`);
  return car;
}

/** Returns undefined for rates that haven't been set yet (0). */
export function formatDailyRate(amount: number): string | undefined {
  return amount > 0 ? `$${amount.toLocaleString("en-US")}` : undefined;
}
