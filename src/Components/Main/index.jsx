import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";

const Main = ({listTransactions, handleTransaction, handleRemoveTransaction}) => {
    return (
        <main className="App-main container">
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
      </main>
    )
}

export default Main;