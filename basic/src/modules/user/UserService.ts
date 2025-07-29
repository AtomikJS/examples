import { Service } from "@atomikjs/core";

@Service()
export class UserService {
  getUser() {
    return { id: 1, name: 'John Doe' };
  }

  createUser() {
    return { message: 'User created successfully' };
  }
}