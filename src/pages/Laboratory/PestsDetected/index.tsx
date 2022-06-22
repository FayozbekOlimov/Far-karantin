import React from 'react'

const pestsDetectedText = `
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

function PestsDetected() {
  return (
    <div className='pests_detected page_card'>
      <h4 className="page_title">
        139 tonna kartoshkadan zararkunanda aniqlandi
      </h4>
      <div className="pests_detected_body" dangerouslySetInnerHTML={{ __html: pestsDetectedText }}>

      </div>
    </div>
  )
}

export default PestsDetected