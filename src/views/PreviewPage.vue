<script setup>
import TheHeader from '../components/TheHeader.vue';

import { usePersonStore } from '../stores/personStore';

const person = usePersonStore()
</script>

<template>
  <div class="page">
    <header>
      <TheHeader />
    </header>

    <main>
      <div class="container">
        <span class="person__title">Персональные данные</span>

        <div class="person__info">{{ person.personName }}, {{ person.personAge }}</div>

        <span class="children__title">Дети</span>

        <div
          class="children__info"
          v-for="chiled in person.children"
        >
          {{ chiled.name }}
        </div>
      </div>
    </main>

    <footer class='footer'>
      <p class="footer__text">all rights reserved</p>
    </footer>
  </div>
</template>



<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
}

.footer {
  flex: 0;
  padding: 1.875rem 0 1.875rem 0;
  background-color: #fafafa;

  &__text {
    text-align: center;

  }
}

.person {
  &__title {
    display: block;
    margin-top: 1.875rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 1.25rem;
  }

  &__info {
    font-weight: bold;
  }
}

.children {
  &__title {
    display: block;
    margin-top: 3.75rem;
  }
}
</style>