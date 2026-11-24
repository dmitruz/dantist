import { site } from "../config/site";
import { useAppointment } from "../context/AppointmentContext";
import Placeholder from "./Placeholder";

const found = import.meta.glob<string>("../assets/mainpic.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const mainPic = Object.values(found)[0];

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
        {mainPic ? (
          <img className="hero__photo" src={mainPic} alt="Фото клініки" />
        ) : (
          <Placeholder label="Фото клініки" ratio="5 / 4" className="hero__img" />
        )}
      </div>
    </section>
  );
}