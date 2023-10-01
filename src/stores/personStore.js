import { defineStore } from 'pinia';

export const usePersonStore = defineStore('person', () => {
  const person = [];
  const children = [];

  return {
    children,
    person,
  };
});
