export const PATHS = {
  CORE: {
    LOGIN: { path: 'login', title: 'Iniciar Sesión | OinkBank' },
  },
  FEATURES: {
    DASHBOARD: { path: 'dashboard', title: 'Inicio | OinkBank' },
    ACCOUNT: {},
    TRANSACTIONS: {
      HISTORY: {
        path: 'transaction/history',
        title: 'Historial de Transacciones | OinkBank',
      },
      RECEIPT: {
        path: 'transaction/receipt/:receiptId',
        title: 'Comprobante | OinkBank',
      },
    },
    TRANSFER: { path: 'transfer', title: 'Transferir Dinero | OinkBank' },
  },
};
