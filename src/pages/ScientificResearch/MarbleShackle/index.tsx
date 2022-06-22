import React from 'react'

const marbleShackleText = `
<p>Marmar qandalasi (HALYOMORPHA HALYS) qalqonli qandalalar Pentatomidae oilasi, yarim qattiq qanotlilar turkumiga mansub. Yevropa davlatlari va AQSh qishloq xo‘jaligida jiddiy zararkunanda hisoblanadi.</p>

<p><strong>Tarqalishi:</strong> Zararkunandaning vatani Janubi-sharqiy Osiyo davlatlari Xitoy, Yaponiya, Koreya yarim oroli davlatlari, Tayvan va Vetnam hisoblanadi. Ushbu tur 1996-yilda butun AQSh hududida tarqala boshladi va 2014-yilda AQShning 34 ta shtatida va Kanadaning janubiy provinsiyasida uchrashi qayd etildi. 2007-yilda Shveysariyada, 2010-yilda esa Yangi Zelandiyada uchrashi haqida e’lon qilindi. 2010-yilda Angliyada AQShdan uchib kelgan samolyotning yo‘lovchi bagajidan zararkunandaning ikkita imagosi topilgan. 2014-yilda Rossiya Federatsiyasining Sochi shahri hududida ham zararkunandaning nimfalari topildi. 2015-yilning ikkinchi yarmidan boshlab Rossiyaning subtropik nam mintaqasi Abxaziya hududida qandalaning ommaviy ko‘payishi qayd etildi, bu esa 2016-yilda subtropik, sabzavot va poliz ekinlari hosilining jiddiy yo‘qotishiga olib keldi.</p>

<p><strong>Zarari:</strong> Marmar qandalasi hammaxo‘r bo‘lib 49 ta botanik oilaga mansub 300 dan ortiq qishloq xo‘jaligi mahsulotlariga zarar yetkazadi. Yosh lichinkalar va voyaga yetgan qandala doim bir xil o‘simlik turlari bilan oziqlanadi, ko‘pchiligi yosh bog‘lardagi mevalar va o‘simliklarni afzal ko‘radi.</p>

<p><strong>Morfologiyasi:</strong> Tanasinoksimon biroz yassilashgan, 10-17 mm uzunlikda bo‘ladi. Rangi jigarrang, lekin tanasining yuqori qismi va boshi qoramtir va oqish tusda bo‘ladi, bu esa o‘z navbatida, marmar rangini hosil qiladi. Tanasining pastki qismi oqish yoki oqish-jigarrang rangda, ba’zan esa kulrang va qora dog‘lari mavjud. Brochymena va Euschistus turiga nisbatan xarakterli jixati shundaki, mo‘ylovlarida oqish rangdagi uzukka o‘xshash chiziqlari mavjud. Oyoqlari jigarrang hamda oq chiziqlari ham mavjud.</p>

<p><strong>Bioekologiyasi:</strong> Voyaga yetgan qandala odamlarning xonadonlari va har xil binolarda qishlab qoladi. Bu zararkunanda devor yoriqlari va ularning tutashgan joylaridan uylar ichiga kirib oladi, o‘ziga qulay va issiqroq joylarda qishlab chiqadi. Shunday qilib, bir uyda bir necha minglab hasharotlar to‘planishi ham mumkin. Erta bahorda issiqlik manbaalari o‘chirilganda qandalalar o‘ylarning shiftiga yoki yorug‘lik lampalarning atrofida to‘planib bir qator noqulayliklar keltirib chiqaradi.</p>

<p>Bahorda urg‘ochi qandala 1,3 mmdan 1,6 mmgacha uzunlikda bo‘lgan oq rangli tuxumlarni qo‘ya boshlaydi. Odatda urg‘ochi qandala barglarning orqa tomoniga 20-30 tadan to‘p-to‘p qilib tuxum qo‘yadi. Tuxumdan chiqqan nimfalar bir necha kun tuxum qo‘yilgan joylarda qoladi. Bu tur lichinkalari besh yoshli fazadan iborat bo‘lib, har bir yosh lichinkalari bir-biriga o‘xshash, lekin bir jixati bilan farqlanadi. Birinchi yoshdagi nimfalar to‘q sariq yoki qizil rangda bo‘ladi. Ikkinchi yoshdagi bosqichda lichinkalarning rangi to‘qlashadi, deyarli qora rangda bo‘ladi. Oxirgi yoshdagi lichinkalar oqish-jigarrang tusga kiradi. To‘liq rivojlanish davri 35-45 kun davom etadi. Namli subtropik Rossiya va Abxaziyada bir yilda uch marta avlod berib rivojlanadi. Birinchi avlodi may oyining birinchi dekadasidan (tuxum quyishdan) to iyun oyining ikkinchi va uchinchi dekadasigacha davom etadi. Ikkinchi avlodi iyun oyining ikkinchi va uchinchi dekadasidan to avgust oyining birinchi dekadasigacha davom etadi. Uchinchi avlodi avgust oyining birinchi dekadasidan to oktyabr oyining birinchi dekadasigacha davom etadi. Shundan so‘ng imago ya’ni voyaga yetgan qandala qishgi diapauzaga ketadi.</p>
`

function MarbleShackle() {
  return (
    <div className='marble_shackle page_card'>
      <h4 className="page_title">
        Marmar qandalasining zarari nimada?
      </h4>
      <div className="marble_shackle_body" dangerouslySetInnerHTML={{ __html: marbleShackleText }}>

      </div>
    </div>
  )
}

export default MarbleShackle