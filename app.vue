<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Hello Nuxt and Faker</h1>

    <div class="overflow-x-auto rounded-lg shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Field
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(value, key) in form" :key="key">
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize"
            >
              {{ key }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
