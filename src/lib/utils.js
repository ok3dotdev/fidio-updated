import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const statusColors = [
  { status: 'draft', color: 'dashFg' },
  { status: 'pending', color: 'accentY' },
  { status: 'approved', color: 'green-300' },
  { status: 'past', color: 'blue-300' },
];

export const getButtonsForStep = (step) => {
  switch (step) {
    case 'draft':
      return ['edit', 'delete'];
    case 'pending':
      return ['view', 'delete'];
    case 'approved':
      return ['view'];
    case 'past':
      return ['view'];
    default:
      return [];
  }
};

/**
 * If you return a string it will prevent user from proceeding. If you return null it is validated/not required
 * @param {*} e
 * @returns
 */
export const validationCheck = (stage, value) => {
  // Use a condition on value or examine details of stage to determine condition. Return string to prevent progression until error is resolved
  if (value === '') {
    return `Empty Data ${stage?.label ? `for ${stage.label}` : ''}`;
  }
  return null;
};
