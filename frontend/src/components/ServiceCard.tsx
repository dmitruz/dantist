import { Link } from "react-router-dom";
import type { Service } from "../types";
import ServiceImage from "./ServiceImage";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card">
      <ServiceImage slug={service.slug} title={service.title} ratio="3 / 2" />
      <div className="card__body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
      </div>
    </Link>
  );
}
