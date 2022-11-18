import "./index.css";

const TotalMoney = ({ listTransactions }) => {
  const sum = listTransactions.reduce((previusValue, curretValue) => {
    return previusValue + curretValue.value;
  }, 0);
  return (
    <div className="Total-money">
      <div>
        <h3>Valor total:</h3>
        <strong className="color-brand">${sum}</strong>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalMoney;
