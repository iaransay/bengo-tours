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
  model: string;
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
    model: "Toyota Land Cruiser Prado TZ",
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
    model: "Toyota Land Cruiser J70",
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
    model: "Toyota Hiace",
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
    model: "Toyota Noah",
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
    model: "Safari Land Cruiser",
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
