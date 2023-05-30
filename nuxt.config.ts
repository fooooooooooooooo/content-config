import MyModule from './my-module';

export default defineNuxtConfig({
  modules: [MyModule, '@nuxt/content'],
  content: {
    'my-module': {
      test: 'configured value',
    },
  },
});
