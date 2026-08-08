import { en } from "./en";
import { ja } from "./ja";
import type { PortfolioContent } from "./types";
import { yue } from "./yue";

export type { PortfolioContent } from "./types";

export const locales = ["en", "yue", "ja"] as const;

export type Locale = (typeof locales)[number];

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en,
  yue,
  ja,
};
