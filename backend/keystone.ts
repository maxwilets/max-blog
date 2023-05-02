import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Resume } from './schemas/Resume';
import { Skill } from './schemas/Skills';
import { insertSeedData } from './seed-data';
import { Education } from './schemas/Education';
import { Coursework } from './schemas/Coursework';
import { CourseImage } from './schemas/CourseImage';
import { SchoolLogo } from './schemas/SchoolLogo';
import { Portfolio } from './schemas/Portfolio';
import { Technology } from './schemas/Technologies';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

function check(name: string) {}

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(
  config(
    config({
      // @ts-ignore
      server: {
        cors: {
          origin: [process.env.FRONTEND_URL],
          credentials: true,
        },
      },
      db: {
        adapter: 'mongoose',
        url: databaseURL,
        async onConnect(keystone) {
          console.log('Connected to the database!');
          if (process.argv.includes('--seed-data')) {
            await insertSeedData(keystone);
          }
        },
      },
      lists: createSchema({
        User,
        Resume,
        Skill,
        Education,
        Coursework,
        CourseImage,
        SchoolLogo,
        Portfolio,
        Technology,
      }),
      ui: {
        isAccessAllowed: ({ session }) => !!session?.data,
      },
      session: withItemData(statelessSessions(sessionConfig), {
        User: 'id',
      }),
    })
  )
);
