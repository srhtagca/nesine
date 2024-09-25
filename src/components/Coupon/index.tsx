import "./index.css";
import { CouponContext } from "../../context/CouponContext";
import { useContext } from "react";

export const Coupon = () => {
  const { addedCouponList } = useContext(CouponContext);
  const total = addedCouponList.length
    ? addedCouponList
        .reduce((acc, curr) => acc * parseFloat(curr.O), 1)
        .toFixed(2)
    : 0;

  return (
    <div className="coupon">
      <div className="coupon-items-container">
        {addedCouponList.length
          ? addedCouponList.map((item) => (
              <div className="coupon-item">
                <span>{item.MBS}</span>
                <span>Kod: {item.C}</span>
                <span>Mac: {item.N}</span>
                <strong>Oran: {item.O}</strong>
              </div>
            ))
          : null}
      </div>
      <div>Toplam Tutar: {total} TL</div>
    </div>
  );
};
