import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  async getHello(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    return this.appService.getHello();
  }
}
