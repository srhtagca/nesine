import { createContext, PropsWithChildren, useState } from "react";

type DataType = {
  MBS: string;
  NID: string;
  C: string;
  N: string;
  OCG_ID: string;
  OC_ID: string;
  O: string;
};

type CouponContextType = {
  addedCouponList: DataType[];
  toggleOdd: (data: DataType) => void;
};

export const CouponContext = createContext<CouponContextType>({
  addedCouponList: [],
  toggleOdd: () => {},
});

export const CouponContextProvider = ({ children }: PropsWithChildren) => {
  const [addedCouponList, setAddedCouponList] = useState<DataType[]>([]);

  const toggleOdd = (data: DataType) => {
    if (
      addedCouponList.some(
        (item) => item.NID === data.NID && item.OC_ID === data.OC_ID
      )
    ) {
      return setAddedCouponList((state) =>
        state.filter((item) => item.NID !== data.NID)
      );
    } else if (
      addedCouponList.some(
        (item) => item.NID === data.NID && item.OC_ID !== data.OC_ID
      )
    ) {
      return setAddedCouponList((state) =>
        state.map((item) => (item.NID === data.NID ? data : item))
      );
    }
    setAddedCouponList((state) => [...state, data]);
  };

  return (
    <CouponContext.Provider value={{ addedCouponList, toggleOdd }}>
      {children}
    </CouponContext.Provider>
  );
};
