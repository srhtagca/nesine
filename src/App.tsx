import { Bulletin } from "./containers/Bulletin";
import { CouponContextProvider } from "./context/CouponContext";
import { Coupon } from "./components/Coupon";

function App() {
  return (
    <div className="App">
      <CouponContextProvider>
        <Bulletin />
        <Coupon />
      </CouponContextProvider>
    </div>
  );
}

export default App;
