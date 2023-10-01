import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePersonStore = defineStore('person', () => {
  const personName = '';
  const personAge = null;
  const children = ref([]);

  return {
    children,
    personName,
    personAge,
  };
});
