// 'use client';

import { GraphQLProvider, createClient } from 'graphql-mini';
import React from 'react';

const client = createClient({
  url: '/api/graphql/',
});

export default function GraphQLProviderWrapper({ children }: { children: React.ReactNode }) {
  return <GraphQLProvider client={client}>{children}</GraphQLProvider>;
}