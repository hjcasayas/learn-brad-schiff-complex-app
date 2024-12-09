import type { BaseEntity } from "./base.js";

export interface UserEntity extends BaseEntity {
    username: string;
    password: string;
    email: string;
}