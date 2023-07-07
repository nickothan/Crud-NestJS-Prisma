import { Controller, Get, Query, Param } from '@nestjs/common';
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
}