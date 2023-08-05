function CardBack({ cvc }: any) {
    return (
        <div className="card-back">
            <p className="cvc">{cvc || "000"}</p>
        </div>
    );
}

export default CardBack;
