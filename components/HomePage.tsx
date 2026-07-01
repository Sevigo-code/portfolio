import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDict, type Lang } from "@/lib/i18n";
import { getProjects } from "@/lib/projects";

export default function HomePage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const projects = getProjects(lang);

  return (
    <>
      <Nav t={dict.nav} />
      <main>
        <Hero t={dict.hero} />
        <About t={dict.about} />
        <Stack t={dict.stack} />
        <Experience t={dict.experience} />
        <Projects t={dict.projects} projects={projects} />
        <Services t={dict.services} />
        <Contact t={dict.contact} />
      </main>
      <Footer t={dict.footer} />
    </>
  );
}
