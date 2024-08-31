import { render } from '@react-email/render';
import ProductPurchaseEmail from '@/emails/ProductPurchaseEmail';

export default (props) => {
  console.log('purchase props', props);
  const { siteTitle, _loggedIn } = props;

  const emailHtml = render(<ProductPurchaseEmail {...props} />);

  const payload = {
    subject: `Fidio Order`,
    content: emailHtml,
    toUserId: _loggedIn?.identifier,
    toUsername: _loggedIn?.username,
  };

  return payload;
};
