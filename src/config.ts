// Kosmetik Meiser Configuration
// Staatlich geprüfte Kosmetikerin in Heilbronn-Sontheim

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Kosmetik Meiser",
    tagline: "Ihr Kosmetikstudio in Heilbronn-Sontheim",
    description: "Professionelle Kosmetik und Hautpflege von staatlich geprüfter Kosmetikerin. Moderne Behandlungen für Ihr Wohlbefinden.",
    foundingYear: 2005,
    yearsExperience: 20,
    satisfiedClients: "1.500+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 / 60275",
    phoneLink: "tel:+49713160275",
    email: "info@kosmetik-meiser.de",
    whatsapp: "+49 176 12345678",
    whatsappLink: "https://wa.me/4917612345678",
    address: {
      street: "Staufenbergstr. 71",
      city: "Heilbronn",
      district: "Sontheim",
      zip: "74081",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8!2d9.22!3d49.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982!2sStaufenbergstr.+71%2C+74081+Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://maps.google.com/?q=Staufenbergstr.+71+74081+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Nach Vereinbarung",
    saturday: "Nach Vereinbarung",
    sunday: "Geschlossen",
    display: "Mo-Do Beratung: 13-14 & 18-19 Uhr",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "45+",
    googleReviewLink: "https://g.page/kosmetik-meiser/review",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Corinna",
    fullName: "Corinna Meiser",
    image: "/beauty/frau.jpg",
    bio: [
      "Seit über 20 Jahren widme ich mich leidenschaftlich der Hautpflege und Kosmetik. Als staatlich geprüfte Kosmetikerin ist es mir wichtig, dass Sie sich bei mir rundum wohlfühlen.",
      "In meinem Studio in Heilbronn-Sontheim biete ich Ihnen modernste Behandlungsmethoden: von Microneedling über Radiofrequenz bis hin zu Aquafacial. Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.",
      "Ich bilde mich regelmäßig weiter, um Ihnen stets die neuesten und effektivsten Behandlungen anbieten zu können. Ihr Vertrauen ist mein Antrieb.",
    ],
    certifications: [
      { label: "Staatl. geprüft", icon: "shield" },
      { label: "NiSV zertifiziert", icon: "award" },
      { label: "Apparative Kosmetik", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Sabine K.",
      rating: 5,
      text: "Frau Meiser nimmt sich wirklich Zeit für ihre Kundinnen. Die Microneedling-Behandlung hat mein Hautbild deutlich verbessert. Sehr professionell und einfühlsam!",
      service: "Microneedling",
      date: "vor 2 Wochen",
    },
    {
      name: "Petra M.",
      rating: 5,
      text: "Ich bin begeistert von der Radiofrequenz-Behandlung. Meine Haut fühlt sich so viel straffer an. Die Beratung war ausführlich und kompetent.",
      service: "Fraktionierte Radiofrequenz",
      date: "vor 1 Monat",
    },
    {
      name: "Claudia H.",
      rating: 5,
      text: "Seit Jahren komme ich zur Gesichtsbehandlung zu Frau Meiser. Die Atmosphäre ist angenehm und die Ergebnisse sprechen für sich. Absolute Empfehlung!",
      service: "Gesichtsbehandlung",
      date: "vor 3 Wochen",
    },
    {
      name: "Martina S.",
      rating: 5,
      text: "Das Permanent Make-up ist perfekt geworden. Natürlich und genau so, wie ich es mir vorgestellt habe. Sehr sauberes Arbeiten und tolle Beratung.",
      service: "Permanent Make-up",
      date: "vor 1 Woche",
    },
  ],

  // ============================================
  // SERVICES
  // ============================================
  services: [
    {
      title: "Microneedling",
      description: "Natürliche Hautverjüngung durch feine Mikro-Nadeln. Stimuliert die Kollagenproduktion für straffere, frischere Haut.",
      price: "ab 150€",
      image: "/beauty/behandlung%202.webp",
      benefits: ["Kollagenboost", "Inkl. Vliesmaske"],
    },
    {
      title: "Radiofrequenz",
      description: "Hautstraffung ohne OP durch gezielte Wärme in den tiefen Hautschichten. Für ein sichtbar jüngeres Erscheinungsbild.",
      price: "ab 120€",
      image: "/beauty/face.webp",
      benefits: ["Sofort-Effekt", "Schmerzfrei"],
    },
    {
      title: "Gesichtsbehandlung",
      description: "Klassische Kosmetik mit modernsten Methoden. Reinigung, Peeling und Pflege, abgestimmt auf Ihren Hauttyp.",
      price: "ab 75€",
      image: "/beauty/hero%20main.webp",
      benefits: ["Hautanalyse inkl.", "60-90 Min."],
    },
    {
      title: "Aquafacial",
      description: "Tiefenreinigung mit Hydra-Technologie. Reinigt, peelt und pflegt die Haut in einer einzigen, wohltuenden Behandlung.",
      price: "ab 95€",
      image: "/beauty/behandlung%203.png",
      benefits: ["Sofort-Glow", "Keine Ausfallzeit"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Klassische Gesichtsbehandlung", price: "75€" },
        { name: "Microneedling", price: "150€" },
        { name: "Fraktionierte Radiofrequenz", price: "120€" },
        { name: "Aquafacial", price: "95€" },
        { name: "Fruchtsäurebehandlung", price: "85€" },
        { name: "Mikrodermabrasion", price: "80€" },
      ],
    },
    {
      category: "Spezialbehandlungen",
      items: [
        { name: "SQT Bio-Micro Needling", price: "auf Anfrage" },
        { name: "Needling RF mit Vakuum", price: "auf Anfrage" },
        { name: "Cold Plasma", price: "auf Anfrage" },
        { name: "Skin OXYmizer", price: "auf Anfrage" },
        { name: "Permanent Make-up", price: "auf Anfrage" },
        { name: "Faltenunterspritzung", price: "auf Anfrage" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/hero%20main.webp",
    heroAlt: "Professionelle Kosmetikbehandlung im Studio",
    hygiene: "/beauty/behandlung%204.png",
    gallery: [
      { url: "/beauty/hero%20main.webp", category: "Behandlung" },
      { url: "/beauty/face.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%202.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%203.png", category: "Behandlung" },
      { url: "/beauty/behandlung%204.png", category: "Behandlung" },
      { url: "/beauty/wimpern.png", category: "Augen" },
      { url: "/beauty/wimpern%20(2).webp", category: "Augen" },
      { url: "/beauty/eyebrow-after.png", category: "Augen" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/klangschale.jpg", category: "Wellness" },
      { url: "/beauty/manik%C3%BCre%20neu.png", category: "Pflege" },
      { url: "/beauty/manik%C3%BCre%203.png", category: "Pflege" },
      { url: "/beauty/pedicure.webp", category: "Pflege" },
      { url: "/beauty/acne-after.png", category: "Ergebnisse" },
      { url: "/beauty/beauty.png", category: "Studio" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Soft rose/mauve for cosmetics
  // ============================================
  colors: {
    primary: "#B88B8B", // Dusty rose
    primaryRgb: "184, 139, 139",
    dark: "#2D2D2D",
    light: "#FAF8F7",
    lightAlt: "#F5F0EE",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Hygiene & Qualität",
    description: "Ihre Gesundheit und Sicherheit stehen bei mir an erster Stelle. Alle Behandlungen werden unter strengsten Hygienestandards durchgeführt.",
    features: [
      {
        icon: "shield",
        title: "Sterile Instrumente",
        description: "Alle wiederverwendbaren Instrumente werden nach jeder Behandlung fachgerecht sterilisiert.",
      },
      {
        icon: "check",
        title: "Einweg-Material",
        description: "Nadeln und Verbrauchsmaterialien werden ausschließlich einmal verwendet.",
      },
      {
        icon: "award",
        title: "Zertifizierte Produkte",
        description: "Ich arbeite nur mit hochwertigen, dermatologisch getesteten Produkten.",
      },
      {
        icon: "star",
        title: "Staatlich geprüft",
        description: "Qualifizierte Ausbildung und regelmäßige Fortbildungen garantieren höchste Standards.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "",
    alt: "Kosmetik Meiser Logo",
  },
};

export type Config = typeof config;
