
declare global {
  interface Window {
    Typeform?: {
      initialize: () => void;
    };
    MailerLite?: {
      renderPopupsAndPromotions?: () => void;
    };
    ml_account?: any;
    ml_ready?: boolean;
    ml_queue?: any[];
    ml?: (...args: any[]) => void;
  }
}

export {};
