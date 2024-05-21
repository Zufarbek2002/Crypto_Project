/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";

const CoinDesc = () => {
  const { currency, singleData, fetchSingleData, loading } =
    useContext(DataContext);
  const { id } = useParams();
  useEffect(() => {
    fetchSingleData(id);
  }, [id]);

  return (
    <>
      {loading && (
        <div role="status" className="p-4 shadow animate-pulse md:p-6">
          <div className="flex items-center justify-center w-[100px] h-[100px] mb-4 bg-gray-300 rounded mx-auto">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4 mx-auto"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full"></div>
          <div className="flex items-center mt-4">
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {singleData && (
        <div className="flex flex-col px-5">
          <div className="w-[100px] mx-auto">
            <img src={singleData?.image?.large} alt={singleData?.name} />
          </div>
          <h2 className="text-center font-bold text-3xl my-3">
            {singleData?.name}
          </h2>
          <p className="line-clamp-4 text-sm tracking-[0.15px]">
            {singleData?.description.en}
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="font-bold text-xl">
              Rank:{" "}
              <span className="font-normal">{singleData?.market_cap_rank}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Current Price:{" "}
              <span className="font-normal">
                {currency == "usd" && "₹ "}
                {currency == "rub" && "₽ "}
                {currency == "eur" && "€ "}
                {Intl.NumberFormat("en-US").format(
                  singleData?.market_data.current_price[currency].toFixed(2)
                )}
              </span>
            </h3>
            <h3 className="font-bold text-xl">
              Market Cap:{" "}
              <span className="font-normal">
                {currency == "usd" && "₹ "}
                {currency == "rub" && "₽ "}
                {currency == "eur" && "€ "}
                {Intl.NumberFormat("en-US").format(
                  (
                    singleData?.market_data.market_cap[currency] / 1000000
                  ).toFixed(0)
                )}
                M
              </span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDesc;
