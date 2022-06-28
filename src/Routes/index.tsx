import React from "react"
const Home = React.lazy(() => import('../pages/Home'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
const SiteMap = React.lazy(() => import('../pages/SiteMap'));
const Symbols = React.lazy(() => import("../pages/Symbols"));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));
const GalleryView = React.lazy(() => import('../pages/GalleryView'));
const NewsView = React.lazy(() => import('../pages/NewsView'));
const Entrepreneurs = React.lazy(() => import("../pages/Entrepreneurs"));

const Agency = React.lazy(() => import('../pages/Agency'));
const AboutAgency = React.lazy(() => import('../pages/Agency/AboutAgency'));
const Leadership = React.lazy(() => import('../pages/Agency/Leadership'));
const Advisers = React.lazy(() => import('../pages/Agency/Advisers'));
const CenteralApp = React.lazy(() => import('../pages/Agency/CenteralApp'));
const TerritorialAdministrations = React.lazy(() => import('../pages/Agency/TerritorialAdministrations'));
const SystemOrganizations = React.lazy(() => import('../pages/Agency/SystemOrganizations'));
// const ContactAgency = React.lazy(() => import('../pages/Agency/ContactAgency'));
const Vacancies = React.lazy(() => import('../pages/Agency/Vacancies'));
// const SuperiorOrganizations = React.lazy(() => import('../pages/Agency/SuperiorOrganizations'));
// const GlossaryOfTerms = React.lazy(() => import('../pages/Agency/GlossaryOfTerms'));
const InformationOfStaff = React.lazy(() => import('../pages/Agency/InformationOfStaff'));
const Youth = React.lazy(() => import('../pages/Agency/Youth'));
const MobileReceptions = React.lazy(() => import('../pages/Agency/MobileReceptions'));
const OpenData = React.lazy(() => import('../pages/Agency/OpenData'));
const StatisticsConsidered = React.lazy(() => import('../pages/Agency/StatisticsConsidered'));
// const LeadingSpecialist = React.lazy(() => import('../pages/Agency/LeadingSpecialist'));
const SpiritualityEnlightenment = React.lazy(() => import('../pages/Agency/SpiritualityEnlightenment'));

const Activity = React.lazy(() => import('../pages/Activity'));
// const EGovernmentSystem = React.lazy(() => import('../pages/Activity/EGovernmentSystem'));
// const PublicServicesRegister = React.lazy(() => import('../pages/Activity/PublicServicesRegister'));
const InternationalRelations = React.lazy(() => import('../pages/Activity/InternationalRelations'));
// const GovernmentPrograms = React.lazy(() => import('../pages/Activity/GovernmentPrograms'));
const PlantClinics = React.lazy(() => import('../pages/Activity/PlantClinics'));
// const InteragencyProtocols = React.lazy(() => import('../pages/Activity/InteragencyProtocols'));
const AntiCorruption = React.lazy(() => import('../pages/Activity/AntiCorruption'));

const InformationServices = React.lazy(() => import('../pages/InformationServices'));
const News = React.lazy(() => import('../pages/InformationServices/News'));
const PublicProcurementInformation = React.lazy(() => import('../pages/InformationServices/PublicProcurementInformation'));
const Congratulations = React.lazy(() => import('../pages/InformationServices/Congratulations'));
const Videos = React.lazy(() => import('../pages/InformationServices/Videos'));
const FotoGallery = React.lazy(() => import('../pages/InformationServices/FotoGallery'));
const Infographics = React.lazy(() => import('../pages/InformationServices/Infographics'));
const Bioprotection = React.lazy(() => import('../pages/InformationServices/Bioprotection'));
const MediaAboutUs = React.lazy(() => import('../pages/InformationServices/MediaAboutUs'));

const Documents = React.lazy(() => import('../pages/Documents'));
const Law = React.lazy(() => import('../pages/Documents/Law'));
// const Resolutions = React.lazy(() => import('../pages/Documents/Resolutions'));
// const GovernmentDecisions = React.lazy(() => import('../pages/Documents/GovernmentDecisions'));
const InternationalAgreements = React.lazy(() => import('../pages/Documents/InternationalAgreements'));
// const NormativeDocuments = React.lazy(() => import('../pages/Documents/NormativeDocuments'));
// const DraftNormativeDocuments = React.lazy(() => import('../pages/Documents/DraftNormativeDocuments'));
// const ExpiredNormativeDocuments = React.lazy(() => import('../pages/Documents/ExpiredNormativeDocuments'));
const FinesIncreased = React.lazy(() => import('../pages/Documents/FinesIncreased'));
// const ListOfPests = React.lazy(() => import('../pages/Documents/ListOfPests'));

