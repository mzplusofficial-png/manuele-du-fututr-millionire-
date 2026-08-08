import { Chapter, Testimonial, FAQItem, EcosystemFeature } from '../types';

export const MANUSCRIPT_CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: "01",
    title: "La Déprogrammation Financière",
    subtitle: "Démanteler les illusions du système pour penser en architecte de capital",
    description: "Pourquoi 95% des actifs restent prisonniers du salariat et comment reprogrammer vos réflexes décisionnels vers l'accumulation d'actifs à haute vélocité.",
    keyTakeaways: [
      "La distinction vitale entre le revenu actif et la création de valeur exponentielle",
      "Le nettoyage des croyances limitantes de la classe moyenne",
      "L'algorithme de décision à 3 filtres avant toute allocation de temps ou d'argent"
    ],
    readTime: "24 min de lecture",
    excerpt: `Le système n'a pas été conçu pour vous enrichir ; il a été conçu pour vous maintenir prévisible et productif. La majorité des individus passent leur existence à échanger la seule ressource véritablement finie qu'ils possèdent — leur temps — contre une monnaie qui se déprécie chaque seconde.

Pour franchir le seuil de l'indépendance financière, vous devez cesser de vous percevoir comme un exécutant et commencer à agir comme un allocationniste de capital. L'argent n'est pas une récompense pour votre travail dur ; c'est un outil d'ingénierie qui répond exclusivement à la valeur perçue et à l'effet de levier.`
  },
  {
    id: 2,
    number: "02",
    title: "L'Ingénierie du Capital Scalable",
    subtitle: "Bâtir des véhicules financiers déconnectés du temps linéaire",
    description: "Les lois mathématiques de l'effet de levier : produits digitaux, plateformes, médias et capital d'amorçage à marge asymétrique.",
    keyTakeaways: [
      "Les 4 formes d'effet de levier moderne (Code, Média, Capital, Travail)",
      "Comment structurer une offre irrésistible à fort pouvoir de tarification",
      "La formule de conversion de l'attention en actifs pérennes"
    ],
    readTime: "32 min de lecture",
    excerpt: `Archimède disait : 'Donnez-moi un levier assez long et un point d'appui, et je souleverai le monde.' En finance moderne, votre point d'appui est votre avantage concurrentiel unique, et votre levier est l'infrastructure numérique.

Créer un actif que vous ne construisez qu'une seule fois mais que vous pouvez distribuer un million de fois sans coût marginal supplémentaire est le secret le plus jalousement gardé des nouveaux millionnaires.`
  },
  {
    id: 3,
    number: "03",
    title: "La Maîtrise des Leviers d'Accélération",
    subtitle: "Infrastructures automatiques, IA & Allocation stratégique",
    description: "Multipliez votre rendement opérationnel par 10 sans augmenter votre temps de travail grâce à l'orchestration des systèmes intelligents.",
    keyTakeaways: [
      "L'automatisation complète de la chaîne de valeur",
      "Le portefeuille d'actifs asymétriques à haut rendement",
      "La gestion chirurgicale de la trésorerie et la stratégie de réserve stratégique"
    ],
    readTime: "28 min de lecture",
    excerpt: `Les riches n'attendent pas la fin du mois pour voir ce qu'il leur reste à investir. Ils prélèvent systématiquement le capital de croissance au premier jour et automatisent la répartition de leurs flux de trésorerie.

Lorsque vous combinez des systèmes automatisés avec des outils d'IA et une allocation stricte, vous créez une machine de compounding incontrôlable.`
  },
  {
    id: 4,
    number: "04",
    title: "L'Empire Immuable & La Liberté Totale",
    subtitle: "Protéger, perpétuer et transmettre sa souveraineté financière",
    description: "Comment sécuriser vos actifs face à l'inflation, la fiscalité punitive et les crises systémiques tout en vivant selon vos propres règles.",
    keyTakeaways: [
      "Les structures juridiques et fiscales des familles fortunées",
      "La souveraineté géographique et la diversification des juridictions",
      "La transmission d'un héritage intellectuel et financier durable"
    ],
    readTime: "35 min de lecture",
    excerpt: `Devenir riche est une compétence stratégique. Le rester est une discipline de souveraineté. La liberté financière ultime ne se résume pas à un chiffre sur un compte bancaire ; elle réside dans votre capacité à posséder votre temps, votre lieu de vie et vos choix sans jamais rendre de comptes à une institution.`
  }
];

