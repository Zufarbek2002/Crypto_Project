/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";

const CoinDesc = () => {
  const { currency, singleData, fetchSingleData } = useContext(DataContext);
  const { id } = useParams();
  useEffect(() => {
    fetchSingleData(id);
  }, [currency]);

  return (
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
              (singleData?.market_data.market_cap[currency] / 1000000).toFixed(
                0
              )
            )}
            M
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CoinDesc;
