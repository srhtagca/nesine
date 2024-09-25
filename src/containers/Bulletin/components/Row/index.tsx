import { DataType } from "../../../../types/dataTypes";
import { CouponContext } from "../../../../context/CouponContext";
import { useContext } from "react";
import { SORTED_BULLETIN_OCG_IDS, OG_ODDS_LIST } from "../../../../constants";

export const Row = ({ item }: { item: DataType }) => {
  const { addedCouponList, toggleOdd } = useContext(CouponContext);
  return (
    <>
      <div className="row">
        <div className="cell">{`${item.D} ${item.DAY} ${item.LN}`}</div>
        <div className="cell">Yorumlar</div>
        <div className="cell"></div>
        <div className="cell">1</div>
        <div className="cell">x</div>
        <div className="cell">2</div>
        <div className="cell">Alt</div>
        <div className="cell">Ust</div>
        <div className="cell">H1</div>
        <div className="cell">1</div>
        <div className="cell">x</div>
        <div className="cell">2</div>
        <div className="cell">H2</div>
        <div className="cell">1-x</div>
        <div className="cell">1-2</div>
        <div className="cell">2-x</div>
        <div className="cell">Var</div>
        <div className="cell">Yok</div>
        <div className="cell">+99</div>
      </div>
      <div className="row">
        <div className="cell">
          <strong>{item.C}</strong> {`${item.T} ${item.N}`}
        </div>
        <div className="cell">Yorumlar</div>
        <div className="cell">{item?.OCG[1]?.MBS}</div>
        {SORTED_BULLETIN_OCG_IDS.map((sortedOCG) =>
          OG_ODDS_LIST[sortedOCG].map((oddList) => {
            const ocId = `${item.NID}-${item?.OCG[sortedOCG]?.OC[oddList]?.ID}`;
            return (
              <div
                key={`${item.NID}-${oddList}`}
                onClick={() =>
                  item?.OCG[sortedOCG]?.OC[oddList]?.O
                    ? toggleOdd({
                        C: item.C,
                        NID: item.NID,
                        MBS: item?.OCG[sortedOCG]?.MBS,
                        N: item.N,
                        OCG_ID: item?.OCG[sortedOCG]?.ID,
                        OC_ID: ocId,
                        O: item?.OCG[sortedOCG]?.OC[oddList]?.O,
                      })
                    : undefined
                }
                className={`cell ${
                  item?.OCG[sortedOCG]?.OC[oddList]?.O ? "clickable" : ""
                } ${
                  addedCouponList.some((item) => item.OC_ID === ocId)
                    ? "selected"
                    : ""
                }`}
              >
                {item?.OCG[sortedOCG]?.OC[oddList]?.O}
              </div>
            );
          })
        )}
        <div className="cell">{Object.keys(item.OCG).length}</div>
      </div>
    </>
  );
};
