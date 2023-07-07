import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

    async create(data: Prisma.UserCreateInput): Promise<User>{
        try {
            return await this.prisma.user.create({data})
        } catch (error) {
            throw new InternalServerErrorException(`Error creating the user`, error)
        }
    }

    async update(userId: number, data: Prisma.UserUpdateInput): Promise<User> {
        try {
            const updatedUser = await this.prisma.user.update({
                where: {id: userId},
                data
            })
            if(!updatedUser)
                throw new NotFoundException(`User with ID ${userId} not found`)
                return updatedUser
        } catch(error){
            throw new InternalServerErrorException(
                `Error updating the user: ${error.message}`
            )
        }
    }
}
