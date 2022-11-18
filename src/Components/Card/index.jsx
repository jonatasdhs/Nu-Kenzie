import "./index.css";
import thrash from "../../Images/thrash.svg";
const Card = ({ transaction, handleRemoveTransaction }) => {
  const type = transaction.type === "entrada" ? "Entrada" : "Despesa";
  const value = transaction.value < 0 ? transaction.value * -1 : transaction.value
  return (
    <li className={`Card ${transaction.type}`}>
      <div>
        <h2>{transaction.description}</h2>
        <div className="flex gap-1">
          <p>R$ {value}</p>
          <button
            className="buttons icon"
            onClick={() => {
              handleRemoveTransaction(transaction.description);
            }}
          >
            <img src={thrash} alt="" />
          </button>
        </div>
      </div>
      <p>{type}</p>
    </li>
  );
};

export default Card;
