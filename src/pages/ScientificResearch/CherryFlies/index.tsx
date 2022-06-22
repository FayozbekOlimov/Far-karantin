import React from 'react'

const cherryFliesText = `
<p>Gilos pashshasi (Rhagoletis ceras) zararkunandani qanday aniqlash mumkin?</p>

<p>Bir ko‘rishda gilos pashshasini aniqlash qiyin. Ko‘pchilik bog‘bonlar uning mavjudligini faqat mevalarning zararlanishi ortganda va hosil deyarli nobud bo‘lganda biladi. Agar o‘tgan mavsumda zararkunanda tarqaganini aniqlagan bo‘lsangiz, demak tayyor turing, ayni mavsumda ham harorat qulay bo‘lganda zararkunandaning zarari seziladi.</p>

<p>Gilos pashshasi juda mayda 5,5 mmli pashsha bo‘lib, uning tanasi yorqin qora rangda, boshi va oyoqlari sariq, qanoti oq-qora bo‘lib, ko‘zlari mikroskopda och yashil tusda ko‘rinadi. Asosan lichinkalar mevalarni zararlaydi. Voyaga yetgan lichinkaning uzurligi 7 mm bo‘lib oq rangda bo‘ladi.</p>

<p>Gilos pashshasi bir yilda bir marta avlod beradi. Har bir pashsha 150 taga yaqin gilos yoki olchaga bittadan tuxum qo‘yib zararlaydi. Erta bahorda havo harorati +12⁰ +15⁰S bo‘lganda ya’ni mart oyining ikkinchi yarmida qishlab qolgan g‘umbaklardan pashshalar ucha boshlaydi va 12-14 kun o‘simlik shiralari ajratgan ekskrimentlar bilan oziqlanib havo harorati o‘rtacha +18⁰ +22⁰S bo‘lganda gilos va olchaning yosh mevalariga tuxum qo‘ya boshlaydi. Tuxum qo‘yib bo‘lgan pashshalar bir necha kundan so‘ng nobud bo‘ladi. 7-10 kundan so‘ng tuxumdan oq rangdagi lichinkalar chiqa boshlaydi. 0,5 mm uzunlikdagi lichinkalar 16-20 kun oziqlanib 7 mm uzunlikdagi voyaga yetgan lichinkaga aylanadi. So‘ng zararlangan mevani tark etib, yon atrofdagi begona o‘tlar, daraxtlarning yoriqlariga kirib g‘umbakka aylanadi va diapauzaga ketadi.</p>

<p>Qarshi kurashish chorasi sifatida qishlovdan chiqqan pashshalarga qarshi oltinko‘z entomofagining lichinkasi va ta’sir etuvchi moddasi abamektin, imidokloprid va lyambda-sigalotrin bo‘lgan insektotsidlar qo‘llaniladi.</p>
`

function CherryFlies() {
  return (
    <div className="cherry_flies page_card">
      <h4 className="page_title">
        O‘simliklar karantini va himoyasi ilmiy-tadqiqot instituti ogohlantiradi: gilos pashshasi – jiddiy zararkunanda
      </h4>
      <div className="cherry_flies_body" dangerouslySetInnerHTML={{ __html: cherryFliesText }}>

      </div>
    </div>
  )
}

export default CherryFlies