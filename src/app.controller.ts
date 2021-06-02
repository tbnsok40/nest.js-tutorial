import { Controller, Get } from "@nestjs/common";
import exp from "constants";

@Controller("")
export class AppController{
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
