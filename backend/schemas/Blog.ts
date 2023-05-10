import { config, list } from '@keystone-6/core';
import { document } from '@keystone-6/fields-document';

export default config({
  lists: {
    SomeListName: list({
      fields: {
        someFieldName: document({
          relationships: {
            /* ... */
          },
          componentBlocks: {
            block: {
              /* ... */
            },
            /* ... */
          },
          formatting: {
            /* ... */
          },
          links: true,
          dividers: true,
          layouts: [
            /* ... */
          ],
        }),
        /* ... */
      },
    }),
    /* ... */
  },
  /* ... */
});
