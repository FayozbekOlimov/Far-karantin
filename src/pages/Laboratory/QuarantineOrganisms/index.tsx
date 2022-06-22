import React from 'react'
import QuarantineSlider from './QuarantineSlider'

const titles: any = {
  quarantine_organisms: "O'zbekiston Respublikasi hududlarida cheklangan ravishda tarqalgan zararli o'simliklar karantini organizmlari",
  cotton_bollworm_destroyed: "G‘o‘za kuyasi aniqlangan chigit yo‘q qilindi",
  pests_detected: "139 tonna kartoshkadan zararkunanda aniqlandi",
  california_shields: "Kaliforniya qalqondori aniqlangan mevalar yo‘q qilindi",
  citrus_honeysuckle: "Sitrus inli kuyasi - mevalar kushandasi",
  georgia_mandarins: "Gruziyadan keltirilgan mandarinda zararli organizmlar aniqlandi",
  imported_chine: "Xitoydan keltirilgan 3 million tut koʻchati yoqib yoʻq qilindi",
  vine_germany: "Germaniyadan keltirilgan tok ko‘chati yoqib yo‘q qilindi",
  imported_afghanistan: "Afg‘onistondan keltirilgan minglab tok, olxo‘ri va archa ko‘chatlari nima uchun yoqib yuborildi?"
}

const sliderLinks = [
  {
    id: "1",
    sliderLink: "https://docs.google.com/presentation/d/e/2PACX-1vQHFpJul7X9Kma_1EZho_vQw3ltx61QJOlIAuy-lKAxVPLK_I0nkWnZnx_A6fwfNe7MpvGI68-TsZCm/embed?start=false&amp;loop=false&amp;delayms=3000"
  },
  {
    id: "2",
    sliderLink: "https://docs.google.com/presentation/d/e/2PACX-1vQHFpJul7X9Kma_1EZho_vQw3ltx61QJOlIAuy-lKAxVPLK_I0nkWnZnx_A6fwfNe7MpvGI68-TsZCm/embed?start=false&amp;loop=false&amp;delayms=3000"
  },
  {
    id: "3",
    sliderLink: "https://docs.google.com/presentation/d/e/2PACX-1vQHFpJul7X9Kma_1EZho_vQw3ltx61QJOlIAuy-lKAxVPLK_I0nkWnZnx_A6fwfNe7MpvGI68-TsZCm/embed?start=false&amp;loop=false&amp;delayms=3000"
  },
  {
    id: "4",
    sliderLink: "https://docs.google.com/presentation/d/e/2PACX-1vQHFpJul7X9Kma_1EZho_vQw3ltx61QJOlIAuy-lKAxVPLK_I0nkWnZnx_A6fwfNe7MpvGI68-TsZCm/embed?start=false&amp;loop=false&amp;delayms=3000"
  },

]

