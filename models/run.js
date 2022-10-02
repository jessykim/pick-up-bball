import mongoose from 'mongoose'

const Schema = mongoose.Schema

const runSchema = new Schema({
  day: String,
  time: String,
  location: String,
  host: String,
  comments: String,
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}