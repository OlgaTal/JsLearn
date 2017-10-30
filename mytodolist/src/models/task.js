import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  due: Date,
  priority: Number,
  category: String,
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// const Task = mongoose.model('Task', taskSchema);
// module.exports = Task;

module.exports = mongoose.model('Task', taskSchema);
