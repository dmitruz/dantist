import Placeholder from "./Placeholder";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Фотогалерея закладу</h2>
        <div className="grid grid--gallery">
          {Array.from({ length: 8 }, (_, i) => (
            <Placeholder key={i} label={`Фото ${i + 1}`} ratio="4 / 3" />
          ))}
        </div>
      </div>
    </section>
  );
}
