import { site } from "../config/site";
import type { PriceItem } from "../types";

const formatPrice = (item: PriceItem) =>
    `${item.from ? "від " : ""}${item.price.toLocaleString("uk-UA")} грн`;

export default function PriceList({ items }: { items: PriceItem[] }) {
    return (
        <aside className="prices" aria-labelledby="prices-title">
            <h2 id="prices-title">Ціни</h2>
            {items.length === 0 ? (
                <p>Ціни на цю послугу уточнюйте за телефоном {site.phone}.</p>
            ) : (
                <ul>
                    {items.map((item, i) => (
                        <li key={`${i}-${item.name}`}>
                            <span>{item.name}</span>
                            <strong>{formatPrice(item)}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}