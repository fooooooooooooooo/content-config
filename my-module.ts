import { defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'path';

export interface MyModuleOptions {
  test: string;
}

export default defineNuxtModule<MyModuleOptions>({
  defaults: {
    test: 'module default value',
  },
  setup(_options, nuxt) {
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {};
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || [];
    nuxt.options.nitro.externals.inline.push(resolve('./my-module'));

    // Argument of type '"content:context"' is not assignable to parameter of type 'HookKeys<NuxtHooks>'
    nuxt.hook('content:context', contentContext => {
      contentContext.transformers.push(resolve('./my-transformer.ts'));
    });
  },
});
