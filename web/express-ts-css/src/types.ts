import type { Session, SessionData } from "express-session";
import type { Request } from 'express';
import type { UserModel } from "@complex-app/lib-services";

export interface LoginRequest extends Request {
    session: Session & Partial<SessionData> & { user?: Omit<UserModel, 'password'> | null };
}