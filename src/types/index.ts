export * from './commons';

type ResponseErrorType = {
  data: {
    name: string;
    path: string;
    reason: string;
    timestamp: string;
    value: number;
  };
  status: number;
};

export type ErrorType = {
  response: ResponseErrorType;
};

export type RoleType = 'ADMINISTRATOR' | 'ASSISTANT';
