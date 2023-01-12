import { Get,Post, Request,Delete, Param, ParseIntPipe, Body, Controller} from "@nestjs/common";
import { CreateUserDto } from "./users.dtos";
import { UsersService } from "./users.service";

@Controller('user')
export class UsersController {
    constructor (private readonly usersService:UsersService ) {}

    @Get ()
    getUsers() {return this.usersService.getUsers()}

    @Get (':id')
    findUsersById(@Param('id') id:number) {return this.usersService.findUsersById(id)}

    @Post ('create')
    createUsers (@Body() createUsersDto:CreateUserDto) {return this.usersService.createUser(createUsersDto)}
   
    @Delete(':id') 
    delete (@Param('id', ParseIntPipe) id:number) {return this.usersService.deleteUser(id)}
}
