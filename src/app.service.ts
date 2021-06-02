import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello!";
  }

  getHi(): string {
    return "Hi 에이치 아이~";
  }
}

// service is a class basically which contains function inside of it.
