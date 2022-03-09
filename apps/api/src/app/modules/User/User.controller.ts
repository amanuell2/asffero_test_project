import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './User.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(
    @Body('name') name: string,
    @Body('surname') surname: number,
    @Body('dateOfBirth') dateOfBirth: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('timeStamp') timeStamp: string
  ) {
    const id = Math.random().toString();
    const generatedId = this.userService.addUser(
      id,
      name,
      surname,
      dateOfBirth,
      phone,
      email,
      timeStamp
    );
    return { id: generatedId };
  }

  @Get()
  getUsers(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('search') search: string
  ) {
    return this.userService.getUsers(page, limit, search);
  }

  @Get(':id')
  getUser(@Param('id') UserId: string) {
    return this.userService.getUser(UserId);
  }

  @Patch(':id')
  editUser(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('surname') surname: number,
    @Body('dateOfBirth') dateOfBirth: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('timeStamp') timeStamp: string
  ) {
    return this.userService.editUser(
      id,
      name,
      surname,
      dateOfBirth,
      phone,
      email,
      timeStamp
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') UserId: string) {
    this.userService.deleteUser(UserId);
  }
}
