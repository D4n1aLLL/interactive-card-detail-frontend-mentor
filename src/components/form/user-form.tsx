import { useState } from "react";
import CardSubmittedIcon from "../../assets/images/icon-complete.svg";
import "./user-form.css";

const _BLANK_ERROR = "Can't be blank";

function UserForm({ cardData, setCardData }: any) {
    const [cardHolderNameError, setCardHolderNameError] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");
    const [cardExpiryMonthError, setCardExpiryMonthError] = useState("");
    const [cardExpiryYearError, setCardExpiryYearError] = useState("");
    const [cardCvcError, setCardCvcError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit = (e: any): void => {
        e.preventDefault();
        if (validateForm()) return;

        setSubmitted(true);
    };

    const validateForm = (): boolean => {
        let nameError = "";
        let numberError = "";
        let expMonthError = "";
        let expYearError = "";
        let cvcError = "";
        let errorOccurred = false;
        const { cardHolderName, cardNumber, cardExpiryMonth, cardExpiryYear, cvc } = cardData;

        //name
        if (!cardHolderName || cardHolderName === "") {
            errorOccurred = true;
            nameError = _BLANK_ERROR;
        }

        //card number
        if (!cardNumber || cardNumber === "") {
            errorOccurred = true;
            numberError = _BLANK_ERROR;
        } else if (!new RegExp(/\d{4}\s?\d{4}\s?\d{4}\s?\d{4}/).test(cardNumber)) {
            errorOccurred = true;
            numberError = "Wrong format, numbers only";
        }

        //expiry
        if (!cardExpiryMonth || cardExpiryMonth === "") {
            errorOccurred = true;
            expMonthError = _BLANK_ERROR;
        }

        if (!cardExpiryYear || cardExpiryYear === "") {
            errorOccurred = true;
            expYearError = _BLANK_ERROR;
        }

        //cvc
        if (!cvc || cvc === "") {
            errorOccurred = true;
            cvcError = _BLANK_ERROR;
        }

        setCardHolderNameError(nameError);
        setCardNumberError(numberError);
        setCardExpiryMonthError(expMonthError);
        setCardExpiryYearError(expYearError);
        setCardCvcError(cvcError);

        return errorOccurred;
    };

    return (
        <div className="user-form-div">
            {!submitted ? (
                <form className="user-form" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <label>CARDHOLDER NAME</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className={"card-holder-name-input" + (cardHolderNameError ? " error" : "")}
                                        placeholder="e.g. Jane Appleseed"
                                        value={cardData.cardHolderName}
                                        onChange={(e) => setCardData({ ...cardData, cardHolderName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="card-holder-name-error error-message">{cardHolderNameError}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <label>CARD NUMBER</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className={"card-holder-number-input" + (cardNumberError ? " error" : "")}
                                        placeholder="e.g. 1234 5678 9123 000"
                                        value={cardData.cardNumber}
                                        onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="card-holder-number-error error-message">{cardNumberError}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <label>EXP. DATE (MM/YY)</label>
                                </div>
                                <div className="col-6">
                                    <label>CVC</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3 pe-1">
                                    <input
                                        type="text"
                                        className={"exp-month" + (cardExpiryMonthError ? " error" : "")}
                                        placeholder="MM"
                                        value={cardData.cardExpiryMonth}
                                        onChange={(e) => setCardData({ ...cardData, cardExpiryMonth: e.target.value })}
                                    />
                                </div>
                                <div className="col-3 ps-1">
                                    <input
                                        type="text"
                                        className={"exp-year" + (cardExpiryYearError ? " error" : "")}
                                        placeholder="YY"
                                        value={cardData.cardExpiryYear}
                                        onChange={(e) => setCardData({ ...cardData, cardExpiryYear: e.target.value })}
                                    />
                                </div>
                                <div className="col-6">
                                    <input
                                        type="text"
                                        className={"form-cvc" + (cardCvcError ? " error" : "")}
                                        placeholder="e.g. 123"
                                        value={cardData.cvc}
                                        onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <p className="card-exp-error error-message">
                                        {cardExpiryMonthError || cardExpiryYearError}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="cvc-error error-message">{cardCvcError}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12">
                            <button className="submit-btn w-100" type="submit">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="user-form text-center">
                    <div className="row icon-completed pb-4">
                        <div className="col-12">
                            <img src={CardSubmittedIcon} alt="completed"></img>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-12 thank-you">
                            <h1>THANK YOU!</h1>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-12 added-msg">We've added your card details</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="submit-btn w-100" onClick={() => setSubmitted(false)}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserForm;
