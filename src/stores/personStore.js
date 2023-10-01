import { defineStore } from 'pinia';

export const usePersonStore = defineStore('person', () => {
  const children = [];

  return {
    children,
  };
});
