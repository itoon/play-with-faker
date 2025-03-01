<template>
  <div>
    <h1 class="text-2xl font-bold">Hello Nuxt and Faker</h1>
    {{ form }}
  </div>
</template>

<script setup lang="ts">
import { faker } from "@faker-js/faker";
const form = ref({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  country: faker.location.country(),
  province: faker.location.state(),
  city: faker.location.city(),
});
</script>
