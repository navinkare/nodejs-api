import {ApiProperty} from "@nestjs/swagger";
import {Contact} from "../../contacts/schemas/contact.schema";

export class AccountDto{
    @ApiProperty()
    id: string;

    @ApiProperty()
    account_name: number;

    @ApiProperty()
    business_name: string;

    @ApiProperty()
    contacts: Contact[]
}