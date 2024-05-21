/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("24h");

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
      );
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  const fetchSingleData = async (id) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = await res.json();
      setSingleData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const fetchChartData = async (id) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      );
      const data = await res.json();
      setChartData(data.prices);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currency, page]);

  return (
    <DataContext.Provider
      value={{
        data,
        singleData,
        page,
        currency,
        chartData,
        days,
        setDays,
        setCurrency,
        setPage,
        fetchSingleData,
        fetchChartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
