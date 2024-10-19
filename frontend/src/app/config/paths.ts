export const PATHS = {
  CORE: {
    LOGIN: 'login',
  },
  FEATURES: {
    DASHBOARD: 'dashboard',
    ACCOUNT: {
      TRANSACTIONS: 'account/transactions',
      RECEIPT: (receiptId: string) => `account/${receiptId}`,
    },
    TRANSFER: 'transfer',
  },
};
