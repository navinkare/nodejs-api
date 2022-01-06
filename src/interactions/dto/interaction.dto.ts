import {ApiProperty} from "@nestjs/swagger";

export class InteractionDto{
    @ApiProperty()
    _id: string;

    @ApiProperty()
    Benefit_Verification_Number: string;

    @ApiProperty()
    Created: string;
}