const contextText: any = {
  cotton_bollworm_destroyed: `
  <p>2018 yilda Gretsiya va Turkiya mamlakatlaridan keltirilgan urug‘lik chigitda g‘o‘za kuyasi aniqlangandi. Gretsiyadan keltirilgan 400 kg. urug‘lik chigitning barchasi belgilangan tartibda yoqib yo‘q qilindi. Turkiyadan ketirilgan 90 t. urug‘lik chigitni esa belgilangan tartibda ortiga qaytarilib yuborildi.</p>
  
  <p>Shu o‘rinda g‘o‘za kuyasi haqida ma’lumot: G‘o‘za kuyasi yoki pushti ko‘sak qurti jahonning g‘o‘za ekadigan bir qator mamlakatlarida uchraydigan eng xavfli zararkunandalardan biri hisoblanadi. U o‘ziga xos ravishda ko‘payishi, ya’ni bu pushti qurt chigit ichida yashirin yashashi tufayli, chigit bilan dunyoning ko‘pgina mamlakatlariga tarqalib ketgan. Pushti ko‘sak qurti, har qanday ekologik sharoitlarga ko‘nika oladi, shu boisdan u 40° shimoliy va 35° janubiy kenglik doirasidagi tropik, subtropik va qisman mo‘’tadil iqlimli mamlakatlarning tuproq iqlim sharoitlariga tez moslashadi.</p>
  
  <p>G‘o‘za kuyasi diapauzaga kirgan qurt shaklida asosan chigit ichida qishlaydi. Mart-aprel oylarida g‘umbakka aylanadi, ko‘saklar paydo bo‘la boshlaganda kapalaklar uchib chiqadi. Ular kun botganda va tunda oziqlanadi va tuxum qo‘yadi. Tuxumlarini ko‘saklar va yosh barglarga bittadan yoki besh-o‘ntadan  qilib tuxum qo‘yadi. Bir dona kapalak olti-sakkiz kun mobaynida 250-500 tagacha tuxum qo‘yadi.</p>
  
  <p>Tuxumlarning rivojlanishi 3-14 kun davom etadi. Tuxumdan chiqqan qurt juda serharakat bo‘lib, shona, gul va ko‘saklarni tez yeydi. Pushti qurt tushgan shonalar so‘lib to‘kiladi. Yosh ko‘saklarni qurt teshib kirib zararlaydi va bunday ko‘saklar to‘kilib ketadi.  Etilgan ko‘saklar zararlansa, rivojlanishi va o‘sishi susayadi, chigitning bir qismi yetiladi, ammo normal tola hosil bo‘lmaydi. Zararlanish darajasi kuyaning ko‘p yoki kamligiga bog‘liq. Bitta ko‘sakda ikki-to‘rtta va undan ko‘proq qurt bo‘lishi mumkin. G‘o‘za kuyasi juda ko‘paygan yillari hosilning 80% va undan ko‘prog‘i yo‘qotiladi. Meksika davlatida g‘o‘za kuyasi tufayli hosilning 20-25% i boy beriladi. G‘o‘za kuyasi g‘o‘zadan tashqari gulxayridoshlar oilasiga mansub o‘simlik turlarida ham rivojlanishi mumkin.</p>
  
  <p>Hozirgi vaqtda g‘o‘za kuyasi deyarli bizga qo‘shni mamlakatlarda, Turkiya, Eron, Iroq, Afg‘oniston va Hindiston, janubiy-sharqda Yaponiya, Koreya va boshqa mamlakatlarda, Evropada – Gretsiya, Albaniya, Italiyada uchraydi. Amerika qit’asida – Meksika, Braziliya, Argentina, AQSh va boshqa mamlakatlarda ham g‘o‘zaga katta zarar yetkazadi, natijada hosildorlik kamayib ketadi.</p>
  
  <p>Zararkunanda mazkur mamlakatlardan (karantin tadbirlari qo‘llanilmaganda) savdo aloqalari orqali, asosan urug‘lik chigit, paxtaning o‘zi va paxta tolasi orqali tarqaladi. Zararkunanda kapalaklarining havo oqimlari orqali uchib o‘tish xavfi borligini ham aytish kerak. Bunday hol Janubiy Amerika mamlakatlarining ba’zilarida ro‘y bergan. Bunday xavf O‘zbekistonning janubiy qismidagi Afg‘oniston chegaralaridan (garchi bu mamlakatda pushti qurt hozircha uning Sharqiy viloyatlarida qayd etilgan bo‘lsada) Surxondaryoning qo‘shni g‘o‘za ekilgan dalalariga uchib o‘tishi mumkin.</p>
  
  <p>Respublikamizning fitosanitar xavfsizligini ta’minlashda “O‘simliklar karantini to‘g‘risida”gi Qonun asos sifatida xizmat qiladi, ammo katta mamlakatning kirib kelish  va chiqib ketish darvozalari  ko‘p bo‘lganligidan va fuqarolar qo‘l yuklari, cho‘ntaklarida ular olib kirayotgan urug‘larni tekshirish va topib olish imkoni bo‘lmaydi. Mana shuning uchun mamlakatga chet mamlakatlardan urug‘ ko‘chat va boshqa o‘simlik mahsulotlarini O‘simliklar karantini davlat inspeksiyasi bilan kelishilgan holda respublikamizga kiritilsa maqsadga muvofiq bo‘ladi. Shu tadbirlarni bajarmasdan  keltirilgan urug‘ va ko‘chatlar, o‘zi bilan bizda karantin hisoblangan turli xil hashoratlarni olib keladi va bu hashoratlar bizga katta iqtisodiy zarar etkazadi.</p>
  
  <p>Xulosa o‘rnida shuni ta’kidlash lozimki, chetdan har qanday ekish materialini olib kelishdan oldin O‘simliklar karantini davlat inspeksiyasi mutaxassislariga murojaat qilish zarur. Ana shunda hech kim zarar ko‘rmaydi va mamlakatimizning fitosanitar tozaligi to‘liq ta’minlangan bo‘ladi.</p>
  `,
  pests_detected: `
  <p>2019-yilning 4-yanvar kuni Qozog‘iston davlatidan keltirilgan 139 t. kartoshka kuya bilan zararlanganligi aniqlandi va fumigatsiya qilindi.</p>
  
  <p>Joriy yilning 4-yanvar kuni “Chuqursoy” O‘KChMga Qozog‘iston Respublikasidan keltirilgan 139 t. kartoshkadan namunalar tekshiruv uchun Markaziy karantin laboratoriyasiga yuborildi. Tekshiruvlardan so‘ng namunalarda kartoshka kuyasi va fuzarioz kasallik qo‘zg‘atuvchi zambrug‘lari aniqlandi. Markaziy karantin laboratoriyasi tomonidan 5 kun muddat ichida “O‘simliklar karantini to‘g‘risida”gi qonunda belgilangan tegishli karantin choralari amalga oshirilishi lozimligi to‘g‘risida xulosa berildi. Xulosaga ko‘ra keltirilgan kartoshka fumigatsiya qilindi.</p>
  
  <p>Shu o‘rinda kartoshka kuyasi haqida ma’lumot. Kartoshka ekiladigan 80 dan ortiq mamlakatda kolorado qo‘ng‘izi, kartoshka kuyasi va boshqa zararkunandalar uchraydi. Respublikamizda kartoshka kuyasi ilk bor Xorazm viloyatining Turkmaniston bilan chegaradosh Shovot, Gurlan, Qo‘shko‘pir tumanlarida aniqlangan. Hozirda bu xavfli karantin hasharot respublikamizning barcha kartoshka ekilayotgan maydonlarida tarqalmoqda.</p>
  
  <p>Kartoshka kuyasi — kartoshka, tamaki, baqlajon, pomidor va boshqa ituzumdoshlar oilasiga kiruvchi o‘simliklarga katta zarar yetkazuvchi xavfli hasharot hisoblanadi. Bu hasharot bir yilda 5-6 avlod beradi. Yoz mavsumida bir avlodning rivojlanishi 22-30 kun, qish mavsumida esa 2-4 oygacha davom etadi. Havo haroratining -40 va +36 daraja bo‘lishi kartoshka kuyasiga halokatli ta’sir qiladi. Kartoshka kuyasi yetuk lichinkalik yoki g‘umbaklik davrida qishlaydi. Kapalaklari bir yoki bir dona urug‘ini barglar, tamaki, kartoshka, pomidor, kartoshka mevasi, tuproqqa qo‘yadi.</p>
  
  <p>Kartoshka kuyasi mahsulot bir mamlakatdan ikkinchi mamlakatga olib kirilganda o‘tadi. Yoz mavsumida kartoshka kuyasi omborxonalarga to‘xtovsiz tuxum qo‘yadi. Kuya tarqalgan janubiy hududlarda va issiq omborlarda kartoshka kuyasi qishki uyquga kirmaydi. U ko‘chatlarga ham, o‘zini tutib olgan o‘simliklarga ham zarar yetkazadi. Ko‘chatlarning ayrim barglarini va ba’zan butun tupini quritib qo‘yadi.Tamaki o‘simligiga kuya tushsa, sanoat uchun yaroqli hosil bermaydi. Pomidor mevasini yaroqsiz qilib qo‘yadi.</p>
  
  <p>Bu ofatdan qutilish uchun urug‘ saqlanadigan omborlarni fumigatsiya qilish, urug‘lik kartoshkani tavsiya etiladigan preparat bilan ishchi eritma tayyorlab, ishlov berib, 2 soat dimlab, so‘ng omborga olib kirish lozim.</p>
  
  <p>Kartoshka ekilgan maydonlarda kartoshka kuyasi kapalagi ucha boshlaganda yoki lichinkasi aniqlanishi bilan kimyoviy ishlov berish kerak. 10-15 kundan so‘ng ikkinchi ishlovni o‘tkazish darkor.</p>
  
  <p>Oldini olishning yagona chorasi zararkunanda tarqalgan davlatlardan kelayotgan yuk mashinalari va yuklarni karantin tekshiruvidan o‘tkazish; sanoat yuklari va transport vositalarini zararsizlantirish; o‘simlik mahsulotlari ortilgan hududlarni 3 kvm.ga feromon tutqichlar yordamida tekshirib chiqish; ituzumdoshlar oilasiga kiruvchi o‘simliklarni doimiy nazorat qilish; kartoshka poyasi qurib qolishiga 5-7 kun qolganda o‘rib olish va yo‘qotish; daladan kartoshkani tez yig‘ishtirib olish va olib chiqib ketish; kartoshka hosilini brommetil bilan zararsizlantirishdir.</p>
  
  <p>Maxsulotlarni respublikamizga kiritish “O‘zdavkarantin” inspeksiyasi tomonidan berilgan karantin ruxsatnoma talabi asosida amalga oshiriladi. Maqsad ichki karantin ob’ekti hisoblangan qishloq xo‘jalik ekinlarini hasharot va zararkunandalardan himoya qilish va fitosanitar toza eksportbop mahsulotlar yetishtirishdir.</p>
  `,
  california_shields: `
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
  `,
  citrus_honeysuckle: `
  <p>2018-yilning 24-dekabr kuni Eron Islom Respublikasidan keltirilgan 42,3 tonna mandarin (barglari bilan) mahsulotida sitrus inli kuyasi aniqlandi va 29-dekabr kuni mazkur mahsulot inspeksiyaning fumigatorlari tomonidan zararsizlantirildi.</p>
  
  <p>Mazkur holat yuzasidan Eron Islom Respublikasiga e’tiroznoma jo‘natildi.</p>
  
  <p>Sitrus o‘simliklar uchun uchun eng katta havf  sitrus inli kuyasi – (Phyllocnistis citrella Stainton) hasharotidir. U sitrus o‘simliklariga katta zarar keltirib, ayniqsa, limon o‘simligining xavfli kushandasi hisoblanadi. Shu bilan bir qatorda u mandarin va greypfrutda ham yaxshi rivojlanadi.</p>
  
  <p>Sitrus inli kuyasi hasharoti Osiyo, Avstraliya, Janubiy Afrika, Sharqiy va G‘arbiy Afrika, Markaziy va Janubiy Amerika davlatlarida tarqalgan bo‘lib, O‘zbekistonda asosan, Toshkent viloyati hududida aniqlangan.</p>
  
  <p>Hasharot  kapalagining kulrang qanotlari 4-5 mm uzunlikda bo‘ladi. Oldingi juft qanoti ikkita to‘q chiziq, o‘rtasida esa V shaklida belgisi va tepa uchida qora dog‘lari bor. Qanotining o‘rta oldingi chetigacha uzun to‘q sariq rangda tuklari bor. Popuklari orqa qanotida hosil bo‘ladi. Orqa oyoqlarining boldir qismida tepaga qaragan qora o‘simtasi bor. U limon bargining ostki tomoniga joylashib kech kuzga qadar zarar keltiradi.</p>
  
  <p>Urg‘ochilar tuxumini kurtakka yoki o‘simliklarning o‘sish nuqtasiga, barglarning tepa qismiga 200 tagacha qo‘yishi mumkin. Embrional  rivojlanishi 10 kun davom etadi. Lichinkalar barg ichiga kirib olib 10-20 kun davomida rivojlanadi. Yosh barglar orasida ilon izi kabi uyalar hosil qilib barg parenximasi bilan oziqlanishi natijasida barg burishadi va quriydi. Odatda bitta bargda bitta uya bo‘ladi, kuchli zararlanganda 2 yoki 3 ta va undan ortiq ham bo‘lishi mumkin. Qarshiliklarga uchrashi bilan lichinka boshqa bargga o‘tadi. G‘umbakka aylanishidan oldin harakatlanishdan to‘xtaydi. G‘umbaklik davri pilla ichida o‘tadi. Zararkunanda bir yilda 6-7 ta ba’zan 10 ta avlod beradi. Bir avlodning rivojlanishi 38-43 kunni tashkil etadi. Sitrus inli kuyasi plantatsiyalarda va pitomniklarda sitrus ekinlarining yosh ko‘chatlarini zararlashi mumkin.</p>
  
  <p>Bu zararkunandaga qarshi kurashda birinchi navbatda ko‘chatliklarni muntazam tekshirish va ekspertiza qilish, ko‘chat va qalamchalar olinayotgan hududda zararkunanda tarqalmaganiga e’tibor qaratish lozim. Hasharot tarqalgan dalalardagi ko‘chatlarga esa fosfor-organik birikmalar bilan ishlov berish undan qutulishga yordam beradi.</p>
  
  <p>E’tiborli bo‘lish va ko‘chatlarni muntazam nazorat qilib borish turli ko‘ngilsiz xodislarning oldini oladi. Shunday ekan, bu masalada ham hafsala bilan ish tutish muvaffaqiyatga yetaklaydi.</p>
  `,
  georgia_mandarins: `
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
  `,
  imported_chine: `
  <p>Xitoy Xalq Respublikasidan Sirdaryo viloyatiga 3 million dona tut koʻchati Karantin ruxsatnomasisiz olib kirilgan.</p>

  <p><i>Karantin ruxsatnomasi – karantin ostidagi mahsulotni belgilangan tartibda Oʻzbekiston Respublikasi hududiga olib kirishga yoki uning hududidan tranzit tarzida olib oʻtishga ruxsat berilganligini tasdiqlaydigan, Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Oʻsimliklar karantini davlat inspeksiyasi tomonidan berilgan hujjat. Ushbu hujjatda respublikamizning fitosanitar talablari koʻrsatiladi.</i></p>

<p>Mazkur 3 million dona tut koʻchati boʻrtma nematoda bilan zararlangani uchun yoqish yoʻli bilan yoʻq qilingan.</p>

<p>Aytilishicha, mazkur tut koʻchati Oʻsimliklar karantini davlat inspeksiyasining Markaziy karantin laboratoriyasi tekshiruvidan oʻtkazilganda ildiz qismida boʻrtma nematoda topilgan va tegishli karantin choralari koʻrilishi yuzasidan xulosa berilgan.</p>

<p><i>Boʻrtma nematoda pomidor, bodring, sabzi, piyoz, gʻoʻza, gilos, oʻrik va boshqa ekinlarni kuchli zararlaydi. Boʻrtma nematoda bilan zararlangan mazkur ekinlar yoppasiga qurib qoladi. Lichinkalarning rivojlanishi natijasida oʻsimlik butunlay nobud boʻladi. Dunyo boʻyicha boʻrtma nematodalar bilan 2000 turga yaqin turli oilaga mansub madaniy va yovvoyi oʻsimliklar zararlangan, boʻrtma nematoda bilan zararlangan oʻsimliklarning soni yildan-yilga ortib bormoqda.</i></p>

<p>Inspeksiyasining taqdimnomasiga muvofiq, viloyat hokimligining qarori bilan tut koʻchatlari keltirilgan hududda karantin holati eʼlon qilindi. Xitoydan keltirilgan 3 million dona tut koʻchatlari viloyat ekologiya va atrof-muhitni muhofaza qilish boshqarmasining maxsus poligonida tegishli tashkilot va idoralarning masʼul xodimlari ishtirokida yoqish yoʻli bilan yoʻq qilindi.</p>

<p>Oʻzbekiston Respublikasi “Oʻsimliklar karantini toʻgʻrisida”gi Qonunining 29-moddasiga asosan respublika hududiga karantin ostidagi mahsulotlar hamda oʻsimliklarning ekish materiallarini (urugʻlik, koʻchat, tuganak, piyozbosh va boshlqalar) olib kirishdan avval “Oʻzdavkarantin” isnpeksiyasidan karantin ruxsatnomasi va fitosanitariya sertifikatini olish maqsadga muvofiqdir.</p>
  `,
  vine_germany: `
  <p>Mamlakatimizga Germaniya Federativ Respublikasidan olib kirilayotgan manzarali gul va daraxt ko‘chatlari Toshkent shahar “Arkbuloq” o‘simliklar karantini chegara maskani inspektorlari tomonidan karantin ko‘rigidan o‘tkazilganda ular orasida ko‘p miqdordagi tok ko‘chatlari borligi aniqlandi.</p>

  <p>Import qilinayotgan mahsulotlarga tegishli hujjatlar tekshirilganda mazkur tok ko‘chatlari uchun karantin ruxsatnomasi va fitosanitariya sertifikati yo‘qligi aniqlandi. Ushbu holat, O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi Qonuniga ziddir.</p>

  <p><i>Karantin ruxsatnomasi – karantin ostidagi mahsulotni belgilangan tartibda O‘zbekiston Respublikasi hududiga olib kirishga yoki uning hududidan tranzit tarzida olib o‘tishga ruxsat berilganligini tasdiqlaydigan, O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi tomonidan beriladigan hujjatdir.</i></p>

  <p><i>Fitosanitariya sertifikati – karantin ostidagi mahsulotda o‘simliklar karantini ob’ektlari mavjud emasligini tasdiqlovchi eksportyor davlatning tegishli o‘simliklar karantini tashkiloti tomonidan beriladigan xalqaro namunadagi hujjat.</i></p>

  <p>Mutaxassislarning aytishicha, aksar xorij mamlakatlarida tokning ashaddiy zararkunandasi filloksera (Dactylosphaera vitifoliae), bir necha turdagi bakteriya, virus va boshqa kasallik qo‘zg‘atuvchilari mavjud va ularning tok ko‘chatlari bilan O‘zbekistonga kirib kelib mahalliy tokzorlar nobud bo‘lishiga sabab bo‘lishi mumkin.</p>

  <p><i>Filloksera bilan zararlangan tok ko‘chatlari o‘sish va rivojlanishdan orqada qoladi, hosildorligi pasayadi, bir necha yildan keyin tok qurib qoladi. Filloksera bilan zararlangan barglarda bo‘rtmalar hosil bo‘ladi, barglar deformatsiyaga uchraydi, yosh tok ko‘chatlari hosilga kirmasdan nobud bo‘ladi. Filloksera monofag bo‘lib, ya’ni, faqat tok o‘simligining barglari, novdalari, gajaklari, ildiz qismi va mevalarini jiddiy zararlaydi. Filloksera hashorati tushgan tokzorlarni nobud qilishi jahon tajribasidan ma’lum. O‘zbekiston uchun bu zararkunanda tashqi karantin ob’ekti hisoblanadi.</i></p>

  <p>O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi qonuni talablariga muvofiq, shuningdek, respublika fitosanitar tozalagini hisobga olib noqonuniy yo‘l bilan Germaniyadan keltirilgan tok ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>

  <p>O‘zbekiston Respublikasi “O‘simliklar karantini to‘g‘risida”gi Qonunining 29-moddasiga asosan, respublika hududiga karantin ostidagi mahsulotlar hamda o‘simliklarning ekish materiallarini (urug‘lik, ko‘chat, tuganak, piyozbosh va boshqalar) olib kirishdan avval “O‘zdavkarantin” isnpeksiyasiga murojaat etishlari maqsadga muvofiqdir.</p>
  `,
  imported_afghanistan: `
  <p>Mamlakatimizga Afg‘oniston Islom Respublikasidan olib kirilayotgan mevali daraxt ko‘chatlari "Olmaliq" Tashqi iqtisodiy faoliyat inspektorlari tomonidan karantin ko‘rigidan o‘tkazilganda bir qator qonun buzilish holatlari aniqlandi. Minglab tok, olxo‘ri va archa ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>

  <p>O‘rnatilgan tartibga ko‘ra, O‘zbekiston Respublikasiga olib kiriladigan o‘simliklar zararkunanda va begona o‘tlar, turli kasalliklar, shuningdek, boshqa karantin organizmlardan holi bo‘lishi shart.</p>

  <p>Mazkur taomilga asosan, import qilinayotgan mevali daraxt ko‘chatlari va ularga tegishli hujjatlar tekshirilganda “O‘simliklar karantini to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni talablariga zid holatlar va karantindagi zararkunandalar aniqlandi. Xususan, karantin ruxsatnomasida uzum va olxo‘ri ko‘chatlari qayd etilmagan. Namunalarda Staphylinidae oilasiga mansub qo‘ng‘iz, Bibio morci – qora pashsha, Hymenoptera – qanotli hashorat topildi. Archa ko‘chati fitosanitar talablarga javob bermaydi. Uzum Oidium tuckeri Berk – oidium zambrug‘ kasallik qo‘zg‘atuvchilari bilan zararlangan. Olxo‘rida Pseudomonas syringae – bakterial rak mavjud.</p>

  <p>O‘zbekiston Respublikasining “O‘simliklar karantini to‘g‘risida”gi qonuni talablariga muvofiq, shuningdek, respublika fitosanitar tozalagini hisobga olib mazkur holatga tegishli karantin chorasi qo‘llanildi: 34 ming tok, 10 ming 400 olxo‘ri va 120 dona archa ko‘chatlari yoqish yo‘li bilan yo‘q qilindi.</p>

  <p>Eslatib o‘tamiz, O‘zbekiston Respublikasi “O‘simliklar karantini to‘g‘risida”gi Qonunining 29-moddasiga asosan, respublika hududiga karantin ostidagi mahsulotlar hamda o‘simliklarning ekish materiallarini (urug‘lik, ko‘chat, tuganak, piyozbosh va boshqalar) olib kirishdan avval “O‘zdavkarantin” isnpeksiyasiga murojaat etishlari maqsadga muvofiqdir.</p>
  `
}

function QuarantineOrganisms() {

  return (
    <div className="quarantine-organisms page_card">
      <h4 className="page_title">
        O'zbekiston Respublikasi hududlarida cheklangan ravishda tarqalgan zararli o'simliklar karantini organizmlari
      </h4>
      <div className="quarantine_body">
        {
          sliderLinks?.map(slider => (
            <QuarantineSlider {...slider} />
          ))
        }
      </div>
    </div>
  )
}

export default QuarantineOrganisms