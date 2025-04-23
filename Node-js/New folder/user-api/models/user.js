const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters'],
  },
  hobby: {
    type: String,
    required: [true, 'Hobby is required'],
    trim: true,
    maxlength: [100, 'Hobby cannot exceed 100 characters'],
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);