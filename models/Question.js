import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: { 
    type: String, 
    required: true, 
    trim: true 
  },
  image: { 
    type: String, 
    default: null 
  },
  websiteName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  websiteUrl: { 
    type: String, 
    required: true, 
    trim: true 
  },
  answer: { 
    type: String, 
    required: true, 
    trim: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Question', QuestionSchema);