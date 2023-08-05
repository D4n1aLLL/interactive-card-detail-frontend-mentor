import { useState } from "react";
import "./App.css";
import BgMainDesktop from "./assets/images/bg-main-desktop.png";
import UserForm from "./components/form/user-form";
import Cards from "./components/cards/cards";

function App() {
    const [cardData, setCardData] = useState({
        cardHolderName: "Felicia Leire",
        cardNumber: "9591 6489 6389 101E",
        cardExpiryMonth: "00",
        cardExpiryYear: "09",
        cvc: "001",
    });

    return (
        <div className="App container-fluid gx-0">
            <img src={BgMainDesktop} alt="" className="bg-main"></img>
            <Cards cardData={cardData} />
            <UserForm cardData={cardData} setCardData={setCardData} />
        </div>
    );
}

export default App;
