import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Education = list({
  fields: {
    name: text({ isRequired: true }),
    title: text({ isRequired: true }),
    location: text({ isRequired: true }),
    time: text({ isRequired: true }),
  },
});
