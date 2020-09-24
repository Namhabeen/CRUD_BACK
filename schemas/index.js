const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/til",
      {
        dbName: "til"
      },
      error => {
        if (error) {
          console.log("Can't connect mongodb", error);
        } else {
          console.log("success to connect mongodb");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", error => {
    console.log("Can't connect mongodb", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("plz wait! It will be connected soon!!");
    connect();
  });
  require("./user");
  require("./board");
};
