import React from 'react'

const citrusText = `
<p>2018-yilning 24-dekabr kuni Eron Islom Respublikasidan keltirilgan 42,3 tonna mandarin (barglari bilan) mahsulotida sitrus inli kuyasi aniqlandi va 29-dekabr kuni mazkur mahsulot inspeksiyaning fumigatorlari tomonidan zararsizlantirildi.</p>

<p>Mazkur holat yuzasidan Eron Islom Respublikasiga e’tiroznoma jo‘natildi.</p>

<p>Sitrus o‘simliklar uchun uchun eng katta havf  sitrus inli kuyasi – (Phyllocnistis citrella Stainton) hasharotidir. U sitrus o‘simliklariga katta zarar keltirib, ayniqsa, limon o‘simligining xavfli kushandasi hisoblanadi. Shu bilan bir qatorda u mandarin va greypfrutda ham yaxshi rivojlanadi.</p>

<p>Sitrus inli kuyasi hasharoti Osiyo, Avstraliya, Janubiy Afrika, Sharqiy va G‘arbiy Afrika, Markaziy va Janubiy Amerika davlatlarida tarqalgan bo‘lib, O‘zbekistonda asosan, Toshkent viloyati hududida aniqlangan.</p>

<p>Hasharot  kapalagining kulrang qanotlari 4-5 mm uzunlikda bo‘ladi. Oldingi juft qanoti ikkita to‘q chiziq, o‘rtasida esa V shaklida belgisi va tepa uchida qora dog‘lari bor. Qanotining o‘rta oldingi chetigacha uzun to‘q sariq rangda tuklari bor. Popuklari orqa qanotida hosil bo‘ladi. Orqa oyoqlarining boldir qismida tepaga qaragan qora o‘simtasi bor. U limon bargining ostki tomoniga joylashib kech kuzga qadar zarar keltiradi.</p>

<p>Urg‘ochilar tuxumini kurtakka yoki o‘simliklarning o‘sish nuqtasiga, barglarning tepa qismiga 200 tagacha qo‘yishi mumkin. Embrional  rivojlanishi 10 kun davom etadi. Lichinkalar barg ichiga kirib olib 10-20 kun davomida rivojlanadi. Yosh barglar orasida ilon izi kabi uyalar hosil qilib barg parenximasi bilan oziqlanishi natijasida barg burishadi va quriydi. Odatda bitta bargda bitta uya bo‘ladi, kuchli zararlanganda 2 yoki 3 ta va undan ortiq ham bo‘lishi mumkin. Qarshiliklarga uchrashi bilan lichinka boshqa bargga o‘tadi. G‘umbakka aylanishidan oldin harakatlanishdan to‘xtaydi. G‘umbaklik davri pilla ichida o‘tadi. Zararkunanda bir yilda 6-7 ta ba’zan 10 ta avlod beradi. Bir avlodning rivojlanishi 38-43 kunni tashkil etadi. Sitrus inli kuyasi plantatsiyalarda va pitomniklarda sitrus ekinlarining yosh ko‘chatlarini zararlashi mumkin.</p>

<p>Bu zararkunandaga qarshi kurashda birinchi navbatda ko‘chatliklarni muntazam tekshirish va ekspertiza qilish, ko‘chat va qalamchalar olinayotgan hududda zararkunanda tarqalmaganiga e’tibor qaratish lozim. Hasharot tarqalgan dalalardagi ko‘chatlarga esa fosfor-organik birikmalar bilan ishlov berish undan qutulishga yordam beradi.</p>

<p>E’tiborli bo‘lish va ko‘chatlarni muntazam nazorat qilib borish turli ko‘ngilsiz xodislarning oldini oladi. Shunday ekan, bu masalada ham hafsala bilan ish tutish muvaffaqiyatga yetaklaydi.</p>
`

function CitrusHoneysuckle() {
  return (
    <div className='citrus_honeysuckle page_card'>
      <h4 className="page_title">
        Sitrus inli kuyasi - mevalar kushandasi
      </h4>
      <div className="citrus_honeysuckle_body" dangerouslySetInnerHTML={{ __html: citrusText }}>

      </div>
    </div>
  )
}

export default CitrusHoneysuckle