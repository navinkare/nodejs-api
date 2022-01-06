import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from "./accounts/accounts.module";
import { InteractionsModule } from "./interactions/interactions.module";
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
      MongooseModule.forRoot("mongodb+srv://confluent_cloud_sink_user:thisIsAPassword@dev.aiwyo.mongodb.net/ddil_group_database?retryWrites=true&w=majority"),
      AccountsModule,
      InteractionsModule,
      ContactsModule
  ],

})
export class AppModule {}
