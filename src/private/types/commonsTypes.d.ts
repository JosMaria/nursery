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
