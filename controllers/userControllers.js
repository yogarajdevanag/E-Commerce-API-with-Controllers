// This function handles the logic for fetching all users.
const getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

// This function handles the logic for adding a new user.
const addUser = (req, res) => {
  res.send("Adding a new user");
};

// This function handles the logic for fetching a single user by ID.
const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching user with ID: ${id}`);
};

// Export all the controller functions.
module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};