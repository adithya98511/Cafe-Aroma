const app = require("./app");
const db = require("./Config/db");
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.listen(port, () => {
  console.log("listening");
});