const ScientificResearch = React.lazy(() => import('../pages/ScientificResearch'));
// const PlantQuarantine = React.lazy(() => import('../pages/ScientificResearch/PlantQuarantine'));
const CottonBollworm = React.lazy(() => import('../pages/ScientificResearch/CottonBollworm'));
// const PestControl = React.lazy(() => import('../pages/ScientificResearch/PestControl'));
// const MarbleShackle = React.lazy(() => import('../pages/ScientificResearch/MarbleShackle'));
// const CherryFlies = React.lazy(() => import('../pages/ScientificResearch/CherryFlies'));

const Laboratory = React.lazy(() => import('../pages/Laboratory'));
// const Regulation = React.lazy(() => import('../pages/Laboratory/Regulation'));
const QuarantineOrganisms = React.lazy(() => import('../pages/Laboratory/QuarantineOrganisms'));
// const CottonBollwormDestroyed = React.lazy(() => import('../pages/Laboratory/CottonBollwormDestroyed'));
// const PestsDetected = React.lazy(() => import('../pages/Laboratory/PestsDetected'));
// const CaliforniaShields = React.lazy(() => import('../pages/Laboratory/CaliforniaShields'));
// const CitrusHoneysuckle = React.lazy(() => import('../pages/Laboratory/CitrusHoneysuckle'));
// const GeorgiaMandarins = React.lazy(() => import('../pages/Laboratory/GeorgiaMandarins'));

const Import = React.lazy(() => import("../pages/Import"))
// const ImportedAbroad = React.lazy(() => import("../pages/Import/ImportedAbroad"))
// const PhytosanitaryRequirements = React.lazy(() => import("../pages/Import/PhytosanitaryRequirements"))
// const AccordingPakistan = React.lazy(() => import("../pages/Import/AccordingPakistan"))
// const ProductsImportExport = React.lazy(() => import("../pages/Import/ProductsImportExport"))

const Phytosanitary = React.lazy(() => import("../pages/Phytosanitary"))
// const Greenhouse = React.lazy(() => import("../pages/Phytosanitary/Greenhouse"))


