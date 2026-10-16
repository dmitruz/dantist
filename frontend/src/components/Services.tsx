import { services } from "../data/services";
import { useAppointment } from "../context/AppointmentContext";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { openAppointment } = useAppointment();
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Які послуги ми надаємо</h2>
        <p className="section__lead">
          Лікування, протезування, імплантація та профілактика з гарантією, а також швидке виготовлення
          ортопедичних конструкцій.
        </p>
        <button className="btn btn--primary" onClick={openAppointment}>Записатись на прийом</button>
        <div className="grid grid--cards">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </div>
    </section>
  );
}
