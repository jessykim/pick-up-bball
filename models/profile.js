import mongoose from 'mongoose'

const Schema = mongoose.Schema

const notesSchema = new Schema({
  notes: String,
  stats: String,
  goals: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  position: {
    type: String, 
    enum: ["no preference", "center", "power forward", "small forward", "point guard", "shooting guard"]
  },
  level: String,
  notes: [notesSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
