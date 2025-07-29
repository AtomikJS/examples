import { Body, Controller, Get, Param, Post, Query } from '@atomikjs/http';
import { UserService } from './UserService';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  
  @Get('/')
  getUser(@Query('name') name: string) {
    console.log(`Fetching user with name: ${name}`);
    return this.userService.getUser();
  }

  @Post('/')
  createUser(@Body() body : any) {
    console.log('Creating user with body:', body);
    return this.userService.createUser();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    console.log(`Fetching user with ID: ${id}`);
    return this.userService.getUser(); 
  }
}