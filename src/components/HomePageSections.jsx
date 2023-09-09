const HomePageSections = ({ data, first, second }) => {
  const { title, description, imgURL } = data;
  return (
    <div className="w-full h-full lg:py-16 py-14 bg-[#000000] text-white">
      <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center">
        <div className={`lg:text-left text-center basis-1/2  ${second}`}>
          <div className="lg:text-5xl text-3xl font-bold">{title}</div>
          <div className="lg:text-2xl text-xl font-medium mt-5">
            {description}
          </div>
        </div>
        <div className={`basis-1/2  ${first}`}>
          <div className="relative">
            <img src={imgURL} className="w-full" />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[46%] left-[50%] h-full w-full max-w-[73%] max-h-[54%] overflow-hidden">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageSections;
