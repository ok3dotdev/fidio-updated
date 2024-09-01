import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
const logoUrl = 'https://fidiohero.s3.ca-central-1.amazonaws.com/group4.png';
const domainUrl = 'https://www.fidio.ca/';

const ProductPurchaseEmail = ({ siteTitle, loggedIn, _cart }) => {
  const totalPrice = _cart?.items?.reduce((total, item) => {
    const price = parseFloat(item.product.styles[0].price);
    return total + price * item.quantity;
  }, 0);

  return (
    <Html>
      <Head>
        <style>
          {`
            :root {
              --background: 0 0% 100%;
              --foreground: 240 10% 3.9%;
              --primary: 240 5.9% 10%;
              --primary-foreground: 0 0% 98%;
              --card: 0 0% 100%;
              --card-foreground: 240 10% 3.9%;
              --border: 240 5.9% 90%;
              --radius: 0.5rem;
            }
            body {
              font-family: 'Inter', sans-serif;
              background-color: var(--background);
              color: var(--foreground);
            }
            .container {
              background: var(--card);
              border-radius: var(--radius);
              padding: 20px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            h1 {
              font-size: 24px;
              color: var(--primary-foreground);
            }
            .text-muted {
              color: grey;
            }
            .divider {
              border-top: 1px solid var(--border);
              margin: 20px 0;
            }
          `}
        </style>
      </Head>
      <Preview>Thank you for your purchase on {siteTitle}</Preview>
      <Body style={main}>
        <Container className='container'>
          <a href={domainUrl}>
            <img src={logoUrl} alt='Logo' style={logoStyle} />
          </a>
          <Heading>Your Purchase Confirmation</Heading>
          <Text style={text}>
            Thank you for your purchase on Fidio. We're excited to confirm that
            your ticket purchase for the event(s) below has been processed and
            completed. You'll receive a reminder prior to the event start time.
            On the event start date and time, please{' '}
            <a href='/https://www.fidio.ca'>log in</a> and join the fun. If you
            have any questions about the event, please don't hesitate to contact
            our customer support team.
          </Text>
          <Text style={text}>
            Best regards,
            <br />
            The {siteTitle} Team
          </Text>
          <div className='divider'></div>
          <Text style={text}>Here are the details of your purchase:</Text>
          {_cart?.items?.map((item, index) => (
            <Text key={index} style={text}>
              {item.product.name} - Quantity: {item.quantity} - Price: $
              {item.product.styles[0].price}
            </Text>
          ))}
          <Text style={text}>Total: ${totalPrice.toFixed(2)}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ProductPurchaseEmail;

const logoStyle = {
  textAlign: 'center',
  maxWidth: '100px',
  margin: '0 auto',
  maxHeight: '40px',
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
};
