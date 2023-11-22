export interface AccountResponse {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  role: 'ADMINISTRATOR' | 'ASSISTANT';
}

export interface AccountCreationDTO {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}
