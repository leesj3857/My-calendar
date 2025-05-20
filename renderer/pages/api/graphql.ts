import { createYoga, createSchema } from 'graphql-yoga';
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const typeDefs = /* GraphQL */ `
  type Schedule {
    id: ID!
    title: String!
    description: String
    date: String!
  }
  type Message {
    message: String!
  }
  type Query {
    schedules: [Schedule!]!
  }
  type Mutation {
    createSchedule(title: String!, description: String, date: String!): Schedule!
    deleteSchedule(id: ID!): Message!
  }
`;

const resolvers = {
  Query: {
    schedules: async () => {
      const { data, error } = await supabase.from('schedules').select('*');
      if (error) throw new Error(error.message);
      return data;
    },
  },
  Mutation: {
    createSchedule: async (_: any, { title, description, date }: any) => {
      const { data, error } = await supabase
        .from('schedules')
        .insert([{ title, description, date }])
        .select()
        .single();
      if (error) throw new Error(error.message);
      return data;
    },
    deleteSchedule: async (_: any, { id }: any) => {
      const { error } = await supabase.from('schedules').delete().eq('id', id);
      if (error) throw new Error(error.message);
      return { message: '일정이 삭제되었습니다.' };
    },
  },
};

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return yoga(req, res);
}