export const ECOSYSTEM_FEATURES: EcosystemFeature[] = [
  {
    icon: "BookOpen",
    title: "Le Manuscrit Intégral",
    valueTag: "Format PDF & ePub HD",
    description: "280 pages d'ingénierie financière condensée. Zéro bla-bla théorique, 100% de protocoles applicables immédiatement.",
    highlight: "Conçu pour être relu et annoté toute votre vie."
  },
  {
    icon: "Headphones",
    title: "L'Édition Audio Masterclass",
    valueTag: "4h30 d'écoute Studio",
    description: "Enregistré en qualité studio avec une narration immersive. Idéal pour intégrer les principes lors de vos déplacements et séances.",
    highlight: "Inclus gratuitement dans l'offre actuelle."
  },
  {
    icon: "FileSpreadsheet",
    title: "Le Workbook d'Exécution",
    valueTag: "Templates & Calculateurs",
    description: "Les modèles de feuilles de calcul, arbres de décision et fiches d'audit financier personnel pour mesurer votre progression mois par mois.",
    highlight: "Prêt à l'emploi sur Notion & Excel."
  },
  {
    icon: "ShieldCheck",
    title: "Accès Privé Millionaire Zone",
    valueTag: "Cercle Restreint",
    description: "Une communauté sélective d'esprits ambitieux partageant leurs analyses de marché, leurs retours d'expérience et leurs réseaux.",
    highlight: "Invitation exclusive réservée aux possesseurs du manuscrit."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Alexandre De Saint-Hubert",
    role: "Fondateur & Investisseur",
    company: "Capital Horizon",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    content: "Ce manuscrit m'a évité 5 ans d'erreurs coûteuses. La clarté des schémas d'allocation et la logique d'effet de levier sont inégalées dans la littérature financière francophone.",
    rating: 5,
    tag: "Lecteur Vérifié"
  },
  {
    id: "2",
    name: "SOPHIE VANNEAU",
    role: "Entrepreneure Digital",
    company: "Sovereign Media",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    content: "L'approche n'a rien à voir avec les livres de développement personnel vagues. On parle ici de structures, de systèmes, de psychologie de haut niveau et d'exécutions concrètes.",
    rating: 5,
    tag: "Lecteur Vérifié"
  },
  {
    id: "3",
    name: "MARC-ANTOINE DUBOIS",
    role: "Consultant en Stratégie",
    company: "Dubois & Partners",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    content: "La présentation visuelle, l'expérience de lecture et la profondeur du contenu en font un objet d'une valeur inestimable. Un classique instantané.",
    rating: 5,
    tag: "Lecteur Vérifié"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "À qui s'adresse exactement ce manuscrit ?",
    answer: "Il s'adresse aux entrepreneurs, professionnels ambitieux, investisseurs et créateurs qui souhaitent passer de l'échange de temps contre de l'argent à la création de systèmes financiers hautement rentables et pérennes."
  },
  {
    id: "2",
    question: "Sous quel format vais-je recevoir l'ouvrage ?",
    answer: "Dès votre validation, vous obtenez un accès instantané et illimité au format Numérique Haute Définition (PDF & ePub optimisés pour iPad, Kindle et mobile), au Livre Audio complet en qualité studio, ainsi qu'à la suite de Workbooks de travail."
  },
  {
    id: "3",
    question: "Puis-je personnaliser ou imprimer mon manuscrit ?",
    answer: "Oui. Le fichier PDF est optimisé pour un rendu d'impression haute définition si vous souhaitez le faire relier vous-même. Chaque exemplaire comporte votre filigrane d'authenticité numérique personnel."
  },
  {
    id: "4",
    question: "Quelle est la garantie proposée ?",
    answer: "Nous offrons une garantie Satisfait ou Remboursé de 30 jours sans condition. Si vous n'estimez pas avoir reçu 100x la valeur de votre investissement dès la lecture des deux premiers chapitres, il vous suffit de nous écrire pour un remboursement intégral."
  }
];
