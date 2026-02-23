// Kosmetik Meiser Configuration
// Staatlich geprüfte Kosmetikerin in Heilbronn-Sontheim

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Kosmetik Meiser",
    tagline: "Ihr Kosmetikstudio in Heilbronn-Sontheim",
    description: "Professionelle Kosmetik und Hautpflege von staatlich anerkannter Kosmetikerin mit über 30 Jahren Erfahrung. Moderne apparative Behandlungen für Ihr Wohlbefinden.",
    foundingYear: 1995,
    yearsExperience: 30,
    satisfiedClients: "2.000+",
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
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sStaufenbergstra%C3%9Fe%2071%2C%2074081%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Staufenbergstraße+71,+74081+Heilbronn-Sontheim",
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
    weekdays: "Termine nach Vereinbarung",
    saturday: "Termine nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Beratung & Verkauf: Mo-Do 13-14 Uhr, Di & Do 18-19 Uhr",
    display: "Termine nach Vereinbarung",
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
      "Seit über 30 Jahren widme ich mich mit Liebe und Leidenschaft der Hautpflege und Kosmetik. Als staatlich anerkannte Kosmetikerin mit 7 Jahren Erfahrung in einer dermatologischen Praxis ist es mir wichtig, dass Sie sich bei mir rundum wohlfühlen.",
      "In meinem Studio in Heilbronn-Sontheim biete ich Ihnen modernste apparative Behandlungsmethoden: von Microneedling über Radiofrequenz, Ultraschall und Cold Plasma bis hin zu Aquafacial. Jede Behandlung wird individuell auf Ihre Hautbedürfnisse abgestimmt.",
      "Ob Pigmentstörungen, Akne, große Poren, Falten oder Narben: Gemeinsam finden wir die optimale Lösung für Ihre Haut. Die richtige Heimpflege mit abgestimmten Produkten ist dabei essentiell für nachhaltige Ergebnisse.",
    ],
    certifications: [
      { label: "Staatl. anerkannt", icon: "shield" },
      { label: "NiSV zertifiziert", icon: "award" },
      { label: "30+ Jahre Erfahrung", icon: "star" },
      { label: "7 Jahre Dermatologie", icon: "check" },
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
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Microneedling",
      description: "Aktiviert die Neuproduktion von Kollagen, Elastin und Hyaluronsäure. Reduziert Falten, Narben und Pigmentstörungen für ein verjüngtes Hautbild.",
      price: "150€",
      image: "/beauty/behandlung%202.webp",
      benefits: ["Inkl. Vliesmaske", "Mit Ultraschall"],
    },
    {
      title: "Fraktionierte Radiofrequenz",
      description: "Effektive Hautstraffung mit sofort sichtbarem Ergebnis. Revitalisiert Kollagen und Elastin für ein jugendlicheres Erscheinungsbild.",
      price: "ab 120€",
      image: "/beauty/face.webp",
      benefits: ["Sofort-Effekt", "Lifting ohne OP"],
    },
    {
      title: "SQT Bio-Micro Needling",
      description: "3 Millionen Mikrokanäle in 5 Minuten. Geringeres Infektionsrisiko und schmerzärmer als klassisches Needling.",
      price: "ab 115€",
      image: "/beauty/behandlung%203.png",
      benefits: ["Schmerzarm", "4 Varianten"],
    },
    {
      title: "Needling RF mit Vakuum",
      description: "Goldene Mikronadeln mit Radiofrequenz für tiefenwirksame Kollagenstimulation. Erneuert die Haut von innen heraus.",
      price: "ab 250€",
      image: "/beauty/behandlung%204.png",
      benefits: ["Premium", "Tiefenwirkung"],
    },
    {
      title: "Lift-Plus Ultraschall",
      description: "Drei verschiedene Ultraschallfrequenzen für individuelle Hautbedürfnisse. Glättet Falten, verfeinert Poren und strafft Konturen.",
      price: "ab 110€",
      image: "/beauty/hero%20main.webp",
      benefits: ["3 Frequenzen", "Vakuumtechnik"],
    },
    {
      title: "Aquafacial",
      description: "Sanfte Hydro-Exfoliation für porentiefe Reinigung. Stimuliert Kollagen und Elastin, spendet intensive Feuchtigkeit.",
      price: "150€",
      image: "/beauty/kopfmassage.png",
      benefits: ["Sofort-Glow", "Keine Ausfallzeit"],
    },
    {
      title: "Skin OXYmizer",
      description: "Aktiviert die natürliche Sauerstoffversorgung der Haut. Für mehr Vitalität, Ausstrahlung und Elastizität.",
      price: "ab 120€",
      image: "/beauty/beauty.png",
      benefits: ["Sauerstoff-Boost", "Vibro-Massage"],
    },
    {
      title: "Permanent Make-up",
      description: "Natürliche, dauerhafte Schönheit für Augenbrauen, Lidstrich und Lippen. Über 30 Jahre Erfahrung.",
      price: "auf Anfrage",
      image: "/beauty/eyebrow-after.png",
      benefits: ["30+ Jahre Erfahrung", "Natürlicher Look"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Wohlfühlgesichtsbehandlung", price: "89€" },
        { name: "Gesichtsbehandlung Intensiv", price: "99€" },
        { name: "Men Gesichtsbehandlung", price: "94€" },
        { name: "Ausreinigungsbehandlung", price: "59€" },
        { name: "Ausreinigungsbehandlung Intensiv", price: "69€" },
        { name: "Quick Gesichtsbehandlung", price: "45€" },
        { name: "Fruchtsäurebehandlung", price: "100€" },
        { name: "Fruchtsäurebehandlung mit Massage", price: "130€" },
      ],
    },
    {
      category: "Apparative Kosmetik",
      items: [
        { name: "Microneedling (inkl. Vliesmaske & Ultraschall)", price: "150€" },
        { name: "SQT Bio-Micro Needling Revitalizing", price: "135€" },
        { name: "SQT Bio-Micro Needling Resurfacing", price: "115€" },
        { name: "SQT Bio-Micro Needling Anti-Aging", price: "165€" },
        { name: "SQT Bio-Micro Needling Nourishing", price: "165€" },
        { name: "Fraktionierte Radiofrequenz Gesicht", price: "120€" },
        { name: "Fraktionierte Radiofrequenz Gesicht, Hals & Dekolleté", price: "150€" },
        { name: "Fraktionierte Radiofrequenz Oberarme (Zusatz)", price: "+25€" },
        { name: "Needling RF mit Vakuum Gesicht", price: "250€" },
        { name: "Needling RF mit Vakuum Gesicht, Hals & Dekolleté", price: "350€" },
        { name: "Needling RF mit Vakuum Hals & Dekolleté", price: "150€" },
      ],
    },
    {
      category: "Ultraschall & Spezialbehandlungen",
      items: [
        { name: "Lift-Plus Ultraschall", price: "110€" },
        { name: "Lift-Plus Ultraschall mit Massage", price: "140€" },
        { name: "Lift-Plus Ultraschall Hals & Dekolleté (Zusatz)", price: "+20€" },
        { name: "Lift-Plus Ultraschall Mimikfalten exklusiv (Zusatz)", price: "+15€" },
        { name: "Lift-Plus Ultraschall Lippen exklusiv (Zusatz)", price: "+15€" },
        { name: "Neosonic Ultraschall Behandlung", price: "140€" },
        { name: "Skin OXYmizer", price: "120€" },
        { name: "Skin OXYmizer mit Massage", price: "150€" },
        { name: "Aquafacial", price: "150€" },
        { name: "Cold Plasma (Zusatz)", price: "+20€" },
        { name: "Mikrodermabrasion (Zusatz)", price: "+20€" },
        { name: "Neosonic Peeling (Zusatz)", price: "+20€" },
        { name: "Aquafacial Peeling (Zusatz)", price: "+20€" },
      ],
    },
    {
      category: "Augenbehandlungen",
      items: [
        { name: "Lash Lift mit Färben", price: "50€" },
        { name: "Brow Lift mit Färben", price: "40€" },
        { name: "Wimpern färben (nur mit Gesichtsbehandlung)", price: "10€" },
        { name: "Brauen färben (nur mit Gesichtsbehandlung)", price: "10€" },
      ],
    },
    {
      category: "Enthaarung (nur mit Gesichtsbehandlung)",
      items: [
        { name: "Augenbrauenkorrektur", price: "10€" },
        { name: "Gesicht", price: "10-20€" },
        { name: "Nasen-/Ohrenhaare", price: "10-20€" },
      ],
    },
    {
      category: "Weitere Behandlungen",
      items: [
        { name: "Faltenunterspritzung (Botox/Hyaluron)", price: "auf Anfrage" },
        { name: "Permanent Make-up Augenbrauen", price: "auf Anfrage" },
        { name: "Permanent Make-up Lidstrich", price: "auf Anfrage" },
        { name: "Permanent Make-up Wimpernkranzverdichtung", price: "auf Anfrage" },
        { name: "Permanent Make-up Lippen", price: "auf Anfrage" },
        { name: "Gutscheine", price: "individuell" },
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
  // COLORS (Theme) - Sage blue-gray from logo
  // ============================================
  colors: {
    primary: "#7FA3A3", // Sage blue-gray
    primaryRgb: "127, 163, 163",
    dark: "#2D3A3A",
    light: "#F5F8F8",
    lightAlt: "#E8EEEE",
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
