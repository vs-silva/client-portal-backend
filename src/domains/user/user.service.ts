import type {UserDTO} from "./core/dtos/user.dto.ts";
import type {UserServiceDriverPorts} from "./ports/user-service-driver.ports.ts";
import type {UserServiceReaderDrivenPorts} from "./ports/user-service-reader-driven.ports.ts";
import type {UserServiceWriterDrivenPorts} from "./ports/user-service-writer-driven.ports.ts";

export function UserService(reader: UserServiceReaderDrivenPorts, writer: UserServiceWriterDrivenPorts): UserServiceDriverPorts {

    async function findUserByEmail(email: string): Promise<UserDTO | null> {
        return await reader.getUserByEmail(email);
    }

    async function registerUser(user: UserDTO): Promise<UserDTO | null> {
        const existentUser = await findUserByEmail(user.email);

        if (!existentUser) {
            return await writer.saveUser(user);
        }

        return existentUser;
    }

    return {
        findUserByEmail,
        registerUser
    };
}