import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";

export type InteractionDocument = Interaction & Document;

@Schema()
export class Interaction {
    @Prop()
    _id: string;

    @Prop()
    Benefit_Verification_Number: string;

    @Prop()
    Created: string;
}

export const InteractionSchema = SchemaFactory.createForClass(Interaction);