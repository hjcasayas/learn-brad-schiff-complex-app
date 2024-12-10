import type { BaseEntity } from "../base-entity.js";

export interface UserEntity extends BaseEntity {
    username: string;
    password: string;
    email: string;
}