import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
        type: String,
        required: true,
      },
      sportsname:{
        type: String,
        required: true,
      },
      startdate:{
        type: Date,
        required: true,
      },
      enddate:{
        type: Date,
        required: true,
      },
      enrollemantfees:{
        type: Number,
      },

    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;