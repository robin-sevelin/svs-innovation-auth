import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import dbConnect from './db/connection';
import User from './db/models/user';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        userName: { label: 'UserName', type: 'string' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error('Email and password are required');
        }

        await dbConnect();

        const user = await User.findOne({
          email: credentials.email,
        }).select('+password');

        if (!user || !user.password) {
          throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(
          password.toString(),
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid email or password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
});
