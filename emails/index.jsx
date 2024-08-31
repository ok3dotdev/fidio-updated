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

const ProductPurchaseEmail = ({ siteTitle, loggedIn }) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your purchase on {siteTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Purchase Confirmation</Heading>
          <Text style={text}>
            Dear {loggedIn?.username || 'Valued Customer'},
          </Text>
          <Text style={text}>
            Thank you for your purchase on {siteTitle}. We're excited to confirm
            that your order has been received and is being processed.
          </Text>
          <Text style={text}>
            You'll receive another email with your order details and tracking
            information once your item(s) have been shipped.
          </Text>
          <Text style={text}>
            If you have any questions about your order, please don't hesitate to
            contact our customer support team.
          </Text>
          <Text style={text}>Thank you for shopping with us!</Text>
          <Text style={text}>
            Best regards,
            <br />
            The {siteTitle} Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '17px 0 0',
  textAlign: 'center',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
};

export default ProductPurchaseEmail;
