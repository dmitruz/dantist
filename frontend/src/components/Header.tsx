import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";
import { useAppointment } from "../context/AppointmentContext";

const nav = [
  ["Послуги", "/#services"],
  ["Сертифікати", "/#certificates"],
  ["Галерея", "/#gallery"],
  ["Відгуки", "/#reviews"],
  ["Контакти", "/#contacts"],
] as const;

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { openAppointment } = useAppointment();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">{site.name}</Link>
        <nav className={`nav ${menu ? "nav--open" : ""}`} onClick={() => setMenu(false)}>
          {nav.map(([label, to]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
        <a className="header__phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        <button className="btn btn--primary header__cta" onClick={openAppointment}>Записатись</button>
        <button className="burger" aria-label="Меню" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
