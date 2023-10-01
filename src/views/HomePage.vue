<script setup>
import TheHeader from '../components/TheHeader.vue';
import PersonForm from '../components/PersonForm.vue';
import ChildrenForm from '../components/ChildrenForm.vue';
</script>

<template>
  <div class="page">
    <header>
      <TheHeader />
    </header>
    <main>
      <PersonForm />
      <ChildrenForm />
    </main>
  </div>
</template>



<style lang="scss" scoped></style>