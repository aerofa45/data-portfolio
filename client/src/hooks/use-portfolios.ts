import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// GET /api/portfolios
export function usePortfolios() {
  return useQuery({
    queryKey: [api.portfolios.list.path],
    queryFn: async () => {
      const res = await fetch(api.portfolios.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch portfolios');
      return api.portfolios.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/portfolios/:id
export function usePortfolio(id: number) {
  return useQuery({
    queryKey: [api.portfolios.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.portfolios.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch portfolio detail');
      return api.portfolios.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
