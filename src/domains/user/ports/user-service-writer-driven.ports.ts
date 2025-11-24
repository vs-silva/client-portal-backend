import type {UserDTO} from "../core/dtos/user.dto.ts";

export interface UserServiceWriterDrivenPorts {
    saveUser(user: UserDTO): Promise<UserDTO | null>;
}