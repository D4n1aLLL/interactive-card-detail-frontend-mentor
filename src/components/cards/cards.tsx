import CardBack from "./card-back";
import CardFront from "./card-front";
import "./card.css";

function Cards({ cardData }: any) {
    return (
        <div className="cards">
            <CardFront data={cardData} />
            <CardBack cvc={cardData.cvc} />
        </div>
    );
}

export default Cards;
