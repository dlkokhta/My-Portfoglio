import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-white ">Contact Me</h1>
      <div className="mt-10 flex justify-between px-2">
        <a href="https://www.linkedin.com/in/dimitri-kokhtashvili-6a816a297/">
          <Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={30}
            height={30}
          />
        </a>

        <a href="https://github.com/dlkokhta">
          <Image src="/github.png" alt="github icon" width={30} height={30} />
        </a>

        <a href="mailto:dl.kokhtashvili@gmail.com">
          <Image
            className="h-[29px]"
            src="/mail.png"
            alt="mail icon"
            width={40}
            height={25}
          />
        </a>

        <div className="flex gap-2">
          <Image
            className="h-[29px]"
            src="/phone.png"
            alt="mail icon"
            width={30}
            height={30}
          />
          <h2 className="text-white text-lg">+995555331167</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
