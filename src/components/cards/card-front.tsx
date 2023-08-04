import CardLogo from "../../assets/images/card-logo.svg";

function CardFront({ data }: any) {
    return (
        <div className="card-front">
            <div className="circles">
                <img src={CardLogo} alt=""></img>
            </div>
            <div className="card-front-data">
                <p className="card-number">{data.cardNumber.replace(/(.{4})/g,"$1 ")}</p>
                <div className="card-front-bottom">
                    <div className="card-holder-name">{data.cardHolderName.toUpperCase()}</div>
                    <div className="card-expiry">{data.cardExpiry}</div>
                </div>
            </div>
        </div>
    );
}

export default CardFront;
