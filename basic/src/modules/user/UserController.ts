import { Body, Controller, Get, Param, Post, Query } from '@atomikjs/http';
import { UserService } from './UserService';
import { Forge, Gate } from '@atomikjs/runtime';
import { UserForge } from '../../common/forges/UserForge';
import { AuthGate } from '../../common/gates/AuthGate';

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
  @Forge(UserForge)
  createUser(@Body() body : any) {
    console.log('Creating user with body:', body);
    return this.userService.createUser();
  }

  @Get('/:id')
  @Gate(AuthGate)
  getUserById(@Param('id') id: string) {
    console.log(`Fetching user with ID: ${id}`);
    return this.userService.getUser(); 
  }
}