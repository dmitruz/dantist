import Placeholder from "./Placeholder";

const files = import.meta.glob<string>("../assets/services/*.{svg,jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
});

const bySlug: Record<string, string> = {};
Object.entries(files)
    .sort(([a], [b]) => Number(!a.endsWith(".svg")) - Number(!b.endsWith(".svg")))
    .forEach(([path, url]) => {
        const slug = path.split("/").pop()!.replace(/\.[^.]+$/, "");
        bySlug[slug] = url;
    });

interface Props {
    slug: string;
    title: string;
    ratio?: string;
}

export default function ServiceImage({ slug, title, ratio = "3 / 2" }: Props) {
    const src = bySlug[slug];
    if (!src) return <Placeholder label={title} ratio={ratio} />;

    return <img className="service-img" src={src} alt="" style={{ aspectRatio: ratio }} loading="lazy" decoding="async" />;
}