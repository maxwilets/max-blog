import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Technology = list({
  fields: {
    name: text(),
    typeLink: text(),
    product: relationship({ ref: 'Portfolio.technologies' }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'typeLink', 'product'],
    },
  },
});
