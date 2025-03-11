
import  Logo  from "../../../assets/images/header/Frame 1000006027.svg";
import { Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="px-[120px] py-[30px]">
    <nav className="flex items-center justify-between">
      <ul>
        <img className="w-[210px] h-[38px]" src={Logo} alt="IMG" />
      </ul>
      <ul className="flex items-center gap-[40px]">
        <Button color="purple" style={{ color: "black" }} variant="outlined">
          თანამშრომლის შექმნა
        </Button>
        <Button color="purple" style={{color:"white"}} variant="solid">
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
          შექმენი ახალი დავალება
        </Button>
      </ul>
    </nav>
  </header>
  )
}

export default Header