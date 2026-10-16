import { reviews } from "../data/services";
import { site } from "../config/site";

export default function Reviews() {
  return (
    <section id="reviews" className="section section--tint">
      <div className="container">
        <h2>Відгуки пацієнтів</h2>
        <div className="grid grid--reviews">
          {reviews.map((r) => (
            <blockquote key={r.id} className="review">
              <p>{r.text}</p>
              <footer>{r.author}</footer>
            </blockquote>
          ))}
        </div>
        <div className="review-cta">
          <p>Вам сподобався візит? Розкажіть про враження у відгуку.</p>
          <a className="btn btn--outline" href={site.reviewUrl} target="_blank" rel="noreferrer">Написати відгук</a>
        </div>
      </div>
    </section>
  );
}
