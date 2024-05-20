import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import apiReq from '/modules/utility/api/apiReq';
import { fireGlobalEvent } from '/modules/utility/utility';

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

export const fetchTickets = async (apiUrl, id = null) => {
  try {
    const requestData = {
      apiUrl: apiUrl,
      pagination: 0,
    };

    if (id) {
      requestData.id = id;
    }

    const res = await apiReq('/product/getProducts', requestData);

    if (res && res.products) {
      if (id) {
        return res.products.length ? res.products[0] : null;
      } else {
        return res.products.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });
      }
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return id ? null : [];
  }
};

export const handleOpenCart = (e, props, setCartOpen) => {
  fireGlobalEvent(e, props._LocalEventEmitter); // Dependent on {...props} in this component use
  props._toggleSingleOpenMenu(e, 'cart');
  if (props?._openMenu?.currentMenu === 'cart') {
    setCartOpen(false);
  } else {
    setTimeout(() => {
      setCartOpen(true);
    }, 150);
  }
};
