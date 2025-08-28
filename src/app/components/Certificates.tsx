import Image from "next/image";
const Certificates = () => {
  return (
    <>
      <div className="text-white flex flex-col items-center mt-20 mb-20">
        <h3 className="text-xl font-bold mb-5 text-center">Certifications</h3>
        <div className="">
          <p className="mb-3">Meta Front-End Developer</p>
          <a
            href="https://www.coursera.org/account/accomplishments/professional-cert/N4TLQPW9QH29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/CERTIFICATE_N4TLQPW9QH29.jpeg"
              alt="advancedReact certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">IBM Developing Front-End Apps with React</p>
          <a
            href="https://coursera.org/share/8fd016b332423bbe513a5f07272cc82c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/IBMReact.jpeg"
              alt="IBMReact certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">AWS Cloud Technical Essentials</p>
          <a
            href="https://coursera.org/share/bd41aa33c98da280270045f2bc2a99d9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/CERTIFICATE_6PEMJ1OOORT2.jpeg"
              alt="AWS Cloud Technical Essentials certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta Advanced React</p>
          <a
            href="https://coursera.org/share/60c0114e92950597682397f17acbee10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/advancedReact.jpeg"
              alt="advancedReact certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta Programming with JavaScript</p>
          <a
            href="https://coursera.org/share/00207c44b3ada02ab54aeccdfa1ef360"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/javascript.jpeg"
              alt="javascript certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta Introduction to Front-End Development</p>
          <a
            href="https://coursera.org/share/c9cea21d40226d08f8bdc8a884322a65"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/frontEnd.jpeg"
              alt="frontEnd certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta Version Control</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/W1DIDWB8M5W8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/versionControl.jpeg"
              alt="versionControl certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta HTML and CSS in depth</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/77ZYO0F8A3Z8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/HtmlCssInDepth.jpeg"
              alt="HTML and CSS in depth certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta React basics</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/NM2Y61PW8ACR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/reqctBasics.jpeg"
              alt="React basics certificate icon"
              width={500}
              height={500}
            />
          </a>
        </div>

        <div className="mt-10">
          <p className="mb-3">Meta Principles of UX/UI Design</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/CLN8UTKX637U"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/UxUiDesign.jpeg"
              alt="Principles of UX/UI Design"
              width={500}
              height={500}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Certificates;
