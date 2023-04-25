import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Skill = list({
  fields: {
    skillName: text({ isRequired: true }),
    level: integer(),
  },
});
