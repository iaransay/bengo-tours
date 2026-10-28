import type { ImageMetadata } from "astro";

const carPhotos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/cars/*/*.jpg",
  { eager: true }
);

// Returns every photo in src/assets/cars/<folder>/ in file-name order, so the
// -01 photo is the cover. Astro optimizes them at build time.
function photos(folder: string): ImageMetadata[] {
  const prefix = `../assets/cars/${folder}/`;
  const paths = Object.keys(carPhotos)
    .filter((path) => path.startsWith(prefix))
    .sort();
  if (paths.length === 0)
    throw new Error(`No car photos found in src/assets/cars/${folder}/`);
  return paths.map((path) => carPhotos[path].default);
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
    slug: "toyota-land-cruiser-prado-90",
    model: "Toyota Land Cruiser Prado 90",
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
    images: photos("prado-90"),
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    luggage: 3,
    pricePerDay: 70,
    pricePerDayWithDriver: 90,
  },
  {
    slug: "toyota-land-cruiser-prado-120",
    model: "Toyota Land Cruiser Prado 120",
    summary:
      "A newer generation of the Land Cruiser Prado: a comfortable 4x4 with five seats and the ground clearance for murram roads, for self-drive safaris and gorilla trips.",
    bestFor: [
      "Self-drive safaris for couples and small families",
      "Gorilla trips to Bwindi and Mgahinga",
      "Long drives that mix tarmac and murram roads",
    ],
    description: [
      "The Prado 120 is the generation that followed the Prado 90, with a roomier, more refined cabin for long days on the road. It's comfortable on tarmac and capable once the road turns to murram, the mix you get on the way to most national parks.",
      "With five seats and space for three bags, it suits couples, friends and small families who want to set their own pace. Drive it yourself, or hire it with one of our drivers and leave the navigating to us.",
    ],
    images: photos("prado-120"),
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    luggage: 3,
    pricePerDay: 80,
    pricePerDayWithDriver: 90,
  },
  {
    slug: "toyota-land-cruiser-prado-150",
    model: "Toyota Land Cruiser Prado 150",
    summary:
      "The most modern Land Cruiser Prado in our fleet: a quiet, comfortable 4x4 with five seats and the ground clearance for Uganda's murram roads.",
    bestFor: [
      "Travellers who want the most comfortable 4x4",
      "Gorilla trips to Bwindi and Mgahinga",
      "Long drives that mix tarmac and murram roads",
    ],
    description: [
      "The Prado 150 is the latest generation of the Land Cruiser Prado and the most comfortable 4x4 we offer. It's quiet and smooth on long stretches of tarmac and just as capable as the older Prados once the road turns to murram.",
      "With five seats and space for three bags, it suits couples and small families who want a bit more comfort on a self-drive safari. Drive it yourself, or hire it with one of our drivers.",
    ],
    images: photos("prado-150"),
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    luggage: 3,
    pricePerDay: 110,
    pricePerDayWithDriver: 120,
  },
  {
    slug: "toyota-land-cruiser-v8",
    model: "Toyota Land Cruiser V8",
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
    images: photos("land-cruiser-100"),
    category: "Economy",
    seats: 4,
    transmission: "Manual",
    luggage: 2,
    pricePerDay: 70,
    pricePerDayWithDriver: 90,
  },
  {
    slug: "toyota-hilux",
    model: "Toyota Hilux",
    summary:
      "A tough 4x4 double-cab pickup with five seats and an open load bed for bags and gear. Built for rough roads, long trips and anything that won't fit in a car boot.",
    bestFor: [
      "Rough murram roads and remote parks",
      "Trips with camping gear or bulky luggage",
      "Small groups of up to five",
    ],
    description: [
      "The Hilux is Uganda's workhorse: a double-cab pickup with four-wheel drive and the ground clearance for rough murram and muddy tracks. Five people ride in the cab, and the luggage goes in the load bed behind.",
      "The bed takes far more than a car boot, so it suits trips with camping gear or bulky bags. Pack anything that rides there in waterproof bags, as dust and rain can get in. Drive it yourself, or hire it with one of our drivers.",
    ],
    images: photos("hilux"),
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    luggage: 4,
    pricePerDay: 80,
    pricePerDayWithDriver: 100,
  },
  {
    slug: "toyota-rav4",
    model: "Toyota RAV4",
    summary:
      "A compact Toyota RAV4 SUV with five seats, easy to drive and park in Kampala and comfortable on tarmac and good murram roads. A practical choice for couples and small families.",
    bestFor: [
      "Couples and small families",
      "Getting around Kampala and Entebbe",
      "Tarmac road trips such as Kampala to Jinja or Fort Portal",
    ],
    description: [
      "The RAV4 is a compact SUV that's easy to drive in Kampala traffic and easy to park, with a little more ground clearance than a saloon for the odd stretch of murram.",
      "With five seats and room for two bags, it suits couples and small families on city trips and tarmac routes. For gorilla country or game drives inside the parks, one of our Land Cruisers is the better choice.",
    ],
    images: photos("rav4"),
    category: "Economy",
    seats: 5,
    transmission: "Automatic",
    luggage: 2,
    pricePerDay: 50,
    pricePerDayWithDriver: 60,
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
    images: photos("hiace-standard-roof"),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 70,
    pricePerDayWithDriver: 90,
  },
  {
    slug: "toyota-hiace-high-roof",
    model: "Toyota Hiace High Roof",
    summary:
      "A long Toyota Hiace with a high roof: more seats, more headroom and more room for bags than our standard Hiace. Built for bigger groups on long road trips.",
    bestFor: [
      "Bigger groups and families",
      "Long road trips and park circuits on the main routes",
      "Groups travelling with plenty of luggage",
    ],
    description: [
      "The high-roof Hiace is the bigger version of our standard Hiace. A longer body and a taller roof give you more seats, more headroom and more space for luggage, which makes long days on the road far more comfortable for a group.",
      "It's at its best on tarmac and good murram roads, including the main routes through Murchison Falls and Queen Elizabeth. For the steep, muddy roads to Bwindi and Mgahinga, take a Land Cruiser instead. Hire it with one of our drivers, or drive it yourself.",
    ],
    images: photos("hiace-high-roof"),
    category: "Group",
    seats: 10,
    transmission: "Automatic",
    luggage: 6,
    pricePerDay: 80,
    pricePerDayWithDriver: 100,
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
    images: photos("noah"),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 60,
    pricePerDayWithDriver: 70,
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
    images: photos("land-cruiser-70-safari"),
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 200,
    pricePerDayWithDriver: 250,
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
