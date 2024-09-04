import Github from "../assets/github.png";

const Header = () => {
  return (
    <main className="flex flex-row">
      <div>
        <h3>Github</h3>
        <img src={Github.src} />
      </div>
    </main>
  );
};

export default Header;
