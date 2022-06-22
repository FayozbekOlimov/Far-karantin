import React from 'react'

const PlantQuarantineText = `
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

function PlantQuarantine() {
  return (
    <div className="plant_quarantine page_card">
      <h4 className="page_title">
        O'simliklar karantini va himoyasi agentligida karantin xizmatini tashkil qilishni takomillashtirish
      </h4>
      <div dangerouslySetInnerHTML={{ __html: PlantQuarantineText }}>

      </div>
    </div>
  )
}

export default PlantQuarantine