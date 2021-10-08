import { CatsModule } from './../cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://nextLense:nextLense@cluster0.ufcti.mongodb.net/shakib?retryWrites=true&w=majority',
      }),
    }),
    CatsModule,
  ],
  controllers: [],
})
export class AppModule {}
