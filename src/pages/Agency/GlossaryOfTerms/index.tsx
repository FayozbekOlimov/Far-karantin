

const glossaryTerms = `
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

function GlossaryOfTerms() {
  return (
    <div className='glossary_terms page_card'>
      <h4 className="page_title">
        O'simliklar karantini sohasida qo'llaniladigan atamalar lug'ati
      </h4>
      <div className="glossary_terms_body" dangerouslySetInnerHTML={{ __html: glossaryTerms }}>

      </div>
    </div>
  )
}

export default GlossaryOfTerms