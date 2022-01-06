import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {InteractionsService} from "./interactions.service";
import {ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {Interaction} from "./schemas/interactions.schema";



@ApiTags('interactions')
@Controller('interactions')
export class InteractionsController {
    constructor(private readonly interactionService: InteractionsService) {
    }

    @ApiOkResponse({
        description: 'Retrieved all interactions',
        type: Interaction
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
    })
    @Get()
    async findAll() {
        return await this.interactionService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.interactionService.findById(id);
    }


}