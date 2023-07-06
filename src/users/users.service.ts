import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma} from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async findAll(page: number, perPage: number): Promise<User[]>{
        const skip = (page - 1) *perPage

        return this.prisma.user.findMany({
            skip,
            take:perPage
        })
    }
}
