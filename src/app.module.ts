import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Service } from './entity/service.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // auto-loads all entities
      synchronize: true, // auto-creates tables based on your entity classes
    }),
    TypeOrmModule.forFeature([Service]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
