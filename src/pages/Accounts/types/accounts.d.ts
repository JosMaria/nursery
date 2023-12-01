export interface AccountResponse {
  id: number;
  name: string;
  lastname: string;
  username: string;
  role: 'ADMINISTRATOR' | 'ASSISTANT';
}

export interface AccountCreationDTO {
  name: string;
  lastname: string;
  username: string;
  password: string;
}
