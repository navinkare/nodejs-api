import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':first_name')
  findOne(@Param('first_name') first_name: string) {
    return this.contactsService.findByFirstName(first_name);
  }

  @Patch(':first_name')
  update(@Param('firstName') first_name: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(first_name, updateContactDto);
  }

  @Delete(':first_name')
  remove(@Param('first_name') first_name: string) {
    return this.contactsService.remove(first_name);
  }
}
