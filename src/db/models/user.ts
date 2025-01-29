import mongoose, { Model, Schema } from 'mongoose';

export interface UserInterface {
  email: string;
  password: string;
}

const UserSchema: Schema<UserInterface> = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<UserInterface> =
  mongoose.models?.User || mongoose.model<UserInterface>('User', UserSchema);

export default User;
