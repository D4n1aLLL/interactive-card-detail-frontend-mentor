import CardBack from "./card-back";
import CardFront from "./card-front";
import "./card.css";

function Cards(data: any) {
    return (
        <div className="cards">
            <CardFront data={data.cardFrontData} />
            <CardBack data={data.cardBackData} />
        </div>
    );
}

export default Cards;
