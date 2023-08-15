// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Player, Character } = initSchema(schema);

export {
  Player,
  Character
};