import CardBackImg from "../../assets/images/bg-card-back.png";

function CardBack({ data }: any) {
    return (
        <div className="card-back">
            <p className="cvc">{data.cvc}</p>
        </div>
    );
}

export default CardBack;
