export type AxiosErrorType = {
  response: ErrorResponseType;
};

export type ErrorResponseType = {
  data: {
    timestamp: string;
    value: number;
    name: string;
    path: string;
    reason: string;
  };
};

export type FamilyResponseType = {
  id: number;
  name: string;
};

type ColorButtonType = 'red' | 'yellow' | 'teal' | 'slate';
