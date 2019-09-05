import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CartStore {
  items = [];

  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.drink === item.drink && newItem.option === item.option
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else this.items.push(newItem);
  };
  checkoutCart = () => {
    this.items = [];
    alert("Have a great day!");
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(itemB => itemB !== item);
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}
decorate(CartStore, {
  items: observable,
  quantity: computed
});
let cartStore = new CartStore();
export default cartStore;

// addItemToCart({
//   drink: "",
//   option: "",
//   quantity: 5
// });
