import React from 'react'

const pestControlText = `
<p>O‘zbekiston Respublikasi Prezidentining “O‘simliklar karantini bo‘yicha davlat xizmati faoliyatining samaradorligini oshirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida” 2018 yil 28 mardagi PQ-3626-son Qarori bilan “O‘zdavkarantin” inspeksiyasiga eksportbop sifatli qishloq xo‘jalik mahsulotlarini yetishtirishda zararkunanda-hasharotlarni paydo bo‘lishini vaqtida aniqlab, samarali kurash tadbirlarini amalga oshirish vazifasi ham yuklatilgan. Mazkur vazifani amalga oshirishda zararkunandalarni feramonlar yordamida monitoring qilib, ko‘payishi va tarqalishi aniqlanadi va ushbu ma’lumotlar asosida, kurash tadbirlarini o‘z vaqtida o‘tkazish katta ahamiyat kasb etadi.</p>

<p>Shu maqsadda, “O‘zdavkarantin” inspeksiyasi tomonidan karantindagi va boshqa xavfli zararkunandalarga qarshi 13 turdagi feromonlar belgilangan tartibda Respublikaning barcha qishloq xo‘jalik ekinlari yetishtiriladigan hududlariga yetkazib berildi. Hududlarda o‘simliklar karantini davlat inspektorlari tomonidan feramon tutqichlar tegishli mevali bog‘lar va issiqxonalarga o‘rnatilib, nazorat olib borilmoqda.</p>

<p>Feromon tutqichlar yordamida tutilgan o‘simliklar karantinidagi va boshqa zararkunanda hasharotlarning bahorda rivojlanish muddati va zichligi darajasi aniqlanadi. Zararkunandalarga qarshi kurash muddatlari to‘g‘ri belgilanadi. Feromon tutqich ma’lumotlaridan mavsumda hasharotlarning nechta avlod berib rivojlanishi, rivojlanish bosqichlarining muddatlari va rivojlanishining fenologik jadvalini tuzishda ham foydalaniladi. Fenologik jadval har bir hudud uchun iqlim sharoitidan va zararkunandalarning rivojlanishidan kelib chiqib alohida tuziladi, hamda qarshi kurash muddatlari belgilanadi.</p>

<p>Feromon tutqichga tushgan zararkunanda hasharotlarning zichligiga qarab qaysi himoya usulini va qaysi muddatda qo‘llash kerakligi aniqlanadi. Biologik, kimyoviy va boshqa kurash usullarining eng samarali muddatlari aniqlanadi. Bu esa, o‘z vaqtida zararkunandalarga qarshi kurash olib borish hisobiga zararni oldini olish va ortiqcha ishlovlarga chek qo‘yish imkonini beradi. Feromon tutqichlar monitoringini amalga oshirish natijasida ortiqcha kimyoviy kurash tadbirlari o‘tkazish uchun sarflanadigan xarajatlar tejalishiga erishiladi.</p>

<p><strong><i>Feromon tutqichlarni dalaga o‘rnatish.</i></strong> Feromon tutqichlar qo‘llanish maqsadi va ekin turiga qarab turli miqdorda o‘rnatiladi. Feromon tutqich aynan zararkunandaning uchish balandligida joylashtiriladi. Ikkinchi tomondan, tutqichlarning yuqorida joylanishi uning ichida havoning oson aylanishi oqibatida feramon hidining yaxshi tarqalishiga imkoniyat yaratiladi. Feromon tutqichlarni har bir viloyat yoki tuman sharoitiga bog‘liq holda, zarakunandalarning birinchi avlodi rivojlana boshlashi oldidan o‘rnatish talab etiladi.</p>

<p>Feromon tutqichlardan zararkunandaning qishlovdan chiqish muddatini aniqlashdan tashqari ekinlarni zararkunandalardan himoya qilish maqsadida ham foydalanish mumkin. Bunda ulardan zararkunandalarni ko‘plab miqdorda tutish yoki ularni chalg‘itish yo‘li bilan yo‘qotishga hamda o‘simliklarga yetkazadigan zararini kamaytirishga erishiladi. Feromon tutqichlarda insektitsid aralashmalari yoki sterilizatorlarni (bepusht qiluvchi) ham birga qo‘llash mumkin. Feromon tutqichlarda erkak zararkunanda hasharotlarni ko‘plab yo‘q qilish orqali ularni urg‘ochilari bilan juftlashuviga yo‘l qo‘yilmaydi, urg‘ochilarini qo‘ygan tuxumi puch bo‘lib qoladi. Natijada o‘simliklarga yetkaziladigan zararning oldi olinadi.</p>

<p>Farg‘ona vodiysi viloyatlarining ba’zi gilos yetishtirilayotgan hududlarida feromon tutqichlarni qo‘llash natijasida gilos pashshasini qishlovdan aprel oyida chiqishi va tarqalayotganligi aniqlandi. Bu zararkunanda gilos va olchaning xavfli zararkunandasi bo‘lib, yetishtirilgan mahsulotni sifatini pasaytirib, eksportbopligi va xaridorgirligiga jiddiy zarar yetkazadi. Gilos pashshasi mavsumda bir avlod berib rivojlanadi, ular bahorda harorat 18 gradusdan yuqori bo‘lganda, gilos va olcha mevalariga 150 tagacha tuxum qo‘yadi. Tuxumidan chiqqan lichinkalari, 15-20 kun davomida gilos mevalari bilan oziqlanib hosilning sifatiga, hosildorligiga katta zarar yetkazadi.</p>

<p>Aniqlangan gilos pashshalariga qarshi biologik kurash tadbirlari, ya’ni oltinko‘z entomofagi qo‘llanildi. Feromon tutqichga ko‘plab tushgan dalalarda zararkunandaga qarshi abomektin, imidokloprid va lyamidotsigolatrin ta’sirchan moddali insektitsidlar bilan ishlovlar o‘tkazilib, zararkunandaga qarshi samarali kurash olib borildi.</p>
`

function PestControl() {
  return (
    <div className="pest_control page_card">
      <h4 className="page_title">
        Zararkunandalarga qarshi kurashda feromon tutqichlardan foydalanishning ahamiyati
      </h4>
      <div className="pest_control_body" dangerouslySetInnerHTML={{ __html: pestControlText }}>

      </div>
    </div>
  )
}

export default PestControl