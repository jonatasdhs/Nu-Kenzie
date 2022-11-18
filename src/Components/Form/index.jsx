import { useState } from "react";
import "./index.css";
import "../../Styles/globalStyles.css";
import "../../Styles/inputs.css";
import "../../Styles/buttons.css";
import "../../Styles/positioning.css";

const Form = ({ listTransaction, handleTransaction }) => {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="input-container">
        <label htmlFor="">Descrição</label>
        <input
          className="inputs"
          type="text"
          placeholder="Insira a descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="flex justify-between">
        <div className="input-container width-40">
          <label htmlFor="">Valor</label>
          <input
            className="inputs"
            type="number"
            placeholder="1"
            onChange={(event) => {
              setValue(Number(event.target.value));
            }}
          />
        </div>
        <div className="input-container width-40">
          <label htmlFor="">Tipo de valor</label>
          <select
            className="inputs"
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button
        className="buttons medium primary"
        onClick={() => handleTransaction(value, description, type)}
      >
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
