import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Coursework = list({
  fields: {
    name: text({ isRequired: true }),
    course: text({ isRequired: true }),
    description: text({ isRequired: true }),
    author: text(),
    link: text(),
    photo: relationship({
      ref: 'CourseImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
