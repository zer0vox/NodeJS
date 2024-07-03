const events = require("events");

const eventEmitter = new events.EventEmitter();

const checkout = (list) => {
  const price = list.price;
  const updatedPrice = price + 0.13 * price;
  console.log("Your total price with VAT is " + updatedPrice);
};

// creating a new event plus listen
eventEmitter.on("checkout", (item) => {
  checkout(item);
});

// Fire
const cart = { name: "Shirt", price: 100 };
eventEmitter.emit("checkout", cart);
