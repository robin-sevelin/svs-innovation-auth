import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from './db/connection';
import User from './db/models/user';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        await dbConnect();

        const user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (!user || !user.password) {
          throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password.toString(),
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid email or password');
        }

        const token = jwt.sign(
          { id: user._id, email: user.email },
          JWT_SECRET,
          { expiresIn: '7d' }
        );

        return {
          id: user._id.toString(),
          email: user.email,
          token,
        };
      },
    }),
  ],
  // callbacks: {
  //   async session({ session, token }) {
  //     if (session.user) {
  //       session.user.id = token.id;
  //       session.user.token = token.token; // Include JWT in session if needed
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.token = user.token; // Store JWT in NextAuth token
  //     }
  //     return token;
  //   },
  // },
  session: {
    strategy: 'jwt',
  },
  secret: JWT_SECRET,
});
