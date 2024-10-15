import React from 'react'; // Add React import
// import NewUserEmail from '@/emails/NewUserEmail'; // Import the new EmailContent component

/**
 * Fires on new user registration
 */
export default (props) => {
  const payload = {
    subject: `Welcome to ${props?.siteTitle ?? 'Fidio'}`,
    // content: <NewUserEmail />,
  };
  return payload;
};
