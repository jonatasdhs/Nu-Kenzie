import img from "../../Images/Nu Kenzie.png";
import "../../Styles/buttons.css";
import "./index.css";

const Header = ({setIsHome}) => {
  return (
    <header>
      <div className="header-content">
        <img src={img} alt="" />
        <button type="button" onClick={() => setIsHome(false)} className="buttons small grey-3">Início</button>
      </div>
    </header>
  );
};
export default Header;
