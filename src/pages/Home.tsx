import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Transition from "../components/common/Transition";

function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Transition(Home);
