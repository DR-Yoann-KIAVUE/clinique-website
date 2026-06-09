export const siteConfig = {
  name: "Clinique Cardiovasculaire Raphaeloise",
  acronym: "CCVR",
  description:
    "Cabinet de cardiologie a Saint-Raphael specialise en prevention cardiovasculaire, examens cardiaques et VO2max. Dr. Yoann Kiavue, cardiologue.",
  url: "https://www.ccvr.fr",
  phone: "+33 7 83 46 83 37",
  phoneDisplay: "07 83 46 83 37",
  email: "contact@ccvr.fr",
  address: {
    street: "87 Avenue Archimede",
    building: "Pole Epsilon 3, Batiment B, 2eme etage",
    city: "Saint-Raphael",
    zip: "83700",
    full: "Pole Epsilon 3, Batiment B, 2eme etage, 87 Avenue Archimede, 83700 Saint-Raphael",
    short: "87 Avenue Archimede, 83700 Saint-Raphael",
    lat: 43.4253,
    lng: 6.7688,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:30",
    },
  ],
  rdvUrl: "#",
  reviewCount: 511,
  reviewRating: 5,
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Les Equipes", href: "/equipe" },
  { label: "Les Consultations", href: "/consultations" },
  { label: "VO2 MAX", href: "/vo2max" },
  {
    label: "Kinesitherapie Respiratoire",
    href: "/kinesitherapie-respiratoire",
  },
  {
    label: "Prevention Cardiovasculaire",
    href: "/prevention",
    children: [
      { label: "Nos actions de prevention", href: "/prevention" },
      { label: "Podcast Dryk.Cardio", href: "/prevention/podcast" },
      { label: "Association LUCIANI", href: "/prevention/association-luciani" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Accueil", href: "/" },
  { label: "Les Equipes", href: "/equipe" },
  { label: "Consultations Cardiologique", href: "/consultations" },
  {
    label: "Kinesitherapie Respiratoire",
    href: "/kinesitherapie-respiratoire",
  },
  { label: "Prevention Cardiologie", href: "/prevention" },
  { label: "Association Luciani", href: "/prevention/association-luciani" },
  { label: "Podcast Dryk.Cardio", href: "/prevention/podcast" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerGeoLinks = [
  { label: "Venir a Saint-Raphael", href: "/cardiologue/saint-raphael" },
  { label: "Venir depuis Frejus", href: "/cardiologue/frejus" },
  {
    label: "Venir depuis Puget-sur-Argens",
    href: "/cardiologue/puget-sur-argens",
  },
] as const;

export const services = [
  {
    title: "Consultation cardiologique",
    description:
      "Bilan complet avec le Dr. Kiavue : examen clinique, electrocardiogramme, echographie cardiaque.",
    icon: "Stethoscope" as const,
    href: "/consultations",
  },
  {
    title: "Echographie cardiaque",
    description:
      "Exploration non invasive du coeur par ultrasons pour evaluer la structure et la fonction cardiaque.",
    icon: "ScanHeart" as const,
    href: "/consultations/examens",
  },
  {
    title: "Test VO2max",
    description:
      "Epreuve d'effort cardio-respiratoire mesurant votre capacite aerobique maximale.",
    icon: "Activity" as const,
    href: "/vo2max",
  },
  {
    title: "Holter ECG 24h",
    description:
      "Enregistrement continu de l'activite electrique du coeur sur 24 heures.",
    icon: "TimerReset" as const,
    href: "/consultations/examens",
  },
  {
    title: "Prevention cardiovasculaire",
    description:
      "Programme de prevention personnalise : bilan de risque, conseils hygiene de vie, suivi.",
    icon: "ShieldCheck" as const,
    href: "/prevention",
  },
  {
    title: "Kinesitherapie respiratoire",
    description:
      "Reeducation respiratoire en collaboration avec des kinesitherapeutes specialises.",
    icon: "Wind" as const,
    href: "/kinesitherapie-respiratoire",
  },
] as const;

export const examens = [
  {
    title: "Electrocardiogramme",
    description:
      "Enregistrement de l'activite electrique du coeur au repos. Examen rapide et indolore, essentiel au depistage des troubles du rythme et des anomalies cardiaques.",
  },
  {
    title: "Echographie cardiaque",
    description:
      "Exploration non invasive du coeur par ultrasons. Permet d'evaluer la structure, la taille des cavites, la fonction des valves et la contractilite du muscle cardiaque.",
  },
  {
    title: "Echographie des troncs supra aortiques",
    description:
      "Exploration des arteres carotides et vertebrales par ultrasons. Depiste les plaques d'atherome et evalue le risque d'accident vasculaire cerebral.",
  },
  {
    title: "Electrocardiographie d'effort",
    description:
      "Enregistrement de l'activite electrique du coeur pendant un effort progressif sur velo ou tapis. Recherche une ischemie myocardique ou un trouble du rythme a l'effort.",
  },
  {
    title: "Echographie d'effort",
    description:
      "Echographie cardiaque realisee pendant ou immediatement apres un effort. Permet de detecter des anomalies de contraction du coeur non visibles au repos.",
  },
  {
    title: "Epreuve d'effort",
    description:
      "Test de tolerance a l'effort avec surveillance electrocardiographique et tensionnelle continue. Evalue la capacite fonctionnelle et recherche une maladie coronarienne.",
  },
  {
    title: "Controle pacemaker",
    description:
      "Verification du bon fonctionnement du stimulateur cardiaque : parametres, batterie, sondes. Examen regulier indispensable pour les porteurs de pacemaker.",
  },
  {
    title: "Controle defibrillateur",
    description:
      "Verification du defibrillateur implantable : detection des arythmies, etat de la batterie, historique des evenements. Suivi specialise obligatoire.",
  },
  {
    title: "Polygraphie respiratoire nocturne",
    description:
      "Enregistrement du sommeil a domicile pour depister le syndrome d'apnees du sommeil. Mesure les flux respiratoires, la saturation en oxygene et les efforts respiratoires.",
  },
  {
    title: "Mesure ambulatoire de la tension arterielle",
    description:
      "Enregistrement de la tension arterielle sur 24 heures en conditions normales de vie. Permet de confirmer une hypertension et d'evaluer l'efficacite du traitement.",
  },
] as const;

export const kpis = [
  { value: "15+", label: "Annees d'experience" },
  { value: "10 000+", label: "Patients suivis" },
  { value: "4.9/5", label: "Note Google" },
  { value: "48h", label: "Delai de rendez-vous" },
] as const;

export const testimonials = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Un suivi exceptionnel. Le Dr. Kiavue prend le temps d'expliquer chaque resultat. Je me sens en confiance.",
    date: "Mars 2026",
  },
  {
    name: "Jean-Pierre D.",
    rating: 5,
    text: "Tres professionnel. Le test VO2max m'a permis de mieux comprendre mes limites et d'adapter mon entrainement.",
    date: "Fevrier 2026",
  },
  {
    name: "Sophie M.",
    rating: 5,
    text: "Excellente prise en charge. L'equipe est a l'ecoute et les locaux sont modernes et accueillants.",
    date: "Janvier 2026",
  },
] as const;

export const teamMembers = {
  cardiologues: [
    {
      name: "Dr Yoann Kiavue",
      title: "Fondateur de la clinique et Cardiologue",
      description:
        "Cardiologue specialise en prevention cardiovasculaire et longevite. Fondateur de la CCVR, il place l'ecoute, la pedagogie et la rigueur medicale au coeur de chaque consultation.",
      image: "/images/DrYoannKiavue.png",
    },
    {
      name: "Dr Sergio Ceraso",
      title: "Cardiologue",
      description:
        "Cardiologue experimente, le Dr Ceraso renforce l'equipe medicale de la CCVR pour assurer une prise en charge complete et un suivi de qualite a chaque patient.",
      image: "/images/DrSergioCeraso.png",
    },
  ],
  kinesitherapeutes: [
    {
      name: "Julie Frachette",
      title: "Kinesitherapeute, specialisee en kinesitherapie respiratoire",
      description:
        "Kinesitherapeute diplomee, Julie Frachette accompagne les patients atteints de pathologies respiratoires chroniques ou aiguës. Elle intervient en rehabilitation respiratoire au sein de la CCVR.",
      image: "/images/placeholder-doctor.jpg",
    },
  ],
  infirmieres: [
    {
      name: "Amandine Jourdain",
      title:
        "Infirmiere specialisee en cardiologie et Responsable des programmes d'accompagnement patient",
      description:
        "Infirmiere specialisee, Amandine coordonne les programmes d'accompagnement patient et veille a la qualite de la prise en charge tout au long du parcours de soins.",
      image: "/images/placeholder-doctor.jpg",
    },
    {
      name: "Allison Leroux",
      title: "Infirmiere specialisee en cardiologie",
      description:
        "Infirmiere specialisee en cardiologie, Allison assure les examens complementaires et accompagne les patients avec professionnalisme et bienveillance.",
      image: "/images/placeholder-doctor.jpg",
    },
  ],
  secretariat: [
    {
      name: "Jade Nadeau",
      title: "Assistante Medicale",
      description:
        "Premier point de contact de la clinique, Jade accueille les patients, gere les rendez-vous et assure la coordination administrative avec l'equipe medicale.",
      image: "/images/placeholder-doctor.jpg",
    },
  ],
} as const;

export const cities = [
  {
    slug: "saint-raphael",
    name: "Saint-Raphael",
    title: "Cardiologue a Saint-Raphael",
    heroTitle: "Clinique Cardiovasculaire Raphaeloise",
    heroSubtitle:
      "Nous proposons une gamme complete d'examens, tels que l'electrocardiogramme et l'echographie cardiaque, avec une priorite sur la prevention.",
    metaDescription:
      "Cardiologue a Saint-Raphael. Dr. Yoann Kiavue, clinique cardiovasculaire specialisee en prevention, diagnostic et suivi cardiaque. Prenez rendez-vous.",
    blocks: [
      {
        title: "Des Services de Cardiologie Avances",
        text: "La Clinique Cardiovasculaire Raphaeloise propose une gamme complete d'examens cardiologiques : electrocardiogramme, echographie cardiaque, echographie des troncs supra aortiques, epreuve d'effort, Holter ECG et tensionnel. Chaque examen est realise sur place, dans un environnement medical moderne et adapte.",
      },
      {
        title: "Expertise et Suivi Personnalise",
        text: "Le Dr Yoann Kiavue, cardiologue fondateur de la clinique, s'entoure d'une equipe specialisee pour vous offrir un suivi cardiologique complet et personnalise. Chaque patient beneficie d'un temps de consultation adapte, d'explications detaillees et d'un plan de soins sur mesure.",
      },
      {
        title: "Prendre rendez-vous sur Doctolib",
        text: "Simplifiez votre prise de rendez-vous en reservant directement en ligne. La clinique vous accueille du lundi au vendredi, au Pole Epsilon 3, Batiment B, 2eme etage, 87 Avenue Archimede a Saint-Raphael.",
      },
      {
        title: "Un Engagement pour la Prevention",
        text: "La CCVR place la prevention cardiovasculaire au coeur de sa pratique. Bilans de risque, conseils d'hygiene de vie, programmes de suivi personnalises : chaque action vise a anticiper et prevenir les maladies cardiovasculaires avant qu'elles ne surviennent.",
      },
    ],
    seoText:
      "Centre d'excellence en cardiologie a Saint-Raphael, la Clinique Cardiovasculaire Raphaeloise est dirigee par le Dr Yoann Kiavue, cardiologue specialise en prevention cardiovasculaire. Situee au Pole Epsilon 3, la clinique offre un acces facile et un environnement medical de qualite pour l'ensemble de vos examens et consultations cardiologiques.",
  },
  {
    slug: "frejus",
    name: "Frejus",
    title: "Cardiologue a Frejus",
    heroTitle: "Cardiologue a Frejus",
    heroSubtitle:
      "Votre cardiologue a proximite de Frejus. La Clinique Cardiovasculaire Raphaeloise vous accueille a quelques minutes de Frejus pour l'ensemble de vos examens cardiologiques.",
    metaDescription:
      "Cardiologue a Frejus. Clinique Cardiovasculaire Raphaeloise, a quelques minutes de Frejus. Dr. Yoann Kiavue, examens cardiaques et prevention. Prenez rendez-vous.",
    blocks: [
      {
        title: "Expertise en Cardiologie a Frejus",
        text: "Situee a quelques minutes de Frejus, la Clinique Cardiovasculaire Raphaeloise met a votre disposition l'expertise du Dr Kiavue et de son equipe pour un suivi cardiologique complet. Electrocardiogramme, echographie cardiaque, epreuve d'effort : tous les examens sont disponibles sur place.",
      },
      {
        title: "Services de Tele Expertise et Telesurveillance",
        text: "La CCVR propose des services de tele expertise et de telesurveillance pour un suivi a distance adapte. Ces solutions permettent de maintenir un lien continu avec votre cardiologue, meme entre les consultations presentielles.",
      },
      {
        title: "Approche Globale et Conseils Personnalises",
        text: "Au-dela de l'examen cardiaque, la CCVR adopte une approche globale de votre sante cardiovasculaire. Conseils nutritionnels, activite physique adaptee, gestion des facteurs de risque : chaque patient recoit un accompagnement personnalise.",
      },
      {
        title: "Simplifiez vos Rendez-Vous grace a Doctolib",
        text: "Prenez rendez-vous en ligne directement sur Doctolib. La clinique vous accueille du lundi au vendredi au Pole Epsilon 3, 87 Avenue Archimede, a Saint-Raphael, facilement accessible depuis Frejus.",
      },
      {
        title: "Un Engagement Continu pour la Prevention",
        text: "La prevention cardiovasculaire est au coeur de la mission de la CCVR. Pour les patients de Frejus et des environs, la clinique propose des bilans de risque, des programmes de suivi et des actions de sensibilisation via le podcast Dryk.Cardio et l'Association Luciani.",
      },
    ],
    seoText:
      "La Clinique Cardiovasculaire Raphaeloise est idealement situee pour les patients de Frejus, a quelques minutes en voiture. Le Dr Yoann Kiavue et son equipe vous accueillent pour des consultations cardiologiques completes, des examens de pointe et un suivi personnalise, dans un cadre medical moderne au Pole Epsilon 3 de Saint-Raphael.",
  },
  {
    slug: "puget-sur-argens",
    name: "Puget-sur-Argens",
    title: "Cardiologue a Puget-sur-Argens",
    heroTitle: "Cardiologue a Puget-sur-Argens",
    heroSubtitle:
      "Votre cardiologue a proximite de Puget-sur-Argens. La Clinique Cardiovasculaire Raphaeloise est facilement accessible depuis Puget-sur-Argens.",
    metaDescription:
      "Cardiologue proche de Puget-sur-Argens. Clinique Cardiovasculaire Raphaeloise a Saint-Raphael. Dr. Yoann Kiavue, prevention et examens cardiaques.",
    blocks: [
      {
        title: "Des Services de Cardiologie Avances",
        text: "La Clinique Cardiovasculaire Raphaeloise propose une gamme complete d'examens cardiologiques accessibles depuis Puget-sur-Argens : electrocardiogramme, echographie cardiaque, echographie des troncs supra aortiques, epreuve d'effort, Holter ECG et tensionnel.",
      },
      {
        title: "Expertise et Suivi Personnalise",
        text: "Le Dr Kiavue et son equipe vous accueillent pour un suivi cardiologique complet et personnalise. Chaque consultation inclut un temps d'ecoute, des explications detaillees et un plan de soins adapte a votre situation.",
      },
      {
        title: "Prendre rendez-vous sur Doctolib",
        text: "Reservez votre consultation en ligne sur Doctolib. La clinique est situee au Pole Epsilon 3, Batiment B, 2eme etage, 87 Avenue Archimede a Saint-Raphael, a 15 minutes de Puget-sur-Argens.",
      },
      {
        title: "Un Engagement pour la Prevention",
        text: "La CCVR place la prevention au coeur de sa pratique medicale. Bilans de risque, accompagnement personnalise, podcast Dryk.Cardio et Association Luciani : autant d'actions concretes pour proteger votre coeur au quotidien.",
      },
    ],
    seoText:
      "Accessible depuis Puget-sur-Argens en 15 minutes, la Clinique Cardiovasculaire Raphaeloise est le centre de reference en cardiologie et prevention cardiovasculaire de la region. Le Dr Yoann Kiavue et son equipe vous accueillent au Pole Epsilon 3 de Saint-Raphael pour l'ensemble de vos besoins en cardiologie.",
  },
] as const;
