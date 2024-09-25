import useSWR from "swr";
import { fetcher } from "../../utils/fetchers";
import "./style.css";
import { Row } from "./components/Row";
import { DataType } from "../../types/dataTypes";
import { useContext } from "react";
import { CouponContext } from "../../context/CouponContext";
import { TableVirtuoso, VirtuosoGrid, Virtuoso } from "react-virtuoso";
import { Header } from "./components/Header";

export const Table = () => {
  const { data, error, isLoading } = useSWR<DataType[]>(
    "https://nesine-case-study.onrender.com/bets",
    fetcher
  );

  console.log({ data });
  const { addedCouponList, toggleOdd } = useContext(CouponContext);
  console.log({ addedCouponList });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="table">
      <Header length={data.length} />
      <Virtuoso
        totalCount={data.length}
        useWindowScroll
        data={data}
        itemContent={(_, user) => <Row item={user} />}
      />
    </div>
  );
};
