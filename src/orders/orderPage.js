import { useEffect, useState } from "react";
import {
  Button,
  DivContainer,
  Form,
  H2,
  Input,
  P,
  Select,
} from "./orderPage.styled";
import { toast } from "react-hot-toast";
import sendSMS from "../sendSMS/sendSMS";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [dataRegistration, setDataRegistration] = useState({});
  const [allDate, setAllDate] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("myInput");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setName(parsedData.name || "");
      setNumber(parsedData.number || "");
      setService(parsedData.service || "");
      setDate(parsedData.date || "");
      setMessage(parsedData.message || "");
    }
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "service":
        setService(value);
        break;
      case "date":
        setDate(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        return;
    }
    localStorage.setItem(name, value);
  };

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setNumber(localStorage.getItem("number") || "");
    setService(localStorage.getItem("service") || "");
    setDate(localStorage.getItem("date") || "");
    setMessage(localStorage.getItem("message") || "");
  }, []);

  useEffect(() => {
    if (Object.keys(dataRegistration).length > 0) {
      setAllDate((prevArray) => [...prevArray, dataRegistration]);
      console.log(dataRegistration);

      sendSMS(dataRegistration);
    }
  }, [dataRegistration]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDataRegistration = { name, number, service, date, message };
    setDataRegistration(newDataRegistration);

    const sameDate = allDate.some((dates) => dates.date === date);

    if (sameDate) {
      toast.error(`Sorry this data (${date}) is already taken!`);
      console.log("error");
      return;
    }
    console.log(allDate);
    setName("");
    setNumber("");
    setService("");
    setDate("");
    setMessage("");
    toast.success(
      "Your application has been accepted and will be processed shortly!"
    );
  };

  return (
    <DivContainer>
      <Form type="submit" onSubmit={handleSubmit}>
        <H2>CONTACT US</H2>
        <P type="Name:">
          <Input
            type="text"
            name="name"
            // pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$"
            placeholder="Write your name here.."
            required
            onChange={handleChange}
            value={name}
          ></Input>
        </P>
        <P type="Phone:">
          <Input
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Let us know how to contact you back.."
            required
            onChange={handleChange}
            value={number}
          ></Input>
        </P>
        <P type="Services:">
          <label>
            <Select
              name="service"
              placeholder="Select your service.."
              type="text"
              id="name"
              required
              onChange={handleChange}
              value={service}
            >
              <option>Select your service..</option>
              <option>Manicure</option>
              <option>Pedicure</option>
              <option>Coated pedicure</option>
              <option>Coated manicure</option>
            </Select>
          </label>
        </P>
        <P type="Date:">
          <Input
            placeholder="Select your date.."
            type="datetime-local"
            id="meeting-time"
            name="date"
            value={date}
            min="2023-11-07T00:00"
            max="2030-12-31T00:00"
            required
            onChange={handleChange}
          />
        </P>
        <P type="Message:">
          <Input
            name="message"
            placeholder="What would you like to tell us.."
            onChange={handleChange}
            value={message}
          ></Input>
        </P>
        <Button>Send Message</Button>
      </Form>
    </DivContainer>
  );
};

export default OrderPage;
