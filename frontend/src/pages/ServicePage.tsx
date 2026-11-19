import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import { prices } from "../data/prices";
import PriceList from "../components/PriceList";
import { useAppointment } from "../context/AppointmentContext";
import Placeholder from "../components/Placeholder";

export default function ServicePage() {
  const { slug } = useParams();
  const { openAppointment } = useAppointment();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section container">
        <h1>Сторінку не знайдено</h1>
        <Link to="/#services">До списку послуг</Link>
      </section>
    );
  }

  return (
    <section className="section container service-page">
      <Link to="/#services" className="back">← Усі послуги</Link>
      <h1>{service.title}</h1>
      <div className="service-layout">
        <div className="service-layout__info">
          <Placeholder label={service.title} ratio="4 / 3" />
          <p className="section__lead">{service.short}</p>
          {/* TODO: детальний опис послуги */}
          <button className="btn btn--primary" onClick={openAppointment}>Записатись на прийом</button>
        </div>
        <PriceList items={prices[service.slug] ?? []} />
      </div>
    </section>
  );
}