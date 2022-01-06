import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {InteractionsService} from "./interactions.service";
import {Interaction, InteractionSchema} from "./schemas/interactions.schema";
import {InteractionsController} from "./interactions.controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: Interaction.name, schema: InteractionSchema }])],
    controllers: [InteractionsController],
    providers: [InteractionsService],
})
export class InteractionsModule {}
