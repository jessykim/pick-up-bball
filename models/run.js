import mongoose from 'mongoose'

const Schema = mongoose.Schema

const runSchema = new Schema({
  date: String,
  time: String,
  location: String,
  host: String,
  note: String,
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}