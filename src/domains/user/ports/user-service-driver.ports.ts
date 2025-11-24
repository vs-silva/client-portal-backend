import type {UserDTO} from "../core/dtos/user.dto.ts";

export interface UserServiceDriverPorts {
    findUserByEmail(email: string): Promise<UserDTO | null>;
    registerUser(user: UserDTO): Promise<UserDTO | null>;
}