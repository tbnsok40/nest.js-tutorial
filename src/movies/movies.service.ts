import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { CreateMovieDto } from "./dto/create-movie.dto";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    this.errorMsg(movie, id);
    return movie;
  }

  deleteOne(id: number){
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
    return id;
  }

  create(movieData:CreateMovieDto) {
    // @ts-ignore
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    });
    return movieData;
  }

  update(id: number, updateData: UpdateMovieDto){
    const movie = this.getOne(id);
    this.deleteOne(id);
    // @ts-ignore
    this.movies.push({ ...movie, ...updateData });
  }

  errorMsg(movie, id) {
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
  }
}
