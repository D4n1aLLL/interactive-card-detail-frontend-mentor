import { useState } from "react";
import "./App.css";
import BgMainDesktop from "./assets/images/bg-main-desktop.png";
import UserForm from "./components/form/user-form";
import Cards from "./components/cards/cards";

function App() {
    const [cardFront, setCardFront] = useState({
        cardNumber: "959164896389101E",
        cardHolderName: "Felicia Leire",
        cardExpiry: "09/00",
    });

    const [cardBack, setCardBack] = useState({
        cvc: "000",
    });

    return (
        <div className="App container-fluid gx-0">
            <img src={BgMainDesktop} alt="" className="bg-main"></img>
            <Cards cardFrontData={cardFront} cardBackData={cardBack} />
            <UserForm />
        </div>
    );
}

export default App;
