import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  // Get 2개 이상 사용 불가
  @Get()
  getHi(): string {
    return this.appService.getHi();
  }
}
