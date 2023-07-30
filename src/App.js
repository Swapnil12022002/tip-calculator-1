import { useState } from "react";
import Bill from "./components/Bill.jsx";
import Output from "./components/Output.jsx";
import MyService from "./components/services/MyService.jsx";
import FriendService from "./components/services/FriendService.jsx";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [myService, setMyService] = useState("dissatisfied");
  const [friendService, setFriendService] = useState("dissatisfied");
  const myTipPercentage = myTipCalculator();
  const friendTipPercentage = friendTipCalculator();
  const averageTipPercentage = (myTipPercentage + friendTipPercentage) / 2;
  const averageTip = (bill * averageTipPercentage) / 100;
  const total = bill + averageTip;

  function myTipCalculator() {
    switch (myService) {
      case "dissatisfied":
        return 0;
      case "okay":
        return 5;
      case "good":
        return 10;
      case "amazing":
        return 20;
      default:
        return "Choose a valid option";
    }
  }

  function friendTipCalculator() {
    switch (friendService) {
      case "dissatisfied":
        return 0;
      case "okay":
        return 5;
      case "good":
        return 10;
      case "amazing":
        return 20;
      default:
        return "Choose a valid option";
    }
  }

  function resetFields() {
    setBill("");
    setMyService("dissatisfied");
    setFriendService("dissatisfied");
  }

  return (
    <div className="App">
      <Bill bill={bill} onBillChange={setBill} />
      <MyService service={myService} onServiceChange={setMyService} />
      <FriendService
        service={friendService}
        onServiceChange={setFriendService}
      />
      <Output total={total} bill={bill} averageTip={averageTip} />
      {Number(bill) > 0 && <button onClick={resetFields}>Reset</button>}
    </div>
  );
}
