import { faker } from "@faker-js/faker";
import type { FormInformation } from "@/types";
export class FakerWrapper {
  formInformation(): FormInformation {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      country: faker.location.country(),
      province: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      streetAddress: faker.location.streetAddress(),
    };
  }
}
