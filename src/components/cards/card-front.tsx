import CardLogo from "../../assets/images/card-logo.svg";

function CardFront({ data }: any) {
    return (
        <div className="card-front">
            <div className="circles">
                <img src={CardLogo} className="circle-img" alt=""></img>
            </div>
            <div className="card-front-data">
                <p className="card-number">{data.cardNumber.replace(/\s/g,"").replace(/(.{4})/g,"$1 ") || "0000 0000 0000 0000"}</p>
                <div className="card-front-bottom">
                    <div className="card-holder-name">{data.cardHolderName.toUpperCase() || "Jane Appleseed"}</div>
                    <div className="card-expiry">{data.cardExpiryMonth || "00"}/{data.cardExpiryYear || "00"}</div>
                </div>
            </div>
        </div>
    );
}

export default CardFront;
