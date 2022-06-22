import React from 'react'

const cottonBollwormDestroyedText = `
<p>2018 yilda Gretsiya va Turkiya mamlakatlaridan keltirilgan urug‘lik chigitda g‘o‘za kuyasi aniqlangandi. Gretsiyadan keltirilgan 400 kg. urug‘lik chigitning barchasi belgilangan tartibda yoqib yo‘q qilindi. Turkiyadan ketirilgan 90 t. urug‘lik chigitni esa belgilangan tartibda ortiga qaytarilib yuborildi.</p>

<p>Shu o‘rinda g‘o‘za kuyasi haqida ma’lumot: G‘o‘za kuyasi yoki pushti ko‘sak qurti jahonning g‘o‘za ekadigan bir qator mamlakatlarida uchraydigan eng xavfli zararkunandalardan biri hisoblanadi. U o‘ziga xos ravishda ko‘payishi, ya’ni bu pushti qurt chigit ichida yashirin yashashi tufayli, chigit bilan dunyoning ko‘pgina mamlakatlariga tarqalib ketgan. Pushti ko‘sak qurti, har qanday ekologik sharoitlarga ko‘nika oladi, shu boisdan u 40° shimoliy va 35° janubiy kenglik doirasidagi tropik, subtropik va qisman mo‘’tadil iqlimli mamlakatlarning tuproq iqlim sharoitlariga tez moslashadi.</p>

<p>G‘o‘za kuyasi diapauzaga kirgan qurt shaklida asosan chigit ichida qishlaydi. Mart-aprel oylarida g‘umbakka aylanadi, ko‘saklar paydo bo‘la boshlaganda kapalaklar uchib chiqadi. Ular kun botganda va tunda oziqlanadi va tuxum qo‘yadi. Tuxumlarini ko‘saklar va yosh barglarga bittadan yoki besh-o‘ntadan  qilib tuxum qo‘yadi. Bir dona kapalak olti-sakkiz kun mobaynida 250-500 tagacha tuxum qo‘yadi.</p>

<p>Tuxumlarning rivojlanishi 3-14 kun davom etadi. Tuxumdan chiqqan qurt juda serharakat bo‘lib, shona, gul va ko‘saklarni tez yeydi. Pushti qurt tushgan shonalar so‘lib to‘kiladi. Yosh ko‘saklarni qurt teshib kirib zararlaydi va bunday ko‘saklar to‘kilib ketadi.  Etilgan ko‘saklar zararlansa, rivojlanishi va o‘sishi susayadi, chigitning bir qismi yetiladi, ammo normal tola hosil bo‘lmaydi. Zararlanish darajasi kuyaning ko‘p yoki kamligiga bog‘liq. Bitta ko‘sakda ikki-to‘rtta va undan ko‘proq qurt bo‘lishi mumkin. G‘o‘za kuyasi juda ko‘paygan yillari hosilning 80% va undan ko‘prog‘i yo‘qotiladi. Meksika davlatida g‘o‘za kuyasi tufayli hosilning 20-25% i boy beriladi. G‘o‘za kuyasi g‘o‘zadan tashqari gulxayridoshlar oilasiga mansub o‘simlik turlarida ham rivojlanishi mumkin.</p>

<p>Hozirgi vaqtda g‘o‘za kuyasi deyarli bizga qo‘shni mamlakatlarda, Turkiya, Eron, Iroq, Afg‘oniston va Hindiston, janubiy-sharqda Yaponiya, Koreya va boshqa mamlakatlarda, Evropada – Gretsiya, Albaniya, Italiyada uchraydi. Amerika qit’asida – Meksika, Braziliya, Argentina, AQSh va boshqa mamlakatlarda ham g‘o‘zaga katta zarar yetkazadi, natijada hosildorlik kamayib ketadi.</p>

<p>Zararkunanda mazkur mamlakatlardan (karantin tadbirlari qo‘llanilmaganda) savdo aloqalari orqali, asosan urug‘lik chigit, paxtaning o‘zi va paxta tolasi orqali tarqaladi. Zararkunanda kapalaklarining havo oqimlari orqali uchib o‘tish xavfi borligini ham aytish kerak. Bunday hol Janubiy Amerika mamlakatlarining ba’zilarida ro‘y bergan. Bunday xavf O‘zbekistonning janubiy qismidagi Afg‘oniston chegaralaridan (garchi bu mamlakatda pushti qurt hozircha uning Sharqiy viloyatlarida qayd etilgan bo‘lsada) Surxondaryoning qo‘shni g‘o‘za ekilgan dalalariga uchib o‘tishi mumkin.</p>

<p>Respublikamizning fitosanitar xavfsizligini ta’minlashda “O‘simliklar karantini to‘g‘risida”gi Qonun asos sifatida xizmat qiladi, ammo katta mamlakatning kirib kelish  va chiqib ketish darvozalari  ko‘p bo‘lganligidan va fuqarolar qo‘l yuklari, cho‘ntaklarida ular olib kirayotgan urug‘larni tekshirish va topib olish imkoni bo‘lmaydi. Mana shuning uchun mamlakatga chet mamlakatlardan urug‘ ko‘chat va boshqa o‘simlik mahsulotlarini O‘simliklar karantini davlat inspeksiyasi bilan kelishilgan holda respublikamizga kiritilsa maqsadga muvofiq bo‘ladi. Shu tadbirlarni bajarmasdan  keltirilgan urug‘ va ko‘chatlar, o‘zi bilan bizda karantin hisoblangan turli xil hashoratlarni olib keladi va bu hashoratlar bizga katta iqtisodiy zarar etkazadi.</p>

<p>Xulosa o‘rnida shuni ta’kidlash lozimki, chetdan har qanday ekish materialini olib kelishdan oldin O‘simliklar karantini davlat inspeksiyasi mutaxassislariga murojaat qilish zarur. Ana shunda hech kim zarar ko‘rmaydi va mamlakatimizning fitosanitar tozaligi to‘liq ta’minlangan bo‘ladi.</p>
`

function CottonBollwormDestroyed() {
  return (
    <div className="cotton_bollworm_destroyed page_card">
      <h4 className="page_title">
        G‘o‘za kuyasi aniqlangan chigit yo‘q qilindi
      </h4>
      <div className="cotton_bollworm_destroyed_body" dangerouslySetInnerHTML={{ __html: cottonBollwormDestroyedText }}>

      </div>
    </div>
  )
}

export default CottonBollwormDestroyed