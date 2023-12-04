import MenuCompany from "./MenuCompany";
import MenuServices from "./MenuServices";
import MenuContact from "./MenuContact"

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