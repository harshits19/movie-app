import { useState, useRef } from "react"
import { PlusIcon } from "../assets/SVGs"

const AccordionItem = ({ item, activeIndex, handleToggle }) => {
  const currItem = useRef()
  return (
    <div>
      <div onClick={() => { handleToggle(item?.id) }}
        className="flex cursor-pointer items-center justify-between bg-[#2d2d2d] p-6 text-left text-lg font-normal transition-bgColor duration-250ms ease-ogTrans hover:bg-[#414141] hover:ease-ogTransHover lg:text-2xl lg:font-medium">
        {item?.title}
        <span>
          <PlusIcon classList={(activeIndex === item?.id ? "-rotate-45 " : "") + " xl:h-8 h-4 xl:w-8 w-4 fill-white"} />
        </span>
      </div>
      {
        <div className={(activeIndex === item?.id ? "visible max-h-[36rem] py-6" : "collapse max-h-0 py-0") + " mb-[0.55rem] mt-0.5 overflow-hidden bg-[#2d2d2d] px-6 transition-all delay-0 duration-[0.25s] ease-ogTransHover"} ref={currItem}>
          <pre className="whitespace-pre-wrap break-words text-left font-sans text-lg font-normal leading-6 lg:text-2xl lg:font-medium">{item?.description}</pre>
        </div>
      }
    </div>
  )
}

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(true)
  const handleToggle = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <div className="mx-auto flex max-w-[calc(100%-3rem)] flex-col items-center justify-center pt-8 sm:max-w-[calc(100%-4rem)] lg:flex-row xl:max-w-[calc(83.3%-6rem)]">
      <div className="w-full text-white">
        {data?.map((item) => {
          return <AccordionItem item={item} key={item?.id} activeIndex={activeIndex} handleToggle={handleToggle} />
        })}
      </div>
    </div>
  )
}

export default Accordion
