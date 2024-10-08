import ProductPurchaseEmail from '../../emails/ProductPurchaseEmail';
import { render } from '@react-email/render';

/**
 * Fires on new user registration
 */
export default async (props) => {
  const { siteTitle, _loggedIn } = props;

  const generateEmailHtml = async () => {
    return await render(
      <ProductPurchaseEmail siteTitle={siteTitle} loggedIn={_loggedIn} />
    );
  };

  const payload = {
    subject: `Your ${props?.siteTitle ?? 'Fidio'} Cart`,
    content: await generateEmailHtml(),
    toUserId: props._loggedIn?.identifier,
    toUsername: props?._loggedIn?.username,
  };

  return payload;
};
