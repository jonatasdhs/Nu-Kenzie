import illustration from "../../Images/illustration.png";
import img from "../../Images/logo.svg";
import "./index.css";
import "../../Styles/globalStyles.css";
import "../../Styles/buttons.css";

const Initial = ({setIsHome}) => {
  return (
    <div className="Initial">
      <div className="container Initial-container">
        <div className="Initial-text">
          <img src={img} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>Centralize o controle das suas finanças</span>
          <button type="button" onClick={() => setIsHome(true)} className="buttons medium primary">
            Iniciar
          </button>
        </div>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};

export default Initial;
