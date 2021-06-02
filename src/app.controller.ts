import { Controller, Get } from "@nestjs/common";

@Controller('home')
export class AppController{
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
