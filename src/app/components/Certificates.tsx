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
            alt="linkedin icon"
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="mt-10">
        <p className="mb-3">Coursera: IBM Developing Front-End Apps with React</p>
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
