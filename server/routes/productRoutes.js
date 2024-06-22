const express = require("express");
// const Products = require('../models/Product');
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const Product = require("../models/Product");
const { upload } = require("../middleware/uploadMiddleware.js");

// Route to handle adding a new product
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    // Extract image name from the file path
    const imageName = path.basename(req.file.path);

    // Create a new Product object with the provided data
    const newProduct = new Product({
      pname: req.body.pname,
      pcategory: req.body.pcategory,
      description: req.body.description,
      pprice: req.body.pprice,
      imageName: imageName, // Save the image name instead of the full path
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Respond with the saved product data
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Save product
// Example using async/await
// router.post('/save', async (req, res) => {
//     try {
//         let newProduct = new Products(req.body);
//         await newProduct.save();
//         res.status(200).json({ success: "Product saved successfully" });
//     } catch (err) {
//         console.error(err);  // Server-side error log
//         res.status(400).json({ error: err.message });
//     }
// });

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      existingProducts: products,
    });
  } catch (err) {
    console.error(err); // Server-side error log
    res.status(400).json({ error: err.message });
  }
});

router.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName; // Use imageName instead of image
  console.log(req.params.imageName);
  const imagePath = path.join("C:/images", imageName); // Use imageName instead of image
  console.log(imagePath); // Construct absolute path to the image

  // Check if the file exists
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Image not found: ${imagePath}`);
      res.status(404).send("Image not found");
    } else {
      res.sendFile(imagePath);
    }
  });
});

// Get a specific product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (err) {
    console.error(err); // Server-side error log
    res.status(400).json({ success: false, error: err.message });
  }
});

// Update product
router.put("/update/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // To return the updated document
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({
      success: "Updated Successfully",
      updatedProduct,
    });
  } catch (err) {
    console.error(err); // Server-side error log
    res.status(400).json({ error: err.message });
  }
});

// Delete product
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found, delete unsuccessful",
      });
    }
    res.status(200).json({
      message: "Delete Successful",
      deletedProduct,
    });
  } catch (err) {
    console.error(err); // Server-side error log
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
