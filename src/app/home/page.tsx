import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <main className="px-7 pt-5 pb-40">
      <About />
      <div className="to-transparen h-[0.5px] bg-gradient-to-r from-transparent via-slate-300 w-full mt-10"></div>
      <Skills />
    </main>
  );
};

export default HomePage;
