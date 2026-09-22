export interface Car {
  model: string;
  images: string[];
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
    images: [
      "/cars/land-cruiser-prado.jpg",
      "/cars/land-cruiser-prado-2.jpg",
      "/cars/land-cruiser-prado-3.jpg",
      "/cars/land-cruiser-prado-5.jpg",
      "/cars/land-cruiser-prado-6.jpg",
    ],
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    luggage: 3,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    model: "Toyota Land Cruiser J70",
    images: [
      "/cars/land-cruiser-j70.jpg",
      "/cars/land-cruiser-j70-2.jpg",
      "/cars/land-cruiser-j70-3.jpg",
      "/cars/land-cruiser-j70-4.jpg",
    ],
    category: "Economy",
    seats: 4,
    transmission: "Manual",
    luggage: 2,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    model: "Toyota Hiace",
    images: [
      "cars/hiace.jpg",
      "cars/hiace-2.jpeg",
      "cars/hiace-3.jpeg",
    ],
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    model: "Toyota Noah",
    images: [
      "cars/noah.jpg",
      "cars/noah-2.jpeg",
      "cars/noah-3.jpeg",
      "cars/noah-4.jpeg",
      "cars/noah-5.jpeg",
      "cars/noah-6.jpeg",
      "cars/noah-7.jpeg",
      "cars/noah-8.jpeg",
    ],
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
  {
    model: "Safari Land Cruiser",
    images: [
      "/cars/safari-land-cruiser.jpg",
      "/cars/safari-land-cruiser-2.jpg",
      "/cars/safari-land-cruiser-3.jpg"
    ],
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 0,
    pricePerDayWithDriver: 0,
  },
];


