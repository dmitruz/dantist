import Placeholder from "./Placeholder";

export default function Certificates() {
  return (
    <section id="certificates" className="section section--tint">
      <div className="container">
        <h2>Сертифікати та нагороди</h2>
        <div className="grid grid--certs">
          {Array.from({ length: 6 }, (_, i) => (
            <Placeholder key={i} label={`Сертифікат ${i + 1}`} ratio="3 / 4" />
          ))}
        </div>
      </div>
    </section>
  );
}
