import About from "./components/about/About";
import MoveTop from "./components/common/MoveTop";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <MoveTop />
    </>
  );
}
