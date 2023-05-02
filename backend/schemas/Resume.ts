import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Resume = list({
  fields: {
    title: text({ isRequired: true }),
    company: text({ isRequired: true }),
    date: text({ isRequired: true }),
    startYear: integer(),
    endYear: integer(),
    role1: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
    role2: text({ isRequired: false, ui: { displayMode: 'textarea' } }),
    role3: text({ isRequired: false, ui: { displayMode: 'textarea' } }),
    role4: text({ isRequired: false, ui: { displayMode: 'textarea' } }),
    role5: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
  },
});
