import { Module } from "@atomikjs/core";
import { UserController } from "./UserController";
import { UserService } from "./UserService";
import { AuthGate } from "../../common/gates/AuthGate";
import { UserForge } from "../../common/forges/UserForge";

export const UserModule = new Module({
    controllers: [UserController],
    services: [UserService],
    providers: [AuthGate, UserForge],
})