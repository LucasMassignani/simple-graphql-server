import { Resolvers } from '../../__types__/resolvers-types';
import { dateScalar } from './date/dateScalar';

export const scalarResolver: Resolvers = {
  Date: dateScalar,
};
