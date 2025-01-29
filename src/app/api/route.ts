import dbConnect from '@/db/connection';
import User from '@/db/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const GET = async () => {
  await dbConnect();
  try {
    const usersList = await User.find();
    return NextResponse.json(usersList);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  await dbConnect();

  try {
    const { email, password } = await request.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exist' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { success: true, message: 'user created', user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
