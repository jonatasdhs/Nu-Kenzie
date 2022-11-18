import { useState } from "react";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";

const Main = ({listTransactions, handleTransaction, handleRemoveTransaction}) => {
  const [filter, setFilter] = useState('todos')
    return (
        <main className="App-main container">
        <div className="form-container">
          <Form
            listTransactions={listTransactions}
            handleTransaction={handleTransaction}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="container-list">
          <div className="filter">
            <p>Resumo financeiro</p>
            <div>
              <button onClick={() => setFilter('todos')} className="buttons medium grey-3">Todos</button>
              <button onClick={() => setFilter('entrada')} className="buttons medium grey-3">Entradas</button>
              <button onClick={() => setFilter('saída')} className="buttons medium grey-3">Despesas</button>
            </div>
          </div>
          <ul className="List-transactions">
            <List
              filter={filter}
              listTransaction={listTransactions}
              handleRemoveTransaction={handleRemoveTransaction}
            />
          </ul>
        </div>
      </main>
    )
}

export default Main;