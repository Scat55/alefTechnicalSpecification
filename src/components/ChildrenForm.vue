<script setup>
import { usePersonStore } from '../stores/personStore';

const chiled = usePersonStore()

const addedChildren = () => {
  chiled.children.push({ name: '', age: null })
}

const removeChiled = () => {
  chiled.children.pop({})
}

</script>

<template>
  <div class="childrenForm">
    <div class="container">
      <div class="childrenForm__label">
        <p class="childrenForm__title">
          Дети (макс.5)
        </p>
        <button
          class="childrenForm__btn"
          @click="addedChildren()"
          v-if="chiled.children.length !== 5"
        >
          <img
            src="../assets/images/plus.svg"
            alt="Plus"
          >
          <span>Добавить ребенка</span>
        </button>
      </div>
      <form
        action="#"
        class="childrenForm__form"
      >
        <div
          class="chiled-one"
          v-for="chiled in chiled.children"
        >
          <div class="
        childrenForm__form-person
        name">
            <span class="childrenForm__form-label">Имя</span>
            <input
              type="text"
              class="childrenForm__form-input"
              v-model="chiled.name"
            >
          </div>
          <div class="childrenForm__form-person age">
            <span class="childrenForm__form-label">Возраст</span>
            <input
              type="text"
              class="childrenForm__form-input"
              v-model="chiled.age"
            >
          </div>
          <span
            class="childrenForm__form-delete"
            @click="removeChiled()"
          >Удалить</span>
        </div>

      </form>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.childrenForm {

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.75rem;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 2px solid $accentColor;
    padding: .625rem 1.25rem;
    border-radius: 6.25rem;
    color: $accentColor;
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: .6875rem;
    cursor: pointer;
    transition: all .3s;

    img {
      margin-right: .25rem;
    }

    &:hover {
      box-shadow: inset 0px 0px 4px 0px $accentColor;
    }
  }

  &__title {

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 1.25rem;
  }

  &__form {
    // display: flex;
    // gap: 1.125rem;
    // align-items: center;

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

    &-delete {
      cursor: pointer;
      color: $accentColor;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
}

.chiled-one {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.25rem;
  margin-top: .625rem;
}
</style>