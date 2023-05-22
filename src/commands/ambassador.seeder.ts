import { NestFactory } from '@nestjs/core';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcryptjs';

import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userServices = app.get(UserService);

  const password = await bcrypt.hash('123456', 12);

  for (let i = 0; i < 30; i++) {
    await userServices.save({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password,
      is_ambassador: true,
    });
  }

  process.exit();
})();
