import { site } from "../config/site";
import { useAppointment } from "../context/AppointmentContext";

export default function Contacts() {
  const { openAppointment } = useAppointment();
  return (
    <section id="contacts" className="section">
      <div className="container contacts">
        <div>
          <h2>Ми чекаємо на вас</h2>
          <dl>
            <dt>Приходьте</dt><dd>{site.address}</dd>
            <dt>Телефонуйте</dt><dd><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></dd>
            <dt>Пишіть</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>Графік роботи</dt><dd>{site.hours.map((h) => <div key={h}>{h}</div>)}</dd>
          </dl>
          <button className="btn btn--primary" onClick={openAppointment}>Записатись на прийом</button>
        </div>
        <div className="map">
          {site.mapEmbedUrl
            ? <iframe src={site.mapEmbedUrl} title="Карта" loading="lazy" />
            : <div className="placeholder" style={{ height: "100%" }}><span>Карта Google Maps</span></div>}
        </div>
      </div>
    </section>
  );
}
