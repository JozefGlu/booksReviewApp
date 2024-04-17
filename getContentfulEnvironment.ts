import { strict as assert } from 'assert';
import * as contentfulManagement from 'contentful-management';
import { EnvironmentGetter } from 'contentful-typescript-codegen';
import dotenv from 'dotenv';

dotenv.config();

const { VITE_API_KEY, VITE_SPACE_ID, VITE_ENVIRONMENT } = process.env;

assert(VITE_API_KEY, 'VITE_API_KEY is not provided');
assert(VITE_SPACE_ID, 'VITE_SPACE_ID is not provided');
assert(VITE_ENVIRONMENT, 'VITE_ENVIRONMENT is not provided');

const getContentfulEnvironment: EnvironmentGetter = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: VITE_API_KEY,
  });

  const space = await contentfulClient.getSpace(VITE_SPACE_ID);
  return space.getEnvironment(VITE_ENVIRONMENT);
};

module.exports = getContentfulEnvironment;
