import Hero from "../components/Hero";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Certificates />
      <Gallery />
      <Reviews />
      <Contacts />
    </>
  );
}
