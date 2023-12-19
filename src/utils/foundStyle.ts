import { RoleType } from '../types';

export const getThemeByRole = (role: RoleType | null): string => {
  if (role) {
    return role === 'ADMINISTRATOR' ? 'theme-admin' : 'theme-assistant';
  } else {
    return '';
  }
};
