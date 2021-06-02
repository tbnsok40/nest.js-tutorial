import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller("movies")
export class MoviesController {

  @Get()
  getAll() {
    return "This will return all movie";
  }

  @Get("/:id")
  getOne(@Param("id") movieId: string) {
    return `return movie number : ${movieId}`;
  }

  @Post()
  create() {
    return "this will create a movie";
  }

  @Delete("/:id")
  delete(@Param("id") movieId: String) {
    return `deleted a movie ${movieId}`;
  }

  @Patch("/:id")
  update(@Param("id") movieId: String){
    return `updated a movie ${movieId}`;
  };
}
