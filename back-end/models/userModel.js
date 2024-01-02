const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Email not valid',
    },
  },
  password: {
    type: String,
    required: true,
  },
  namee: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// Use the 'solyntek' collection for the User model
const User = mongoose.model('User', userSchema, 'solyntek');

// static signup method
User.signup = async function (email, password, namee, phone) {
  // Validation
  if (!email || !password || !namee || !phone) {
    throw Error('All fields must be filled');
  }

  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, namee, phone });

  return user;
};

// static login method
User.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};

module.exports = User;
