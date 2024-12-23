import Image from "next/image";
const Certificates = () => {
  return (
    <div className="text-white flex flex-col items-center">
      <h3 className="text-center">Certifications</h3>
      <div>
        <p>Coursera: Meta Advanced React</p>
        <a href="https://coursera.org/share/30bb79982bd04bec62b5322461fdbb4a">
          <Image
            src="/advancedReact.jpeg"
            alt="linkedin icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div>
        <p>Coursera:IBM Developing Front-End Apps with React</p>
        <a href="https://coursera.org/share/8fd016b332423bbe513a5f07272cc82c">
          <Image
            src="/IBMReact.jpeg"
            alt="linkedin icon"
            width={500}
            height={500}
          />
        </a>
      </div>
    </div>
  );
};

export default Certificates;
