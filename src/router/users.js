const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const { Protect } = require("../middleware/private");
const upload = require("../middleware/upload");

// router.get("/search", usersController.searchUsers);

// // CREATE NEW USERS

// // READ USERS
router.get("/", usersController.getAllUsers);
router.patch("/update-user", Protect, upload.single("photo_user"), usersController.updateUser);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
