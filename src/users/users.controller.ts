import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma} from '@prisma/client'

@Controller('users')
export class UsersController {
    constructor( private readonly usersService: UsersService) {}
    
    @Get()
    findAll(
    @Query("page") page = 1,
    @Query("pagePage") perPage = 10,
): Promise<User[]> {
    return this.usersService.findAll(+page, +perPage)
}
}