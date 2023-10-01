<script setup>

</script>

<template>
  <div class="personFrom">
    <div class="container">
      <p class="personForm__title">
        Персональные данные
      </p>

      <form
        action="#"
        class="personForm__form"
      >
        <div class="personForm__form-person name">
          <span class="personForm__form-label">Имя</span>
          <input
            type="text"
            class="personForm__form-input"
          >
        </div>
        <div class="personForm__form-person age">
          <span class="personForm__form-label">Возраст</span>
          <input
            type="text"
            class="personForm__form-input"
          >
        </div>
      </form>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.personForm {


  &__title {
    margin-top: 1.875rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 1.25rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: .625rem;

    &-person {
      width: 100%;
      border: 1px solid #f1f1f1;
      border-radius: .25rem;
      display: flex;
      flex-direction: column;
      padding: .5rem 0 0 1rem;
      gap: .125rem;
    }

    &-input {
      border: none;
      outline: none;
      padding-bottom: .375rem;
      font-family: Montserrat;
      font-size: .875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
    }

    &-label {
      color: $greyColor;
    }
  }
}
</style>