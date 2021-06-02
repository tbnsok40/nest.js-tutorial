import { Module } from "@nestjs/common";
import { MoviesController } from './movies/movies.controller';

// 데코레이터
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: []
})
export class AppModule {
}
