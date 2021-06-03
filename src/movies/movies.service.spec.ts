import { Test, TestingModule } from "@nestjs/testing";
import { MoviesService } from "./movies.service";
import { NotFoundException } from "@nestjs/common";

describe("MoviesService", () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService]
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    it("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne", () => {

    it("should return a movie", () => {
      service.create({
        title: "Test",
        genres: ["tests"],
        year: 2000
      });
      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });

    it("should throw 404 ", () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual("Movie with id 999 not found");
      }
    });
  });


  describe("Create", () => {
    it("should create a movie", () => {
      const result = service.create({
        title: "Test",
        genres: ["tests"],
        year: 2000
      });
      expect(result).toBeDefined();
      expect(result.title).toEqual("Test");

      const resultList = service.getAll();
      expect(resultList.length).toEqual(1);
    });
  });


  describe("Update", () => {
    it("first create a movie", () => {
      service.create({
        title: "Test",
        genres: ["tests"],
        year: 2000
      });
      const updateState = "updatedTest";
      service.update(1, {
        title: updateState
      });
      expect(service.getOne(1).title).toEqual(updateState);
    });
  });

  describe("deleteOne", () => {
    it("deletes a movie", () => {
      service.create({
        title: "Test",
        genres: ["test"],
        year: 2000
      });
      const allMovies = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(allMovies);


    });
  });
});
