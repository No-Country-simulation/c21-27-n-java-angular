export const PATHS = {
  CORE: {
    LOGIN: { path: 'login', title: 'Iniciar Sesión | OinkBank' },
  },
  FEATURES: {
    DASHBOARD: { path: 'dashboard', title: 'Inicio | OinkBank' },
    ACCOUNT: {},
    TRANSACTIONS: {
      HISTORY: {
        path: 'transactions/history',
        title: 'Historial de Transacciones | OinkBank',
      },
      RECEIPT: {
        path: 'transactions/receipt/:receiptId',
        title: 'Comprobante | OinkBank',
      },
    },
    TRANSFER: { path: 'transfer', title: 'Transferir Dinero | OinkBank' },
  },
};
