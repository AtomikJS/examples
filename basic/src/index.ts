import 'reflect-metadata';
import { UserModule } from './modules/user/UserModule';
import { Module } from '@atomikjs/core';
import { HttpServer } from '@atomikjs/http';

const appModule = new Module({
  imports: [UserModule],
})

appModule.init();

const server = new HttpServer({
  port: 3000,
  container: appModule.getContainer(),
  controllers: appModule.getControllers(),
  onStart: () => {
    console.log('🚀 Server ready on http://localhost:3000');
  }
});

server.start();
