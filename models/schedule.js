import mongoose from 'mongoose'

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
  players: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

export {
  Schedule
}