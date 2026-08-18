export interface ServiceItem {
  id: string;
  title: string;
  category: 'preventive' | 'restorative' | 'cosmetic' | 'orthodontics' | 'surgical' | 'pediatric';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceRange: string;
  popular?: boolean;
  features: string[];
  iconName: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialization: string;
  nmcNo: string;
  daysAvailable: string[];
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar: string;
  location: string;
}

export const CLINIC_INFO = {
  name: "Smile Dental Care & Polyclinic",
  tagline: "Everything Begins With a Smile",
  phone: "+977-1-4228941",
  mobile: "+977-9841234567",
  emergency: "+977-9801122334",
  whatsapp: "9779841234567",
  email: "info@smiledentalnepal.com",
  address: "2nd Floor, Smile Plaza, Durbar Marg, Kathmandu, Nepal",
  hours: "Sun - Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 3:00 PM",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Kathmandu%20Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "implants",
    title: "Dental Implants & Full Mouth Rehab",
    category: "surgical",
    shortDesc: "Permanent titanium and zirconia implants with Swiss precision for missing teeth.",
    fullDesc: "Restore your natural smile and bite strength with 3D CBCT guided titanium dental implants. Lifetime warranty on selected Swiss implants.",
    duration: "45 - 60 mins",
    priceRange: "NPR 35,000 - 65,000",
    popular: true,
    features: ["3D Guided Surgery", "Same-day Temporary Crown", "Lifetime Swiss Warranty", "Zero Bone Loss Protocol"],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rct",
    title: "Rotary Painless Root Canal (RCT)",
    category: "restorative",
    shortDesc: "Single-sitting microscopic root canal therapy with computerized digital apex locators.",
    fullDesc: "Eliminate dental infection pain while preserving your natural tooth using microscopic rotary instrumentation and laser sterilization.",
    duration: "40 - 50 mins",
    priceRange: "NPR 4,500 - 8,500",
    popular: true,
    features: ["Single-Visit Procedure", "Computerized Apex Locator", "Laser Canal Sterilization", "Painless Computerized LA"],
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aligners",
    title: "Invisalign & Clear Aligners",
    category: "orthodontics",
    shortDesc: "Virtually invisible, removable aligners engineered to straighten teeth discreetly.",
    fullDesc: "Achieve the aligned teeth you've always desired without unsightly metal wires or brackets using custom 3D printed clear aligners.",
    duration: "30 mins checkup",
    priceRange: "NPR 95,000 - 180,000",
    popular: true,
    features: ["3D Virtual Treatment Simulation", "Removable & Transparent", "No Food Restrictions", "Fewer Clinic Visits"],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "whitening",
    title: "Laser Teeth Whitening & Veneers",
    category: "cosmetic",
    shortDesc: "Instant 6-8 shades brighter teeth in a single 45-minute clinic session.",
    fullDesc: "Advanced cold-blue LED laser teeth bleaching that safely removes stains from coffee, tea, and smoking without tooth enamel sensitivity.",
    duration: "45 mins",
    priceRange: "NPR 6,000 - 15,000",
    features: ["Immediate 6-8 Shades Lighter", "Enamel-Safe Formulation", "Long Lasting Brilliance", "Includes Home Touch-up Kit"],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cleaning",
    title: "Ultrasonic Scaling & Deep Polishing",
    category: "preventive",
    shortDesc: "Deep tartar removal, stain polishing, and gum health assessment.",
    fullDesc: "Prevent periodontal disease and freshen breath with ultrasonic piezo scaling combined with AirFlow diamond polishing.",
    duration: "30 mins",
    priceRange: "NPR 1,500 - 3,000",
    popular: true,
    features: ["Piezo Cavitron Technology", "Stain AirFlow Polishing", "Fluoride Varnish Enamel Coat", "Comprehensive Oral Checkup"],
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "wisdom",
    title: "Painless Wisdom Tooth Extraction",
    category: "surgical",
    shortDesc: "Minimally invasive surgical removal of impacted third molars with rapid healing.",
    fullDesc: "Experienced oral surgeons perform atraumatic extraction of impacted wisdom teeth with computerized local anesthesia.",
    duration: "30 - 45 mins",
    priceRange: "NPR 3,500 - 8,000",
    features: ["Digital Panoramic X-Ray Included", "Atraumatic Extraction", "PRP Fast Healing Gel", "24/7 Aftercare Hotline"],
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-aarav",
    name: "Dr. Aarav Sharma, MDS",
    role: "Chief Dental Surgeon & Implantologist",
    qualifications: "BDS, MDS (Prosthodontics & Implantology), Fellow ICOI (USA)",
    experience: "14+ Years Clinical Practice",
    specialization: "Full Mouth Dental Implants, Complex Crown & Bridge Rehab",
    nmcNo: "NMC Reg. No: 6420",
    daysAvailable: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    bio: "Dr. Aarav has placed over 2,500+ successful dental implants in Kathmandu with a 99.2% success rate, recognized for his gentle clinical approach."
  },
  {
    id: "dr-sneha",
    name: "Dr. Sneha Shrestha, MDS",
    role: "Senior Orthodontist & Clear Aligner Specialist",
    qualifications: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    experience: "10+ Years Experience",
    specialization: "Invisalign Certified, Damon Braces, Ceramic Aligners",
    nmcNo: "NMC Reg. No: 8931",
    daysAvailable: ["Sun", "Tue", "Thu", "Fri", "Sat"],
    image: "https://images.unsplash.com/photo-1594824813501-4843477161b4?q=80&w=600&auto=format&fit=crop",
    bio: "Dr. Sneha crafts harmonious smiles using cutting-edge 3D aligner technology for children, teenagers, and adult professionals."
  },
  {
    id: "dr-prabhat",
    name: "Dr. Prabhat Adhikari, MDS",
    role: "Endodontist & Microscopic RCT Specialist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "8+ Years Experience",
    specialization: "Microscope-Guided Root Canals, Aesthetic Veneers & Composite Bonding",
    nmcNo: "NMC Reg. No: 10452",
    daysAvailable: ["Sun", "Mon", "Wed", "Thu", "Fri"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    bio: "Specializing in single-visit painless root canal procedures using German Carl Zeiss dental microscopes for zero discomfort."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Prashant Karki",
    treatment: "Dental Implant & Zirconia Crown",
    rating: 5,
    date: "August 2024",
    comment: "I was terrified of dental implants for 3 years. Dr. Aarav and his team made it 100% painless. The digital scanning was so smooth, and my new tooth feels completely natural!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    location: "Kathmandu, Nepal"
  },
  {
    id: "t2",
    name: "Roshani Thapa",
    treatment: "Clear Aligners (Invisible Braces)",
    rating: 5,
    date: "July 2024",
    comment: "Completed my aligners journey in just 7 months! Nobody even noticed I was wearing aligners at work. The clinic hygiene and hospitality is truly international standard.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    location: "Lalitpur, Nepal"
  },
  {
    id: "t3",
    name: "Bikash Gurung",
    treatment: "Single-Visit Painless Root Canal",
    rating: 5,
    date: "June 2024",
    comment: "Walked in with severe toothache on a Sunday morning and was done in 45 minutes without any pain. Highly recommended for emergency dental care in Kathmandu!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    location: "Pokhara / KTM"
  }
];

export const FAQS = [
  {
    q: "Is dental treatment painful at Smile Dental Care?",
    a: "No. We practice strict pain-free dentistry using computer-controlled local anesthesia delivery, topical numbing gels before injections, and ultrasonic microsurgical tools to ensure maximum patient comfort."
  },
  {
    q: "How can I book an appointment online?",
    a: "Click on 'Book Appointment', select your preferred dental treatment, choose your doctor and preferred date & time slot, and fill in your details. You will receive an instant confirmation SMS and reference ID."
  },
  {
    q: "Do you have emergency dental services?",
    a: "Yes, we prioritize emergency cases (acute toothache, broken front teeth, trauma, bleeding). Call our emergency line directly at +977-9801122334 or walk into our Durbar Marg clinic."
  },
  {
    q: "What are your sterilization protocols?",
    a: "We follow Class-B hospital-grade autoclave sterilization, sealed pouch packaging with chemical indicators, and strict disposable barrier protections following CDC/ADA international guidelines."
  },
  {
    q: "Can I manage or reschedule an existing booking?",
    a: "Yes! Use the 'Manage / Reschedule My Booking' option in our menu or top bar, enter your Booking Reference ID and phone number to modify your time slot or doctor seamlessly."
  }
];
