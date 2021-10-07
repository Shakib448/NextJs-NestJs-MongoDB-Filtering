import { MongooseModule } from '@nestjs/mongoose';
import { seeder } from 'nestjs-seeder';

import { Order, OrderSchema } from './src/schemas/order.schema';
import { OrderSeeder } from './src/seeder/order.seeder';

seeder({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nextLense:nextLense@cluster0.ufcti.mongodb.net/shakib?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Order.history.date, schema: OrderSchema },
    ]),
  ],
}).run([OrderSeeder]);
