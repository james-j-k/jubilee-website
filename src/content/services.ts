/** Verified support capabilities and commercial customer contexts. */
export const services = {
  domestic: {
    label: "Domestic LPG",
    title: "For your home.",
    detail:
      "Jubilee supports domestic LPG customers across its Pala-centred service area.",
    journey: ["Household", "Domestic LPG"],
  },
  commercial: {
    label: "Commercial LPG",
    title: "For the work that keeps moving.",
    detail:
      "Jubilee supports commercial LPG customers across its Pala-centred service area.",
    journey: ["Organisation", "Commercial LPG", "Speak to Jubilee"],
    enquiry:
      "For commercial LPG enquiries, speak to Jubilee Indane Home.",
    contexts: [
      "Hotels",
      "Restaurants",
      "Bakeries",
      "Caterers",
      "Schools",
      "Hospitals",
      "Hostels",
    ],
  },
} as const;
