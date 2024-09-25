import { Table } from "./containers/Bulletin";
import { CouponContextProvider } from "./context/CouponContext";
import { Coupon } from "./components/Coupon";

function App() {
  return (
    <div className="App">
      <CouponContextProvider>
        <Table />
        <Coupon />
      </CouponContextProvider>
    </div>
  );
}

export default App;
