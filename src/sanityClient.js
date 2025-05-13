import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ncoi8u9l',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-05-13',
});


