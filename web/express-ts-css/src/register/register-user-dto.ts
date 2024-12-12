export class RegisterUserDTO {
    username: string;
    password: string;
    email: string;

    constructor(private data: any) {
        this.username = data != null && data.username != null ? (data.username as string).trim().toLowerCase() : '';
        this.password = data != null && data.password != null ? data.password : '';
        this.email = data != null && data.email != null ? (data.email as string).trim().toLowerCase() : '';
    }
}