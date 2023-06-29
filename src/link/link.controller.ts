import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { LinkService } from './link.service';

@Controller()
export class LinkController {
  constructor(private linkService: LinkService) {}

  @UseGuards(AuthGuard)
  @Get('admin/users/:id/links')
  async all(@Param('id', ParseIntPipe) id: number) {
    return this.linkService.findWithRelation(
      {
        user: id,
      },
      ['orders'],
    );
  }
}
