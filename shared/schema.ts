import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const portfolios = pgTable("portfolios", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'Finance', 'Healthcare', 'ECG', 'Audio'
  codeSnippet: text("code_snippet").notNull(),
  visualizationType: text("visualization_type").notNull(), // 'line', 'bar', 'pie', 'area', 'scatter'
  data: jsonb("data").notNull(), // Array of data points for the chart
  imageUrl: text("image_url").notNull(),
});

export const insertPortfolioSchema = createInsertSchema(portfolios).omit({ id: true });

export type Portfolio = typeof portfolios.$inferSelect;
export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
