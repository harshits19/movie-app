import { useState, useRef } from "react";
import { PlusIcon } from "../assets/SVGs";
import { AccordionData } from "../utilities/Constants";

const AccordionItem = ({ item, activeIndex, handleToggle }) => {
  const currItem = useRef();
  return (
    <div>
      <div
        onClick={() => {
          handleToggle(item?.id);
        }}
        className="bg-[#2d2d2d] hover:bg-[#414141] hover:ease-ogTransHover ease-ogTrans duration-250ms transition-bgColor flex p-6 items-center justify-between lg:text-2xl text-lg text-left lg:font-medium font-normal cursor-pointer">
        {item?.title}
        <span className="">
          <PlusIcon
            classList={
              (activeIndex === item?.id ? "-rotate-45 " : "") +
              " xl:h-8 h-4 xl:w-8 w-4 fill-white"
            }
          />
        </span>
      </div>
      {
        <div
          className={
            (activeIndex === item?.id
              ? "visible max-h-[36rem] py-6"
              : "collapse max-h-0 py-0") +
            " bg-[#2d2d2d] mb-[0.55rem] mt-0.5 px-6 transition-all ease-ogTransHover duration-[0.25s] delay-0 overflow-hidden"
          }
          ref={currItem}>
          <pre className="lg:text-2xl text-lg leading-6 lg:font-medium font-normal text-left font-sans whitespace-pre-wrap break-words">
            {item?.description}
          </pre>
        </div>
      }
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(true);
  const handleToggle = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center mx-auto xl:max-w-[calc(83.3%-6rem)] sm:max-w-[calc(100%-4rem)] max-w-[calc(100%-3rem)] items-center pt-8">
      <div className="w-full text-white">
        {AccordionData?.items.map((item) => {
          return (
            <AccordionItem
              item={item}
              key={item?.id}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
