import { render } from '@react-email/render';
import ProductPurchaseEmail from '@/emails/ProductPurchaseEmail';

export default async (props) => {
  console.log('purchase props', props);
  const { siteTitle, _loggedIn, _cart } = props;

  const generateEmailHtml = async () => {
    return await render(<ProductPurchaseEmail {...props} />);
  };

  const payload = {
    subject: `Fidio Order`,
    content: await generateEmailHtml(),
    toUserId: props._loggedIn?.identifier,
    toUsername: props?._loggedIn?.username,
  };

  return payload;
};
