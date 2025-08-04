import { UserService } from './UserService';
import { Forge, Gate, Shield, Wrap } from '@atomikjs/runtime';
import { UserForge } from '../../common/forges/UserForge';
import { AuthGate } from '../../common/gates/AuthGate';
import { LoggerWrapper } from '../../common/wrappers/LoggerWrapper';
import { ErrorShield } from '../../common/shields/ErrorShield';
import { Body, Controller, Get, Param, Post, Query } from '@atomikjs/http';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  
  @Get('/')
  getUser(@Query('name') name: string) {
    return this.userService.getUser();
  }

  @Post('/')
  @Forge(UserForge)
  createUser(@Body() body : any) {
    return this.userService.createUser();
  }

  @Get('/test')
  @Gate(AuthGate)
  @Wrap(LoggerWrapper)
  @Shield(ErrorShield)
  testEndpoint(@Query('param') param: string) {
    if (param === 'error') {
      throw new Error('Test error');
    }
  }

  @Get('/:id')
  @Gate(AuthGate)
  getUserById(@Param('id') id: string) {
    return this.userService.getUser(); 
  }
}