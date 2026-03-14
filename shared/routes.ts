import { z } from 'zod';
import { insertPortfolioSchema, portfolios } from './schema';

export const errorSchemas = {
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  portfolios: {
    list: {
      method: 'GET' as const,
      path: '/api/portfolios',
      responses: {
        200: z.array(z.custom<typeof portfolios.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/portfolios/:id',
      responses: {
        200: z.custom<typeof portfolios.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type PortfolioResponse = z.infer<typeof api.portfolios.get.responses[200]>;
export type PortfoliosListResponse = z.infer<typeof api.portfolios.list.responses[200]>;
