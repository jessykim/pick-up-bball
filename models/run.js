import mongoose from 'mongoose'

const Schema = mongoose.Schema

const runSchema = new Schema({
  date: String,
  starttime: {
    type: String,
    enum: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM']
  },
  endtime: {
    type: String,
    enum: ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM']
  },
  location: String,
  host: { type: Schema.Types.ObjectId, ref: 'Profile'},
  note: String,
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}