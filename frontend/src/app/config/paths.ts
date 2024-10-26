export const CORE = {
  LOGIN: { path: 'login', title: 'Iniciar Sesión | OinkBank' },
};

export const FEATURES = {
  DASHBOARD: { path: 'dashboard', title: 'Inicio | OinkBank' },
  TRANSACTIONS: {
    HISTORY: {
      path: 'transactions/history',
      title: 'Historial de Transacciones | OinkBank',
    },
  },
  TRANSFER: {
    path: 'transfer',
    title: 'Transferir Dinero | OinkBank',
    CHILDRENS: {
      CONFIRM: {
        path: 'transfer/confirm',
        title: 'Confirmar Transferencia | OinkBank',
      },
    },
  },
};
