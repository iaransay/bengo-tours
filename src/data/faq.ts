export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Booking & payments",
    items: [
      {
        question: "How do I book a tour or a car?",
        answer:
          "Send us your dates and what you're after on WhatsApp or through the contact form. We'll confirm availability and pricing, then hold your booking once a deposit is paid.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Mobile money, bank transfer, and cash on arrival in Kampala. For international guests we also accept card payments via a secure payment link.",
      },
      {
        question: "Can I cancel or reschedule?",
        answer:
          "Yes. Car rentals can be rescheduled free of charge up to 48 hours before pickup. Tour and permit cancellations depend on how close to the date they are — we'll always tell you the exact terms before you pay.",
      },
    ],
  },
  {
    title: "Car rental",
    items: [
      {
        question: "Can I rent a car without a driver?",
        answer:
          "Yes, self-drive is available on most vehicles. Each car's listing shows both the self-drive and with-driver daily rate so you can compare before booking.",
      },
      {
        question: "What documents do I need to self-drive?",
        answer:
          "A valid driving licence held for at least one year, and a passport or national ID. International visitors also need either an International Driving Permit or a Uganda-issued temporary permit, which we can help arrange.",
      },
      {
        question: "Is fuel included in the rental price?",
        answer:
          "No — cars are rented on a full-to-full basis. You collect the vehicle with a full tank and return it the same way.",
      },
    ],
  },
  {
    title: "Gorilla & chimpanzee permits",
    items: [
      {
        question: "How far in advance should I book a gorilla permit?",
        answer:
          "As early as possible. Permits are issued by the Uganda Wildlife Authority and sell out months ahead in the June–September and December–February peak seasons.",
      },
      {
        question: "What happens if permits are sold out for my dates?",
        answer:
          "We'll suggest the closest available dates, a different park, or an alternative primate trek (chimpanzee tracking usually has more availability than gorilla permits).",
      },
      {
        question: "Can permits be refunded?",
        answer:
          "UWA permits are largely non-refundable once issued. We always confirm availability in writing before you pay, so you know exactly what you're booking.",
      },
    ],
  },
  {
    title: "Travel & logistics",
    items: [
      {
        question: "Do I need a visa for Uganda?",
        answer:
          "Most visitors need an e-visa, which you apply for online before arrival. We're happy to point you to the official application portal once your trip is confirmed.",
      },
      {
        question: "What's the best time of year to visit?",
        answer:
          "Uganda is a year-round destination. The driest, easiest trekking conditions are June–September and December–February; the wetter months are quieter and greener, with fewer other travelers on the trails.",
      },
    ],
  },
];
