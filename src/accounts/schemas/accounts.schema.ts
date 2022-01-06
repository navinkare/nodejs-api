import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";
import {Contact, ContactSchema} from "../../contacts/schemas/contact.schema";

export type AccountDocument = Account & Document;

@Schema()
export class Account {
    @Prop()
    _id: string;

    @Prop()
    account_name: string;

    @Prop()
    business_name: string;

    @Prop({ type: [ContactSchema], default: [] })
    contacts: Contact[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);