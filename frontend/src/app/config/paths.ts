export const PATHS = {
  CORE: {
    LOGIN: { path: 'login', title: 'Iniciar Sesión | OinkBank' },
  },
  FEATURES: {
    DASHBOARD: { path: 'dashboard', title: 'Inicio | OinkBank' },
    ACCOUNT: {
      TRANSACTIONS: {
        path: 'account/transactions',
        title: 'Todas los Movimientos | OinkBank',
      },
      RECEIPT: {
        path: 'account/:receiptId',
        title: 'Comprobante | OinkBank',
      },
    },
    TRANSFER: { path: 'transfer', title: 'Transferencia | OinkBank' },
  },
};
