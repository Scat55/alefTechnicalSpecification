<script setup>
import TheHeader from '../components/TheHeader.vue';
import PersonForm from '../components/PersonForm.vue';

</script>

<template>
  <div class="page">
    <header>
      <TheHeader />
    </header>
    <main class="main">
      <PersonForm />
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
</style>