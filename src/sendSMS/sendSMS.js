// import { Twilio } from "@twilio/voice-sdk";
// // GRK1SW1D8N94RCJRGX9VMV5J;
// const accountSid = "AC3385674abceb059fa9a78303c1e6b8cf";
// const authToken = "4888d9866c178665b771b029edba5e8b";
// //   const twilloClient = new Twilio(accountSid, authToken);
// const client = new Twilio(accountSid, authToken);
// const twilloPhoneNumber = "+13344633568";

// const sendSMS = async (to, message) => {
//   try {
//     await client.messages.greate({
//       body: "Hello from twilio-node",
//       to: "+32479359548", // Text your number
//       from: twilloPhoneNumber, // From a valid Twilio number
//     });
//     console.log("SMS sent succssfully");
//   } catch (error) {
//     console.error("Error sending SMS:", error);
//   }
// };

// export default sendSMS;

// import Nexmo from "@vonage/server-sdk";

// const nexmo = new Nexmo({
//   apiKey: "b2c7c410",
//   apiSecret: "MNpxhvfnrn0upsh3",
// });

// const sendMessage = () => {
//   const from = "+320335320002";
//   const to = "+32479359548";
//   const text = "test";

//   nexmo.message.sendSms(from, to, text, (err, responseData) => {
//     if (err) {
//       console.error("Error send sms:", err);
//     } else {
//       console.log("SMS sent succssfully:", responseData.messages[0]);
//     }
//   });
// };

// export default sendMessage;

import axios from "../axios/axios";

const sendSMS = async (message) => {
  try {
    await axios.post("/orders", { body: message });
    if (sendSMS.status === 200) {
      console.log("sms send succssesfuly");
    } else {
      console.error("Filed to send sms");
    }
  } catch (error) {
    console.log("Error");
  }
};

export default sendSMS;
