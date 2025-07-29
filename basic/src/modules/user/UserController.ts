import { Controller, Get, Post } from '@atomikjs/http';
import { UserService } from './UserService';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  
  @Get('/')
  getUser() {
    return this.userService.getUser();
  }

  @Post('/')
  createUser() {
    return this.userService.createUser();
  }

  @Get('/:id')
  getUserById(id: string) {
    console.log(`Fetching user with ID: ${id}`);
    return this.userService.getUser(); 
  }
}