import Image from "next/image";
const SocialMedia = () => {
  return (
    <div className="mt-20 flex flex-col  gap-5 pl-10 ">
      <Image src="/linkedin.png" alt="My Photo" width={30} height={30} />
      <Image src="/github.png" alt="My Photo" width={30} height={30} />
    </div>
  );
};

export default SocialMedia;
