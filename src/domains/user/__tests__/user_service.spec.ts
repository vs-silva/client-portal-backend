
import type { UserDTO } from "../core/dtos/user.dto.ts";
import { USER_ROLES } from "../core/constants/user-roles.constant.ts";
import type {UserServiceDriverPorts} from "../ports/user-service-driver.ports.ts";
import { UserService } from "../user.service.ts";


describe('User Service tests', () => {

    const idRegex = /^0x[a-f0-9]{40}$/;
    const userService: UserServiceDriverPorts = UserService();

    it('UserService should be defined', () => {
        expect(userService).toBeDefined();
    });

    describe('FindUserByEmail port tests', () => {
        it('FindUserByEmail should be defined', () => {
            expect(userService.findUserByEmail).toBeDefined();
            expect(userService.findUserByEmail).toBeInstanceOf(Function);
        });


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