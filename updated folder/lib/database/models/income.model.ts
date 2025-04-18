import {
  model,
  models,
  Schema,
} from 'mongoose';

const incomeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Income name is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Income amount is required'],
  },
  icon: {
    type: String,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Creator information is required'],
  }
}, {
  timestamps: true
});

// ✅ Named export + reuses model if already compiled
export const Income = models.Income || model('Income', incomeSchema);
