const StripeShimmer = ({ title, type }) => {
  return (
    <div className="">
      <div className="cursor-pointer py-4 text-xl font-bold text-[#e5e5e5] hover:text-white">
        {title + " " + type}
      </div>
      <div className="cardContainer flex gap-x-4 overflow-x-auto">
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
        <div>
          <div className="shine h-32 w-56 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default StripeShimmer;
