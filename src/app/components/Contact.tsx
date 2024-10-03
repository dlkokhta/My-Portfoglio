import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-white lg:hidden">
        Contact
      </h1>
      <div className="mt-10 flex justify-between px-10 md:px-40 lg:px-0 lg:gap-5">
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

        <div className="group">
          <a href="tel:+995555331167">
            <div className="flex gap-2">
              <Image
                className="h-[29px]"
                src="/phone.png"
                alt="mail icon"
                width={30}
                height={30}
              />
              <span className="absolute left-10 bottom-1 opacity-0 transition-opacity duration-300 text-white bg-black px-2 py-1 rounded-md group-hover:opacity-100">
                +995555331167
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
