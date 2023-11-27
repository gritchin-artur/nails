import price from "../../images/imag/price.jpg";
import { Div } from "./price.styled";

export const Prices = () => {
  return (
    <div>
      <Div>
        {/* <h2>Welcome to Phonebook! 👋</h2> */}
        <img src={price} alt="Phonebook" width="500" height="750" />
      </Div>
      <p>© 2023 Developed by Hrythyn Artur</p>
    </div>
  );
};
