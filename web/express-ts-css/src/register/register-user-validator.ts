import validator from "validator";
import type { RegisterUserDTO } from "./register-user-dto.js";

export const registerUserValidator = ({username, email, password}: RegisterUserDTO): string[] | null => {
    const errors: string[] = [];
    if (username.trim() === '') {
        errors.push('You must provide a username.')
    }

    if (username.trim() !== '' && !validator.isAlphanumeric(username)) {
        errors.push('Username can only contain letters and numbers.')
    }

    if (password.trim() === '') {
        errors.push('You must provide a password')
    }

    if (!validator.isEmail(email)) {
        errors.push('You must provide a valid email address.')
    }

    if (password.length > 0 && password.length < 12) {
        errors.push('Password must be at least 12 characters');
    }

    if (password.length > 50) {
        errors.push('Password cannot exceed 50 characters');
    }

    if (username.length > 0 && username.length < 3) {
        errors.push('Username must be at least 3 characters');
    }

    if (username.length > 30) {
        errors.push('Password cannot exceed 30 characters');
    }

    if (errors.length > 0) {
        return errors;
    }

    return null;
}