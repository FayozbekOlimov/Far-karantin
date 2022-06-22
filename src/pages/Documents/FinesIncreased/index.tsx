import React from 'react'

const finesIncreasedText = `
<p>O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartish va qo‘shimchalar kiritildi.</p>

<p>Kiritilgan o'zgartish va qo'shimchalarga muvofiq, karantin e’lon qilingan zararkunandalarga, o‘simliklar kasalliklariga va begona o‘tlarga qarshi kurashning sanitariya qoidalarini va boshqa xil qoidalarni buzganlik hamda yer egalari va yerdan foydalanuvchilar tomonidan zaharli begona o‘tlarga qarshi kurash choralarini ko‘rmaganlik uchun solinadigan jarima miqdori oshdi.</p>

<p>Xususan, hujjatning 107-modda, birinchi qismi sanksiyasidagi «uchdan bir qismidan bir baravarigacha, mansabdor shaxslarga esa – bir baravaridan ikki baravarigacha» degan so‘zlar <strong>«bir baravaridan uch baravarigacha, mansabdor shaxslarga esa – uch baravaridan besh baravarigacha»</strong> degan so‘zlar bilan almashtirildi. Ushbu moddaning ikkinchi qismi sanksiyasidagi <i>«uchdan bir qismidan bir baravarigacha, mansabdor shaxslarga esa – bir baravaridan ikki baravarigacha»</i> degan so‘zlar <strong>«bir baravaridan uch baravarigacha, mansabdor shaxslarga esa – uch baravaridan besh baravarigacha»</strong> degan so‘zlar bilan almashtirildi.</p>

<p>Bundan tashqari, chet mamlakatlardan keltirilib, karantin tekshiruvidan va tegishli ishlov berishdan o‘tkazilmagan materiallarni chegaradagi daryo portlaridan (pristanlaridan), temir yo‘l stansiyalaridan, avtovokzallardan (avtostansiyalardan), aeroportlardan va boshqa chegara punktlaridan tashib chiqib ketgan shaxsga qo‘llaniladigan jarima miqdori ham oshirildi.</p>

<p>Ilgari, O‘zRMJKning 108-modda sanksiyasidagi <i>«ikkidan bir qismidan ikki baravarigacha, mansabdor shaxslarga esa – ikki baravaridan besh baravarigacha»</i> degan so‘zlar, endilikda <strong>«ikki baravaridan besh baravarigacha, mansabdor shaxslarga esa – besh baravaridan o‘n baravarigacha»</strong> degan so‘zlar bilan almashtirildi. Shuningdek, 108-modda quyidagi mazmundagi ikkinchi qism bilan to‘ldirildi:</p>

<p><strong>«Huddi shunday huquqbuzarlik ma’muriy jazo chorasi qo‘llanilganidan keyin bir yil davomida takror sodir etilgan bo'lsa, huquqbuzarlik ashyolarini musodara qilib, fuqarolarga eng kam ish haqining besh baravaridan yetti baravarigacha, mansabdor shaxslarga esa – yetti baravaridan o‘n besh baravarigacha miqdorda jarima solishga sabab bo’ladi»</strong></p>
`

function FinesIncreased() {
  return (
    <div className="fines_increased page_card">
      <h4 className="page_title">
        Jarimalar miqdori oshirildi
      </h4>
      <div className="fines_increased_body">
        <p dangerouslySetInnerHTML={{ __html: finesIncreasedText }}></p>


        <a
          className="stuff_link"
          href="/assets/docs/stuff_info.doc"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-regular fa-file-pdf"></i>
          Jarimalar miqdori oshirildi (0.45 Mb)
          Ko'chirib olish
        </a>
      </div>
    </div>
  )
}

export default FinesIncreased