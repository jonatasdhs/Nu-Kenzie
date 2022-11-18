import "./Styles/globalStyles.css";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Initial from "./Components/Initial";

function App() {
  const [isHome, setIsHome] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  function handleTransaction(value, description, type) {
    const newValue = type === "saída" ? value * -1 : value;
    const newType = type === undefined ? (type = "entrada") : type;
    return setListTransactions([
      ...listTransactions,
      { description: description, type: newType, value: newValue },
    ]);
  }

  function handleRemoveTransaction(description) {
    const filter = listTransactions.filter(
      (transaction) => transaction.description !== description
    );
    return setListTransactions(filter);
  }

  return (
    <div className="App">
      {isHome ? (
        <div>
          <Header setIsHome={setIsHome} />
          <Main
            listTransactions={listTransactions}
            handleTransaction={handleTransaction}
            handleRemoveTransaction={handleRemoveTransaction}
          />
        </div>
      ) : (
        <Initial setIsHome={setIsHome}/>
      )}

      {/* <main className="App-main container">
        <div className="form-container">
          <Form
            listTransactions={listTransactions}
            handleTransaction={handleTransaction}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div>
          <div className="filter">
            <p>Resumo financeiro</p>
            <div>
              <button className="buttons medium grey-3">Todos</button>
              <button className="buttons medium grey-3">Entradas</button>
              <button className="buttons medium grey-3">Despesas</button>
            </div>
          </div>
          <ul className="List-transactions">
            <List
              listTransaction={listTransactions}
              handleRemoveTransaction={handleRemoveTransaction}
            />
          </ul>
        </div>
      </main> */}
    </div>
  );
}

export default App;
