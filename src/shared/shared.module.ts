import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
      global: true,
    }),
  ],
  exports: [JwtModule],
})
export class SharedModule {}
