<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <img
        src="../assets/images/Logo.svg"
        alt="Logo"
        class="header__logo-img"
      >
      <div class="header__logo-links">
        <RouterLink
          to="/"
          class="header__logo-link"
        >Форма</RouterLink>
        <RouterLink
          to="/preview"
          class="header__logo-link"
        >Превью</RouterLink>
      </div>
    </div>

  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.header {
  margin-top: 1.375rem;
  padding-bottom: 1.375rem;
  border-bottom: 1px solid #f1f1f1;

  &__logo {
    display: flex;
    align-items: center;
    margin-left: 3.1875rem;

    &-img {
      margin-right: 27rem;
    }

    &-links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    &-link {
      text-decoration: none;
      color: $greyColor;
      transition: all .3s;

      &:hover {
        font-weight: bold;
      }
    }

  }

}
</style>