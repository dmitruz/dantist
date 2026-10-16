import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="footer__social">
          <a href={site.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
          <a href={site.social.telegram} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
