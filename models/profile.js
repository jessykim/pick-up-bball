import mongoose from 'mongoose'

const Schema = mongoose.Schema

const notesSchema = new Schema({
  name: String,
  notes: String,
  stats: String,
  goals: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  notes: [notesSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
