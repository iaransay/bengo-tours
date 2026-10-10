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
    title: "Tours",
    items: [
      {
        question: "Where do your tours start?",
        answer:
          "In Kampala. The 3-day gorilla trek can also pick you up in Entebbe, and both it and the 5-day Murchison Falls & gorilla combo can finish at Entebbe so you can head straight to your flight home.",
      },
      {
        question: "Can I change a tour or combine two?",
        answer:
          "Yes. Every tour can be stretched, shortened or combined with another — tell us your dates and what you'd like to see and we'll shape the itinerary around them. Murchison Falls and gorilla trekking already come as a ready-made 5-day combo, heading straight on from the falls to Bwindi.",
      },
      {
        question: "Do I need to book the gorilla or chimpanzee permit separately?",
        answer:
          "No. On tours that include a gorilla or chimpanzee trek, we book the Uganda Wildlife Authority permit in your name as part of the trip. We secure the permit before anything else and plan the drive around the date we get, so we'll ask for passport details for everyone trekking.",
      },
      {
        question: "Is there a cheaper alternative to a gorilla tour?",
        answer:
          "Try the 3-day Kibale chimpanzee & Queen Elizabeth safari. A chimpanzee permit is US$250 against US$800 for gorillas, and the trip adds a game drive in Queen Elizabeth National Park.",
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
        question: "Do I need a 4x4?",
        answer:
          "Only for gorilla country and the national parks. A minivan like the Toyota Noah or Hiace is fine for Kampala, Entebbe, Jinja and the tarmac road to Fort Portal and Kibale. The last stretch to Bwindi and Mgahinga is steep murram that turns to mud after rain, so take a 4x4 there, and for game drives choose a Land Cruiser with a pop-up roof.",
      },
      {
        question: "Is fuel included in the rental price?",
        answer:
          "No — cars are rented on a full-to-full basis. You collect the vehicle with a full tank and return it the same way.",
      },
      {
        question: "Is there a security deposit?",
        answer:
          "Yes, a refundable deposit is taken at pickup. It's released once the car comes back undamaged, less any fuel, cleaning or traffic-fine shortfalls.",
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
      {
        question:
          "What's the difference between gorilla trekking and the habituation experience?",
        answer:
          "A trekking permit gives you one hour with a habituated gorilla family. The habituation experience gives you up to four hours with a family that is still getting used to people, alongside the researchers and trackers working with them. It only runs in Bwindi, groups are capped at four visitors, and the permit costs more.",
      },
      {
        question: "Is there a minimum age?",
        answer:
          "Yes, set by the Uganda Wildlife Authority: 15 for gorilla trekking and 12 for chimpanzee tracking.",
      },
      {
        question: "Can I add golden monkey tracking to a gorilla trek?",
        answer:
          "Yes. Golden monkeys are tracked in Mgahinga, one of Uganda's two gorilla parks, so many travelers trek gorillas one day and golden monkeys the next. We book both permits together so the dates line up.",
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
