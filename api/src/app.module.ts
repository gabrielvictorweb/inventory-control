import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PurchasesService } from './purchases/purchases.service';
import { PurchasesController } from './purchases/purchases.controller';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, PurchasesModule],
  controllers: [AppController, PurchasesController],
  providers: [AppService, PurchasesService],
})
export class AppModule { }
