import { Service } from "@atomikjs/core";
import { log } from '@atomikjs/logger';

@Service()
export class UserService {
  getUser() {
    log.info('User signed up', 'Account created successfully', {
      category: 'Auth',
      metadata: { userId: 123 },
    });
    return { id: 1, name: 'John Doe' };
  }

  createUser() {
    return { message: 'User created successfully' };
  }
}