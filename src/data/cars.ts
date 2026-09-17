export interface Car {
  model: string;
  image: string;
  category: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  luggage: number;
  pricePerDay: number;
}

export const cars: Car[] = [
  {
    model: "Suzuki Jimny",
    image:
      "https://images.unsplash.com/photo-1693485314009-5a5a0a445186?auto=format&fit=crop&w=900&q=75",
    category: "Comfort",
    seats: 4,
    transmission: "Automatic",
    luggage: 2,
    pricePerDay: 70,
  },
  {
    model: "Toyota Land Cruiser TX Pardo",
    image:
      "https://images.unsplash.com/photo-1650159374693-7b46b80c2f09?auto=format&fit=crop&w=900&q=75",
    category: "Economy",
    seats: 5,
    transmission: "Manual",
    luggage: 3,
    pricePerDay: 80,
  },
  {
    model: "Toyota Hiace",
    image:
      "https://carrental4x4.com/wp-content/uploads/2024/12/safari-Van-1030x763.jpeg",
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 120,
  },
  {
    model: "Safari Land Cruiser",
    image:
      "https://images.unsplash.com/photo-1664760536218-44efb2696288?auto=format&fit=crop&w=900&q=75",
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 140,
  },
];


