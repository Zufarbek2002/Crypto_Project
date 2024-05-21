import TableComp from "../../components/table";

const MarketCap = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto xl:px-52 sm:px-10 px-5 flex flex-col gap-5 items-center py-5">
        <div className="">
          <h2 className="text-4xl tracking-[0.25px] text-center">Cryptocurrency Prices by Market Cap</h2>
        </div>
        <div className="w-full text-[#FFFFFFB2] text-base">
          <input
            className="w-full py-3 px-3.5 outline-none bg-transparent border border-[#FFFFFF3B] rounded focus:border-white"
            type="text"
            placeholder="Search For a Crypto Currency.."
          />
        </div>
        <div className="w-full">
            <TableComp />
        </div>
      </div>
    </div>
  );
};

export default MarketCap;
