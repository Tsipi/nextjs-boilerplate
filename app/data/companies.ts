import { CategoryData } from '../types/company';

interface Company {
  id: string;
  name: string;
  category: string;
}

interface Category {
  name: string;
  count: number;
  companies: Company[];
}

export const categories: Category[] = [
  {
    name: "Digital Banking",
    count: 25,
    companies: [
      { id: "db1", name: "Revolut", category: "Digital Banking" },
      { id: "db2", name: "N26", category: "Digital Banking" },
      { id: "db3", name: "Monzo", category: "Digital Banking" },
      { id: "db4", name: "Chime", category: "Digital Banking" },
      { id: "db5", name: "Nubank", category: "Digital Banking" },
      { id: "db6", name: "Starling", category: "Digital Banking" },
      { id: "db7", name: "Varo", category: "Digital Banking" },
      { id: "db8", name: "Current", category: "Digital Banking" },
      { id: "db9", name: "Dave", category: "Digital Banking" },
      { id: "db10", name: "Aspiration", category: "Digital Banking" },
      { id: "db11", name: "Simple", category: "Digital Banking" },
      { id: "db12", name: "Atom", category: "Digital Banking" },
      { id: "db13", name: "Monese", category: "Digital Banking" },
      { id: "db14", name: "Bunq", category: "Digital Banking" },
      { id: "db15", name: "Qonto", category: "Digital Banking" },
      { id: "db16", name: "Tide", category: "Digital Banking" },
      { id: "db17", name: "Wise", category: "Digital Banking" },
      { id: "db18", name: "Curve", category: "Digital Banking" },
      { id: "db19", name: "Oxygen", category: "Digital Banking" },
      { id: "db20", name: "Step", category: "Digital Banking" },
      { id: "db21", name: "Point", category: "Digital Banking" },
      { id: "db22", name: "One", category: "Digital Banking" },
      { id: "db23", name: "Level", category: "Digital Banking" },
      { id: "db24", name: "Albert", category: "Digital Banking" },
      { id: "db25", name: "Moven", category: "Digital Banking" }
    ]
  },
  {
    name: "Payment Solutions",
    count: 28,
    companies: [
      { id: "ps1", name: "Stripe", category: "Payment Solutions" },
      { id: "ps2", name: "Square", category: "Payment Solutions" },
      { id: "ps3", name: "PayPal", category: "Payment Solutions" },
      { id: "ps4", name: "Adyen", category: "Payment Solutions" },
      { id: "ps5", name: "Klarna", category: "Payment Solutions" },
      { id: "ps6", name: "Affirm", category: "Payment Solutions" },
      { id: "ps7", name: "Checkout", category: "Payment Solutions" },
      { id: "ps8", name: "Marqeta", category: "Payment Solutions" },
      { id: "ps9", name: "Rapyd", category: "Payment Solutions" },
      { id: "ps10", name: "Brex", category: "Payment Solutions" },
      { id: "ps11", name: "Plaid", category: "Payment Solutions" },
      { id: "ps12", name: "Bolt", category: "Payment Solutions" },
      { id: "ps13", name: "Fast", category: "Payment Solutions" },
      { id: "ps14", name: "Ripple", category: "Payment Solutions" },
      { id: "ps15", name: "Circle", category: "Payment Solutions" },
      { id: "ps16", name: "Dwolla", category: "Payment Solutions" },
      { id: "ps17", name: "GoCardless", category: "Payment Solutions" },
      { id: "ps18", name: "Modulr", category: "Payment Solutions" },
      { id: "ps19", name: "Primer", category: "Payment Solutions" },
      { id: "ps20", name: "TrueLayer", category: "Payment Solutions" },
      { id: "ps21", name: "Finix", category: "Payment Solutions" },
      { id: "ps22", name: "Paddle", category: "Payment Solutions" },
      { id: "ps23", name: "Chargebee", category: "Payment Solutions" },
      { id: "ps24", name: "Recurly", category: "Payment Solutions" },
      { id: "ps25", name: "BlueSnap", category: "Payment Solutions" },
      { id: "ps26", name: "Spreedly", category: "Payment Solutions" },
      { id: "ps27", name: "Gr4vy", category: "Payment Solutions" },
      { id: "ps28", name: "Forte", category: "Payment Solutions" }
    ]
  },
  {
    name: "Wealth Management",
    count: 22,
    companies: [
      { id: "wm1", name: "Robinhood", category: "Wealth Management" },
      { id: "wm2", name: "Wealthfront", category: "Wealth Management" },
      { id: "wm3", name: "Betterment", category: "Wealth Management" },
      { id: "wm4", name: "SoFi", category: "Wealth Management" },
      { id: "wm5", name: "Acorns", category: "Wealth Management" },
      { id: "wm6", name: "Stash", category: "Wealth Management" },
      { id: "wm7", name: "Public", category: "Wealth Management" },
      { id: "wm8", name: "M1", category: "Wealth Management" },
      { id: "wm9", name: "Webull", category: "Wealth Management" },
      { id: "wm10", name: "eToro", category: "Wealth Management" },
      { id: "wm11", name: "Coinbase", category: "Wealth Management" },
      { id: "wm12", name: "BlockFi", category: "Wealth Management" },
      { id: "wm13", name: "Gemini", category: "Wealth Management" },
      { id: "wm14", name: "Kraken", category: "Wealth Management" },
      { id: "wm15", name: "Celsius", category: "Wealth Management" },
      { id: "wm16", name: "Nexo", category: "Wealth Management" },
      { id: "wm17", name: "Voyager", category: "Wealth Management" },
      { id: "wm18", name: "FTX", category: "Wealth Management" },
      { id: "wm19", name: "Binance", category: "Wealth Management" },
      { id: "wm20", name: "Crypto.com", category: "Wealth Management" },
      { id: "wm21", name: "BitGo", category: "Wealth Management" },
      { id: "wm22", name: "Fireblocks", category: "Wealth Management" }
    ]
  },
  {
    name: "Business Banking",
    count: 24,
    companies: [
      { id: "bb1", name: "Mercury", category: "Business Banking" },
      { id: "bb2", name: "Rho", category: "Business Banking" },
      { id: "bb3", name: "Novo", category: "Business Banking" },
      { id: "bb4", name: "Brex", category: "Business Banking" },
      { id: "bb5", name: "Divvy", category: "Business Banking" },
      { id: "bb6", name: "Ramp", category: "Business Banking" },
      { id: "bb7", name: "Bill.com", category: "Business Banking" },
      { id: "bb8", name: "Melio", category: "Business Banking" },
      { id: "bb9", name: "Tribal", category: "Business Banking" },
      { id: "bb10", name: "Unit", category: "Business Banking" },
      { id: "bb11", name: "Treasury Prime", category: "Business Banking" },
      { id: "bb12", name: "Column", category: "Business Banking" },
      { id: "bb13", name: "Synctera", category: "Business Banking" },
      { id: "bb14", name: "Bond", category: "Business Banking" },
      { id: "bb15", name: "Stripe Treasury", category: "Business Banking" },
      { id: "bb16", name: "Sila", category: "Business Banking" },
      { id: "bb17", name: "Modern Treasury", category: "Business Banking" },
      { id: "bb18", name: "Routable", category: "Business Banking" },
      { id: "bb19", name: "Highnote", category: "Business Banking" },
      { id: "bb20", name: "Moov", category: "Business Banking" },
      { id: "bb21", name: "Extend", category: "Business Banking" },
      { id: "bb22", name: "Lithic", category: "Business Banking" },
      { id: "bb23", name: "Solid", category: "Business Banking" },
      { id: "bb24", name: "Griffin", category: "Business Banking" }
    ]
  },
  {
    name: "Lending Solutions",
    count: 26,
    companies: [
      { id: "ls1", name: "Upstart", category: "Lending Solutions" },
      { id: "ls2", name: "Blend", category: "Lending Solutions" },
      { id: "ls3", name: "Better", category: "Lending Solutions" },
      { id: "ls4", name: "Avant", category: "Lending Solutions" },
      { id: "ls5", name: "LendingClub", category: "Lending Solutions" },
      { id: "ls6", name: "Prosper", category: "Lending Solutions" },
      { id: "ls7", name: "Kabbage", category: "Lending Solutions" },
      { id: "ls8", name: "OnDeck", category: "Lending Solutions" },
      { id: "ls9", name: "Fundbox", category: "Lending Solutions" },
      { id: "ls10", name: "BlueVine", category: "Lending Solutions" },
      { id: "ls11", name: "Credibly", category: "Lending Solutions" },
      { id: "ls12", name: "Funding Circle", category: "Lending Solutions" },
      { id: "ls13", name: "Lendio", category: "Lending Solutions" },
      { id: "ls14", name: "Nav", category: "Lending Solutions" },
      { id: "ls15", name: "Biz2Credit", category: "Lending Solutions" },
      { id: "ls16", name: "Creditas", category: "Lending Solutions" },
      { id: "ls17", name: "Konfio", category: "Lending Solutions" },
      { id: "ls18", name: "Oportun", category: "Lending Solutions" },
      { id: "ls19", name: "Earnest", category: "Lending Solutions" },
      { id: "ls20", name: "CommonBond", category: "Lending Solutions" },
      { id: "ls21", name: "LendKey", category: "Lending Solutions" },
      { id: "ls22", name: "Climb Credit", category: "Lending Solutions" },
      { id: "ls23", name: "Ascent", category: "Lending Solutions" },
      { id: "ls24", name: "Laurel Road", category: "Lending Solutions" },
      { id: "ls25", name: "College Ave", category: "Lending Solutions" },
      { id: "ls26", name: "Splash Financial", category: "Lending Solutions" }
    ]
  },
  {
    name: "InsurTech",
    count: 23,
    companies: [
      { id: "it1", name: "Lemonade", category: "InsurTech" },
      { id: "it2", name: "Root", category: "InsurTech" },
      { id: "it3", name: "Oscar", category: "InsurTech" },
      { id: "it4", name: "Hippo", category: "InsurTech" },
      { id: "it5", name: "Next Insurance", category: "InsurTech" },
      { id: "it6", name: "Metromile", category: "InsurTech" },
      { id: "it7", name: "Clover Health", category: "InsurTech" },
      { id: "it8", name: "Bright Health", category: "InsurTech" },
      { id: "it9", name: "Devoted Health", category: "InsurTech" },
      { id: "it10", name: "Alan", category: "InsurTech" },
      { id: "it11", name: "Wefox", category: "InsurTech" },
      { id: "it12", name: "Coalition", category: "InsurTech" },
      { id: "it13", name: "At-Bay", category: "InsurTech" },
      { id: "it14", name: "Pie Insurance", category: "InsurTech" },
      { id: "it15", name: "Clearcover", category: "InsurTech" },
      { id: "it16", name: "Ladder", category: "InsurTech" },
      { id: "it17", name: "Bestow", category: "InsurTech" },
      { id: "it18", name: "Ethos", category: "InsurTech" },
      { id: "it19", name: "Fabric", category: "InsurTech" },
      { id: "it20", name: "Spot", category: "InsurTech" },
      { id: "it21", name: "Sure", category: "InsurTech" },
      { id: "it22", name: "Cover", category: "InsurTech" },
      { id: "it23", name: "Branch", category: "InsurTech" }
    ]
  }
]; 