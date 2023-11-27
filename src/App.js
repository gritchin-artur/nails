import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { MyWorks } from "./header/myWorks/myWorks";
import { Contacts } from "./header/contacts/contacts";
import { Prices } from "./header/prices/prices";
import Layout from "./header/layout/layout";
import HomePage from "./header/homePage/homePage";
import DiscountPage from "./header/discountsPage/discountsPage";
import OrderPage from "./orders/orderPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<HomePage />} />
            <Route path="myworks" element={<MyWorks />} />
            <Route path="prices" element={<Prices />} />
            <Route path="discounts" element={<DiscountPage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
