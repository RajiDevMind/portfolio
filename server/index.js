const express = require("express");
const app = express();
const emailRouter = require("./routes/mail");

// middleware
app.use(express.json());
// middleware: For Frontend Source Code
app.use(express.static("../public"));

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world!!!</h1>");
// });

app.use("/", emailRouter);

app.get("*", (req, res) => {
  res.send("<h1>Hey There, Page not Found!!!</h1>");
});

const port = 4500;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listeining on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
