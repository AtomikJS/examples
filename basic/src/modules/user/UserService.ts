import { Service } from "@atomikjs/core";

@Service()
export class UserService {
  getUser() {
    console.log("UserService.getUser called");
    return { id: 1, name: 'John Doe' };
  }

  createUser() {
    console.log("UserService.createUser called");
    return { message: 'User created successfully' };
  }
}