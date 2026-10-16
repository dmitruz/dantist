import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Прокручує до якоря (#services) або на початок сторінки при зміні маршруту. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
