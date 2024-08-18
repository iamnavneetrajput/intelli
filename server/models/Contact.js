import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email regex
  },
  reason: {
    type: String,
    required: true,
  },
  other: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export const Contact = mongoose.model('Contact', ContactSchema);
