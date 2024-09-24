import { z } from "zod";

export const userNameValidation = z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/,'Username cannot contain special characters except underscore');

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
});