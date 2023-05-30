import MyModule from './my-module';

export default defineNuxtConfig({
  // Type 'NuxtModule<MyModuleOptions>' is not assignable to type 'string | false | NuxtModule<ModuleOptions> | [string | NuxtModule<ModuleOptions>, Record<string, any>] | [...] | [...] | null | undefined'.
  modules: [MyModule, '@nuxt/content'],
  content: {
    'my-module': {
      test: 'configured value',
    },
  },
});
