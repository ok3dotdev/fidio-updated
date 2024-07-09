import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import apiReq from '/modules/utility/api/apiReq';
import { fireGlobalEvent } from '/modules/utility/utility';
import { format } from 'date-fns';

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

export const fetchTickets = async (apiUrl, id = null, page = 0) => {
  try {
    const extraObject = {};

    if (id) {
      extraObject.id = id;
    }

    const res = await apiReq('/m/getProducts', {
      apiUrl,
      pagination: page,
      extra: extraObject,
      sortField: 'created', // Use field to sort by
      sort: 'desc',
    });

    if (res && res.products) {
      if (id) {
        return res.products.length ? res.products[0] : null;
      } else {
        // console.log('products', res.products);
        return res.products;
      }
    } else {
      return [];
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

export const groupByDate = (tickets) => {
  return tickets?.reduce((groups, event) => {
    const dateString = event.created; // e.g., "Mon May 27 2024 12:55:04 GMT-0400 (Eastern Daylight Time)"

    // Split the date string into parts
    const dateParts = dateString.split(' ');

    if (dateParts) {
      const dateKey = dateParts[0];

      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }

      groups[dateKey].push(event);
    } else {
      console.error('Invalid date encountered:', dateString);
    }

    return groups;
  }, {});
};

export function generateDateRange(days) {
  const today = new Date();
  const startDate = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  );
  const dateArray = [];

  for (let i = 0; i <= days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setUTCDate(startDate.getUTCDate() + i);
    dateArray.push(currentDate.toISOString().split('T')[0]);
  }
  return dateArray;
}

export function getDisplayDate(dateString) {
  const date = new Date(dateString);
  const month = format(date, 'LLL').toUpperCase(); // May
  const weekday = format(date, 'EEE').toUpperCase(); // Sat
  const day = format(date, 'dd'); // 25

  return { month, weekday, day };
}
