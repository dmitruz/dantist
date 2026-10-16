import { site } from "../config/site";
import { useAppointment } from "../context/AppointmentContext";
import Placeholder from "./Placeholder";

export default function Hero() {
  const { openAppointment } = useAppointment();
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>{site.name}: {site.tagline.toLowerCase()}</h1>
          <p>{site.intro}</p>
          <button className="btn btn--primary btn--lg" onClick={openAppointment}>Записатись на прийом</button>
        </div>
        <Placeholder label="Фото клініки" ratio="5 / 4" className="hero__img" />
      </div>
    </section>
  );
}
