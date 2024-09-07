import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <main className="px-7 pt-5 pb-40">
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default HomePage;
