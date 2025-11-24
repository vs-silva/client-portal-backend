import {UserDTO} from "../core/dtos/user.dto.ts";

export interface UserServiceReaderDrivenPorts {
    getUserByEmail(email: string): Promise<UserDTO | null>;
}