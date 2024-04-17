import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_API_KEY ?? '',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY ?? '',
});

export { client };
