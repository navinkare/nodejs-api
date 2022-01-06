import {
    Body,
    Controller,
    Delete,
    Get, Logger,
    Param,
    Post,
    Put, Query, UseInterceptors,
} from '@nestjs/common';
import {AccountDto} from "./dto/account.dto";
import {AccountsService} from "./accounts.service";
import {ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {Account} from "./schemas/accounts.schema";
import {CreateContactDto} from "../contacts/dto/create-contact.dto";
import {ResponseInterceptor} from "../interceptors/response.interceptor";



@ApiTags('accounts')
@Controller('accounts')
@UseInterceptors(ResponseInterceptor)
export class AccountsController {
    constructor(private readonly accountService: AccountsService) {
    }

    @ApiOkResponse({
        description: 'Retrieved all accounts',
        type: Account
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
    })
    /*@Get()
    async findAll() {
        return await this.accountService.findAll()
    }*/

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.accountService.findById(id);
    }

    @Post()
    create(@Body() accountDto: AccountDto) {
        return this.accountService.create(accountDto);
    }

    @Get()
    async findByContactFirstName(@Query('first_name') first_name: string){
        Logger.log('findByContactFirstName...'+ first_name)
        return await this.accountService.findByContactFirstName(first_name);
    }


}