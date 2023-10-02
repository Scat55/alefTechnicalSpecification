<script setup>
import { ref } from 'vue'
import { usePersonStore } from '../stores/personStore';
import { useRouter } from 'vue-router';


const chiled = usePersonStore()

const personName = ref('')
const personAge = ref(null);


const count = ref(0);

const router = useRouter();

const addedChildren = () => {
  count.value++
  chiled.children.push({ name: '', age: null })
  console.log(chiled.children)

}

const removeChiled = () => {
  count.value--
  chiled.children.pop({})
}

const handler = () => {
  chiled.personName = personName
  chiled.personAge = personAge

  router.push('/preview')
}

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
        @submit.prevent="handler()"
      >
        <!-- Персональная форма -->
        <div class="personForm__form-person name">
          <span class="personForm__form-label">Имя</span>
          <input
            type="text"
            class="personForm__form-input"
            v-model="personName"
          >

        </div>

        <div class="personForm__form-person age">
          <span class="personForm__form-label">Возраст</span>
          <input
            type="text"
            class="personForm__form-input"
            v-model="personAge"
          >
        </div>
        <!-- Форма ребенка -->
        <div class="childrenForm__label">
          <p class="childrenForm__title">
            Дети (макс.5)
          </p>
          <button
            class="childrenForm__btn"
            type="button"
            @click="addedChildren()"
            v-if="count !== 5"
          >
            <img
              src="../assets/images/plus.svg"
              alt="Plus"
            >
            <span>Добавить ребенка</span>
          </button>
        </div>
        <div
          class="chiled-one"
          v-for="chil in  chiled.children "
        >
          <div class="childrenForm__form-person name">
            <span class="childrenForm__form-label">Имя</span>
            <input
              type="text"
              class="childrenForm__form-input"
              v-model="chil.name"
            >
          </div>
          <div class="
              childrenForm__form-person
              age">
            <span class="childrenForm__form-label">Возраст</span>
            <input
              type="text"
              class="childrenForm__form-input"
              v-model="chil.age"
            >
          </div>
          <span
            class="childrenForm__form-delete"
            @click="removeChiled()"
          >Удалить</span>
        </div>
        <button class="form__save">Сохранить</button>
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

.form__save {
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background-color: $accentColor;
  border-radius: 6.25rem;
  color: #fff;
  border: none;
  width: 7.375rem;
  padding: .625rem 1.25rem;
  cursor: pointer;
  margin-top: 1.875rem;
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
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