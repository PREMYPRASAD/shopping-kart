const express = require("express");
const cors = require("cors");
const app = express();
const session = require('express-session')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');


//midddleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use('/user', userRouter);
app.use('/api', productRouter); // Mount the product router at '/api'
app.use('/cart', cartRouter);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
