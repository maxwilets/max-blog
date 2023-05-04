import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Portfolio = list({
  fields: {
    title: text({ isRequired: true }),
    p1: text(),
    p2: text(),
    p3: text(),
    photo: relationship({
      ref: 'SchoolLogo.project',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    technologies: relationship({
      ref: 'Technology.product',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'typeLink'],
        inlineCreate: { fields: ['name', 'typeLink'] },
        inlineEdit: { fields: ['name', 'typeLink'] },
      },
    }),
  },
});
