// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Image from "next/image";
import Script from 'next/script'

/*
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
*/
export default function Portfolio() {
  return (
    <>
      <Script src='https://cdn.jsdelivr.net/npm/smyld-lib-common@1.0.35/main.min.js'></Script>
      <Script src="https://cdn.jsdelivr.net/npm/smyld-lib-3d@0.1.36/dist/smyld-lib-3d.min.js"></Script>
      <Navbar />
      <Hero />
      <Image
        width={640}
        height={425}
        alt="Under Construction"
        src="/image/under_construction_1.png"
      />




      <ContactForm />
      <Footer />
    </>
  );
}
