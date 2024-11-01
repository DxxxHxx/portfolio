import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import ProgressBar from "../components/common/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
