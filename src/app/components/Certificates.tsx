import Image from "next/image";
const Certificates = () => {
  return (
    <div className="text-white flex flex-col items-center mt-20 mb-20">
      <h3 className="text-xl font-bold mb-5 text-center">Certifications</h3>
      <div className="">
        <p className="mb-3">Coursera: Meta Advanced React</p>
        <a href="https://coursera.org/share/30bb79982bd04bec62b5322461fdbb4a">
          <Image
            src="/advancedReact.jpeg"
            alt="advancedReact certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">
          Coursera: IBM Developing Front-End Apps with React
        </p>
        <a href="https://coursera.org/share/8fd016b332423bbe513a5f07272cc82c">
          <Image
            src="/IBMReact.jpeg"
            alt="IBMReact certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">
          Coursera: Meta Introduction to Front-End Development
        </p>
        <a href="https://coursera.org/share/c9cea21d40226d08f8bdc8a884322a65">
          <Image
            src="/frontEnd.jpeg"
            alt="frontEnd certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta Programming with JavaScript</p>
        <a href="https://coursera.org/share/00207c44b3ada02ab54aeccdfa1ef360">
          <Image
            src="/javascript.jpeg"
            alt="javascript certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta Version Control</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/W1DIDWB8M5W8">
          <Image
            src="/versionControl.jpeg"
            alt="versionControl certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta HTML and CSS in depth</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/77ZYO0F8A3Z8">
          <Image
            src="/HtmlCssInDepth.jpeg"
            alt="HTML and CSS in depth certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta React basics</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/NM2Y61PW8ACR">
          <Image
            src="/reqctBasics.jpeg"
            alt="React basics certificate icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta Principles of UX/UI Design</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/CLN8UTKX637U">
          <Image
            src="/UxUiDesign.jpeg"
            alt="Principles of UX/UI Design"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta Front-End Developer Capstone</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/1KZS9AJLMT2I">
          <Image src="/capstone.jpeg" alt="capstone" width={500} height={500} />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: Meta Coding Interview Preparation</p>
        <a href="https://www.coursera.org/account/accomplishments/verify/E8PH8CN5NLRX">
          <Image src="" alt="" width={500} height={500} />
        </a>
      </div>
    </div>
  );
};

export default Certificates;
