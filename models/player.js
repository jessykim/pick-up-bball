import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  },
  position: {
    type: String, 
    enum: ["no preference", "center", "power forward", "small forward", "point guard", "shooting guard"]
  },
  objective: String,
  teams: String,
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}