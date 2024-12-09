export interface IUserService<UserDTO> {
    register: (userDTO: UserDTO) => Promise<void>; 
}