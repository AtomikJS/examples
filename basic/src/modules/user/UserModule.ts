import { Module } from "@atomikjs/core";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

export const UserModule = new Module({
    controllers: [UserController],
    services: [UserService],
})