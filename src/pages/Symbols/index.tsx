import { Col, Row } from 'antd'
import './style.scss'

function Symbols() {
	return (
		<section className="symbols">
			<div className="container">
				<Row gutter={[16, 16]} justify="center">
					<Col xs={24} md={18}>
						<div className="page_card">
							<h3 className="symbols__title">Bayroq</h3>
							<div className="symbols__imgBx">
								<img src="http://karantin.uz/uploads/symbols/a9d5d93ec98972b5dd2ce9ab14dcc8d1.png" alt="flag" />
							</div>
							<div className="symbols__info">
								"O'zbekiston Respublikasi Davlat bayrog'i to'g'risida"gi qonun 1991 yil 18-noyabrda O'zbekiston Respublikasi Oliy Kengashining navbatdan tashqari o'tkazilgan VII sessiyasida qabul qilingan.

								Davlat bayrog'i va uning ramzi bugungi O'zbekiston sarhadida qadimda mavjud bo'lgan davlatlar bilan tarixan bog'liqligini anglatadi hamda respublikaning milliy-madaniy an'analarini o'zida mujassamlashtiradi.

								Bayroqdagi moviy rang tiriklik mazmuni aks etgan mangu osmon va obihayot ramzi. Timsollar tilida bu - yaxshilikni, donishmandlikni, halollikni, shon-shuhrat va sadoqatni bildiradi. Binobarin, Amir Temur davlati bayrog'ining rangi ham moviy rangda edi.

								Bayroqdagi oq rang - muqaddas tinchlik ramzi bo'lib, u kun charog'onligi va koinot yoritkichlari bilan uyg'unlashib ketadi. Oq rang – poklik, beg'uborlik, soflikni, orzu va hayollar tozaligi, ichki go'zallikka intilishning timsoli.

								Yashil rang – tabiatning yangilanish ramzi. U ko'pgina xalqlarda navqironlik, umid va shodumonlik timsoli hisoblanadi.

								Qizil chiziqlar – vujudimizda jo'shib oqayotgan hayotiy qudrat irmoqlarini anglatadi.

								Navqiron yarim oy tasviri bizning tarixiy an'analarimiz bilan bog'liq. Ayni paytda u qo'lga kiritilgan mustaqilligimiz ramzi ham.

								Yulduzlar barcha uchun ruhoniy, ilohiy timsol sanalgan. O'zbekiston Respublikasi Davlat bayrog'idagi 12 yulduz tasviri ham tarixiy an'analarimiz, qadimgi yilnomamizga bevosita aloqador. Bizning o'n ikki yulduzga bo'lgan e'tiborimiz O'zbekiston sarhadidagi qadimgi davlatlar ilmiy tafakkurida nujum ilmi taraqqiy etganligi bilan ham izohlanadi.

								Davlat bayrog'imizdagi 12 yulduz tasvirini o'zbek xalqi madaniyatining qadimiyligi, uning komillikka, o'z tuprog'ida saodatga intilishi ramzi sifatida tushunish lozim.
							</div>
							<h3 className="symbols__title">Gerb</h3>
							<div className="symbols__imgBx">
								<img src="http://karantin.uz/uploads/symbols/02a6db843a1b8862d3a7e05ce583b846.png" alt="flag" />
							</div>
							<div className="symbols__info">
								"O'zbekiston Respublikasi Davlat gerbi to'g'risida"gi Qonun 1992-yil 2-iyulda O'zbekiston Respublikasi Oliy Kengashining X-sessiyasida qabul qilingan.

								O'zbekiston Respublikasining Davlat gerbi gullagan vodiy uzra charaqlab turgan quyosh tasviridan hamda so'l tomonida bug'doy boshoqlari, o'ng tomonida ochilgan paxta chanoqlari suvrati tushirilgan chambardan iborat.

								Gerbning yuqori qismida respublika jipsligining ramzi sifatida sakkiz qirrali yulduz tasvirlangan: sakkiz qirra ichida joylashgan yarim oy va yulduz musulmonlarning qutlug' ramzidir.

								Gerbning markazida himmat, olijanoblik va fidoyilik timsoli bo'lgan afsonaviy Xumo qushi qanotlarini yozib turibdi. Ushbu ramz va timsollar xalqimizning tinchlik, yaxshilik, baxt-saodat, farovonlik yo'lidagi orzu-umidlarini ifodalaydi.

								Gerbning pastki qismida respublika Davlat bayrog'ini ifoda etuvchi chambar lentasining bandiga "O'zbekiston” deb yozib qo'yilgan.
							</div>
							<h3 className="symbols__title">Madhiya</h3>
							<div className="symbols__info">
								"O'zbekiston Respublikasining davlat madhiyasi to'g'risida"gi Qonun 1992 yil 10 dekabrda O'zbekiston Respublikasi Oliy Kengashining o'n birinchi sessiyasida qabul qilingan.
							</div>
							<div className="symbols__subtitle">
								<strong>Mutal Burhonov musiqasi</strong> <br />
								<strong>Abdulla Oripov so'zi</strong> <br />
								<strong>Madhiya matni</strong>
							</div>
							<div className="symbols__info">
								Serquyosh hur o'lkam, elga baxt, najot,
								Sen o'zing do'stlarga yo'ldosh, mehribon!
								Yashnagay to abad ilmu fan, ijod,
								Shuhrating porlasin toki bor jahon!

								Oltin bu vodiylar - jon O'zbekiston,
								Ajdodlar mardona ruhi senga yor!
								Ulug' xalq qudrati jo'sh urgan zamon,
								Olamni mahliyo aylagan diyor!

								Bag'ri keng o'zbekning o'chmas iymoni,
								Erkin, yosh avlodlar senga zo'r qanot!
								Istiqlol mash'ali tinchlik posboni,
								Xaqsevar, ona yurt, mangu bo'l obod!

								Oltin bu vodiylar - jon O'zbekiston,
								Ajdodlar mardona ruhi senga yor!
								Ulug' xalq qudrati jo'sh urgan zamon,
								Olamni mahliyo aylagan diyor!
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default Symbols