import { decorate, observable } from "mobx";
// import console = require("console");

class CartStore {
  items = [];

  addItemToCart = item => {
    this.items.push(item);
  };
  checkoutCart = () => {
    this.items = [];
    console.log("Have a great day!");
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(itemB => itemB === !item);
  };
}
decorate(CartStore, {
  items: observable
});
let cartStore = new CartStore();
export default cartStore;

// addItemToCart({
//   drink: "",
//   option: "",
//   quantity: 5
// });
