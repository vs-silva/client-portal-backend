import {describe, expect, test, vi} from "vitest";
import type { UserDTO } from "../core/dtos/user.dto.ts";
import type {UserServiceDriverPorts} from "../ports/user-service-driver.ports.ts";
import type {UserServiceReaderDrivenPorts} from "../ports/user-service-reader-driven.ports.ts";
import type {UserServiceWriterDrivenPorts} from "../ports/user-service-writer-driven.ports.ts";
import { UserService } from "../user.service.ts";

import { faker } from '@faker-js/faker';

describe('User Service - FindUserByEmail port tests', () => {

    const reader: UserServiceReaderDrivenPorts = <UserServiceReaderDrivenPorts>{
        getUserByEmail(email: string): Promise<UserDTO | null> {
            return Promise.resolve(null);
        }
    };

    const writer: UserServiceWriterDrivenPorts = <UserServiceWriterDrivenPorts>{
        saveUser(user: UserDTO): Promise<UserDTO | null> {
            return Promise.resolve(null);
        }
    };

    const userService: UserServiceDriverPorts = UserService(reader, writer);

    test('UserService should be defined', () => {
        expect(userService).toBeDefined();
    });

    test('FindUserByEmail should be defined', () => {
        expect(userService.findUserByEmail).toBeDefined();
        expect(userService.findUserByEmail).toBeInstanceOf(Function);
    });

    test('FindUserByEmail should return null if the user is not found', async () => {

        const fakeEmail = faker.internet.email();
        const spy = vi.spyOn(userService, 'findUserByEmail');
        const result = await userService.findUserByEmail(fakeEmail);

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(fakeEmail);

        expect(result).toBeNull();
    });



    /*
    describe('RegisterUser port tests', () => {
        it('RegisterUser should be defined', () => {
            expect(userService.registerUser).toBeDefined();
            expect(userService.registerUser).toBeInstanceOf(Function);
        });

        it('RegisterUser should allow a new user to be successfully registered', async () => {

            const newUser = <UserDTO>{
                name: 'John Doe',
                email: 'johnDoe@doe.com',
                password: 'secret',
                role: USER_ROLES.FREELANCER
            };

            const spy = jest.spyOn(userService, 'registerUser');
            const result = await userService.registerUser(newUser);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(newUser);

            expect(result).toBeTruthy();
            expect(result.id).toBeDefined();
            expect(result.name).toBe(newUser.name);
            expect(result.email).toBe(newUser.email);
            expect(result.password).toBe(newUser.password);
            expect(result.role).toBe(newUser.role);

            expect(result).toStrictEqual(expect.objectContaining(<UserDTO>{
                id: expect.stringMatching(idRegex),
                name: expect.any(String),
                email: expect.any(String),
                password: expect.any(String),
                role: expect.any(String)
            }));
        });


    });*/


});