const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "siteMap",
    element: <SiteMap />
  },
  {
    path: "symbols",
    element: <Symbols />
  },
  {
    path: "agency/contact",
    element: <Contacts />
  },
  {
    path: "news:newsID",
    element: <NewsView />
  },
  {
    path: "photo-gallery:photos_id",
    element: GalleryView
  },
  {
    path: "agency",
    element: <Agency />,
    children: [
      {
        path: "about-agency",
        index: true,
        element: <AboutAgency />
      },
      {
        path: "leadership",
        element: <Leadership />
      },
      {
        path: "advisers",
        element: <Advisers />
      },
      {
        path: "centeral-app",
        element: <CenteralApp />
      },
      {
        path: "terr-administrations",
        element: <TerritorialAdministrations />
      },
      {
        path: "system-organizations",
        element: <SystemOrganizations />
      },
      {
        path: "contact-agency",
        element: <SystemOrganizations />
      },
      {
        path: "vacancies",
        element: <Vacancies />
      },
      {
        path: "superior-organizations",
        element: <SystemOrganizations />
      },
      {
        path: "glossary-terms",
        element: <SystemOrganizations />
      },
      {
        path: "info-staff",
        element: <InformationOfStaff />
      },
      {
        path: "youth",
        element: <Youth />
      },
      {
        path: "mobile-receptions",
        element: <MobileReceptions />
      },
      {
        path: "open-data",
        element: <OpenData />
      },
      {
        path: "statistics-considered",
        element: <StatisticsConsidered />
      },
      {
        path: "leading-specialist",
        element: <StatisticsConsidered />
      },
      {
        path: "spirituality-enlightenment",
        element: <SpiritualityEnlightenment />
      }
    ]
  },
  {
    path: "activity",
    element: <Activity />,
    children: [
      {
        path: "e-government",
        index: true,
        element: <InformationOfStaff />
      },
      {
        path: "public-service-register",
        element: <InformationOfStaff />
      },
      {
        path: "international-relations",
        element: <InternationalRelations />
      },
      {
        path: "government-programs",
        element: <StatisticsConsidered />
      },
      {
        path: "plant-clinics",
        element: <PlantClinics />
      },
      {
        path: "interagency-protocols",
        element: <InformationOfStaff />
      },
      {
        path: "anti-corruption",
        element: <AntiCorruption />
      }
    ]
  },
  {
    path: "information-services",
    element: <InformationServices />,
    children: [
      {
        path: "news",
        index: true,
        element: <News />
      },
      {
        path: "tenders",
        element: <PublicProcurementInformation />
      },
      {
        path: "congratulations",
        element: <Congratulations />
      },
      {
        path: "videos",
        element: <Videos />
      },
      {
        path: "photo-gallery",
        element: <FotoGallery />
      },
      {
        path: "infographics",
        element: <Infographics />
      },
      {
        path: "bioprotection",
        element: <Bioprotection />
      },
      {
        path: "media-about-us",
        element: <MediaAboutUs />
      }
    ]
  },
  {
    path: "docs",
    element: <Documents />,
    children: [
      {
        path: "laws",
        index: true,
        element: <Law />
      },
      {
        path: "resolutions",
        element: <StatisticsConsidered />
      },
      {
        path: "government-decisions",
        element: <InformationOfStaff />
      },
      {
        path: "international-agreements",
        element: <InternationalAgreements />
      },
      {
        path: "normative-documents",
        element: <InformationOfStaff />
      },
      {
        path: "draft-normative-documents",
        element: <SystemOrganizations />
      },
      {
        path: "expired-normative-documents",
        element: <StatisticsConsidered />
      },
      {
        path: "fines-increased",
        element: <FinesIncreased />
      },
      {
        path: "list-of-posts",
        element: <StatisticsConsidered />
      }
    ]
  },
  {
    path: "scientific-research",
    element: <ScientificResearch />,
    children: [
      {
        path: "plant-quarantine",
        index: true,
        element: <SystemOrganizations />
      },
      {
        path: "cotton-bollworm",
        element: <CottonBollworm />
      },
      {
        path: "pest-control",
        element: <SystemOrganizations />
      },
      {
        path: "marble-shackle",
        element: <SystemOrganizations />
      },
      {
        path: "cherry-flies",
        element: <SystemOrganizations />
      }
    ]
  },
  {
    path: "laboratory",
    element: <Laboratory />,
    children: [
      {
        path: "charter",
        index: true,
        element: <SystemOrganizations />
      },
      {
        path: "quarantine-organisms:",
        element: <QuarantineOrganisms />
      },
      {
        path: "cotton-bollworm-destroyed",
        element: <SystemOrganizations />
      },
      {
        path: "pests-detected",
        element: <SystemOrganizations />
      },
      {
        path: "california-shields",
        element: <SystemOrganizations />
      },
      {
        path: "citrus-honeysuckle",
        element: <SystemOrganizations />
      },
      {
        path: "georgia-mandarins",
        element: <SystemOrganizations />
      },
      {
        path: "imported-chine",
        element: <SystemOrganizations />
      },
      {
        path: "vine-germany",
        element: <SystemOrganizations />
      },
      {
        path: "imported-afghanistan",
        element: <SystemOrganizations />
      },

    ]
  },
  {
    path: "for-entrepreneurs",
    element: <Entrepreneurs />,
    children: [
      {
        path: "tifth",
        index: true,
        element: <SystemOrganizations />
      },
      {
        path: "pheromone-handles",
        element: <SystemOrganizations />
      },
      {
        path: "cherry-exports",
        element: <SystemOrganizations />
      },
      {
        path: "green-corridors",
        element: <SystemOrganizations />
      },
      {
        path: "protection-agents",
        element: <SystemOrganizations />
      },
      {
        path: "clean-greenhouses",
        element: <SystemOrganizations />
      },
      {
        path: "business-entities",
        element: <SystemOrganizations />
      },
      {
        path: "cluster",
        element: <SystemOrganizations />
      },
      {
        path: "biofactory",
        element: <SystemOrganizations />
      },
      {
        path: "plant-clinic",
        element: <SystemOrganizations />
      }
    ]
  },
  {
    path: "import",
    element: <Import />,
    children: [
      {
        path: "plants-import-export",
        index: true,
        element: <InformationOfStaff />
      },
      {
        path: "phytosanitary-requirements",
        element: <InformationOfStaff />
      },
      {
        path: "list-quarantine",
        element: <InformationOfStaff />
      },
      {
        path: "seeds-turkey",
        element: <InformationOfStaff />
      },
      {
        path: "according-pakistan",
        element: <StatisticsConsidered />
      },
      {
        path: "products-import-export",
        element: <StatisticsConsidered />
      },

    ]
  }
  // {
  //   path: "phytosanitary",
  //   element: <Phytosanitary />,
  //   children: [
  //     {
  //       path: "greenhouses",
  //       index: true,
  //       element: <InformationOfStaff />
  //     }
  //   ]
  // }
]

export default routes;