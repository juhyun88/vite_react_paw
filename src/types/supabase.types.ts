// src/types.ts

export type Database = {
    public: {
      Tables: {
        menu: {
          Row: {
            code: number;
            title: string | null;
            path: string | null;
            created_at: string;
          };
          Insert: {
            code: number;
            title?: string | null;
            path?: string | null;
            created_at?: string;
          };
          Update: {
            code?: number;
            title?: string | null;
            path?: string | null;
            created_at?: string;
          };
        };
      };
    };
  };
  