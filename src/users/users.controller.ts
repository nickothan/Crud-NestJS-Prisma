import { Controller, Get, Query, Param, HttpCode, Post, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma} from '@prisma/client'

@Controller('users')
export class UsersController {
    constructor( private readonly usersService: UsersService) {}
    
    //Buscar todos los usuarios
    @Get()
    findAll(
    @Query("page") page = 1,
    @Query("pagePage") perPage = 10,
    ): Promise<User[]> {
        return this.usersService.findAll(+page, +perPage)
    }

    // Usuario por ID
    @Get(':id')
    findById(@Param('id') id: string): Promise<User>{
        return this.usersService.findById(+id)
    }

    //Crear usuario
    @Post()
    @HttpCode(201)
    create(@Body() createUserDto: Prisma.UserCreateInput){
        return this.usersService.create(createUserDto)
    }

    @Put(':id')
    update(
        @Param('id')id: string,
        @Body() updateUserInput: Prisma.UserUpdateInput
    ): Promise<User>{
        return this.usersService.update(+id, updateUserInput)
    }
}