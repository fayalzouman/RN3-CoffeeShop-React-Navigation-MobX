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
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      title: "Fay + Ais Coffee",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#155964"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "#155964"
    }
  }
);

export default StackNav;
