"use server";

import { handleError } from '../../src/lib/utils';
import { CreateUserParams } from '../../types';
import User from '../database/models/user.model';
import { connectToDB } from '../database/mongoose';

/**
 * Creates a new user in the database.
 * @param {CreateUserParams} user - The user details to create.
 * @returns {Promise<Object | undefined>} - The created user.
 */
export async function createUser(user: CreateUserParams): Promise<object | undefined> {
  try {
    await connectToDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
    throw error; // ✅ Re-throw to let errors bubble up if needed
  }
}

/**
 * Fetches a user by their Clerk ID.
 * @param {string} userId - The Clerk ID of the user.
 * @returns {Promise<Object>} - The user object.
 * @throws Will throw an error if the user is not found.
 */
export async function getUserById(userId: string): Promise<object> {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error('User not found'); // ✅ Ensures tests can detect missing users
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
    throw error; // ✅ Important for test coverage and clarity
  }
}

/**
 * Updates the plan for a user in the database.
 * @param {string} clerkId - The Clerk ID of the user to update.
 * @param {string} plan - The new plan for the user (e.g., 'pro').
 * @returns {Promise<Object>} - The updated user.
 * @throws Will throw an error if the user is not found.
 */
export async function updateUserPlan(clerkId: string, plan: string): Promise<object> {
  try {
    await connectToDB();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { plan },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error('User not found');
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
    throw error; // ✅ Keeps error behavior consistent
  }
}
