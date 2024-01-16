import MenuCompany from "./MenuCompany";
import MenuServices from "../Services/MenuServices";
import MenuContact from "../Contact/MenuContact"

const MenuFunct = () => {

   return (
    <div className="menu-container">
      <MenuCompany/>
      <MenuServices/>
      <MenuContact/>
    </div>
  );
}

export default MenuFunct