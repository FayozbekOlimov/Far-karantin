import React from "react"
const Home = React.lazy(() => import('../pages/Home'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
const SiteMap = React.lazy(() => import('../pages/SiteMap'));
const PageNotFound = React.lazy(() => import('../pages/PageNotFound'));
const GalleryView = React.lazy(() => import('../pages/GalleryView'));
const NewsView = React.lazy(() => import('../pages/NewsView'));

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

let textComponentsProps = {
  systemOrganizations: {
    title: "Tizim tashkilotlari",
    content: `
    <p>Lorem ipsum dolor</p>
    <p>Lorem ipsum dolor</p>
    `
  },
  contactAgency: {
    title: "Agentlikka murojaat",
    content: `<p>O‘simliklar karantini va himoyasi agentiligi O‘zbekiston Respublikasi Prezidentining “Respublikada o‘simliklar karantini va himoyasi tizimini tubdan takomillashtirish chora-tadbirlari to‘g‘risida” 2021-yil 15-iyuldagi PF-6262-son Farmoni va “O‘zbekiston Respublikasi O‘simliklar karantini va himoyasi agentligini tashkil etish to‘g‘risida”gi 2021-yil 15-iyuldagi PQ-5185-son qaroriga muvofiq Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi negizida tashkil etilgan.</p>
    
<p>    Agentlik o‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshiruvchi davlat boshqaruvi organi hisoblanadi.</p>
    
    <p>Agentlik O‘zbekiston Respublikasi Vazirlar Mahkamasiga (keyingi o‘rinlarda - Vazirlar Mahkamasi) bo‘ysunadi.</p>
    
    <p>Agentlik tarkibiga quyidagilar kiradi:</p>
    
    <p>Agentlikning markaziy apparati;</p>
    
    <p>Qoraqalpog‘iston Respublikasi O‘simliklar karantini va himoyasi agentligi, viloyatlar va Toshkent shahar o‘simliklar karantini va himoyasi hududiy boshqarmalari (keyingi o‘rinlarda – o‘simliklar karantini va himoyasi hududiy boshqarmalari);</p>
    
    <p>O‘simliklar karantini va himoyasi agentligining O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti (keyingi o‘rinlarda — O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti);</p>
    
    <p>Respublika agrokimyoviy tahlil markazi;</p>
    
    <p>“Biosifat” respublika markazi;</p>
    
    <p>Qoraqalpog‘iston Respublikasi va viloyatlar Chigirtka va tut parvonasiga qarshi kurash xizmatlari.</p>
    
    <p>Agentlik, hududiy boshqarmalar, O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti va boshqa idoraviy mansub tuzilmalar o‘simliklar karantini va himoyasi davlat xizmatining yagona markaziy tizimini tashkil qiladi.</p>
    
    <p>Quyidagilar Agentlikning asosiy vazifalari hisoblanadi:</p>
    
    <p>1) o‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshirish;</p>
    
    <p>2) tuproq agrokimyoviy tahlillarini o‘tkazish va qishloq xo‘jaligiga yetkazib beriladigan barcha turdagi mineral va mikrobiologik o‘g‘itlar sifatini nazorat qilish, tuproq va qishloq xo‘jaligi mahsulotlari tarkibidagi pestitsid, nitrat va og‘ir metall tuzlari qoldiqlarini dala sharoitida radiologik-toksikologik tahlillardan o‘tkazish;</p>
    
    <p>3) o‘simliklar karantini va himoyasida prognoz tizimini takomillashtirish, zararli organizmlarga qarshi kurashning uyg‘unlashgan samarali usullarini belgilash hamda ijrosini nazorat qilish, monitoring olib borish, iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning respublika hududiga kirib kelishi va tarqalishining oldini olish hamda yo‘q qilish;</p>
    
    <p>4) O‘simliklar klinikalari va biolaboratoriyalar tizimini rivojlantirish hamda ularning faoliyatini muvofiqlashtirish;</p>
    
    <p>5) o‘simliklarni himoya qilishning kimyoviy va biologik vositalari hamda mineral va mikrobiologik o‘g‘itlarning biologik samaradorligi bo‘yicha sinovlarni tashkil qilish va ro‘yxatdan o‘tkazish, qishloq xo‘jaligida kimyolashtirish va biologik vositalardan foydalanish sohasida normativ, reglament va standartlar ishlab chiqish hamda kimyolashtirish va biologik vositalar realizatsiyasi bilan shug‘ullanuvchi sub’ektlar faoliyatini muvofiqlashtirish;</p>
    
    <p>6) fitosanitar xavfsizlikni ta’minlashda ilmiy, uslubiy va ta’lim salohiyatini rivojlantirish, zamonaviy innovatsion yechimlar, rejalashtirish va boshqarish usullarini joriy etish, ilg‘or texnologiyalar hamda ish usullarini joriy etishda xalqaro hamkorlikni kengaytirish, sohada kadrlarni tizimli qayta tayyorlash va ularning malakasini oshirishni tashkil etish;</p>
    
    <p>7)  o‘simliklar karantini va himoyasi hamda agrokimyo sohasida xalqaro hamkorlikni kengaytirish, xizmati faoliyatiga zamonaviy xorijiy texnologiyalar va ish uslublarini joriy etish;</p>
    
    <p>8) o‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli qayta tayyorlash va malakasini oshirishni tashkil etish, rahbarlar va mutaxassislar, ishlash shakllari va usullarini takomillashtirish, yuklangan vazifalarni o‘z vaqtida va sifatli bajarish bo‘yicha ularning mas’uliyatini oshirish.</p>
    
    <p>Agentlik o‘ziga yuklangan vazifalarga muvofiq quyidagi funksiyalarni amalga oshiradi:</p>
    
    <p>1) O‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshirish sohasida:</p>
    
    <p>Vazirlar Mahkamasiga o‘simliklar karantini, himoyasi va agrokimyo yagona davlat siyosatini yuritishga qaratilgan takliflarni, o‘simliklar karantini, himoyasi va agrokimyo to‘g‘risidagi qonun hujjatlarini yanada takomillashtirishga doir normativ-huquqiy hujjatlar va davlat dasturlarining loyihalarini ko‘rib chiqish uchun kiritadi;</p>
    
    <p>o‘z vakolati doirasida buyruqlar qabul qiladi, yuridik va jismoniy shaxslar bajarishi majburiy bo‘lgan yo‘riqnomalar, karantin qoidalari va fitosanitariya talablarini belgilangan tartibda tasdiqlaydi hamda ularni tashkilotlar va fuqarolarga yetkazadi;</p>
    
    <p>jismoniy va yuridik shaxslarning o‘simliklar karantini va himoyasi to‘g‘risidagi qonun hujjatlari talablari, shu jumladan karantini qoidalari, shuningdek, fitosanitariya talablarining bajarilishini davlat tomonidan nazorat qilinishini ta’minlaydi;</p>
    
    <p>respublika hududida o‘simliklar karantini va himoyasi bo‘yicha tadbirlarning o‘z vaqtida o‘tkazilishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
    
    <p>o‘simliklar karantini va himoyasi sohasidagi xalqaro konvensiyalar va boshqa davlatlar bilan tuzilgan shartnomalardan kelib chiqadigan tadbirlar o‘tkazilishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
    
    <p>davlat va xo‘jalik boshqaruvi organlari, mahalliy ijro etuvchi hokimiyat organlarining Agentlik vakolatiga kiradigan masalalar bo‘yicha faoliyatini belgilangan tartibda muvofiqlashtiradi;</p>
    
    <p>jismoniy va yuridik shaxslarning karantin hamda boshqa o‘ta xavfli zararli organizmlar kirib kelishi va tarqalishining oldini olishga qaratilgan kompleks profilaktika chora-tadbirlarini belgilangan muddatlarda bajarishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
    
    <p>xorijiy davlatlardan urug‘lar, o‘simliklar, o‘simlik xom ashyosi va boshqa o‘simlik mahsulotlari hamda xalq iste’mol tovarlari olib kiriladigan chegara maskanlarini belgilaydi;</p>
    
    <p>respublikaga xorijiy davlatlardan urug‘lar, o‘simliklar va boshqa o‘simlik mahsulotlari yetkazib berish yoki respublika hududi orqali tashish uchun savdo shartnomalariga (kontraktlariga) o‘simliklar karantini va himoyasi davlat xizmati talablarining kiritilishini nazorat qiladi;</p>
    
    <p>O‘zbekiston Respublikasi hududida xizmat tekshiruvlarini belgilangan tartibda tashkil etadi va o‘tkazadi, shuningdek, karantin tusidagi favqulodda vaziyatlarda boshqa davlatlar hududida o‘tkaziladigan xizmat tekshiruvlarida ishtirok etadi;</p>
    
    <p>zarur bo‘lganda, xorijiy davlatlardan katta miqdorda urug‘lar, o‘simliklar va boshqa o‘simlik mahsulotlari sotib olingan hollarda ushbu davlatlarda qishloq xo‘jaligi ekinlari va ko‘chatlarning fitosanitariya holatini o‘rganish uchun fitosanitariya nazorati mutaxassislarini yuboradi;</p>
    
    <p>tanlab olish asosida fitosanitariya nazoratini o‘tkazish imkonini beradigan alohida xavf-xatarlarni tahlil qilish tizimlarini joriy etish va muntazam yangilab borish;</p>
    
    <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi bilan kelishgan holda O‘zbekiston Respublikasi uchun o‘simliklar karantinida bo‘lgan zararli organizmlar ro‘yxatini tasdiqlaydi;</p>
    
    <p>xavfli zararli organizmlar ro‘yxatini tasdiqlaydi;</p>
    
    <p>O‘zbekiston Respublikasi hududiga chetdan kiritilishi mumkin bo‘lmagan o‘simliklarning ekish materiallari, o‘simliklar karantini ostidagi mahsulotlar va ularning hududlari ro‘yxatini tasdiqlaydi;</p>
    
    <p>O‘zbekiston Respublikasi hududidan olib chiqilishi mumkin bo‘lmagan o‘simliklar karantini ostidagi mahsulotlar ro‘yxatini tasdiqlaydi;</p>
    
    <p>fitosanitar sertifikati va karantin ruxsatnomasini beradi;</p>
    
    <p>olib kiriladigan va jo‘natiladigan, karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlar tashuvchilari bo‘lishi mumkin bo‘lgan o‘simliklar karantini ostidagi mahsulotlar turlari, urug‘liklar, o‘simliklar, o‘simlik mahsulotlari va boshqa materiallarni karantin tekshiruvini hamda laboratoriya ekspertizasidan o‘tkazadi;</p>
    
    <p>o‘simliklar karantini ostidagi mahsulotlarni belgilangan tartibda laboratoriya ekspertizasidan o‘tkazadi;</p>
    
    <p>urug‘liklar, o‘simliklar, o‘simlik xom ashyosi, boshqa o‘simlik mahsulotlari va xalq iste’mol tovarlarini mamlakat ichida tashish, eksport qilish uchun olib chiqishning karantin qoidalari hamda ulardan foydalanish shartlarini tasdiqlaydi;</p>
    
    <p>zarur bo‘lganda, jismoniy va yuridik shaxslarga karantindagi zararli organizmlarga qarshi kurashishda yordam berish uchun ixtisoslashtirilgan fumigatsiya otryadlarini tuzadi;</p>
    
    <p>respublika hududlarini karantin bo‘yicha hududlarga va mikrohududlarga ajratadi;</p>
    
    <p>mahalliy davlat hokimiyat organlari va Vazirlar Mahkamasiga tegishli hududda karantin o‘rnatish (uni bekor qilish) to‘g‘risida taqdimnomalar kiritadi;</p>
    
    <p>qishloq xo‘jaligi va boshqa o‘simliklar mahsulotlarini ishlab chiqarish, tayyorlash, tashish, saqlash, qayta ishlash, sotish va ulardan foydalanishda o‘simliklar karantini bo‘yicha belgilangan qoidalarga rioya etilishi va tadbirlar amalga oshirilishi yuzasidan davlat nazoratini amalga oshiradi;</p>
    
    <p>o‘simlik mahsulotlari va boshqa materiallarni sog‘lomlashtirishni tashkil etadi;</p>
    
    <p>nazorat qilinadigan zararli organizmlarni o‘z vaqtida aniqlash maqsadida qishloq xo‘jaligi va boshqa ekinlar, o‘simlik mahsulotlari saqlanadigan va qayta ishlanadigan joylarda nazorat tekshiruvlarini o‘tkazadi;</p>
    
    <p>o‘simliklarni himoya qilish sohasidagi ilmiy amaliy tadqiqotlarning buyurtmalarini muvofiqlashtiradi;</p>
    
    <p>zararli va o‘ta xavfli organizmlarning monitoringini tashkil qiladi;</p>
    
    <p>xalqaro tashkilotlar va davlat organlari bilan hamkorlikni amalga oshiradi o‘simliklar himoyasi sohasidagi xalqaro dasturlarning amalga oshirilishida ishtirok etadi;</p>
    
    <p>davlat fitosanitar nazoratini amalga oshiradi;</p>
    
    <p>o‘z vakolati doirasida standartlashtirish bo‘yicha hujjatlar loyihalarini ko‘rib chiqadi, shuningdek standartlashtirish bo‘yicha davlat standartlari, xalqaro  (davlatlararo, mintaqaviy) standartlar, xorijiy mamlakatlarning milliy standartlari texnik-iqtisodiy axborotlar milliy klassifikatorlari va tavsiyalarni o‘zgartirish, qayta ko‘rib chiqish va bekor qilish bo‘yicha takliflar kiritadi;</p>
    
    <p>Qishloq xo‘jaligi vazirligi bilan birgalikda Vazirlar Mahkamasiga qarshi kurash xarajatlari belgilangan tartibda qoplanadigan zararli organizmlar ro‘yxatini kiritadi;</p>
    
    <p>davlat va xo‘jalik boshqaruvi organlari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari, shuningdek fuqarolar tomonidan o‘simliklarni himoya qilish to‘g‘risidagi O‘zbekiston Respublikasi qonunchilik hujjatlariga rioya etilishini nazorat qiladi;</p>
    
    <p>O‘zbekiston Respublikasi Ekologiya va atrof-muhitni muhofaza qilish davlat qo‘mitasi hamda Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmati bilan kelishilgan holda pestitsidlarni zararsizlantirish tartibini, shuningdek, maxsus saqlash muassasalarini tegishli holatda saqlash shartlarini belgilaydi;</p>
    
    <p>fitosanitariya tadbirlarni amalga oshirish tartibi, uslublari va tavsiyalarini tasdiqlaydi;</p>
    
    o‘simliklar himoyasi sohasidagi ilmiy-amaliy tadqiqotlar o‘tkazilishi ustidan nazoratni amalga oshiradi, shuningdek o‘simliklar himoyasi bo‘yicha o‘quv dasturlariga muvofiq mutaxassislarni tayyorlash va malakasini oshirishni ta’minlaydi;</p>
    
    <p>O‘zbekiston Respublikasi qonunchilik hujjatlarida nazarda tutilgan boshqa vakolatlarni ham amalga oshiradi.
    
    <p>2) Tuproq agrokimyoviy tahlillarini o‘tkazish va qishloq xo‘jaligiga yetkazib beriladigan barcha turdagi mineral va mikrobiologik o‘g‘itlar sifatini nazorat qilish, tuproq va qishloq xo‘jaligi mahsulotlari tarkibidagi pestitsid, nitrat va og‘ir metall tuzlari qoldiqlarini dala sharoitida radiologik-toksikologik tahlillardan o‘tkazish sohasida:</p>
    
    <p>qishloq xo‘jaligi mahsulotlarining muayyan turlarini ishlab chiqarish maqsadida qishloq xo‘jaligi yerlaridan maqbul foydalanish uchun hududlarni ixtisoslashtirish bo‘yicha tavsiya etilgan sxemalarni tasdiqlaydi;</p>
    
    <p>tuproqlarni agrokimyoviy tekshirish qoidalarini, qishloq xo‘jaligi mahsulotlarini yetishtirish bo‘yicha agrokimyoviy xizmatlarning tabiiy normalarini, qishloq xo‘jaligi yerlarining agrokimyoviy holati to‘g‘risidagi axborot ma’lumotlar bankini yuritish qoidalarini tasdiqlaydi;</p>
    
    <p>yerlarning agrokimyoviy holatini kuzatish va baholashda Respublika agrokimyoviy tahlil markazining xizmatlar ko‘rsatish va tariflari qoidalarini tasdiqlaydi;</p>
    
    <p>yerlarning agrokimyoviy holati asosida qishloq xo‘jaligi hududlarini rivojlantirish sohasida mahalliy ijro hokimiyati  faoliyatiga metodik rahbarlik qiladi;</p>
    
    <p>agrokimyoviy tahlil tizimini takomillashtirish, agrokimyoviy tahlil infratuzilmasini modernizatsiya qilish va texnik yangilash chora-tadbirlarini amalga oshiradi;</p>
    
    <p>mineral o‘g‘itlarga qo‘yiladigan ilmiy talablarni va ularni qishloq xo‘jalik ekinlariga tatbiq etishni tasdiqlaydi;</p>
    
    <p>vakolatli organlar bilan birgalikda tuproq, mineral o‘g‘itlar, radiologik va toksikologik tadqiqotlarning laboratoriya tahlillarini o‘tkazish bo‘yicha ko‘rsatmalar ishlab chiqadi va tasdiqlaydi;</p>
    
    <p>laboratoriyalarni xalqaro standartlar talablariga moslashtirish va ularni belgilangan tartibda akkreditatsiyadan o‘tkazilishini ta’minlash bo‘yicha chora-tadbirlarni amalga oshiradi;</p>
    
    <p>agrokimyoviy tahlil laboratoriyalari, biolaboratoriyalar, o‘simliklar klinikalari va tuproq klinikalarida ISO/IEC 17025 xalqaro standarti talablarini tadbiq etadi;</p>
    
    <p>tuproqdagi oziq moddalarning darajasini o‘rganish va yaxshilash sohasida fundamental va amaliy tadqiqotlar olib boradi;</p>
    
    <p>kadrlar tayyorlash, qayta tayyorlash va malakasini oshirishning samarali tizimini takomillashtirish, agrokimyoviy tahlil sohasida zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish chora-tadbirlarini amalga oshirish;</p>
    
    <p>xorijiy davlatlarning vakolatli organlari  bilan tajriba almashish va malaka oshirish sohasida hamkorlik qiladi;</p>
    
    <p>eksport bozorlari uchun organik va an’anaviy qishloq xo‘jaligida ruxsat etilgan o‘simliklarni himoya qilish vositalari va o‘g‘itlarni belgilaydi;</p>
    
    <p>o‘simliklarni himoya qilishda ishlatiladigan inson salomatligiga salbiy ta’sir etuvchi kimyoviy moddalarni ularning o‘rnini bosuvchi moddalar bilan xalqaro talablarga muvofiq bosqichma-bosqich almashtirish chora-tadbirlarini amalga oshiradi;</p>
    
    <p>O‘zbekiston Respublikasi qonunchilik hujjatlarida nazarda tutilgan boshqa vakolatlarni amalga oshiradi.</p>
    
    <p>3) O‘simliklar karantini va himoyasida prognoz tizimini takomillashtirish, zararli organizmlarga qarshi kurashning uyg‘unlashgan samarali usullarini belgilash hamda ijrosini nazorat qilish, monitoring olib borish, iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning respublika hududiga kirib kelishi va tarqalishining oldini olish hamda yo‘q qilish sohasida:</p>
    
    <p>respublika hududida sezilarli iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning fitosanitariya xavfini tahlil qiladi va ular kirib kelishining oldini olishga qaratilgan ilmiy asoslangan fitosanitariya tadbirlarini ishlab chiqadi;</p>
    
    <p>respublika hududida o‘simliklar karantini obyektlari va boshqa xavfli o‘simlik zararkunandalarining tarqalishini aniqlaydi va bashorat qiladi, shuningdek, ularni tashxislash hamda ularga qarshi kurashning ekspress-usullarini ishlab chiqadi;</p>
    
    <p>karantindagi va boshqa xavfli zararli organizmlarga qarshi kurash usullarini tasdiqlash, ulardan xoli hududlarni aniqlash, ularning tarqalishini oldini olish hamda ularga qarshi kurashish bo‘yicha dasturlarni ishlab chiqish va tegishli organlarga taqdim etish;</p>
    
    <p>zararli organizmlarning qishloq xo‘jaligi mahsulotlariga ta’sirini ilmiy jihatdan o‘rganadi, ularga qarshi kurashishning innovatsion usullarini va entomofaglarning yangi turlarini iqlimlashtirishni ishlab chiqadi;</p>
    
    <p>respublika hududida yetishtirilgan paxta, g‘alla va boshqa qishloq xo‘jaligi ekinlaridagi zararkunanda, kasallik va begona o‘tlarni erta aniqlash, bioekologik xususiyatlarni o‘rganish va zararlanish darajasiga qarab kurash usullarini takomillashtirish ishlarini olib boradi;</p>
    
    <p>atrof-muhit va inson salomatligiga salbiy ta’sir ko‘rsatmaydigan mamlakatda “organik qishloq xo‘jaligi”ni rivojlantirish sohasida o‘simliklarni zararli organizmlardan himoya qilish vositalari va usullarini tasdiqlaydi.</p>
    
    <p>4) O‘simliklar klinikalari va biolaboratoriyalar tizimini rivojlantirish hamda ularning faoliyatini muvofiqlashtirish sohasida:</p>
    
    <p>o‘simlik klinikalari monitoringi va ularning faoliyatini muvofiqlashtirish, shu jumladan o‘simlik klinikalari tomonidan ayrim kimyoviy moddalarni iste’molchilarga sotish;</p>
    
    <p>o‘simlik klinikalari huzurida majburiy bo‘lgan kimyoviy, biokimyoviy, biologik, mexanik vositalar, qurilmalar va preparatlarning minimal assortimenti ro‘yxatini tasdiqlaydi;</p>
    
    <p>agronom-inspektorning tavsiyasi va retsepti asosida sotiladigan kimyoviy moddalar ro‘yxatini tasdiqlaydi;</p>
    
    <p>o‘simliklarni himoya qilish bo‘yicha xizmatlar ko‘rsatuvchi jismoniy shaxslar va o‘simlik klinikalari xodimlarini attestatsiyadan o‘tkazadi;</p>
    
    <p>zararli organizmlarga qarshi kurashning biologik usulini keng qo‘llash choralarini ko‘radi;</p>
    
    <p>biolaboratoriya faoliyatini monitoring qilish va muvofiqlashtirish;</p>
    
    <p>xalqaro hamkorlikni kengaytirish, biologik himoya sohasida zamonaviy innovatsion texnologiyalar va usullarni joriy etish.</p>
    
    <p>5) O‘simliklarni himoya qilishning kimyoviy va biologik vositalari hamda mineral va mikrobiologik o‘g‘itlarning biologik samaradorligi bo‘yicha sinovlarni tashkil qilish va ro‘yxatdan o‘tkazish, qishloq xo‘jaligida kimyolashtirish va biologik vositalardan foydalanish sohasida normativ, reglament va standartlar ishlab chiqish hamda kimyolashtirish va biologik vositalar realizatsiyasi bilan shug‘ullanuvchi sub’ektlar faoliyatini muvofiqlashtirish sohasida:</p>
    
    <p>o‘simliklarni himoya qilish vositalari (pestitsidlar) xavfsizligi bo‘yicha maxsus texnik reglamentlarni ishlab chiqadi va tasdiqlaydi;</p>
    
    <p>ro‘yxatga olish (kichik va ishlab chiqarish) sinovlari yoki ilmiy tadqiqotlar uchun ro‘yxatdan o‘tmagan o‘simliklarni himoya qilish vositalari (pestitsidlar) namunalarini olib kirishga xulosalar (ruxsatnomalar) beradi;</p>
    
    <p>o‘simliklarni himoya qilish vositalari (pestitsidlar) importiga, shuningdek, o‘simliklarni himoya qilish vositalari (pestitsidlar), mineral o‘g‘itlarning ulgurji va chakana savdosiga litsenziyalar beradi;</p>
    
    <p>pestitsidlarni ishlab chiqarish, sotish, pestitsidlarni ayerozol va fumigatsiya usullari bilan ishlatish bo‘yicha malaka talablarini ishlab chiqadi va tasdiqlaydi;</p>
    
    <p>O‘zbekiston Respublikasi Ekologiya va atrof-muhitni muhofaza qilish davlat qo‘mitasi va Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmati bilan kelishilgan holda ro‘yxatga olish (kichik va ishlab chiqarish) testlarini o‘tkazish va pestitsidlarni davlat ro‘yxatidan o‘tkazish qoidalarini ishlab chiqadi va tasdiqlaydi;</p>
    
    <p>pestitsidlarni davlat ro‘yxatidan o‘tkazish va pestitsidlar uchun ro‘yxatga olish guvohnomalarini berishni amalga oshiradi;</p>
    
    <p>pestitsidlarning ro‘yxatlarini tasdiqlaydi;</p>
    
    <p>Vazirlar Mahkamasi tomonidan tasdiqlangan O‘zbekiston Respublikasi qishloq xo‘jaligida foydalanishga ruxsat etilgan zararkunandalarga qarshi kimyoviy va biologik vositalar, o‘simlik kasalliklari va begona o‘tlar, defoliantlar hamda o‘simliklarni o‘sish regulyatorlari ro‘yxatini yuritadi va bir yilda kamida bir marta e’lon qilib boradi;</p>
    
    <p>o‘simliklarni himoya qilish mahsulotlarining faol va faol bo‘lmagan moddalaridan foydalanishda taqiqlangan hamda cheklangan reyestrini yuritadi;</p>
   
    <p>ro‘yxatga olish testlarini tashkil qiladi (kichik va ishlab chiqarish);</p>
    
    <p>respublika hududida budjet mablag‘lari hisobiga sotib olingan pestitsidlarni o‘simliklar karantini sohasidagi monitoring ma’lumotlari va hozirgi fitosanitariya holatiga qarab taqsimlaydi;</p>
    
    <p>O‘zbekiston Respublikasi qonun hujjatlarida belgilangan tartibda pestitsidlar zaxirasini shakllantirishni nazorat qiladi;</p>
    
    <p>o‘simliklarni himoya qilish mahsulotlarini ishlab chiqarish va ulardan foydalanish, ulardan foydalanish qoidalariga rioya qilish, o‘simliklarni himoya qilish mahsulotlarining inson salomatligi va atrof-muhitga ta’sirini aniqlash bilan bog‘liq davlat boshqaruvi organlari faoliyatini muvofiqlashtiradi;</p>
    
    <p>respublikada ishlab chiqarilayotgan va olib kirilayotgan o‘simliklarni himoya qilish vositalarining sifati nazoratini tashkil qiladi, ulardan foydalanish bo‘yicha xulosalar beradi va inson salomatligi va atrof-muhitga salbiy ta’sir ko‘rsatilsa, ulardan foydalanishni to‘xtatib qo‘yadi;</p>
    
    <p>o‘simliklarni biologik usulda himoya qilishda biomahsulotlarning samaradorligini ta’minlash maqsadida Respublikada faoliyat yurituvchi biolaboratoriyalarda yetishtiriladigan biomahsulotlarga muvofiqlik sertifikati berilishini ta’minlaydi va “Biosifat” Respublika markazining xizmatlar ko‘rsatish tariflari qoidalarini tasdiqlaydi.</p>
    
    <p>6) Fitosanitar xavfsizlik ta’minlash sohasida ilmiy, usulik va ta’lim imkoniyatlarini rivojlantirish, innovatsion ishlanmalar natijalari, rejalashtirish va boshqaruv usullarini amaliyotga joriy qilish, ilg‘or texnologiya va ish uslublarini ilmiy-tadqiqotlar yo‘nalishlarini belgilash, fundamental va amaliy tadqiqotlar, fitosanitariya amaliyotiga joriy etilishini muvofiqlashtirish, soha xodimlarini tizimli qayta tayyorlash va malakasini oshirish sohasida:</p>
    
    <p>iste’dodli yosh olimlar, magistrlar, doktarantlarning o‘simliklar karantini bo‘yicha ilmiy-tadqiqot ishlariga rahbarlik qiladi;</p>
    
    <p>ilmiy-tadqiqot muassasalari bilan birgalikda karantindagi  zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish bo‘yicha samarali tadbirlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;</p>
    
    <p>ilm-fan yutuqlari va ilg‘or tajribalarni joriy qiladi, shuningdek, aholini karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurash tadbirlari bilan tizimli tanishtirish ishlarini amalga oshiradi;</p>
    
    <p>o‘simlik mahsulotlari va boshqa materiallarning yashirin zararlanganini karantin ko‘rigidan, laboratoriya ekspertizasidan o‘tkazadi va aniqlaydi hamda zararsizlantirish usullarini ishlab chiqadi;</p>
    
    <p>respublika hududida mavjud bo‘lmagan va cheklangan darajada tarqalgan zararkunandalar, o‘simliklar kasalliklari hamda begona o‘tlarning turlari va bioekologiyasini o‘rganadi.</p>
    
    <p>7) O‘simliklar karantini va himoyasi hamda agrokimyo sohasida xalqaro munosabatlarni yo‘lga qo‘yish va rivojlantirish faoliyatiga zamonaviy xorijiy texnologiyalar va ish usullarini joriy etish sohasida:</p>
    
    <p>xalqaro tashkilotlarda o‘simliklar karantini va himoyasi bo‘yicha respublika manfaatlarini ifoda etadi;</p>
    
    <p>fitosanitariya xavfsizligi, o‘simliklar karantini va himoyasi sohasidagi normativ-huquqiy bazani takomillashtirish bo‘yicha xalqaro tashkilotlar, konferensiyalar va seminarlarda ishtirok etadi;</p>
    
    <p>xorijiy davlatlarning vakolatli idoralari bilan o‘simliklar karantini va fitosanitariya xavfsizligi to‘g‘risida zarur axborotlarni almashadi;</p>
    
    <p>xorijiy davlatlardan kirib kelgan yoki tranzit tarzida olib o‘tiladigan o‘simliklar karantini ostidagi mahsulotlar O‘zbekiston Respublikasining fitosanitariya karantin talablariga mos kelmasligi sababli xalqaro standartlarga muvofiq choralar ko‘radi va bu haqida tegishli xorijiy davlat karantin xizmatini xabardor qiladi;</p>
    
    <p>xorijiy davlatlarning sohadagi milliy tashkilotlarini o‘simliklar karantini ostidagi mahsulotlarga qo‘yiladigan talablar va o‘simliklar karantini bo‘yicha xorijiy davlatlar organlari tomonidan ularga nisbatan belgilangan cheklovlar to‘g‘risida xabardor qiladi;</p>
    
    <p>xorijiy davlatlarning tegishli idoralari bilan fitosanitar zonalar to‘g‘risida xalqaro shartnomalar tuzish va ularni amalga oshirishda O‘zbekiston Respublikasi qonun hujjatlarida belgilangan tartibda ishtirok etadi;</p>
    
    <p>O‘zbekiston Respublikasidan olib chiqiladigan o‘simliklar karantini ostidagi mahsulotlarning xorijiy davlatlar karantin fitosanitariya talablariga mos kelmagan holatlarda tekshiruvlar o‘tkazadi.
    
    <p>8) O‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli qayta tayyorlash va malakasini oshirishni tashkil etish, rahbarlar va mutaxassislarning ishlash shakllari va uslublarini takomillashtirish, yuklatilgan vazifalarning o‘z vaqtida va sifatli bajarilishi bo‘yicha ularning mas’uliyatini oshirish sohasida:
    
    <p>o‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli asosda qayta tayyorlash va malakasini oshirishni tashkil qiladi, rahbarlar va mutaxassislarning ishlash shakllari hamda uslublarini takomillashtirish chora-tadbirlarini amalga oshiradi;</p>
    
    <p>xodimlarning karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish bo‘yicha kasb darajasini muntazam oshirishga qaratilgan tizimli ishlar bajarilishini ta’minlaydi;</p>
    
    <p>ilm-fan yutuqlari va ilg‘or tajribani, innovatsion uslublar, karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish vositalari hamda usullarini targ‘ib qilish hamda ishlab chiqarishga joriy etish, aholi o‘rtasida karantin obyektlar to‘g‘risidagi bilimni ommalashtirish ishlarini tashkil etadi.</p>
    
<p>Agentlik yuqorida ko‘rsatib o‘tilgan barcha funksiyalarni “E-Fitouz” avtomatlashtirilgan axborot tizimi bilan integratsiyalashgan “Assalom Agro” platformasi orqali amalga oshiradi.</p>
    
    `
  },
  superior_organizations: {
    title: "Yuqori turuvchi tashkilotlar",
    content: `<p>O‘simliklar karantini va himoyasi agentiligi O‘zbekiston Respublikasi Prezidentining “Respublikada o‘simliklar karantini va himoyasi tizimini tubdan takomillashtirish chora-tadbirlari to‘g‘risida” 2021-yil 15-iyuldagi PF-6262-son Farmoni va “O‘zbekiston Respublikasi O‘simliklar karantini va himoyasi agentligini tashkil etish to‘g‘risida”gi 2021-yil 15-iyuldagi PQ-5185-son qaroriga muvofiq Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi negizida tashkil etilgan.</p>
    
    <p>    Agentlik o‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshiruvchi davlat boshqaruvi organi hisoblanadi.</p>
        
        <p>Agentlik O‘zbekiston Respublikasi Vazirlar Mahkamasiga (keyingi o‘rinlarda - Vazirlar Mahkamasi) bo‘ysunadi.</p>
        
        <p>Agentlik tarkibiga quyidagilar kiradi:</p>
        
        <p>Agentlikning markaziy apparati;</p>
        
        <p>Qoraqalpog‘iston Respublikasi O‘simliklar karantini va himoyasi agentligi, viloyatlar va Toshkent shahar o‘simliklar karantini va himoyasi hududiy boshqarmalari (keyingi o‘rinlarda – o‘simliklar karantini va himoyasi hududiy boshqarmalari);</p>
        
        <p>O‘simliklar karantini va himoyasi agentligining O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti (keyingi o‘rinlarda — O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti);</p>
        
        <p>Respublika agrokimyoviy tahlil markazi;</p>
        
        <p>“Biosifat” respublika markazi;</p>
        
        <p>Qoraqalpog‘iston Respublikasi va viloyatlar Chigirtka va tut parvonasiga qarshi kurash xizmatlari.</p>
        
        <p>Agentlik, hududiy boshqarmalar, O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti va boshqa idoraviy mansub tuzilmalar o‘simliklar karantini va himoyasi davlat xizmatining yagona markaziy tizimini tashkil qiladi.</p>
        
        <p>Quyidagilar Agentlikning asosiy vazifalari hisoblanadi:</p>
        
        <p>1) o‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshirish;</p>
        
        <p>2) tuproq agrokimyoviy tahlillarini o‘tkazish va qishloq xo‘jaligiga yetkazib beriladigan barcha turdagi mineral va mikrobiologik o‘g‘itlar sifatini nazorat qilish, tuproq va qishloq xo‘jaligi mahsulotlari tarkibidagi pestitsid, nitrat va og‘ir metall tuzlari qoldiqlarini dala sharoitida radiologik-toksikologik tahlillardan o‘tkazish;</p>
        
        <p>3) o‘simliklar karantini va himoyasida prognoz tizimini takomillashtirish, zararli organizmlarga qarshi kurashning uyg‘unlashgan samarali usullarini belgilash hamda ijrosini nazorat qilish, monitoring olib borish, iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning respublika hududiga kirib kelishi va tarqalishining oldini olish hamda yo‘q qilish;</p>
        
        <p>4) O‘simliklar klinikalari va biolaboratoriyalar tizimini rivojlantirish hamda ularning faoliyatini muvofiqlashtirish;</p>
        
        <p>5) o‘simliklarni himoya qilishning kimyoviy va biologik vositalari hamda mineral va mikrobiologik o‘g‘itlarning biologik samaradorligi bo‘yicha sinovlarni tashkil qilish va ro‘yxatdan o‘tkazish, qishloq xo‘jaligida kimyolashtirish va biologik vositalardan foydalanish sohasida normativ, reglament va standartlar ishlab chiqish hamda kimyolashtirish va biologik vositalar realizatsiyasi bilan shug‘ullanuvchi sub’ektlar faoliyatini muvofiqlashtirish;</p>
        
        <p>6) fitosanitar xavfsizlikni ta’minlashda ilmiy, uslubiy va ta’lim salohiyatini rivojlantirish, zamonaviy innovatsion yechimlar, rejalashtirish va boshqarish usullarini joriy etish, ilg‘or texnologiyalar hamda ish usullarini joriy etishda xalqaro hamkorlikni kengaytirish, sohada kadrlarni tizimli qayta tayyorlash va ularning malakasini oshirishni tashkil etish;</p>
        
        <p>7)  o‘simliklar karantini va himoyasi hamda agrokimyo sohasida xalqaro hamkorlikni kengaytirish, xizmati faoliyatiga zamonaviy xorijiy texnologiyalar va ish uslublarini joriy etish;</p>
        
        <p>8) o‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli qayta tayyorlash va malakasini oshirishni tashkil etish, rahbarlar va mutaxassislar, ishlash shakllari va usullarini takomillashtirish, yuklangan vazifalarni o‘z vaqtida va sifatli bajarish bo‘yicha ularning mas’uliyatini oshirish.</p>
        
        <p>Agentlik o‘ziga yuklangan vazifalarga muvofiq quyidagi funksiyalarni amalga oshiradi:</p>
        
        <p>1) O‘simliklar karantini, himoyasi va agrokimyo sohalarida yagona davlat siyosati va nazoratini amalga oshirish sohasida:</p>
        
        <p>Vazirlar Mahkamasiga o‘simliklar karantini, himoyasi va agrokimyo yagona davlat siyosatini yuritishga qaratilgan takliflarni, o‘simliklar karantini, himoyasi va agrokimyo to‘g‘risidagi qonun hujjatlarini yanada takomillashtirishga doir normativ-huquqiy hujjatlar va davlat dasturlarining loyihalarini ko‘rib chiqish uchun kiritadi;</p>
        
        <p>o‘z vakolati doirasida buyruqlar qabul qiladi, yuridik va jismoniy shaxslar bajarishi majburiy bo‘lgan yo‘riqnomalar, karantin qoidalari va fitosanitariya talablarini belgilangan tartibda tasdiqlaydi hamda ularni tashkilotlar va fuqarolarga yetkazadi;</p>
        
        <p>jismoniy va yuridik shaxslarning o‘simliklar karantini va himoyasi to‘g‘risidagi qonun hujjatlari talablari, shu jumladan karantini qoidalari, shuningdek, fitosanitariya talablarining bajarilishini davlat tomonidan nazorat qilinishini ta’minlaydi;</p>
        
        <p>respublika hududida o‘simliklar karantini va himoyasi bo‘yicha tadbirlarning o‘z vaqtida o‘tkazilishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
        
        <p>o‘simliklar karantini va himoyasi sohasidagi xalqaro konvensiyalar va boshqa davlatlar bilan tuzilgan shartnomalardan kelib chiqadigan tadbirlar o‘tkazilishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
        
        <p>davlat va xo‘jalik boshqaruvi organlari, mahalliy ijro etuvchi hokimiyat organlarining Agentlik vakolatiga kiradigan masalalar bo‘yicha faoliyatini belgilangan tartibda muvofiqlashtiradi;</p>
        
        <p>jismoniy va yuridik shaxslarning karantin hamda boshqa o‘ta xavfli zararli organizmlar kirib kelishi va tarqalishining oldini olishga qaratilgan kompleks profilaktika chora-tadbirlarini belgilangan muddatlarda bajarishi bo‘yicha davlat nazoratini amalga oshiradi;</p>
        
        <p>xorijiy davlatlardan urug‘lar, o‘simliklar, o‘simlik xom ashyosi va boshqa o‘simlik mahsulotlari hamda xalq iste’mol tovarlari olib kiriladigan chegara maskanlarini belgilaydi;</p>
        
        <p>respublikaga xorijiy davlatlardan urug‘lar, o‘simliklar va boshqa o‘simlik mahsulotlari yetkazib berish yoki respublika hududi orqali tashish uchun savdo shartnomalariga (kontraktlariga) o‘simliklar karantini va himoyasi davlat xizmati talablarining kiritilishini nazorat qiladi;</p>
        
        <p>O‘zbekiston Respublikasi hududida xizmat tekshiruvlarini belgilangan tartibda tashkil etadi va o‘tkazadi, shuningdek, karantin tusidagi favqulodda vaziyatlarda boshqa davlatlar hududida o‘tkaziladigan xizmat tekshiruvlarida ishtirok etadi;</p>
        
        <p>zarur bo‘lganda, xorijiy davlatlardan katta miqdorda urug‘lar, o‘simliklar va boshqa o‘simlik mahsulotlari sotib olingan hollarda ushbu davlatlarda qishloq xo‘jaligi ekinlari va ko‘chatlarning fitosanitariya holatini o‘rganish uchun fitosanitariya nazorati mutaxassislarini yuboradi;</p>
        
        <p>tanlab olish asosida fitosanitariya nazoratini o‘tkazish imkonini beradigan alohida xavf-xatarlarni tahlil qilish tizimlarini joriy etish va muntazam yangilab borish;</p>
        
        <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi bilan kelishgan holda O‘zbekiston Respublikasi uchun o‘simliklar karantinida bo‘lgan zararli organizmlar ro‘yxatini tasdiqlaydi;</p>
        
        <p>xavfli zararli organizmlar ro‘yxatini tasdiqlaydi;</p>
        
        <p>O‘zbekiston Respublikasi hududiga chetdan kiritilishi mumkin bo‘lmagan o‘simliklarning ekish materiallari, o‘simliklar karantini ostidagi mahsulotlar va ularning hududlari ro‘yxatini tasdiqlaydi;</p>
        
        <p>O‘zbekiston Respublikasi hududidan olib chiqilishi mumkin bo‘lmagan o‘simliklar karantini ostidagi mahsulotlar ro‘yxatini tasdiqlaydi;</p>
        
        <p>fitosanitar sertifikati va karantin ruxsatnomasini beradi;</p>
        
        <p>olib kiriladigan va jo‘natiladigan, karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlar tashuvchilari bo‘lishi mumkin bo‘lgan o‘simliklar karantini ostidagi mahsulotlar turlari, urug‘liklar, o‘simliklar, o‘simlik mahsulotlari va boshqa materiallarni karantin tekshiruvini hamda laboratoriya ekspertizasidan o‘tkazadi;</p>
        
        <p>o‘simliklar karantini ostidagi mahsulotlarni belgilangan tartibda laboratoriya ekspertizasidan o‘tkazadi;</p>
        
        <p>urug‘liklar, o‘simliklar, o‘simlik xom ashyosi, boshqa o‘simlik mahsulotlari va xalq iste’mol tovarlarini mamlakat ichida tashish, eksport qilish uchun olib chiqishning karantin qoidalari hamda ulardan foydalanish shartlarini tasdiqlaydi;</p>
        
        <p>zarur bo‘lganda, jismoniy va yuridik shaxslarga karantindagi zararli organizmlarga qarshi kurashishda yordam berish uchun ixtisoslashtirilgan fumigatsiya otryadlarini tuzadi;</p>
        
        <p>respublika hududlarini karantin bo‘yicha hududlarga va mikrohududlarga ajratadi;</p>
        
        <p>mahalliy davlat hokimiyat organlari va Vazirlar Mahkamasiga tegishli hududda karantin o‘rnatish (uni bekor qilish) to‘g‘risida taqdimnomalar kiritadi;</p>
        
        <p>qishloq xo‘jaligi va boshqa o‘simliklar mahsulotlarini ishlab chiqarish, tayyorlash, tashish, saqlash, qayta ishlash, sotish va ulardan foydalanishda o‘simliklar karantini bo‘yicha belgilangan qoidalarga rioya etilishi va tadbirlar amalga oshirilishi yuzasidan davlat nazoratini amalga oshiradi;</p>
        
        <p>o‘simlik mahsulotlari va boshqa materiallarni sog‘lomlashtirishni tashkil etadi;</p>
        
        <p>nazorat qilinadigan zararli organizmlarni o‘z vaqtida aniqlash maqsadida qishloq xo‘jaligi va boshqa ekinlar, o‘simlik mahsulotlari saqlanadigan va qayta ishlanadigan joylarda nazorat tekshiruvlarini o‘tkazadi;</p>
        
        <p>o‘simliklarni himoya qilish sohasidagi ilmiy amaliy tadqiqotlarning buyurtmalarini muvofiqlashtiradi;</p>
        
        <p>zararli va o‘ta xavfli organizmlarning monitoringini tashkil qiladi;</p>
        
        <p>xalqaro tashkilotlar va davlat organlari bilan hamkorlikni amalga oshiradi o‘simliklar himoyasi sohasidagi xalqaro dasturlarning amalga oshirilishida ishtirok etadi;</p>
        
        <p>davlat fitosanitar nazoratini amalga oshiradi;</p>
        
        <p>o‘z vakolati doirasida standartlashtirish bo‘yicha hujjatlar loyihalarini ko‘rib chiqadi, shuningdek standartlashtirish bo‘yicha davlat standartlari, xalqaro  (davlatlararo, mintaqaviy) standartlar, xorijiy mamlakatlarning milliy standartlari texnik-iqtisodiy axborotlar milliy klassifikatorlari va tavsiyalarni o‘zgartirish, qayta ko‘rib chiqish va bekor qilish bo‘yicha takliflar kiritadi;</p>
        
        <p>Qishloq xo‘jaligi vazirligi bilan birgalikda Vazirlar Mahkamasiga qarshi kurash xarajatlari belgilangan tartibda qoplanadigan zararli organizmlar ro‘yxatini kiritadi;</p>
        
        <p>davlat va xo‘jalik boshqaruvi organlari, mahalliy ijro etuvchi hokimiyat organlari, boshqa tashkilotlar va ularning mansabdor shaxslari, shuningdek fuqarolar tomonidan o‘simliklarni himoya qilish to‘g‘risidagi O‘zbekiston Respublikasi qonunchilik hujjatlariga rioya etilishini nazorat qiladi;</p>
        
        <p>O‘zbekiston Respublikasi Ekologiya va atrof-muhitni muhofaza qilish davlat qo‘mitasi hamda Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmati bilan kelishilgan holda pestitsidlarni zararsizlantirish tartibini, shuningdek, maxsus saqlash muassasalarini tegishli holatda saqlash shartlarini belgilaydi;</p>
        
        <p>fitosanitariya tadbirlarni amalga oshirish tartibi, uslublari va tavsiyalarini tasdiqlaydi;</p>
        
        o‘simliklar himoyasi sohasidagi ilmiy-amaliy tadqiqotlar o‘tkazilishi ustidan nazoratni amalga oshiradi, shuningdek o‘simliklar himoyasi bo‘yicha o‘quv dasturlariga muvofiq mutaxassislarni tayyorlash va malakasini oshirishni ta’minlaydi;</p>
        
        <p>O‘zbekiston Respublikasi qonunchilik hujjatlarida nazarda tutilgan boshqa vakolatlarni ham amalga oshiradi.
        
        <p>2) Tuproq agrokimyoviy tahlillarini o‘tkazish va qishloq xo‘jaligiga yetkazib beriladigan barcha turdagi mineral va mikrobiologik o‘g‘itlar sifatini nazorat qilish, tuproq va qishloq xo‘jaligi mahsulotlari tarkibidagi pestitsid, nitrat va og‘ir metall tuzlari qoldiqlarini dala sharoitida radiologik-toksikologik tahlillardan o‘tkazish sohasida:</p>
        
        <p>qishloq xo‘jaligi mahsulotlarining muayyan turlarini ishlab chiqarish maqsadida qishloq xo‘jaligi yerlaridan maqbul foydalanish uchun hududlarni ixtisoslashtirish bo‘yicha tavsiya etilgan sxemalarni tasdiqlaydi;</p>
        
        <p>tuproqlarni agrokimyoviy tekshirish qoidalarini, qishloq xo‘jaligi mahsulotlarini yetishtirish bo‘yicha agrokimyoviy xizmatlarning tabiiy normalarini, qishloq xo‘jaligi yerlarining agrokimyoviy holati to‘g‘risidagi axborot ma’lumotlar bankini yuritish qoidalarini tasdiqlaydi;</p>
        
        <p>yerlarning agrokimyoviy holatini kuzatish va baholashda Respublika agrokimyoviy tahlil markazining xizmatlar ko‘rsatish va tariflari qoidalarini tasdiqlaydi;</p>
        
        <p>yerlarning agrokimyoviy holati asosida qishloq xo‘jaligi hududlarini rivojlantirish sohasida mahalliy ijro hokimiyati  faoliyatiga metodik rahbarlik qiladi;</p>
        
        <p>agrokimyoviy tahlil tizimini takomillashtirish, agrokimyoviy tahlil infratuzilmasini modernizatsiya qilish va texnik yangilash chora-tadbirlarini amalga oshiradi;</p>
        
        <p>mineral o‘g‘itlarga qo‘yiladigan ilmiy talablarni va ularni qishloq xo‘jalik ekinlariga tatbiq etishni tasdiqlaydi;</p>
        
        <p>vakolatli organlar bilan birgalikda tuproq, mineral o‘g‘itlar, radiologik va toksikologik tadqiqotlarning laboratoriya tahlillarini o‘tkazish bo‘yicha ko‘rsatmalar ishlab chiqadi va tasdiqlaydi;</p>
        
        <p>laboratoriyalarni xalqaro standartlar talablariga moslashtirish va ularni belgilangan tartibda akkreditatsiyadan o‘tkazilishini ta’minlash bo‘yicha chora-tadbirlarni amalga oshiradi;</p>
        
        <p>agrokimyoviy tahlil laboratoriyalari, biolaboratoriyalar, o‘simliklar klinikalari va tuproq klinikalarida ISO/IEC 17025 xalqaro standarti talablarini tadbiq etadi;</p>
        
        <p>tuproqdagi oziq moddalarning darajasini o‘rganish va yaxshilash sohasida fundamental va amaliy tadqiqotlar olib boradi;</p>
        
        <p>kadrlar tayyorlash, qayta tayyorlash va malakasini oshirishning samarali tizimini takomillashtirish, agrokimyoviy tahlil sohasida zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish chora-tadbirlarini amalga oshirish;</p>
        
        <p>xorijiy davlatlarning vakolatli organlari  bilan tajriba almashish va malaka oshirish sohasida hamkorlik qiladi;</p>
        
        <p>eksport bozorlari uchun organik va an’anaviy qishloq xo‘jaligida ruxsat etilgan o‘simliklarni himoya qilish vositalari va o‘g‘itlarni belgilaydi;</p>
        
        <p>o‘simliklarni himoya qilishda ishlatiladigan inson salomatligiga salbiy ta’sir etuvchi kimyoviy moddalarni ularning o‘rnini bosuvchi moddalar bilan xalqaro talablarga muvofiq bosqichma-bosqich almashtirish chora-tadbirlarini amalga oshiradi;</p>
        
        <p>O‘zbekiston Respublikasi qonunchilik hujjatlarida nazarda tutilgan boshqa vakolatlarni amalga oshiradi.</p>
        
        <p>3) O‘simliklar karantini va himoyasida prognoz tizimini takomillashtirish, zararli organizmlarga qarshi kurashning uyg‘unlashgan samarali usullarini belgilash hamda ijrosini nazorat qilish, monitoring olib borish, iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning respublika hududiga kirib kelishi va tarqalishining oldini olish hamda yo‘q qilish sohasida:</p>
        
        <p>respublika hududida sezilarli iqtisodiy zarar yetkazishi mumkin bo‘lgan zararli organizmlarning fitosanitariya xavfini tahlil qiladi va ular kirib kelishining oldini olishga qaratilgan ilmiy asoslangan fitosanitariya tadbirlarini ishlab chiqadi;</p>
        
        <p>respublika hududida o‘simliklar karantini obyektlari va boshqa xavfli o‘simlik zararkunandalarining tarqalishini aniqlaydi va bashorat qiladi, shuningdek, ularni tashxislash hamda ularga qarshi kurashning ekspress-usullarini ishlab chiqadi;</p>
        
        <p>karantindagi va boshqa xavfli zararli organizmlarga qarshi kurash usullarini tasdiqlash, ulardan xoli hududlarni aniqlash, ularning tarqalishini oldini olish hamda ularga qarshi kurashish bo‘yicha dasturlarni ishlab chiqish va tegishli organlarga taqdim etish;</p>
        
        <p>zararli organizmlarning qishloq xo‘jaligi mahsulotlariga ta’sirini ilmiy jihatdan o‘rganadi, ularga qarshi kurashishning innovatsion usullarini va entomofaglarning yangi turlarini iqlimlashtirishni ishlab chiqadi;</p>
        
        <p>respublika hududida yetishtirilgan paxta, g‘alla va boshqa qishloq xo‘jaligi ekinlaridagi zararkunanda, kasallik va begona o‘tlarni erta aniqlash, bioekologik xususiyatlarni o‘rganish va zararlanish darajasiga qarab kurash usullarini takomillashtirish ishlarini olib boradi;</p>
        
        <p>atrof-muhit va inson salomatligiga salbiy ta’sir ko‘rsatmaydigan mamlakatda “organik qishloq xo‘jaligi”ni rivojlantirish sohasida o‘simliklarni zararli organizmlardan himoya qilish vositalari va usullarini tasdiqlaydi.</p>
        
        <p>4) O‘simliklar klinikalari va biolaboratoriyalar tizimini rivojlantirish hamda ularning faoliyatini muvofiqlashtirish sohasida:</p>
        
        <p>o‘simlik klinikalari monitoringi va ularning faoliyatini muvofiqlashtirish, shu jumladan o‘simlik klinikalari tomonidan ayrim kimyoviy moddalarni iste’molchilarga sotish;</p>
        
        <p>o‘simlik klinikalari huzurida majburiy bo‘lgan kimyoviy, biokimyoviy, biologik, mexanik vositalar, qurilmalar va preparatlarning minimal assortimenti ro‘yxatini tasdiqlaydi;</p>
        
        <p>agronom-inspektorning tavsiyasi va retsepti asosida sotiladigan kimyoviy moddalar ro‘yxatini tasdiqlaydi;</p>
        
        <p>o‘simliklarni himoya qilish bo‘yicha xizmatlar ko‘rsatuvchi jismoniy shaxslar va o‘simlik klinikalari xodimlarini attestatsiyadan o‘tkazadi;</p>
        
        <p>zararli organizmlarga qarshi kurashning biologik usulini keng qo‘llash choralarini ko‘radi;</p>
        
        <p>biolaboratoriya faoliyatini monitoring qilish va muvofiqlashtirish;</p>
        
        <p>xalqaro hamkorlikni kengaytirish, biologik himoya sohasida zamonaviy innovatsion texnologiyalar va usullarni joriy etish.</p>
        
        <p>5) O‘simliklarni himoya qilishning kimyoviy va biologik vositalari hamda mineral va mikrobiologik o‘g‘itlarning biologik samaradorligi bo‘yicha sinovlarni tashkil qilish va ro‘yxatdan o‘tkazish, qishloq xo‘jaligida kimyolashtirish va biologik vositalardan foydalanish sohasida normativ, reglament va standartlar ishlab chiqish hamda kimyolashtirish va biologik vositalar realizatsiyasi bilan shug‘ullanuvchi sub’ektlar faoliyatini muvofiqlashtirish sohasida:</p>
        
        <p>o‘simliklarni himoya qilish vositalari (pestitsidlar) xavfsizligi bo‘yicha maxsus texnik reglamentlarni ishlab chiqadi va tasdiqlaydi;</p>
        
        <p>ro‘yxatga olish (kichik va ishlab chiqarish) sinovlari yoki ilmiy tadqiqotlar uchun ro‘yxatdan o‘tmagan o‘simliklarni himoya qilish vositalari (pestitsidlar) namunalarini olib kirishga xulosalar (ruxsatnomalar) beradi;</p>
        
        <p>o‘simliklarni himoya qilish vositalari (pestitsidlar) importiga, shuningdek, o‘simliklarni himoya qilish vositalari (pestitsidlar), mineral o‘g‘itlarning ulgurji va chakana savdosiga litsenziyalar beradi;</p>
        
        <p>pestitsidlarni ishlab chiqarish, sotish, pestitsidlarni ayerozol va fumigatsiya usullari bilan ishlatish bo‘yicha malaka talablarini ishlab chiqadi va tasdiqlaydi;</p>
        
        <p>O‘zbekiston Respublikasi Ekologiya va atrof-muhitni muhofaza qilish davlat qo‘mitasi va Sanitariya-epidemiologik osoyishtalik va jamoat salomatligi xizmati bilan kelishilgan holda ro‘yxatga olish (kichik va ishlab chiqarish) testlarini o‘tkazish va pestitsidlarni davlat ro‘yxatidan o‘tkazish qoidalarini ishlab chiqadi va tasdiqlaydi;</p>
        
        <p>pestitsidlarni davlat ro‘yxatidan o‘tkazish va pestitsidlar uchun ro‘yxatga olish guvohnomalarini berishni amalga oshiradi;</p>
        
        <p>pestitsidlarning ro‘yxatlarini tasdiqlaydi;</p>
        
        <p>Vazirlar Mahkamasi tomonidan tasdiqlangan O‘zbekiston Respublikasi qishloq xo‘jaligida foydalanishga ruxsat etilgan zararkunandalarga qarshi kimyoviy va biologik vositalar, o‘simlik kasalliklari va begona o‘tlar, defoliantlar hamda o‘simliklarni o‘sish regulyatorlari ro‘yxatini yuritadi va bir yilda kamida bir marta e’lon qilib boradi;</p>
        
        <p>o‘simliklarni himoya qilish mahsulotlarining faol va faol bo‘lmagan moddalaridan foydalanishda taqiqlangan hamda cheklangan reyestrini yuritadi;</p>
       
        <p>ro‘yxatga olish testlarini tashkil qiladi (kichik va ishlab chiqarish);</p>
        
        <p>respublika hududida budjet mablag‘lari hisobiga sotib olingan pestitsidlarni o‘simliklar karantini sohasidagi monitoring ma’lumotlari va hozirgi fitosanitariya holatiga qarab taqsimlaydi;</p>
        
        <p>O‘zbekiston Respublikasi qonun hujjatlarida belgilangan tartibda pestitsidlar zaxirasini shakllantirishni nazorat qiladi;</p>
        
        <p>o‘simliklarni himoya qilish mahsulotlarini ishlab chiqarish va ulardan foydalanish, ulardan foydalanish qoidalariga rioya qilish, o‘simliklarni himoya qilish mahsulotlarining inson salomatligi va atrof-muhitga ta’sirini aniqlash bilan bog‘liq davlat boshqaruvi organlari faoliyatini muvofiqlashtiradi;</p>
        
        <p>respublikada ishlab chiqarilayotgan va olib kirilayotgan o‘simliklarni himoya qilish vositalarining sifati nazoratini tashkil qiladi, ulardan foydalanish bo‘yicha xulosalar beradi va inson salomatligi va atrof-muhitga salbiy ta’sir ko‘rsatilsa, ulardan foydalanishni to‘xtatib qo‘yadi;</p>
        
        <p>o‘simliklarni biologik usulda himoya qilishda biomahsulotlarning samaradorligini ta’minlash maqsadida Respublikada faoliyat yurituvchi biolaboratoriyalarda yetishtiriladigan biomahsulotlarga muvofiqlik sertifikati berilishini ta’minlaydi va “Biosifat” Respublika markazining xizmatlar ko‘rsatish tariflari qoidalarini tasdiqlaydi.</p>
        
        <p>6) Fitosanitar xavfsizlik ta’minlash sohasida ilmiy, usulik va ta’lim imkoniyatlarini rivojlantirish, innovatsion ishlanmalar natijalari, rejalashtirish va boshqaruv usullarini amaliyotga joriy qilish, ilg‘or texnologiya va ish uslublarini ilmiy-tadqiqotlar yo‘nalishlarini belgilash, fundamental va amaliy tadqiqotlar, fitosanitariya amaliyotiga joriy etilishini muvofiqlashtirish, soha xodimlarini tizimli qayta tayyorlash va malakasini oshirish sohasida:</p>
        
        <p>iste’dodli yosh olimlar, magistrlar, doktarantlarning o‘simliklar karantini bo‘yicha ilmiy-tadqiqot ishlariga rahbarlik qiladi;</p>
        
        <p>ilmiy-tadqiqot muassasalari bilan birgalikda karantindagi  zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish bo‘yicha samarali tadbirlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;</p>
        
        <p>ilm-fan yutuqlari va ilg‘or tajribalarni joriy qiladi, shuningdek, aholini karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurash tadbirlari bilan tizimli tanishtirish ishlarini amalga oshiradi;</p>
        
        <p>o‘simlik mahsulotlari va boshqa materiallarning yashirin zararlanganini karantin ko‘rigidan, laboratoriya ekspertizasidan o‘tkazadi va aniqlaydi hamda zararsizlantirish usullarini ishlab chiqadi;</p>
        
        <p>respublika hududida mavjud bo‘lmagan va cheklangan darajada tarqalgan zararkunandalar, o‘simliklar kasalliklari hamda begona o‘tlarning turlari va bioekologiyasini o‘rganadi.</p>
        
        <p>7) O‘simliklar karantini va himoyasi hamda agrokimyo sohasida xalqaro munosabatlarni yo‘lga qo‘yish va rivojlantirish faoliyatiga zamonaviy xorijiy texnologiyalar va ish usullarini joriy etish sohasida:</p>
        
        <p>xalqaro tashkilotlarda o‘simliklar karantini va himoyasi bo‘yicha respublika manfaatlarini ifoda etadi;</p>
        
        <p>fitosanitariya xavfsizligi, o‘simliklar karantini va himoyasi sohasidagi normativ-huquqiy bazani takomillashtirish bo‘yicha xalqaro tashkilotlar, konferensiyalar va seminarlarda ishtirok etadi;</p>
        
        <p>xorijiy davlatlarning vakolatli idoralari bilan o‘simliklar karantini va fitosanitariya xavfsizligi to‘g‘risida zarur axborotlarni almashadi;</p>
        
        <p>xorijiy davlatlardan kirib kelgan yoki tranzit tarzida olib o‘tiladigan o‘simliklar karantini ostidagi mahsulotlar O‘zbekiston Respublikasining fitosanitariya karantin talablariga mos kelmasligi sababli xalqaro standartlarga muvofiq choralar ko‘radi va bu haqida tegishli xorijiy davlat karantin xizmatini xabardor qiladi;</p>
        
        <p>xorijiy davlatlarning sohadagi milliy tashkilotlarini o‘simliklar karantini ostidagi mahsulotlarga qo‘yiladigan talablar va o‘simliklar karantini bo‘yicha xorijiy davlatlar organlari tomonidan ularga nisbatan belgilangan cheklovlar to‘g‘risida xabardor qiladi;</p>
        
        <p>xorijiy davlatlarning tegishli idoralari bilan fitosanitar zonalar to‘g‘risida xalqaro shartnomalar tuzish va ularni amalga oshirishda O‘zbekiston Respublikasi qonun hujjatlarida belgilangan tartibda ishtirok etadi;</p>
        
        <p>O‘zbekiston Respublikasidan olib chiqiladigan o‘simliklar karantini ostidagi mahsulotlarning xorijiy davlatlar karantin fitosanitariya talablariga mos kelmagan holatlarda tekshiruvlar o‘tkazadi.
        
        <p>8) O‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli qayta tayyorlash va malakasini oshirishni tashkil etish, rahbarlar va mutaxassislarning ishlash shakllari va uslublarini takomillashtirish, yuklatilgan vazifalarning o‘z vaqtida va sifatli bajarilishi bo‘yicha ularning mas’uliyatini oshirish sohasida:
        
        <p>o‘simliklar karantini va himoyasi davlat xizmati kadrlarini tizimli asosda qayta tayyorlash va malakasini oshirishni tashkil qiladi, rahbarlar va mutaxassislarning ishlash shakllari hamda uslublarini takomillashtirish chora-tadbirlarini amalga oshiradi;</p>
        
        <p>xodimlarning karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish bo‘yicha kasb darajasini muntazam oshirishga qaratilgan tizimli ishlar bajarilishini ta’minlaydi;</p>
        
        <p>ilm-fan yutuqlari va ilg‘or tajribani, innovatsion uslublar, karantin zararkunandalar, o‘simliklar kasalliklari va begona o‘tlarga qarshi kurashish vositalari hamda usullarini targ‘ib qilish hamda ishlab chiqarishga joriy etish, aholi o‘rtasida karantin obyektlar to‘g‘risidagi bilimni ommalashtirish ishlarini tashkil etadi.</p>
        
    <p>Agentlik yuqorida ko‘rsatib o‘tilgan barcha funksiyalarni “E-Fitouz” avtomatlashtirilgan axborot tizimi bilan integratsiyalashgan “Assalom Agro” platformasi orqali amalga oshiradi.</p>
        
        `
  },
  glossary_terms: {
    title: "O'simliklar karantini sohasida qo'llaniladigan atamalar lug'ati",
    content: `
    <p><strong>karantin ostidagi mahsulot</strong> — o‘simliklar karantini obyektlarini tashuvchilar bo‘lishi mumkin bo‘lgan o‘simliklar, ularning qismlari, ekish materiallari, qayta ishlash mahsuloti, boshqa mahsulot va yuklar;</p>
    
    <p><strong>karantin ruxsatnomasi</strong> — karantin ostidagi mahsulotni belgilangan tartibda O‘zbekiston Respublikasi hududiga olib kirishga yoki uning hududidan tranzit tarzida olib o‘tishga ruxsat berilganligini tasdiqlaydigan, O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi tomonidan berilgan hujjat;</p>
    
    <p><strong>karantin cheklovlari</strong> — karantin ostidagi mahsulotni O‘zbekiston Respublikasiga olib kirishni, O‘zbekiston Respublikasidan olib chiqishni, tashishni va ulardan foydalanishni o‘simliklar karantini obyektlari tarqalishining oldini olish maqsadida muayyan muddatga cheklovchi fitosanitariya tadbirlari;</p>
    
    <p><strong>o‘simliklar karantini</strong> — qishloq xo‘jaligiga va boshqa o‘simliklar dunyosiga zarar etkazishi mumkin bo‘lgan o‘simliklar karantini obyektlari kirib kelishining, tarqalishining oldini olishga hamda bunday obyektlarni bartaraf etishga qaratilgan tadbirlar majmui;</p>
    
    <p><strong>o‘simliklar karantini obyekti</strong> — dunyoda karantin ahamiyatiga ega bo‘lgan, O‘zbekiston Respublikasi hududida mavjud bo‘lmagan yoki cheklangan tarzda tarqalgan zararli organizmlar;</p>
    
    <p><strong>o‘simliklar karantini obyektlarini tashuvchilar</strong> — o‘simliklar karantini obyektlarining tarqalishiga imkoniyat tug‘dirishi mumkin bo‘lgan transport vositalari, qishloq xo‘jaligi mashinalari, yerga ishlov berish qurollari, idishlarning barcha turlari, ayrim sanoat tovarlari, qadoqlash vositalari, shuningdek o‘simlik mahsulotlaridan tayyorlangan buyumlar, yaxlit toshlar, tuproq namunalari va (yoki) boshqa obyektlar;</p>
    
    <p><strong>fitosanitariya sertifikati</strong> — karantin ostidagi mahsulotda o‘simliklar karantini obyektlari mavjud emasligini tasdiqlovchi xalqaro namunadagi hujjat;</p>
    
    <p><strong>fumigatsiya</strong> — o‘simliklar karantini obyektlarini va boshqa zararli organizmlarni yo‘q qilish maqsadida ularni kimyoviy vositalarning gazlari bilan zararsizlantirish.</p>
    
    <p><strong>degazatsiya</strong> — o'simliklar karantini obyektlarini kimyoviy vositalar gazlari bilan zararsizlantirish (fumigatsiya) muddati tugagandan keyin ushbu germetik yopilgan ob'ektda zaharli gaz holidagi moddalarni yo'qotishga qaratilgan chora-tadbirlar;</p>
    
    <p><strong>fitosanitar talablar</strong> — o'simliklar karantini nazoratidagi mahsulotlarni o'simliklar karantinidagi va boshqa zararli organizmlar bilan zararlanmagan bo'lishi va ushbu zararli organizmlarni tarqalishiga yo'l qo'ymaslikka qaratilgan chora-tadbirlar;</p>
    
    <p><strong>transport birligini ochish dalolatnomasi</strong> — o'simliklar karantini nazoratidagi import mahsulotlarining karantin ruxsatnomasida belgilangan joyga etib kelganligini tekshirib, transport birligini ochish va o'simliklar karantini tekshiruvidan o'tkazish uchun beriladigan hujjat;</p>
    
    <p><strong>o'simliklar karantini ko'rigi dalolatnomasi</strong> — transport birligini ochish dalolatnomasi berilgan o'simliklar karantini nazoratidagi mahsulotlarda o'simliklar karantindagi va boshqa zararli organizmlar mavjud emasligini tasdiqlovchi hujjat;</p>
    
    <p><strong>o'simliklar karantini nazoratidagi mahsulotlar</strong> — o'simliklar, ularning qismlari, ekish materiallari, qayta ishlash mahsulotlari, o'simliklar karantinidagi zararli organizmlarni olib o'tuvchi bo'lib xizmat qilishi mumkin bo'lgan mahsulotlar va yuklar;</p>
    
    <p><strong>o'simliklar karantini tekshiruvi</strong> – o'simliklar karantini obyektlaridagi zararli organizmlarni o'z vaqtida aniqlash maqsadida o'simliklar karantini davlat inspektori tomonidan o'simliklar karantini nazoratidagi mahsulotlarni saqlash, qayta ishlash, sotish va qabul qilish joylarini hamda ularga tutash hududlarni, qishloq xo'jaligi uchun mo'ljallangan, o'rmon fondi va muhofaza etiladigan tabiiy hududlar yerlarini tekshirish.</p>
    
    `
  },
  draft_normative_documents: {
    title: "Me'yoriy hujjatlar loyihalari",
    content: `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel atque magnam quo!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel atque magnam quo!</p>
    `
  },
  scientific_research: {
    title: "O'simliklar karantini va himoyasi agentligida karantin xizmatini tashkil qilishni takomillashtirish",
    content: `
    <p>Barcha qishloq hoʻjaligi ekinlarida uchragani kabi bogʻ, sabzavot va poliz ekinlarida xasharotlar, kasalliklar va begona oʻtlar uning oʻsib rivojlanishiga salbiy tasir koʻrsatadi. Zararli organizmlarga qarshi oʻz vaqtida kurash choralari olib borilmasa hosildorlikning katta qismi nobud boʻladi. Zararkunanda hasharotlar ichida “Sharq meva qurti”, “Kaliforniya qalqandori”, “Komstok qurti”, “Kolorado qoʻngʻizi”, “Sitrus inli kuyasi” va “Sitrus oqqanoti”, kabi zararkunandalar Respublikamizning ayrim xududlarida uchraydi va karantin organizm hisoblanadi.</p>

<p>Mazkur karantin zarakunandalar tut, olma, oʻrik, pomidor, kartoshka va boshqa qishloq xoʻjaligi ekinlari organizmlarini zararlab hosilning 60-80 foiz va undan katta qismini nobud boʻlishiga sabab boʻladi.Barcha qishloq hoʻjaligi ekinlarida uchragani kabi bogʻ, sabzavot va poliz ekinlarida xasharotlar, kasalliklar va begona oʻtlar uning oʻsib rivojlanishiga salbiy tasir koʻrsatadi. Zararli organizmlarga qarshi oʻz vaqtida kurash choralari olib borilmasa hosildorlikning katta qismi nobud boʻladi.</p>

<p>Zararkunanda hasharotlar ichida <strong>“Sharq meva qurti”, “Kaliforniya qalqandori”, “Komstok qurti”, “Kolorado qoʻngʻizi”, “Sitrus inli kuyasi”</strong> va <strong>“Sitrus oqqanoti”,</strong> kabi zararkunandalar Respublikamizning ayrim xududlarida uchraydi va karantin organizm hisoblanadi. Mazkur karantin zarakunandalar tut, olma, oʻrik, pomidor, kartoshka va boshqa qishloq xoʻjaligi ekinlari organizmlarini zararlab hosilning 60-80 foiz va undan katta qismini nobud boʻlishiga sabab boʻladi.</p>

<p>Manbalardan maʼlumki, Respublikamizda hozirgi kunda jami 10 tur karantin organizmlari uchraydi va ular qishloq hoʻjaligi ekinlariga katta iqdisodiy zarar yetkazadi. Shulardan 6 tur karantindagi zararkunanda xasharotlar “Kaliforniya qalqandori”, “Sharq meva qurti”, “Kolorado qoʻngʻizi”, “Sitrus inli kuyasi”, “Sitrus oqqanoti”, “Komstok qurti” qishloq xoʻjaligi ekinlariga kuchli zarar yetkazadi.Respublikamiz hududi boʻylab karantin organizmlari quyidagicha tarqalgan:</p>

<p>• “Sharq meva qurti” 5 ta viloyatning 59 ta tumanida, 1819,18 ga maydonda;</p>

<p>• “Kaliforniya qalqandori” 8 ta viloyatning 59 ta tumanida, 587,13 ga maydonda;</p>

<p>• “Kolorado qoʻngʻizi” 11 ta viloyatning 93 ta tumanida, 4065,24 ga maydonda;</p>

<p>• “Sitrus oqqanoti” 7 ta viloyatning 51 ta tumanida, 581,54 ga maydonda;</p>

<p>• “Sitrus inli kuyasi”, 8 ta viloyatning 44 ta tumanida, 46,08 ga maydonida;</p>

<p>• “Komstok qurti”, 14 ta viloyatning 136 ta tumanida, 5909,43 ga maydonda;</p>

<p>• “Sharq meva qurti” Andijon, Fargʻona, Namangan, Samarqand viloyatlari va Toshkent shaxrining jami 59 tumanida;</p>

<p>• “Kaliforniya qalqondori” Andijon Fargʻona, Namangan, Samarqand, Sirdaryo, Surxondaryo, Toshkent viloyatlari va Toshkent shahrining 59 ta tumanida.Ushbu zararkunandalar tarqalgan hududlardan mevali va manzarali koʻchatlarni Respublikamizning toza hududlariga olib borish uchun Oʻsimliklar karantini qonun-qoidalariga toʻliq amal qilishi zarur. Ushbu hududlardan Oʻsimliklar karantini davlat inspeksiyasi tomonidan beriladigan fitosanitar sertifikatsiz koʻchatlarni olib chiqib ketmaslik talab qilinadi. Shu bilan bir qatorda ushbu zararkunandalar bilan zararlangan maydonlardan koʻchatlarni olib chiqib ketish umuman taqiqlanadi.</p>

<p>Mazkur zararkunandalar tarqalgan xudud iqlim sharoitidan kelib chiqib quyidagilarni xulosa qilishimiz mumkin: karantin zararkunandalarinig bioekologik xususiyatlarini oʻrganish va ularga qarshi ekologik bezarar qarshi kurash choralarini ishlab chiqish talab etiladi. Ularni Respublikamizni fitosanitar toza xududlariga tarqalmasligi uchun Oʻsimliklar karantini chora-tadbirlariga toʻliq rioya etish, ular tarqalgan xududlarda karantin nazorati va kurash choralarini izchillik bilan amalga oshirish zarur.</p>

    `
  },
  pest_control: {
    title: "Zararkunandalarga qarshi kurashda feromon tutqichlardan foydalanishning ahamiyati",
    content: `<p>O‘zbekiston Respublikasi Prezidentining “O‘simliklar karantini bo‘yicha davlat xizmati faoliyatining samaradorligini oshirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida” 2018 yil 28 mardagi PQ-3626-son Qarori bilan “O‘zdavkarantin” inspeksiyasiga eksportbop sifatli qishloq xo‘jalik mahsulotlarini yetishtirishda zararkunanda-hasharotlarni paydo bo‘lishini vaqtida aniqlab, samarali kurash tadbirlarini amalga oshirish vazifasi ham yuklatilgan. Mazkur vazifani amalga oshirishda zararkunandalarni feramonlar yordamida monitoring qilib, ko‘payishi va tarqalishi aniqlanadi va ushbu ma’lumotlar asosida, kurash tadbirlarini o‘z vaqtida o‘tkazish katta ahamiyat kasb etadi.</p>

    <p>Shu maqsadda, “O‘zdavkarantin” inspeksiyasi tomonidan karantindagi va boshqa xavfli zararkunandalarga qarshi 13 turdagi feromonlar belgilangan tartibda Respublikaning barcha qishloq xo‘jalik ekinlari yetishtiriladigan hududlariga yetkazib berildi. Hududlarda o‘simliklar karantini davlat inspektorlari tomonidan feramon tutqichlar tegishli mevali bog‘lar va issiqxonalarga o‘rnatilib, nazorat olib borilmoqda.</p>
    
    <p>Feromon tutqichlar yordamida tutilgan o‘simliklar karantinidagi va boshqa zararkunanda hasharotlarning bahorda rivojlanish muddati va zichligi darajasi aniqlanadi. Zararkunandalarga qarshi kurash muddatlari to‘g‘ri belgilanadi. Feromon tutqich ma’lumotlaridan mavsumda hasharotlarning nechta avlod berib rivojlanishi, rivojlanish bosqichlarining muddatlari va rivojlanishining fenologik jadvalini tuzishda ham foydalaniladi. Fenologik jadval har bir hudud uchun iqlim sharoitidan va zararkunandalarning rivojlanishidan kelib chiqib alohida tuziladi, hamda qarshi kurash muddatlari belgilanadi.</p>
    
    <p>Feromon tutqichga tushgan zararkunanda hasharotlarning zichligiga qarab qaysi himoya usulini va qaysi muddatda qo‘llash kerakligi aniqlanadi. Biologik, kimyoviy va boshqa kurash usullarining eng samarali muddatlari aniqlanadi. Bu esa, o‘z vaqtida zararkunandalarga qarshi kurash olib borish hisobiga zararni oldini olish va ortiqcha ishlovlarga chek qo‘yish imkonini beradi. Feromon tutqichlar monitoringini amalga oshirish natijasida ortiqcha kimyoviy kurash tadbirlari o‘tkazish uchun sarflanadigan xarajatlar tejalishiga erishiladi.</p>
    
    <p><strong><i>Feromon tutqichlarni dalaga o‘rnatish.</i></strong> Feromon tutqichlar qo‘llanish maqsadi va ekin turiga qarab turli miqdorda o‘rnatiladi. Feromon tutqich aynan zararkunandaning uchish balandligida joylashtiriladi. Ikkinchi tomondan, tutqichlarning yuqorida joylanishi uning ichida havoning oson aylanishi oqibatida feramon hidining yaxshi tarqalishiga imkoniyat yaratiladi. Feromon tutqichlarni har bir viloyat yoki tuman sharoitiga bog‘liq holda, zarakunandalarning birinchi avlodi rivojlana boshlashi oldidan o‘rnatish talab etiladi.</p>
    
    <p>Feromon tutqichlardan zararkunandaning qishlovdan chiqish muddatini aniqlashdan tashqari ekinlarni zararkunandalardan himoya qilish maqsadida ham foydalanish mumkin. Bunda ulardan zararkunandalarni ko‘plab miqdorda tutish yoki ularni chalg‘itish yo‘li bilan yo‘qotishga hamda o‘simliklarga yetkazadigan zararini kamaytirishga erishiladi. Feromon tutqichlarda insektitsid aralashmalari yoki sterilizatorlarni (bepusht qiluvchi) ham birga qo‘llash mumkin. Feromon tutqichlarda erkak zararkunanda hasharotlarni ko‘plab yo‘q qilish orqali ularni urg‘ochilari bilan juftlashuviga yo‘l qo‘yilmaydi, urg‘ochilarini qo‘ygan tuxumi puch bo‘lib qoladi. Natijada o‘simliklarga yetkaziladigan zararning oldi olinadi.</p>
    
    <p>Farg‘ona vodiysi viloyatlarining ba’zi gilos yetishtirilayotgan hududlarida feromon tutqichlarni qo‘llash natijasida gilos pashshasini qishlovdan aprel oyida chiqishi va tarqalayotganligi aniqlandi. Bu zararkunanda gilos va olchaning xavfli zararkunandasi bo‘lib, yetishtirilgan mahsulotni sifatini pasaytirib, eksportbopligi va xaridorgirligiga jiddiy zarar yetkazadi. Gilos pashshasi mavsumda bir avlod berib rivojlanadi, ular bahorda harorat 18 gradusdan yuqori bo‘lganda, gilos va olcha mevalariga 150 tagacha tuxum qo‘yadi. Tuxumidan chiqqan lichinkalari, 15-20 kun davomida gilos mevalari bilan oziqlanib hosilning sifatiga, hosildorligiga katta zarar yetkazadi.</p>
    
    <p>Aniqlangan gilos pashshalariga qarshi biologik kurash tadbirlari, ya’ni oltinko‘z entomofagi qo‘llanildi. Feromon tutqichga ko‘plab tushgan dalalarda zararkunandaga qarshi abomektin, imidokloprid va lyamidotsigolatrin ta’sirchan moddali insektitsidlar bilan ishlovlar o‘tkazilib, zararkunandaga qarshi samarali kurash olib borildi.</p>
    `
  },
  marble_shackle: {
    title: "Marmar qandalasining zarari nimada",
    content: `<p>Marmar qandalasi (HALYOMORPHA HALYS) qalqonli qandalalar Pentatomidae oilasi, yarim qattiq qanotlilar turkumiga mansub. Yevropa davlatlari va AQSh qishloq xo‘jaligida jiddiy zararkunanda hisoblanadi.</p>

    <p><strong>Tarqalishi:</strong> Zararkunandaning vatani Janubi-sharqiy Osiyo davlatlari Xitoy, Yaponiya, Koreya yarim oroli davlatlari, Tayvan va Vetnam hisoblanadi. Ushbu tur 1996-yilda butun AQSh hududida tarqala boshladi va 2014-yilda AQShning 34 ta shtatida va Kanadaning janubiy provinsiyasida uchrashi qayd etildi. 2007-yilda Shveysariyada, 2010-yilda esa Yangi Zelandiyada uchrashi haqida e’lon qilindi. 2010-yilda Angliyada AQShdan uchib kelgan samolyotning yo‘lovchi bagajidan zararkunandaning ikkita imagosi topilgan. 2014-yilda Rossiya Federatsiyasining Sochi shahri hududida ham zararkunandaning nimfalari topildi. 2015-yilning ikkinchi yarmidan boshlab Rossiyaning subtropik nam mintaqasi Abxaziya hududida qandalaning ommaviy ko‘payishi qayd etildi, bu esa 2016-yilda subtropik, sabzavot va poliz ekinlari hosilining jiddiy yo‘qotishiga olib keldi.</p>
    
    <p><strong>Zarari:</strong> Marmar qandalasi hammaxo‘r bo‘lib 49 ta botanik oilaga mansub 300 dan ortiq qishloq xo‘jaligi mahsulotlariga zarar yetkazadi. Yosh lichinkalar va voyaga yetgan qandala doim bir xil o‘simlik turlari bilan oziqlanadi, ko‘pchiligi yosh bog‘lardagi mevalar va o‘simliklarni afzal ko‘radi.</p>
    
    <p><strong>Morfologiyasi:</strong> Tanasinoksimon biroz yassilashgan, 10-17 mm uzunlikda bo‘ladi. Rangi jigarrang, lekin tanasining yuqori qismi va boshi qoramtir va oqish tusda bo‘ladi, bu esa o‘z navbatida, marmar rangini hosil qiladi. Tanasining pastki qismi oqish yoki oqish-jigarrang rangda, ba’zan esa kulrang va qora dog‘lari mavjud. Brochymena va Euschistus turiga nisbatan xarakterli jixati shundaki, mo‘ylovlarida oqish rangdagi uzukka o‘xshash chiziqlari mavjud. Oyoqlari jigarrang hamda oq chiziqlari ham mavjud.</p>
    
    <p><strong>Bioekologiyasi:</strong> Voyaga yetgan qandala odamlarning xonadonlari va har xil binolarda qishlab qoladi. Bu zararkunanda devor yoriqlari va ularning tutashgan joylaridan uylar ichiga kirib oladi, o‘ziga qulay va issiqroq joylarda qishlab chiqadi. Shunday qilib, bir uyda bir necha minglab hasharotlar to‘planishi ham mumkin. Erta bahorda issiqlik manbaalari o‘chirilganda qandalalar o‘ylarning shiftiga yoki yorug‘lik lampalarning atrofida to‘planib bir qator noqulayliklar keltirib chiqaradi.</p>
    
    <p>Bahorda urg‘ochi qandala 1,3 mmdan 1,6 mmgacha uzunlikda bo‘lgan oq rangli tuxumlarni qo‘ya boshlaydi. Odatda urg‘ochi qandala barglarning orqa tomoniga 20-30 tadan to‘p-to‘p qilib tuxum qo‘yadi. Tuxumdan chiqqan nimfalar bir necha kun tuxum qo‘yilgan joylarda qoladi. Bu tur lichinkalari besh yoshli fazadan iborat bo‘lib, har bir yosh lichinkalari bir-biriga o‘xshash, lekin bir jixati bilan farqlanadi. Birinchi yoshdagi nimfalar to‘q sariq yoki qizil rangda bo‘ladi. Ikkinchi yoshdagi bosqichda lichinkalarning rangi to‘qlashadi, deyarli qora rangda bo‘ladi. Oxirgi yoshdagi lichinkalar oqish-jigarrang tusga kiradi. To‘liq rivojlanish davri 35-45 kun davom etadi. Namli subtropik Rossiya va Abxaziyada bir yilda uch marta avlod berib rivojlanadi. Birinchi avlodi may oyining birinchi dekadasidan (tuxum quyishdan) to iyun oyining ikkinchi va uchinchi dekadasigacha davom etadi. Ikkinchi avlodi iyun oyining ikkinchi va uchinchi dekadasidan to avgust oyining birinchi dekadasigacha davom etadi. Uchinchi avlodi avgust oyining birinchi dekadasidan to oktyabr oyining birinchi dekadasigacha davom etadi. Shundan so‘ng imago ya’ni voyaga yetgan qandala qishgi diapauzaga ketadi.</p>
        
    `
  },
  cherry_flies: {
    title: "O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti ogohlantiradi: gilos pashshasi – jiddiy zararkunanda",
    content: `<p>Gilos pashshasi (Rhagoletis ceras) zararkunandani qanday aniqlash mumkin?</p>

    <p>Bir ko‘rishda gilos pashshasini aniqlash qiyin. Ko‘pchilik bog‘bonlar uning mavjudligini faqat mevalarning zararlanishi ortganda va hosil deyarli nobud bo‘lganda biladi. Agar o‘tgan mavsumda zararkunanda tarqaganini aniqlagan bo‘lsangiz, demak tayyor turing, ayni mavsumda ham harorat qulay bo‘lganda zararkunandaning zarari seziladi.</p>
    
    <p>Gilos pashshasi juda mayda 5,5 mmli pashsha bo‘lib, uning tanasi yorqin qora rangda, boshi va oyoqlari sariq, qanoti oq-qora bo‘lib, ko‘zlari mikroskopda och yashil tusda ko‘rinadi. Asosan lichinkalar mevalarni zararlaydi. Voyaga yetgan lichinkaning uzurligi 7 mm bo‘lib oq rangda bo‘ladi.</p>
    
    <p>Gilos pashshasi bir yilda bir marta avlod beradi. Har bir pashsha 150 taga yaqin gilos yoki olchaga bittadan tuxum qo‘yib zararlaydi. Erta bahorda havo harorati +12⁰ +15⁰S bo‘lganda ya’ni mart oyining ikkinchi yarmida qishlab qolgan g‘umbaklardan pashshalar ucha boshlaydi va 12-14 kun o‘simlik shiralari ajratgan ekskrimentlar bilan oziqlanib havo harorati o‘rtacha +18⁰ +22⁰S bo‘lganda gilos va olchaning yosh mevalariga tuxum qo‘ya boshlaydi. Tuxum qo‘yib bo‘lgan pashshalar bir necha kundan so‘ng nobud bo‘ladi. 7-10 kundan so‘ng tuxumdan oq rangdagi lichinkalar chiqa boshlaydi. 0,5 mm uzunlikdagi lichinkalar 16-20 kun oziqlanib 7 mm uzunlikdagi voyaga yetgan lichinkaga aylanadi. So‘ng zararlangan mevani tark etib, yon atrofdagi begona o‘tlar, daraxtlarning yoriqlariga kirib g‘umbakka aylanadi va diapauzaga ketadi.</p>
    
    <p>Qarshi kurashish chorasi sifatida qishlovdan chiqqan pashshalarga qarshi oltinko‘z entomofagining lichinkasi va ta’sir etuvchi moddasi abamektin, imidokloprid va lyambda-sigalotrin bo‘lgan insektotsidlar qo‘llaniladi.</p>
    
    `
  },
  laboratory: {
    title: "Nizom",
    content: `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit tempore cumque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit tempore cumque?</p>
    `
  },
  cotton_bollworm_destroyed: {
    title: "G‘o‘za kuyasi aniqlangan chigit yo‘q qilindi",
    content: `
    <p>2018 yilda Gretsiya va Turkiya mamlakatlaridan keltirilgan urug‘lik chigitda g‘o‘za kuyasi aniqlangandi. Gretsiyadan keltirilgan 400 kg. urug‘lik chigitning barchasi belgilangan tartibda yoqib yo‘q qilindi. Turkiyadan ketirilgan 90 t. urug‘lik chigitni esa belgilangan tartibda ortiga qaytarilib yuborildi.</p>
    
    <p>Shu o‘rinda g‘o‘za kuyasi haqida ma’lumot: G‘o‘za kuyasi yoki pushti ko‘sak qurti jahonning g‘o‘za ekadigan bir qator mamlakatlarida uchraydigan eng xavfli zararkunandalardan biri hisoblanadi. U o‘ziga xos ravishda ko‘payishi, ya’ni bu pushti qurt chigit ichida yashirin yashashi tufayli, chigit bilan dunyoning ko‘pgina mamlakatlariga tarqalib ketgan. Pushti ko‘sak qurti, har qanday ekologik sharoitlarga ko‘nika oladi, shu boisdan u 40° shimoliy va 35° janubiy kenglik doirasidagi tropik, subtropik va qisman mo‘’tadil iqlimli mamlakatlarning tuproq iqlim sharoitlariga tez moslashadi.</p>
    
    <p>G‘o‘za kuyasi diapauzaga kirgan qurt shaklida asosan chigit ichida qishlaydi. Mart-aprel oylarida g‘umbakka aylanadi, ko‘saklar paydo bo‘la boshlaganda kapalaklar uchib chiqadi. Ular kun botganda va tunda oziqlanadi va tuxum qo‘yadi. Tuxumlarini ko‘saklar va yosh barglarga bittadan yoki besh-o‘ntadan  qilib tuxum qo‘yadi. Bir dona kapalak olti-sakkiz kun mobaynida 250-500 tagacha tuxum qo‘yadi.</p>
    
    <p>Tuxumlarning rivojlanishi 3-14 kun davom etadi. Tuxumdan chiqqan qurt juda serharakat bo‘lib, shona, gul va ko‘saklarni tez yeydi. Pushti qurt tushgan shonalar so‘lib to‘kiladi. Yosh ko‘saklarni qurt teshib kirib zararlaydi va bunday ko‘saklar to‘kilib ketadi.  Etilgan ko‘saklar zararlansa, rivojlanishi va o‘sishi susayadi, chigitning bir qismi yetiladi, ammo normal tola hosil bo‘lmaydi. Zararlanish darajasi kuyaning ko‘p yoki kamligiga bog‘liq. Bitta ko‘sakda ikki-to‘rtta va undan ko‘proq qurt bo‘lishi mumkin. G‘o‘za kuyasi juda ko‘paygan yillari hosilning 80% va undan ko‘prog‘i yo‘qotiladi. Meksika davlatida g‘o‘za kuyasi tufayli hosilning 20-25% i boy beriladi. G‘o‘za kuyasi g‘o‘zadan tashqari gulxayridoshlar oilasiga mansub o‘simlik turlarida ham rivojlanishi mumkin.</p>
    
    <p>Hozirgi vaqtda g‘o‘za kuyasi deyarli bizga qo‘shni mamlakatlarda, Turkiya, Eron, Iroq, Afg‘oniston va Hindiston, janubiy-sharqda Yaponiya, Koreya va boshqa mamlakatlarda, Evropada – Gretsiya, Albaniya, Italiyada uchraydi. Amerika qit’asida – Meksika, Braziliya, Argentina, AQSh va boshqa mamlakatlarda ham g‘o‘zaga katta zarar yetkazadi, natijada hosildorlik kamayib ketadi.</p>
    
    <p>Zararkunanda mazkur mamlakatlardan (karantin tadbirlari qo‘llanilmaganda) savdo aloqalari orqali, asosan urug‘lik chigit, paxtaning o‘zi va paxta tolasi orqali tarqaladi. Zararkunanda kapalaklarining havo oqimlari orqali uchib o‘tish xavfi borligini ham aytish kerak. Bunday hol Janubiy Amerika mamlakatlarining ba’zilarida ro‘y bergan. Bunday xavf O‘zbekistonning janubiy qismidagi Afg‘oniston chegaralaridan (garchi bu mamlakatda pushti qurt hozircha uning Sharqiy viloyatlarida qayd etilgan bo‘lsada) Surxondaryoning qo‘shni g‘o‘za ekilgan dalalariga uchib o‘tishi mumkin.</p>
    
    <p>Respublikamizning fitosanitar xavfsizligini ta’minlashda “O‘simliklar karantini to‘g‘risida”gi Qonun asos sifatida xizmat qiladi, ammo katta mamlakatning kirib kelish  va chiqib ketish darvozalari  ko‘p bo‘lganligidan va fuqarolar qo‘l yuklari, cho‘ntaklarida ular olib kirayotgan urug‘larni tekshirish va topib olish imkoni bo‘lmaydi. Mana shuning uchun mamlakatga chet mamlakatlardan urug‘ ko‘chat va boshqa o‘simlik mahsulotlarini O‘simliklar karantini davlat inspeksiyasi bilan kelishilgan holda respublikamizga kiritilsa maqsadga muvofiq bo‘ladi. Shu tadbirlarni bajarmasdan  keltirilgan urug‘ va ko‘chatlar, o‘zi bilan bizda karantin hisoblangan turli xil hashoratlarni olib keladi va bu hashoratlar bizga katta iqtisodiy zarar etkazadi.</p>
    
    <p>Xulosa o‘rnida shuni ta’kidlash lozimki, chetdan har qanday ekish materialini olib kelishdan oldin O‘simliklar karantini davlat inspeksiyasi mutaxassislariga murojaat qilish zarur. Ana shunda hech kim zarar ko‘rmaydi va mamlakatimizning fitosanitar tozaligi to‘liq ta’minlangan bo‘ladi.</p>
    `
  },
  pests_detected: {
    title: "139 tonna kartoshkadan zararkunanda aniqlandi",
    content: `
    <p>2019-yilning 4-yanvar kuni Qozog‘iston davlatidan keltirilgan 139 t. kartoshka kuya bilan zararlanganligi aniqlandi va fumigatsiya qilindi.</p>
    
    <p>Joriy yilning 4-yanvar kuni “Chuqursoy” O‘KChMga Qozog‘iston Respublikasidan keltirilgan 139 t. kartoshkadan namunalar tekshiruv uchun Markaziy karantin laboratoriyasiga yuborildi. Tekshiruvlardan so‘ng namunalarda kartoshka kuyasi va fuzarioz kasallik qo‘zg‘atuvchi zambrug‘lari aniqlandi. Markaziy karantin laboratoriyasi tomonidan 5 kun muddat ichida “O‘simliklar karantini to‘g‘risida”gi qonunda belgilangan tegishli karantin choralari amalga oshirilishi lozimligi to‘g‘risida xulosa berildi. Xulosaga ko‘ra keltirilgan kartoshka fumigatsiya qilindi.</p>
    
    <p>Shu o‘rinda kartoshka kuyasi haqida ma’lumot. Kartoshka ekiladigan 80 dan ortiq mamlakatda kolorado qo‘ng‘izi, kartoshka kuyasi va boshqa zararkunandalar uchraydi. Respublikamizda kartoshka kuyasi ilk bor Xorazm viloyatining Turkmaniston bilan chegaradosh Shovot, Gurlan, Qo‘shko‘pir tumanlarida aniqlangan. Hozirda bu xavfli karantin hasharot respublikamizning barcha kartoshka ekilayotgan maydonlarida tarqalmoqda.</p>
    
    <p>Kartoshka kuyasi — kartoshka, tamaki, baqlajon, pomidor va boshqa ituzumdoshlar oilasiga kiruvchi o‘simliklarga katta zarar yetkazuvchi xavfli hasharot hisoblanadi. Bu hasharot bir yilda 5-6 avlod beradi. Yoz mavsumida bir avlodning rivojlanishi 22-30 kun, qish mavsumida esa 2-4 oygacha davom etadi. Havo haroratining -40 va +36 daraja bo‘lishi kartoshka kuyasiga halokatli ta’sir qiladi. Kartoshka kuyasi yetuk lichinkalik yoki g‘umbaklik davrida qishlaydi. Kapalaklari bir yoki bir dona urug‘ini barglar, tamaki, kartoshka, pomidor, kartoshka mevasi, tuproqqa qo‘yadi.</p>
    
    <p>Kartoshka kuyasi mahsulot bir mamlakatdan ikkinchi mamlakatga olib kirilganda o‘tadi. Yoz mavsumida kartoshka kuyasi omborxonalarga to‘xtovsiz tuxum qo‘yadi. Kuya tarqalgan janubiy hududlarda va issiq omborlarda kartoshka kuyasi qishki uyquga kirmaydi. U ko‘chatlarga ham, o‘zini tutib olgan o‘simliklarga ham zarar yetkazadi. Ko‘chatlarning ayrim barglarini va ba’zan butun tupini quritib qo‘yadi.Tamaki o‘simligiga kuya tushsa, sanoat uchun yaroqli hosil bermaydi. Pomidor mevasini yaroqsiz qilib qo‘yadi.</p>
    
    <p>Bu ofatdan qutilish uchun urug‘ saqlanadigan omborlarni fumigatsiya qilish, urug‘lik kartoshkani tavsiya etiladigan preparat bilan ishchi eritma tayyorlab, ishlov berib, 2 soat dimlab, so‘ng omborga olib kirish lozim.</p>
    
    <p>Kartoshka ekilgan maydonlarda kartoshka kuyasi kapalagi ucha boshlaganda yoki lichinkasi aniqlanishi bilan kimyoviy ishlov berish kerak. 10-15 kundan so‘ng ikkinchi ishlovni o‘tkazish darkor.</p>
    
    <p>Oldini olishning yagona chorasi zararkunanda tarqalgan davlatlardan kelayotgan yuk mashinalari va yuklarni karantin tekshiruvidan o‘tkazish; sanoat yuklari va transport vositalarini zararsizlantirish; o‘simlik mahsulotlari ortilgan hududlarni 3 kvm.ga feromon tutqichlar yordamida tekshirib chiqish; ituzumdoshlar oilasiga kiruvchi o‘simliklarni doimiy nazorat qilish; kartoshka poyasi qurib qolishiga 5-7 kun qolganda o‘rib olish va yo‘qotish; daladan kartoshkani tez yig‘ishtirib olish va olib chiqib ketish; kartoshka hosilini brommetil bilan zararsizlantirishdir.</p>
    
    <p>Maxsulotlarni respublikamizga kiritish “O‘zdavkarantin” inspeksiyasi tomonidan berilgan karantin ruxsatnoma talabi asosida amalga oshiriladi. Maqsad ichki karantin ob’ekti hisoblangan qishloq xo‘jalik ekinlarini hasharot va zararkunandalardan himoya qilish va fitosanitar toza eksportbop mahsulotlar yetishtirishdir.</p>
    `
  },
  california_shields: {
    title: "Kaliforniya qalqondori aniqlangan mevalar yo‘q qilindi",
    content: `
    <p>Oqqo‘rg‘on tumani dehqon bozoriga keltirilgan olma mevasida kaliforniya qalqondori zararkunandasi aniqlanganligni sababli yo‘q qilindi.</p>
    
    <p>Toshkent viloyati o‘simliklar karantini davlat inspeksiyasi agronom inspektori tomonidan “O‘simliklar karantini to‘g‘risida”gi qonunning 19-moddasiga asosan joriy yilning 24-dekabr kuni Toshkent viloyati Oqqo‘rg‘on dehqon bozorida karantin nazorati choralari amalga oshirildi. Unga ko‘ra bozor hududiga tadbirkor Boltaboeva S. Tomonidan qo‘l yukida olib kirilgan olmadan namunalar olindi va markaziy karantin laboratoriyasiga tekshiruv uchun jo‘natildi. Tekshiruv natijalariga ko‘ra keltirilgan namunalardan kaliforniya qalqondori zararkunandasi aniqlandi va joyida yo‘q qilinishi to‘g‘risida xulosa berildi. Markaziy karantin laboratoriyasining xulosasiga ko‘ra mevalar 27 dekabr kuni yo‘q qilindi.</p>
    
    <p>Shu o‘rinda kaliforniya qalqondori haqida ma’lumot. Kaliforniya qalqondori mevali daraxtlarga asosan olma, nok, olxo‘ri, olcha, shaftoli, gilos, o‘rik, hamda qora smorodina, o‘rmon va manzarali o‘rmon daraxtlaridan do‘lana, atirgul, tol, gullar, qizil mevali buta o‘simliklariga jiddiy zarar keltiradi.</p>
    
    <p>Kaliforniya qalqondorining vatani shimoliy sharqiy Osiyo hisoblanadi, bu Rossiya federatsiyasining Xabarovsk, Primorya o‘lkasi, Xitoy, Koreya davlatlari hisoblanadi.</p>
    
    <p>Bugungi kunda mazkur zararkunanda yurtimizning barcha hududlariga tarqalib ulgurgan.</p>
    
    <p><strong>Zarari.</strong> Mevali daraxtlarga, rezavor meva, butalarga va manzarali o‘simliklarga zarar yetkazadi. Kaliforniya qalqondori (Diaspidiotus perniciosus Comst) ko‘payib ketganda daraxt po‘stlog‘i uzunasiga yorilib, shoxlarni va butun daraxtlarni quritib qo‘yadi, mevalardagi shirani so‘rib, to‘q qizil dog‘ tushiradi. Mevali daraxtni shox, novda, barg, daraxt po‘stlog‘i va mevasini zararlaydi. Natijada daraxtlar kam xosil beradi, yosh daraxtlar qurib qoladi.</p>
    
    <p><strong>Ta’rifi.</strong> Qalqoni yumaloq, anchagina yapaloq, och jigarrang, kulrang tusda bo‘lib, diametri 1,0–1,5 mm dan 2 mm gacha. Qalqonning chetlari o‘rtasiga qaraganda och tusda bo‘lib, erkagining qanoti bir juft bo‘ladi. Yosh lichinkasi  oziqlana boshlaganda oqimtir shira chiqaradi, bu shira keyinchalik qalqonga aylanadi.</p>
    
    <p><strong>Hayot davri.</strong> Birinchi yosh lichinkalari shox va novdalardagi qalqon ostida qishlaydi. Bahorda, daraxt kurtaklari bo‘rta boshlaganda oziqlanishni boshlaydi va po‘st tashlab jinsiy etuk urg‘ochi va erkak zotlarga aylanadi. Urchigan urg‘ochi zot 1 oycha yetilgach 100–120 tadan tirik lichinkalar tug‘a boshlaydi. Tug‘ilgan «daydi» lichinkalar qalqon ostidan chiqqandan so‘ng bir necha soat davomida daraxt bo‘ylab tarqalib po‘stloq va mevalarga yopishgan holda o‘ziga qalqon yasay boshlaydi. Oziqlanishi davomida po‘st tashlab ikkinchi yoshga o‘tgan lichinkalari jinsiy yetuk urg‘ochi va erkak zotlarga aylanadi va 2-avlod «daydi» lichinkalari paydo bo‘ladi. Shu tariqa yil davomida 3–4 ta avlod beradi. Odatda har bir avlod birinchi yosh lichinkalarining bir qismi qishlashga qoladi. Ko‘chat va zararlangan meva orqali joydan– joyga tarqaladi.</p>
    
    <p>Urg‘ochi va erkak qalqondorlarning paydo bo‘lishi havo xaroratiga qarab aprel oxiridan (eng erta) 20 maygacha (eng kech) davom etadi. Erkak hasharotlarning paydo bo‘lish vaqtini aniqlash juda muhim hisoblanadi, shu sababli feromon tutqichlarni eng maqbul muddatlarda qo‘yish kerak, sababi erkak hasharotlar atigi bir necha kun uchadi xolos. Ba’zan erkak hasharotlarning asosiy qismi ikki uch kun davomida uchadi. Urg‘ochi hasharot esa ikki yarim oydan oshiqroq yashaydi xolos. Urg‘ochi hasharotning tuxumdonlari urug‘langandan so‘ng, tuxum xo‘jayralari rivojlanadi.</p>
    
    <p><strong>Xulosa, taklif va tavsiyalar.</strong> Kaliforniya qalqondoriga qarshi asosan eng muhim uchta tadbir amalga oshirilishi lozim: karantin, agrotexnik va kimyoviy kurash choralari. Kaliforniya qalqondorining paydo bo‘lishini aniqlash barcha mevali bog‘larda, o‘rmon va manzarali daraxtzorlarda o‘tkaziladi. Eng asosiysi — olma, olxo‘ri, nok, smorodina va boshqa daraxtlar sinchkovlik bilan sifatli tekshirilishi lozim. Yovvoyi daraxtlar va manzarali daraxtzorlardan birinchi navbatda atirguldoshlar oilasiga mansub: do‘lana, na’matak, tern, yovvoyi nok, olma va boshqalar tekshiriladi.</p>
    
    <p>Uyg‘unlashgan kurash choralari.</strong> Erta ko‘klamda butalgan shox va novdalarni yoqish, daraxtlar tanasini tozalab, eski po‘stloqlarni yoqish, daraxt tanasini oqlash, bog‘larni yoshartirish. Mavsum vaqtida tuxumdan chiqqan qalqondorlar sonini bilish uchun skochni diametri 3–5 sm bo‘lgan shoxlarga yopishqoq tarafini tepaga qilib mahkam bog‘lanadi. Agar mahkam bo‘lmasa, yosh qalqondor lichinkalari tagidan o‘tib ketadi. Bir bog‘dan kamida 10 ta daraxtning 2 ta shoxiga skochni bog‘lab chiqiladi. Har haftada yangi skochga almashtiriladi. Har bir joyda skochga yopishib qolgan qalqondorlarni sanab, yosh qalqondorlarni qachon ko‘payishini aniqlash mumkin. Skochdagi qalqondorlar soniga qarab pestitsid bilan ishlov o‘tkazish belgilanadi. Kimyoviy ishlovlar qalqondorlarning birinchi yosh lichinkalari ko‘paygan davrda sepiladi. Kurtaklar bo‘rtish vaqtida yog‘li vositalarni qishlayotgan zararkunandalarga qarshi purkash eng samarali hisoblanadi.</p>
    
    <p><strong>Kurash choralari.</strong> Kurtaklar bo‘rtish vaqtida mineral moylar bilan tarkibida xlorpirifos yoki diazinon bo‘lgan preparatlarni aralashtirib ishlov beriladi. Vegetatsiya davrida esa tarkibida deltametrin, dimetoat, imidokloprid, lyambda– tsigolotrin, malation va xlorpirifos bo‘lgan preparatlar bilan ishlov beriladi.</p>
    
    <p>Feromon tutqichlarni nafaqat nazorat uchun, balki qalqondorga qarshi kurash chorasi sifatida ham ishlatish mumkin. Asosan bu birinchi avlodiga qarshi ishlatilganda yuqori samara beradi, sababi bunda qalqondorlar hamkorlikda 6-7 kunda yoppasiga uchishni boshlaydi. Urg‘ochi qalqondor faqat jinsiy yo‘l bilan ko‘payadi. Tabiatda odatda jinslar miqdori 1:1 nisbatda bo‘ladi. Erkak qalqondorlarni 50-60% yo‘qotish natijasida 70% urg‘ochilari urug‘lanmay qolishga erishildi.</p>
    
    <p>Tabiatda kaliforniya qalqondorining 22 ta yirtqich va 3 ta parazit entomofaglari aniqlangan. Yirtqichlaridan samarali foyda keltiradigan koktsinellidlardan — kurtaksimon xilokorus (Chilocorus renipustulatus Scrib) va ikki nuqtali xilokorus (Chilocorus bipustulatus L.), yetti nuqtali xon qizi (Coccinella septempunctata L.)larni misol keltirish mumkin. Ba’zi bog‘larda qalqondorlar sonini xrizoplar-xrizopaprazin - (ChysopaprasinaBumi) (bahorda), oddiy xrizop (Chrysopa carneaSteph) va yetti nuqtali xrizop (SeptempunctataWeam) (yozda) ancha kamaytirib turadi. Parazit entomofaglaridan: AphitisprocliaWlk, ApMytilaspidisBaron va ProspaltellaperniciosiTow. larni keltirish mumkin.</p>
    `
  },
  citrus_honeysuckle: {
    title: "Sitrus inli kuyasi - mevalar kushandasi",
    content: `
    <p>2018-yilning 24-dekabr kuni Eron Islom Respublikasidan keltirilgan 42,3 tonna mandarin (barglari bilan) mahsulotida sitrus inli kuyasi aniqlandi va 29-dekabr kuni mazkur mahsulot inspeksiyaning fumigatorlari tomonidan zararsizlantirildi.</p>
    
    <p>Mazkur holat yuzasidan Eron Islom Respublikasiga e’tiroznoma jo‘natildi.</p>
    
    <p>Sitrus o‘simliklar uchun uchun eng katta havf  sitrus inli kuyasi – (Phyllocnistis citrella Stainton) hasharotidir. U sitrus o‘simliklariga katta zarar keltirib, ayniqsa, limon o‘simligining xavfli kushandasi hisoblanadi. Shu bilan bir qatorda u mandarin va greypfrutda ham yaxshi rivojlanadi.</p>
    
    <p>Sitrus inli kuyasi hasharoti Osiyo, Avstraliya, Janubiy Afrika, Sharqiy va G‘arbiy Afrika, Markaziy va Janubiy Amerika davlatlarida tarqalgan bo‘lib, O‘zbekistonda asosan, Toshkent viloyati hududida aniqlangan.</p>
    
    <p>Hasharot  kapalagining kulrang qanotlari 4-5 mm uzunlikda bo‘ladi. Oldingi juft qanoti ikkita to‘q chiziq, o‘rtasida esa V shaklida belgisi va tepa uchida qora dog‘lari bor. Qanotining o‘rta oldingi chetigacha uzun to‘q sariq rangda tuklari bor. Popuklari orqa qanotida hosil bo‘ladi. Orqa oyoqlarining boldir qismida tepaga qaragan qora o‘simtasi bor. U limon bargining ostki tomoniga joylashib kech kuzga qadar zarar keltiradi.</p>
    
    <p>Urg‘ochilar tuxumini kurtakka yoki o‘simliklarning o‘sish nuqtasiga, barglarning tepa qismiga 200 tagacha qo‘yishi mumkin. Embrional  rivojlanishi 10 kun davom etadi. Lichinkalar barg ichiga kirib olib 10-20 kun davomida rivojlanadi. Yosh barglar orasida ilon izi kabi uyalar hosil qilib barg parenximasi bilan oziqlanishi natijasida barg burishadi va quriydi. Odatda bitta bargda bitta uya bo‘ladi, kuchli zararlanganda 2 yoki 3 ta va undan ortiq ham bo‘lishi mumkin. Qarshiliklarga uchrashi bilan lichinka boshqa bargga o‘tadi. G‘umbakka aylanishidan oldin harakatlanishdan to‘xtaydi. G‘umbaklik davri pilla ichida o‘tadi. Zararkunanda bir yilda 6-7 ta ba’zan 10 ta avlod beradi. Bir avlodning rivojlanishi 38-43 kunni tashkil etadi. Sitrus inli kuyasi plantatsiyalarda va pitomniklarda sitrus ekinlarining yosh ko‘chatlarini zararlashi mumkin.</p>
    
    <p>Bu zararkunandaga qarshi kurashda birinchi navbatda ko‘chatliklarni muntazam tekshirish va ekspertiza qilish, ko‘chat va qalamchalar olinayotgan hududda zararkunanda tarqalmaganiga e’tibor qaratish lozim. Hasharot tarqalgan dalalardagi ko‘chatlarga esa fosfor-organik birikmalar bilan ishlov berish undan qutulishga yordam beradi.</p>
    
    <p>E’tiborli bo‘lish va ko‘chatlarni muntazam nazorat qilib borish turli ko‘ngilsiz xodislarning oldini oladi. Shunday ekan, bu masalada ham hafsala bilan ish tutish muvaffaqiyatga yetaklaydi.</p>
    `
  },
  georgia_mandarins: {
    title: "Gruziyadan keltirilgan mandarinda zararli organizmlar aniqlandi",
    content: `
    2018-yilning 28-dekabr kuni Gruziya davlatidan keltirilgan 20,2 tonna mandarin maxsulotida Yaponiya cho‘psimon qalqondori bilan sariq pomeranes qalqondori aniqlandi va joriy yilning 4 yanvar kuni mazkur mahsulot inspeksiyaning fumigatorlari tomonidan zararsizlantirildi. Mazkur aniqlangan holat yuzasidan Gruziya davlatiga e’tiroznoma jo‘natildi. 
    
    Yapon tayoqchasimon qalqondori (Leucaspis japonica Ckll)
    
    Zarari. Bu hasharot ko‘pgina meva daraxtlariga (olma, behi, nok, danakli meva daraxtlari, sitrus o‘simliklari, xurmo, anjir va boshqalar) hamda manzarali daraxtlar va butalar (magnoliya, siren, atirgul, zarang daraxti, terak va hokazo)ga zarar yetkazadi. Yapon tayoqchasimon qalqondori barglarni so‘litib to‘kib yuboradi, novdalarni va shoxlarni quritadi, ba’zan esa butun-butun daraxt va butalarni nobud qiladi. Qalqondor tushgan mevalar dog‘lari borligi uchun yaroqsiz hisoblanadi.
    
    Tarqalishi. Yaponiya, Xitoy, Hindiston, Braziliya, Eron, Koreya, Pokiston, Kaliforniyada uchraydi. Vladivostokda, Kavkazning qopa dengiz sohilidagi Batumi, Kobuleti va Poti tumanlarida tarqalgan joylari bor.
    
    Ta’rifi. Urg‘ochisining qalqoni cho‘ziq bo‘lib, bosh tomonidan orqa tomoniga qarab sekin-asta kengaya boradi, uzunasiga ketgan va och kul rang-oq tusli qirrasi bor. Qalqonning uzunligi 1,5-2 mm. Erkagi maydaroq bo‘lib, bir juft qanoti bor, qornining uchi o‘tkirlangan.
    
    Tuxumi juda mayda, och gunafsha tusli.
    
    Hayot kechirishi. Bu zararkunanda bir joydan ikkinchi joyga asosan ko‘chat bilan, shuningdek meva va xazon bilan tarqaladi.
    
    Qalqondor daraxt va butalarning tana va shoxlarida ikki yoshdagi lichinkalik stadiyasida qishlaydi; sovuqqa juda chidamli. Ko‘klamda lichinkalar juda sekin o‘sadi, voyaga etgan dastlabki hasharotlar may oxirida chiqadi. Qalqondorning erkagi urg‘ochisidan ikki marta kamroq bo‘ladi. Hasharot juftlashmasdan, partenogenez yo‘li bilan ko‘paya oladi. May oxirida tuxum qo‘ya boshlaydi; tuxum qo‘yishi deyarli ikki oyga cho‘ziladi.
    
    Urg‘ochi qalqondor umrida 50 tacha tuxum qo‘yadi: Bir yoshdagi lichinkalar (brodyajkalar) urg‘ochilarining qalqonlari tagidan o‘rmalab chiqadi va paydo bo‘lgan kunlariyoq barglarga, shoxlarga, daraxt tanasiga va mevalarga yopishib oladi. Qalqondorlar daraxtlarda zich koloniyalar hosil qiladi.
    
    Iyun-avgustda Kavkazning dengiz sohilidan Markaziy Osiyoga zararkunanda o‘tish xavfi kattaroq bo‘lib, qalqondorning ikkinchi nasli shu davrda yetiladi. Qalqondor yiliga ikki nasl beradi.
    
    Kurash choralari. Erta ko‘klamda (kurtaklar bo‘rtguncha) daraxtlar po‘stlari nobud bo‘lgan tangachalardan tozalanadi va yig‘ilgan chiqindilar yoqiladi. Shundan keyin 10 % li mineral moy emulsiyasi purkaladi. Zararkunandaning kichkina makonlarida daraxt va butalar palatkada sianid kislota bilan fumigatsiya  qilinadi.
    
    Karantin choralardan-qalqondor tarqalgan tumanlardan daraxt va buta ko‘chatlari keltirilgan taqdirda ular metil bromid yoki sianid kislota bilan zararsizlantiriladi.
    
    Sariq (pomerans) qalqondor (Aonidiella citrina Coq)
    
    Zarari. Sariq (pomerans) qalqondor ko‘pgina daraxt, buta va o‘tsimon o‘simliklarni zararlaydi, ayniqsa anjir, sitrus o‘simliklari, tut daraxti, choy tuplari, atirgul, xurmo va boshqa daraxtlarga juda katta zarar yetkazishi ma’lum bo‘lgan. Shu bilan birga tok, dag‘al kanop va boshqa ko‘pgina o‘simliklarga ham ziyon yetkazishi aniqlangan.
    
    Sariq (pomerans) qalqondor zararlagan o‘simliklar hosili ancha kamayib, o‘sishi sekinlashadi, qattiq zararlangan shox va novdalari nobud bo‘ladi, ba’zan o‘simlik butunlay qurib qoladi. Shimoliy Hindistonda sariq (pomerans) qalqondor g‘o‘zaning jiddiy zararkunandasi sifatida ma’lum bo‘lgan.
    
    Tarqalishi. Hindiston, Seylon, Falastin, Siam, Indoneziya, Filippin orollari, Yaponiya, Misr, O‘rta va Janubiy Afrika, AQShning janubiy shtatlari, Meksika, Shimoliy Hindiston, Braziliya, Gviana, Gavayya orollari, Samoa, Taiti orollari, Yangi Zelandiya, Avstraliyada uchraydi.
    
    Ta’rifi. Voyaga yetgan urg‘ochisi keng oval shaklida, ba’zan cho‘ziq oval shaklida bo‘lib, usti qavariq, rangi qora yoki to‘q jigarrangdir. Mo‘ylovlarining asosida ikkitadan uzun ingichka qili bor. Sariq (pomerans) qalqondor gavdasining orqa yuzasi silliq, uzunligi 3-5 mm.ga yetadi. Erkagining qorni ingichka, qanoti bir juft, uzunligi 1-1,5 mm.cha keladi.
    
    Hayot kechirishi. Sariq (pomerans) qalqondor yangi mintaqalarga ko‘chat bilan tarqaladi, yaqin joylarga esa boshqa qalqondorlar va soxta qalqondorlar yosh lichinkalik stadiyasida tarqalganidek passiv yo‘llar bilan tarqaladi.
    
    Tropik mintaqalarda Sariq (pomerans) qalqondori qishki uyquga kirmaydi, subtropik mintaqalarda esa daraxtlarning tana va shoxlarida so‘nggi yoshdagi lichinka stadiyasida va jinsiy jihatdan yetilmagan urg‘ochi stadiyasida qishlaydi. Bu hasharot Kavkazning Qora dengiz sohilida may oxirida tuxum qo‘ya boshlaydi. Urg‘ochisi o‘z umrida o‘rta hisob bilan 2000 tacha, ko‘pi bilan 4000 tacha tuxum qo‘yadi.
    
    Iyunda-iyul boshlarida tuxumdan lichinkalar chiqadi, bu yosh lichinkalar serharakat bo‘lib, o‘simliklarda o‘rmalab yuradi.
    
    Odatta ozuqa tanlamaydi, lekin zaytun va oleandr daraxtlarini juda xush ko‘radi. Kavkazning Qora dengiz sohilida yiliga 1 marta, Kaliforniya janubida esa yiliga 2 marta nasl beradi, tropik mamlakatlarda qishki uyquga kirmay hayot kechiradi. Qulay sharoitda va kurash olib borilmaganda juda ko‘payib ketadi.
    
    Kurash choralari. Boshqa koksidalarga qarshi qanday karantin choralari ko‘rilsa, Sariq (pomerans) qalqondoriga qarshi ham huddi shunday karantin choralari ko‘riladi.
    
    Sariq (pomerans) qalqondori topilgan joylarda daraxtlarni palatkada sianid kislota bilan fumigatsiya qilish va qish faslida (yoki erta ko‘klamda-kurtaklar bo‘rtguncha) mineral moy emulsiyalarini purkash tavsiya etiladi.
    `
  },
  imported_chine: {
    title: "Xitoydan keltirilgan 3 million tut koʻchati yoqib yoʻq qilindi",
    content: `
    <p>Xitoy Xalq Respublikasidan Sirdaryo viloyatiga 3 million dona tut koʻchati Karantin ruxsatnomasisiz olib kirilgan.</p>
  
    <p><i>Karantin ruxsatnomasi – karantin ostidagi mahsulotni belgilangan tartibda Oʻzbekiston Respublikasi hududiga olib kirishga yoki uning hududidan tranzit tarzida olib oʻtishga ruxsat berilganligini tasdiqlaydigan, Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Oʻsimliklar karantini davlat inspeksiyasi tomonidan berilgan hujjat. Ushbu hujjatda respublikamizning fitosanitar talablari koʻrsatiladi.</i></p>
  
  <p>Mazkur 3 million dona tut koʻchati boʻrtma nematoda bilan zararlangani uchun yoqish yoʻli bilan yoʻq qilingan.</p>
  
  <p>Aytilishicha, mazkur tut koʻchati Oʻsimliklar karantini davlat inspeksiyasining Markaziy karantin laboratoriyasi tekshiruvidan oʻtkazilganda ildiz qismida boʻrtma nematoda topilgan va tegishli karantin choralari koʻrilishi yuzasidan xulosa berilgan.</p>
  
  <p><i>Boʻrtma nematoda pomidor, bodring, sabzi, piyoz, gʻoʻza, gilos, oʻrik va boshqa ekinlarni kuchli zararlaydi. Boʻrtma nematoda bilan zararlangan mazkur ekinlar yoppasiga qurib qoladi. Lichinkalarning rivojlanishi natijasida oʻsimlik butunlay nobud boʻladi. Dunyo boʻyicha boʻrtma nematodalar bilan 2000 turga yaqin turli oilaga mansub madaniy va yovvoyi oʻsimliklar zararlangan, boʻrtma nematoda bilan zararlangan oʻsimliklarning soni yildan-yilga ortib bormoqda.</i></p>
  
  <p>Inspeksiyasining taqdimnomasiga muvofiq, viloyat hokimligining qarori bilan tut koʻchatlari keltirilgan hududda karantin holati eʼlon qilindi. Xitoydan keltirilgan 3 million dona tut koʻchatlari viloyat ekologiya va atrof-muhitni muhofaza qilish boshqarmasining maxsus poligonida tegishli tashkilot va idoralarning masʼul xodimlari ishtirokida yoqish yoʻli bilan yoʻq qilindi.</p>
  
  <p>Oʻzbekiston Respublikasi “Oʻsimliklar karantini toʻgʻrisida”gi Qonunining 29-moddasiga asosan respublika hududiga karantin ostidagi mahsulotlar hamda oʻsimliklarning ekish materiallarini (urugʻlik, koʻchat, tuganak, piyozbosh va boshlqalar) olib kirishdan avval “Oʻzdavkarantin” isnpeksiyasidan karantin ruxsatnomasi va fitosanitariya sertifikatini olish maqsadga muvofiqdir.</p>
    `
  },
  vine_germany: {
    title: "Germaniyadan keltirilgan tok ko‘chati yoqib yo‘q qilindi",
    content: `
    <p>Mamlakatimizga Germaniya Federativ Respublikasidan olib kirilayotgan manzarali gul va daraxt ko‘chatlari Toshkent shahar “Arkbuloq” o‘simliklar karantini chegara maskani inspektorlari tomonidan karantin ko‘rigidan o‘tkazilganda ular orasida ko‘p miqdordagi tok ko‘chatlari borligi aniqlandi.</p>
  
    <p>Import qilinayotgan mahsulotlarga tegishli hujjatlar tekshirilganda mazkur tok ko‘chatlari uchun karantin ruxsatnomasi va fitosanitariya sertifikati yo‘qligi aniqlandi. Ushbu holat, O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi Qonuniga ziddir.</p>
  
    <p><i>Karantin ruxsatnomasi – karantin ostidagi mahsulotni belgilangan tartibda O‘zbekiston Respublikasi hududiga olib kirishga yoki uning hududidan tranzit tarzida olib o‘tishga ruxsat berilganligini tasdiqlaydigan, O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi tomonidan beriladigan hujjatdir.</i></p>
  
    <p><i>Fitosanitariya sertifikati – karantin ostidagi mahsulotda o‘simliklar karantini ob’ektlari mavjud emasligini tasdiqlovchi eksportyor davlatning tegishli o‘simliklar karantini tashkiloti tomonidan beriladigan xalqaro namunadagi hujjat.</i></p>
  
    <p>Mutaxassislarning aytishicha, aksar xorij mamlakatlarida tokning ashaddiy zararkunandasi filloksera (Dactylosphaera vitifoliae), bir necha turdagi bakteriya, virus va boshqa kasallik qo‘zg‘atuvchilari mavjud va ularning tok ko‘chatlari bilan O‘zbekistonga kirib kelib mahalliy tokzorlar nobud bo‘lishiga sabab bo‘lishi mumkin.</p>
  
    <p><i>Filloksera bilan zararlangan tok ko‘chatlari o‘sish va rivojlanishdan orqada qoladi, hosildorligi pasayadi, bir necha yildan keyin tok qurib qoladi. Filloksera bilan zararlangan barglarda bo‘rtmalar hosil bo‘ladi, barglar deformatsiyaga uchraydi, yosh tok ko‘chatlari hosilga kirmasdan nobud bo‘ladi. Filloksera monofag bo‘lib, ya’ni, faqat tok o‘simligining barglari, novdalari, gajaklari, ildiz qismi va mevalarini jiddiy zararlaydi. Filloksera hashorati tushgan tokzorlarni nobud qilishi jahon tajribasidan ma’lum. O‘zbekiston uchun bu zararkunanda tashqi karantin ob’ekti hisoblanadi.</i></p>
  
    <p>O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi qonuni talablariga muvofiq, shuningdek, respublika fitosanitar tozalagini hisobga olib noqonuniy yo‘l bilan Germaniyadan keltirilgan tok ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>
  
    <p>O‘zbekiston Respublikasi “O‘simliklar karantini to‘g‘risida”gi Qonunining 29-moddasiga asosan, respublika hududiga karantin ostidagi mahsulotlar hamda o‘simliklarning ekish materiallarini (urug‘lik, ko‘chat, tuganak, piyozbosh va boshqalar) olib kirishdan avval “O‘zdavkarantin” isnpeksiyasiga murojaat etishlari maqsadga muvofiqdir.</p>
    `
  },
  imported_afghanistan: {
    title: "Afg‘onistondan keltirilgan minglab tok, olxo‘ri va archa ko‘chatlari nima uchun yoqib yuborildi?",
    content: `
    <p>Mamlakatimizga Afg‘oniston Islom Respublikasidan olib kirilayotgan mevali daraxt ko‘chatlari "Olmaliq" Tashqi iqtisodiy faoliyat inspektorlari tomonidan karantin ko‘rigidan o‘tkazilganda bir qator qonun buzilish holatlari aniqlandi. Minglab tok, olxo‘ri va archa ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>
  
    <p>O‘rnatilgan tartibga ko‘ra, O‘zbekiston Respublikasiga olib kiriladigan o‘simliklar zararkunanda va begona o‘tlar, turli kasalliklar, shuningdek, boshqa karantin organizmlardan holi bo‘lishi shart.</p>
  
    <p>Mazkur taomilga asosan, import qilinayotgan mevali daraxt ko‘chatlari va ularga tegishli hujjatlar tekshirilganda “O‘simliklar karantini to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni talablariga zid holatlar va karantindagi zararkunandalar aniqlandi. Xususan, karantin ruxsatnomasida uzum va olxo‘ri ko‘chatlari qayd etilmagan. Namunalarda Staphylinidae oilasiga mansub qo‘ng‘iz, Bibio morci – qora pashsha, Hymenoptera – qanotli hashorat topildi. Archa ko‘chati fitosanitar talablarga javob bermaydi. Uzum Oidium tuckeri Berk – oidium zambrug‘ kasallik qo‘zg‘atuvchilari bilan zararlangan. Olxo‘rida Pseudomonas syringae – bakterial rak mavjud.</p>
  
    <p>O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi qonuni talablariga muvofiq, shuningdek, respublika fitosanitar tozalagini hisobga olib mazkur holatga tegishli karantin chorasi qo‘llanildi: 34 ming tok, 10 ming 400 olxo‘ri va 120 dona archa ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>
  
    <p>Eslatib o‘tamiz, O‘zbekiston Respublikasi “O‘simliklar karantini to‘g‘risida”gi Qonunining 29-moddasiga asosan, respublika hududiga karantin ostidagi mahsulotlar hamda o‘simliklarning ekish materiallarini (urug‘lik, ko‘chat, tuganak, piyozbosh va boshqalar) olib kirishdan avval “O‘zdavkarantin” isnpeksiyasiga murojaat etishlari maqsadga muvofiqdir.</p>
    `
  }
}

let filesComponentProps = {
  info_staff: {
    title: "O'zbekiston Respublikasi O'simliklar karantini va himoyasi agentligi O`KChM xodimlari haqida ma`lumot",
  },
  statistics_considered: {
    title: "Ko‘rib chiqilgan murojaatlar bo‘yicha statistik ma’lumotlar"
  },
  activity: {
    title: "'Elektron hukumat' tizimi"
  },
  public_service_register: {
    title: "Davlat xizmatlari reestri"
  },
  interagency_protocols: {
    title: "Idoralararo bayonnomalar"
  },
  government_decisions: {
    title: "Hukumat qarorlari va farmoyishlari",
  },
  normative_documents: {
    title: "Adliya vazirligi tomonidan ro'yhatga olingan me'yoriy hujjatlar"
  },
  import: {
    title: "O'simliklar karantini va himoyasi agentligi mutaxassislari tomonidan chet davlatlardan respublikamiz hududiga import qilinishi rejalashtirilgan ekish materiallarini fitosanitar holatini joyida o‘rganish maqsadida qilingan xizmat safarlari to‘g‘risidagi ma’lumot (2017-2020 yy.)"
  },
  phytosanitary_requirements: {
    title: "Fitosanitariya talablari"
  },
  list_quarantine: {
    title: "Karantin organizmlari ro'yxati"
  },
  seeds_turkey: {
    title: "Turkiya davlatidan pomidor va qalampir urug‘larini olib kelinishi ruxsat etilgan korxonalar ro‘yxati"
  },
  phytosanitary: {
    title: "O'simliklar karantini va himoyasi agentligining Markaziy fitosanitariya laboratoriyasi tomonidan Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri hududlaridagi yetishtirilgan pomidor va qalampir maxsulotlarini PZR usuli orqali tekshirilgan fitosanitar toza issiqxonalar ro'yxati"
  }
}

let linkComponentProps = {
  statistics_considered: {
    title: "Ko‘rib chiqilgan murojaatlar bo‘yicha statistik ma’lumotlar"
  },
  leading_specialist: {
    title: "Ichki karantini bo'limi boshlig'i va bosh mutaxassislari (yetakchi mutaxassis) to'g'risida ma'lumot"
  },
  resolutions: {
    title: "O‘zbekiston Respublikasi Prezidenti qarorlari va farmonlari"
  },
  government_programs: {
    title: "Davlat dasturlari"
  },
  expired_normative_documents: {
    title: "Kuchini yo'qotgan me'yoriy hujjatlar"
  },
  list_of_pests: {
    title: "O'zbekiston Respublikasi uchun o'simliklar karantinida bo'lgan zararli organizmlar ro'yxati"
  },
  according_pakistan: {
    title: "Pokistondan O'zbekistonga kartoshka mahsulotini eksport qilish uchun ruxsat etilgan ko`chatxonalar (pitomniklar) ro`yxati (Pokistonning ma'lumotiga ko`ra)"
  },
  products_import_export: {
    title: "O‘zbekiston Respublikasiga olib kiriladigan va uning tashqarisiga olib chiqiladigan o‘simliklar karantini nazoratidagi mahsulotlar ro‘yxati"
  }
}

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
        path: "",
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
        path: "centeralApp",
        element: <CenteralApp />
      },
      {
        path: "terrAdministrations",
        element: <TerritorialAdministrations />
      },
      {
        path: "systemOrganizations",
        element: <SystemOrganizations {...textComponentsProps.systemOrganizations} />
      },
      {
        path: "contactAgency",
        element: <SystemOrganizations {...textComponentsProps.contactAgency} />
      },
      {
        path: "vacancies",
        element: <Vacancies />
      },
      {
        path: "superior_organizations",
        element: <SystemOrganizations {...textComponentsProps.superior_organizations} />
      },
      {
        path: "glossary_terms",
        element: <SystemOrganizations {...textComponentsProps.glossary_terms} />
      },
      {
        path: "info_staff",
        element: <InformationOfStaff {...filesComponentProps.info_staff} />
      },
      {
        path: "youth",
        element: <Youth />
      },
      {
        path: "mobile_receptions",
        element: <MobileReceptions />
      },
      {
        path: "open_data",
        element: <OpenData />
      },
      {
        path: "statistics_considered",
        element: <StatisticsConsidered {...linkComponentProps.statistics_considered} />
      },
      {
        path: "leading_specialist",
        element: <StatisticsConsidered {...linkComponentProps.leading_specialist} />
      },
      {
        path: "spirituality_enlightenment",
        element: <SpiritualityEnlightenment />
      }
    ]
  },
  {
    path: "activity",
    element: <Activity />,
    children: [
      {
        path: "",
        index: true,
        element: <InformationOfStaff {...filesComponentProps.activity} />
      },
      {
        path: "public_service_register",
        element: <InformationOfStaff {...filesComponentProps.public_service_register} />
      },
      {
        path: "international_relations",
        element: <InternationalRelations />
      },
      {
        path: "government_programs",
        element: <StatisticsConsidered {...linkComponentProps.government_programs} />
      },
      {
        path: "plant_clinics",
        element: <PlantClinics />
      },
      {
        path: "interagency_protocols",
        element: <InformationOfStaff {...filesComponentProps.interagency_protocols} />
      },
      {
        path: "anti_corruption",
        element: <AntiCorruption />
      }
    ]
  },
  {
    path: "information_services",
    element: <InformationServices />,
    children: [
      {
        path: "",
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
        path: "photo_gallery",
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
        path: "media_about_us",
        element: <MediaAboutUs />
      }
    ]
  },
  {
    path: "docs",
    element: <Documents />,
    children: [
      {
        path: "",
        index: true,
        element: <Law />
      },
      {
        path: "resolutions",
        element: <StatisticsConsidered {...linkComponentProps.resolutions} />
      },
      {
        path: "government_decisions",
        element: <InformationOfStaff {...filesComponentProps.government_decisions} />
      },
      {
        path: "international_agreements",
        element: <InternationalAgreements />
      },
      {
        path: "normative_documents",
        element: <InformationOfStaff {...filesComponentProps.normative_documents} />
      },
      {
        path: "draft_normative_documents",
        element: <SystemOrganizations {...textComponentsProps.draft_normative_documents} />
      },
      {
        path: "expired_normative_documents",
        element: <StatisticsConsidered {...linkComponentProps.expired_normative_documents} />
      },
      {
        path: "fines_increased",
        element: <FinesIncreased />
      },
      {
        path: "list_of_posts",
        element: <StatisticsConsidered {...linkComponentProps.list_of_pests} />
      }
    ]
  },
  {
    path: "scientific_research",
    element: <ScientificResearch />,
    children: [
      {
        path: "",
        index: true,
        element: <SystemOrganizations {...textComponentsProps.scientific_research} />
      },
      {
        path: "cotton_bollworm",
        element: <CottonBollworm />
      },
      {
        path: "pest_control",
        element: <SystemOrganizations {...textComponentsProps.pest_control} />
      },
      {
        path: "marble_shackle",
        element: <SystemOrganizations {...textComponentsProps.marble_shackle} />
      },
      {
        path: "cherry_flies",
        element: <SystemOrganizations {...textComponentsProps.cherry_flies} />
      }
    ]
  },
  {
    path: "laboratory",
    element: <Laboratory />,
    children: [
      {
        path: "",
        index: true,
        element: <SystemOrganizations {...textComponentsProps.laboratory} />
      },
      {
        path: "quarantine_organisms",
        element: <QuarantineOrganisms />
      },
      {
        path: "cotton_bollworm_destroyed",
        element: <SystemOrganizations {...textComponentsProps.cotton_bollworm_destroyed} />
      },
      {
        path: "pests_detected",
        element: <SystemOrganizations {...textComponentsProps.pests_detected} />
      },
      {
        path: "california_shields",
        element: <SystemOrganizations {...textComponentsProps.california_shields} />
      },
      {
        path: "citrus_honeysuckle",
        element: <SystemOrganizations {...textComponentsProps.citrus_honeysuckle} />
      },
      {
        path: "georgia_mandarins",
        element: <SystemOrganizations {...textComponentsProps.georgia_mandarins} />
      },
      {
        path: "imported_chine",
        element: <SystemOrganizations {...textComponentsProps.imported_chine} />
      },
      {
        path: "vine_germany",
        element: <SystemOrganizations {...textComponentsProps.vine_germany} />
      },
      {
        path: "imported_afghanistan",
        element: <SystemOrganizations {...textComponentsProps.imported_afghanistan} />
      },

    ]
  },
  {
    path: "import",
    element: <Import />,
    children: [
      {
        path: "",
        index: true,
        element: <InformationOfStaff {...filesComponentProps.import} />
      },
      {
        path: "phytosanitary_requirements",
        element: <InformationOfStaff {...filesComponentProps.phytosanitary_requirements} />
      },
      {
        path: "list_quarantine",
        element: <InformationOfStaff {...filesComponentProps.list_quarantine} />
      },
      {
        path: "seeds_turkey",
        element: <InformationOfStaff {...filesComponentProps.seeds_turkey} />
      },
      {
        path: "according_pakistan",
        element: <StatisticsConsidered {...linkComponentProps.according_pakistan} />
      },
      {
        path: "products_import_export",
        element: <StatisticsConsidered {...linkComponentProps.products_import_export} />
      },

    ]
  },
  {
    path: "phytosanitary",
    element: <Phytosanitary />,
    children: [
      {
        path: "",
        index: true,
        element: <InformationOfStaff {...filesComponentProps.phytosanitary} />
      }
    ]
  }
]

export default routes;