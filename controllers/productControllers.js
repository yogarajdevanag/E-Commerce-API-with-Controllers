// This function handles the logic for fetching all products.
const getAllProducts = (req, res) => {
  // In a real app, you would fetch data from a database here.
  res.send("Fetching all products");
};

// This function handles the logic for adding a new product.
const addProduct = (req, res) => {
  // In a real app, you would save data to a database here.
  res.send("Adding a new product");
};

// This function handles the logic for fetching a single product by its ID.
const getProductById = (req, res) => {
  const { id } = req.params;
  // In a real app, you would query the database for this specific ID.
  res.send(`Fetching product with ID: ${id}`);
};

// Export all the controller functions so they can be used in our routes.
module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};