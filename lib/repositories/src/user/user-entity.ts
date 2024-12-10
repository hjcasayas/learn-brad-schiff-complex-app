import type { BaseEntity } from "@root/base-entity.js";

export interface UserEntity extends BaseEntity {
    username: string;
    password: string;
    email: string;
}