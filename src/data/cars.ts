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
    model: "Compact City Hatch",
    image:
      "https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&w=900&q=75",
    category: "Economy",
    seats: 4,
    transmission: "Manual",
    luggage: 2,
    pricePerDay: 39,
  },
  {
    model: "Executive Sedan",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=75",
    category: "Comfort",
    seats: 5,
    transmission: "Automatic",
    luggage: 3,
    pricePerDay: 74,
  },
  {
    model: "Adventure 4x4 SUV",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=75",
    category: "Off-road",
    seats: 5,
    transmission: "Automatic",
    luggage: 4,
    pricePerDay: 98,
  },
  {
    model: "Family Minivan",
    image:
      "https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&w=900&q=75",
    category: "Group",
    seats: 7,
    transmission: "Automatic",
    luggage: 5,
    pricePerDay: 89,
  },
  {
    model: "Open-Top Roadster",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=75",
    category: "Premium",
    seats: 2,
    transmission: "Automatic",
    luggage: 1,
    pricePerDay: 149,
  },
  {
    model: "Camper Van",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=75",
    category: "Road trip",
    seats: 4,
    transmission: "Manual",
    luggage: 4,
    pricePerDay: 119,
  },
];
