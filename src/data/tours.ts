export interface Tour {
  name: string;
  image: string;
  days: number;
  priceFrom: number;
  tag: string;
  blurb: string;
}

export const tours: Tour[] = [
  {
    name: "Alpine Peaks Expedition",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=75",
    days: 7,
    priceFrom: 1290,
    tag: "Adventure",
    blurb:
      "Guided treks across glacier valleys and panoramic ridgelines, with cozy mountain lodges every night.",
  },
  {
    name: "Azure Coast Escape",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=75",
    days: 5,
    priceFrom: 890,
    tag: "Beach",
    blurb:
      "Hidden coves, seaside villages and long golden afternoons along the Mediterranean's quietest shores.",
  },
  {
    name: "Sahara Nights Caravan",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=75",
    days: 4,
    priceFrom: 740,
    tag: "Desert",
    blurb:
      "Camel caravans at dusk, dinner under a thousand stars and sunrise over endless copper dunes.",
  },
  {
    name: "Emerald Lakes Retreat",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=75",
    days: 6,
    priceFrom: 1120,
    tag: "Nature",
    blurb:
      "Kayak mirror-still waters, hike cedar forests and unwind in lakeside cabins far from the crowds.",
  },
  {
    name: "Grand Savanna Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=75",
    days: 8,
    priceFrom: 2150,
    tag: "Safari",
    blurb:
      "Track the big five with expert rangers and sleep in luxury tented camps on the open plains.",
  },
  {
    name: "City of Lights Weekend",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=75",
    days: 3,
    priceFrom: 560,
    tag: "City break",
    blurb:
      "Boutique hotel stays, skip-the-line museums and late dinners in the neighborhoods locals love.",
  },
];
