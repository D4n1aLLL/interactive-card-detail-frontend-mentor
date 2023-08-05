import { useState } from "react";
import "./App.css";
import BgMainDesktop from "./assets/images/bg-main-desktop.png";
import UserForm from "./components/form/user-form";
import Cards from "./components/cards/cards";

function App() {
    const [cardData, setCardData] = useState({
        cardHolderName: "",
        cardNumber: "",
        cardExpiryMonth: "",
        cardExpiryYear: "",
        cvc: "",
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
