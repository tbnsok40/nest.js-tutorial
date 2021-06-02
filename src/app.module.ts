import { Module } from "@nestjs/common";
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 데코레이터
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
