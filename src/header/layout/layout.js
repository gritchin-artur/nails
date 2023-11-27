import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Div,
  DivHeader,
  DivOrder,
  H2,
  Li,
  NavigateBottomOrder,
  Navigation,
  NavigationHome,
  Ul,
} from "./layout.styled";

function Layout() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  const handleClickOn = () => {
    setIsVisible(true);
  };

  return (
    <DivHeader>
      <Div>
        <H2 onClick={handleClickOn}>
          <NavigationHome to="/">Nails H.L</NavigationHome>
        </H2>

        <Ul>
          <Li onClick={handleClickOn}>
            <Navigation to="/myworks">My works</Navigation>
          </Li>

          <Li onClick={handleClickOn}>
            <Navigation to="/prices">Prices</Navigation>
          </Li>
          <Li onClick={handleClickOn}>
            <Navigation to="/discounts">Discount</Navigation>
          </Li>
          <Li onClick={handleClickOn}>
            <Navigation to="/contacts">Contacts</Navigation>
          </Li>
        </Ul>
      </Div>
      {isVisible && (
        <DivOrder blinking="true">
          <NavigateBottomOrder to="/orders" onClick={handleClick}>
            Click to make order
          </NavigateBottomOrder>
        </DivOrder>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DivHeader>
  );
}

export default Layout;
