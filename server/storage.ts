import { db } from "./db";
import { portfolios, type InsertPortfolio, type Portfolio } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getPortfolios(): Promise<Portfolio[]>;
  getPortfolio(id: number): Promise<Portfolio | undefined>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
}

export class DatabaseStorage implements IStorage {
  async getPortfolios(): Promise<Portfolio[]> {
    return await db.select().from(portfolios);
  }

  async getPortfolio(id: number): Promise<Portfolio | undefined> {
    const [portfolio] = await db.select().from(portfolios).where(eq(portfolios.id, id));
    return portfolio;
  }

  async createPortfolio(insertPortfolio: InsertPortfolio): Promise<Portfolio> {
    const [portfolio] = await db
      .insert(portfolios)
      .values(insertPortfolio)
      .returning();
    return portfolio;
  }
}

export const storage = new DatabaseStorage();
