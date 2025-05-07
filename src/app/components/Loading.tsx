const Loading = () => {
  return (
    <div className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex-row lg:gap-[370px] lg:px-20 xl:gap-[400px] xl:px-40 2xl:px-80 3xl:px-[460px] 4xl:px-[500px] text-white flex">
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-[200px] h-[1px] bg-white relative overflow-hidden">
          <div className="h-[1px] bg-cyan-600 animate-line-move"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
