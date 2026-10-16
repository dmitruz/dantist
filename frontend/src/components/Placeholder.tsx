interface Props {
  label?: string;
  ratio?: string; // напр. "4 / 3"
  className?: string;
}

/** Заглушка для фото. Замінити на <img> коли будуть реальні зображення. */
export default function Placeholder({ label = "Фото", ratio = "4 / 3", className = "" }: Props) {
  return (
    <div className={`placeholder ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
