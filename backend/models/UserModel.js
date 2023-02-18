const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vui lòng nhập tên"],
    minlength: [3, "Vui lòng đặt tên dài hơn 3 kí tự"],
    maxlength: [20, "Tên không được dài quá 20 kí tự"],
  },
  email: {
    type: String,
    required: [true, "Vui lòng nhập Email"],
    validate: [validator.isEmail, "Email không chính xác!!!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Vui lòng nhập mật khẩu!"],
    minlength: [6, "Mật khẩu ít nhất phải có 6 kí tự!"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("User", userSchema);
