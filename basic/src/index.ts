import 'reflect-metadata';
import { UserModule } from './modules/user/UserModule';
import { Module } from '@atomikjs/core';
import { HttpServer } from '@atomikjs/http';
import { ScheduledManager } from '@atomikjs/cron';
import { MyService } from './modules/scheduled/scheduled';

const scheduledManager = new ScheduledManager([MyService]);
scheduledManager.start();

const appModule = new Module({
  imports: [UserModule],
  controllers: [],
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
