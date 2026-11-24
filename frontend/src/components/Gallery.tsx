import Placeholder from "./Placeholder";

// Усі фото з папки src/assets/gallery (jpg, jpeg, png, webp), у порядку pic1, pic2, ... pic10
const files = import.meta.glob<string>("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const photos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Фотогалерея закладу</h2>
        <div className="grid grid--gallery">
          {photos.length > 0
            ? photos.map((url, i) => (
              <img key={url} className="gallery-img" src={url} alt={`Фото клініки ${i + 1}`} loading="lazy" decoding="async" />
            ))
            : Array.from({ length: 6 }, (_, i) => <Placeholder key={i} label={`Фото ${i + 1}`} ratio="4 / 3" />)}
        </div>
      </div>
    </section>
  );
}