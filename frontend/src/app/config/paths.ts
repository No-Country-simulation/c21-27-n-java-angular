export const PATHS = {
  CORE: {
    LOGIN: { path: 'login', title: 'Iniciar Sesión | OinkBank' },
  },
  FEATURES: {
    DASHBOARD: { path: 'dashboard', title: 'Inicio | OinkBank' },
    ACCOUNT: {
      TRANSACTIONS: {
        path: 'account/transactions',
        title: 'Todos los Movimientos | OinkBank',
      },
      RECEIPT: {
        path: 'account/transaction/:receiptId',
        title: 'Comprobante | OinkBank',
      },
    },
    TRANSFER: { path: 'transfer', title: 'Transferir Dinero | OinkBank' },
  },
};
