import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Contact, ContactDocument} from "./schemas/contact.schema";
import {Model} from "mongoose";

@Injectable()
export class ContactsService {

  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {
  }

  async create(createContactDto: CreateContactDto) {
    return this.contactModel.create(createContactDto);
  }

  findAll() {
    return this.contactModel.find();
  }

  findByFirstName(first_name: string) {
    return this.contactModel.findOne({firstName: first_name});
  }

  update(first_name: string, updateContactDto: UpdateContactDto) {
    //return this.contactModel.updateOne({firstName}, {$set: {...updateContactDto}});
    return this.contactModel.updateMany({first_name}, {$set: {...updateContactDto}})
  }

  remove(first_name: string) {
    return this.contactModel.remove({first_name})
  }
}
