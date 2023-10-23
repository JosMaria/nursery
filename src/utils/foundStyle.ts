import { RoleType, StatusType } from '../types';

export const getStyledGivenStatus = (status: StatusType): string => {
  if (status === 'IN_CONSERVATION') {
    return 'conservation-status';
  } else if (status === 'AVAILABLE') {
    return 'available-status';
  } else {
    return 'non-existent-status';
  }
};

export const getThemeByRole = (role: RoleType | null): string => {
  if (role) {
    return role === 'ADMINISTRATOR' ? 'theme-admin' : 'theme-assistant';
  } else {
    return '';
  }
};
