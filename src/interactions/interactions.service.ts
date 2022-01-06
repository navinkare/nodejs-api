import { Injectable, Logger } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Interaction, InteractionDocument} from "./schemas/interactions.schema";

@Injectable()
export class InteractionsService {
    constructor(@InjectModel(Interaction.name) private readonly model: Model<InteractionDocument>) {
    }

    async findAll(): Promise<Interaction[]> {
        Logger.log("In Service");
        return await this.model.find().exec();
    }

    async findById(id: string): Promise<Interaction[]> {
        return await this.model.find({"id": id}).exec();
    }
}
