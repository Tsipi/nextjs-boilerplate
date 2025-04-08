export type Category = 
  | "Treasury, Business & Planning"
  | "Blockchain & Digital Assets"
  | "Risk, Compliance & Fraud"
  | "Payment Infra. & Orchestration"
  | "Dig. Banking & Open Finance"
  | "Transaction Processing";

export interface Company {
  id: string;
  name: string;
  category: Category;
  logo?: string;
  website?: string;
}

export interface CategoryData {
  name: Category;
  count: number;
  companies: Company[];
} 