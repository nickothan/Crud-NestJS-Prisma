import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {email: email}
        })
        if(!user) throw new NotFoundException(`User with email ${email} not found`)
        return user
    }

    async findById(userId: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {id: userId}
        })
        if(!user) throw new NotFoundException(`User with Id ${userId} not found`)
        return user
    }
}
