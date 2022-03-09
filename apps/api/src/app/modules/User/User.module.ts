import { Module } from "@nestjs/common";
import { UserController } from "./User.controller";
import { UserService } from "./User.service";



@Module({
    controllers:[UserController],
    providers:[UserService]
})

export class UserModule {}