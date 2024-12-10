import validator from "validator";
import type { UserDTO } from "../dto/user.js";

export class UserValidator {
    errors: string[] = [];

    constructor(private data: any) {

    }

    validate = () => {
        if (this.data == null || this.data.username == null || this.data.username.trim() === '') {
            this.errors.push('You must provide a username.')
        }

        if (this.data != null && this.data.username != null && this.data.username.trim() !== '' && !validator.isAlphanumeric(this.data.username)) {
            this.errors.push('Username can only contain letters and numbers.')
        }

        if (this.data == null || this.data.password == null || this.data.password.trim() === '') {
            this.errors.push('You must provide a password')
        }

        if (!validator.isEmail(this.data.email)) {
            this.errors.push('You must provide a valid email address.')
        }

        if (this.data != null && this.data.password != null && this.data.password.length > 0 && this.data.password.length < 12) {
            this.errors.push('Password must be at least 12 characters');
        }

        if (this.data != null && this.data.password != null && this.data.password.length > 100) {
            this.errors.push('Password cannot exceed 100 characters');
        }

        if (this.data != null && this.data.username != null && this.data.username.length > 0 && this.data.username.length < 3) {
            this.errors.push('Username must be at least 3 characters');
        }

        if (this.data != null && this.data.username != null && this.data.username.length > 30) {
            this.errors.push('Password cannot exceed 30 characters');
        }
    }

    cleanUp = () => {
        if (this.data != null && this.data.username != null && typeof (this.data.username) !== 'string') {
            this.data.username = '';
        }

        if (this.data != null && this.data.password != null && typeof (this.data.password) !== 'string') {
            this.data.password = '';
        }

        if (this.data != null && this.data.email != null && typeof (this.data.email) !== 'string') {
            this.data.email = '';
        }

        this.data = {
            password: this.data == null || this.data.password == null ? '' : (this.data.password as string).trim().toLowerCase(),
            username: this.data == null || this.data.username == null ? '' : this.data.username.trim(),
            email: this.data == null || this.data.username == null ? '' : (this.data.email as string).trim().toLowerCase(),
        }
    }

    getUser = () => {
        this.cleanUp();
        this.validate();

        if (this.errors.length > 0) {
            return { user: null, errors: this.errors }
        } else {
            return { user: this.data as UserDTO, errors: null }
        }
    }
}