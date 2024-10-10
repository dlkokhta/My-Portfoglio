import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold text-white lg:hidden">
        Contact
      </h1>
      <div className="mt-10 flex justify-between px-10 sm:px-32 lg:px-0 lg:gap-8">
        <a href="https://www.linkedin.com/in/dimitri-kokhtashvili-6a816a297/">
          <Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={25}
            height={25}
            // className="lg:w-6 lg:h-6"
          />
        </a>

        <a href="https://github.com/dlkokhta">
          <Image src="/github.png" alt="github icon" width={27} height={25} />
        </a>

        <a href="mailto:dl.kokhtashvili@gmail.com" className="lg:hidden">
          <Image
            className="h-[25px]"
            src="/mail.png"
            alt="mail icon"
            width={33}
            height={25}
          />
        </a>

        <div className="hidden lg:flex lg:flex-col lg:gap-5 mt-1">
          <div className="flex gap-3">
            <Image src="/mail.png" alt="mail icon" width={25} height={15} />
            <a
              href="mailto:dl.kokhtashvili@gmail.com"
              className="cursor-pointer"
            >
              dl.kokhtashvili@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <Image src="/phone.png" alt="phone icon" width={20} height={15} />
            <a className="cursor-pointer">+995555331167</a>
          </div>
        </div>

        <div className="group lg:hidden">
          <a href="tel:+995555331167">
            <div className="flex gap-2">
              <Image
                className="h-[26px]"
                src="/phone.png"
                alt="phone icon"
                width={25}
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
