const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
};

const { intializeDatabase } = require("./db/db.connect");
const Product = require("./models/product.models");

app.use(express.json());
app.use(cors(corsOptions));

intializeDatabase();

app.get("/", (req, res) => {
  res.send("This is express server");
});

// creating data and sending data to backend
app.post("/products", async (req, res) => {
  try {
    const createProduct = new Product(req.body);
    const saveProduct = await createProduct.save();
    if (saveProduct) {
      res.status(201).json({
        message: "Data added successfuly",
        createProduct: createProduct,
      });
    } else {
      res.status(401).json({ error: "An error occured while adding data" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occured while creating data" });
  }
});

// route for getting all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      res.status(200).json({ message: "Products found", products: products });
    } else {
      res.status(404).json({ error: "No products are found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while getting products" });
  }
});

// route for getting products by category
app.get("/products/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category: category });
    if (products.length > 0) {
      res
        .status(200)
        .json({ message: `${category} products found`, products: products });
    } else {
      res.status(404).json({ error: `No ${category} products are found` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured while getting  products" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
