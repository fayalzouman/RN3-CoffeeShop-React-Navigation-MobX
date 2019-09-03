import { createStackNavigator } from "react-navigation";

//Components
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeList from "../CoffeeList";
import Login from "../Login";

const StackNav = createStackNavigator(
  {
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    LoginScreen: Login,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;
