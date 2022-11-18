import img from "../../Images/Nu Kenzie.png";
import "../../Styles/buttons.css";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={img} alt="" />
        <button className="buttons small grey-3">Início</button>
      </div>
    </header>
  );
};
export default Header;
