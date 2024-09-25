import useSWR from "swr";
import { fetcher } from "../../utils/fetchers";
import "./style.css";
import { Row } from "./components/Row";
import { DataType } from "../../types/dataTypes";
import { Virtuoso } from "react-virtuoso";
import { Header } from "./components/Header";

export const Bulletin = () => {
  const { data, error, isLoading } = useSWR<DataType[]>(
    "https://nesine-case-study.onrender.com/bets",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

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
