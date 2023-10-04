const LandingPageSections = ({ data, first, second }) => {
  const { title, description, imgURL } = data
  return (
    <div className="h-full w-full bg-[#000000] py-14 text-white lg:py-16">
      <div className="mx-auto flex max-w-[calc(100%-3rem)] flex-col items-center justify-center sm:max-w-[calc(100%-4rem)] lg:flex-row xl:max-w-[calc(83.3%-6rem)]">
        <div className={`basis-1/2 text-center lg:text-left  ${second}`}>
          <div className="text-3xl font-bold lg:text-5xl">{title}</div>
          <div className="mt-5 text-xl font-medium lg:text-2xl">{description}</div>
        </div>
        <div className={`basis-1/2  ${first}`}>
          <div className="relative">
            <img src={imgURL} className="w-full" alt="section-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPageSections
