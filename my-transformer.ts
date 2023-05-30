import type { MarkdownNode, MarkdownRoot, ParsedContent } from '@nuxt/content/dist/runtime/types';
// Cannot find module '@nuxt/content/transformers' or its corresponding type declarations
import { defineTransformer } from '@nuxt/content/transformers';
import { MyModuleOptions } from './my-module';

export default defineTransformer({
  name: 'my-transformer',
  extensions: ['.md'],
  transform(content: ParsedContent, options: MyModuleOptions) {
    options = { test: options.test ?? 'transformer default value' };

    const newNode: MarkdownNode = {
      type: 'text',
      tag: 'p',
      value: options.test,
    };

    (content.body as MarkdownRoot).children.push(newNode);

    return content;
  },
});
