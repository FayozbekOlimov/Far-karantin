import { useT } from "../../../custom-hooks/useT";
import "./style.scss";

function FerganaMap() {
  const { t, lang } = useT();
  return (
    <div className="fergana_map">
      <div className="container">
        <div className="map">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A4f29062f8ed83d0b1c082fa3b3d8c8c4251d49f12e78f7e0123848e5c8a52cc9&amp;source=constructor" width="100%"
            height="400"
            title="FARG‘ONA VILOYATI O‘SIMLIKLAR KARANTINI VA HIMOYASI BOSHQARMASI"
            allowFullScreen={true}
            loading="lazy"
            style={{ borderRadius: "10px" }}
            frameBorder="0">
          </iframe>

          <div className="contact-data">
            <ul className="contact-data__list">
              <li className="contact-data__item">
                <i className="fa-solid fa-location-dot"></i>
                <p>{t(`fullAddress.${lang}`)}</p>
              </li>
              <li className="contact-data__item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+998 (71) 243 10 46">+998 (71) 243 10 46</a>
              </li>
              <li className="contact-data__item">
                <i className="fa-regular fa-clock"></i>
                <p>{t(`schedule.${lang}`)}: {t(`workingDays.${lang}`)}</p>
              </li>
              <li className="contact-data__item">
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:info@karantin.uz">info@karantin.uz</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FerganaMap