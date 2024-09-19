import React from 'react';
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from '@react-email/components';

const logoUrl = 'https://fidiohero.s3.ca-central-1.amazonaws.com/group4.png';
const domainUrl = 'https://www.fidio.ca/';

const NewUserEmail = ({ siteTitle = 'Fidio' }) => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @media (max-width: 600px) {
              .header {
                text-align: center;
              }
              .header img {
                max-width: 80%; /* Adjust logo size on mobile */
                height: auto;
              }
              .container {
                width: 100%; /* Full width on mobile */
                padding: 10px; /* Adjust padding */
              }
              .footer {
                padding: 10px 0; /* Adjust footer padding */
              }
            }
          `}
        </style>
      </Head>
      <Preview>Welcome to {siteTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <div className='header' style={headerStyle}>
            <a href={domainUrl}>
              <img src={logoUrl} alt='Logo' style={logoStyle} />
            </a>
            <h1 style={h1Style}>Welcome to {siteTitle || 'Fidio'} </h1>
            <Text style={textStyle}>
              Where African Music Takes Center Stage! Fidio is revolutionizing
              the global African music scene with a dynamic platform for live
              music. More than virtual concerts, we’re a vibrant community
              energized by Afrobeats, Highlife, Soukous, and more. Experience
              live concerts, captivating documentaries, and exclusive artist
              content in one seamless digital space.
            </Text>
            <a
              href={domainUrl}
              className='watch-live-button'
              style={buttonStyle}
            >
              Browse Now
              <CirclePlay style={{ marginLeft: '5px' }} /> {/* Add play icon */}
            </a>
          </div>
          <div className='divider' style={dividerStyle}></div>
          <div className='footer' style={footerStyle}>
            <Text style={footerTextStyle}>Follow us on:</Text>
            <div style={socialContainerStyle}>
              {social.map((link) => (
                <a key={link.name} href={link.url} style={socialLinkStyle}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Body>
    </Html>
  );
};

const social = [
  { name: 'LinkedIn', url: 'https://ca.linkedin.com/company/fidio-inc' },
  { name: 'Instagram', url: 'https://www.instagram.com/fidio_official/' },
];

const CirclePlay = () => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.5 38.375C30.5102 38.375 38.625 30.2602 38.625 20.25C38.625 10.2398 30.5102 2.125 20.5 2.125C10.4898 2.125 2.375 10.2398 2.375 20.25C2.375 30.2602 10.4898 38.375 20.5 38.375Z'
        stroke='white'
        stroke-width='3'
        strokeWidth='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.875 13L27.75 20.25L16.875 27.5V13Z'
        stroke='white'
        stroke-width='3'
        strokeWidth='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
// Styles moved to the bottom
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 10px 48px',
  width: '100%',
};

const headerStyle = {
  textAlign: 'center',
  color: '#000',
};

const logoStyle = {
  maxWidth: '100px',
  margin: '0 auto',
  maxHeight: '40px',
};

const h1Style = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '17px 0 0',
};

const textStyle = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
};

const buttonStyle = {
  display: 'inline-flex',
  padding: '10px 20px',
  backgroundColor: 'rgba(221, 104, 26, 1)', // accentY color
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  gap: '5px',
};

const dividerStyle = {
  border: '1px solid #eaeaea',
  margin: '20px 0',
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px 0',
  color: '#666',
};

const footerTextStyle = {
  fontSize: '14px',
  marginBottom: '10px',
};

const socialContainerStyle = {
  display: 'block',
  justifyContent: 'center',
  gap: '10px',
  width: '100%',
};

const socialLinkStyle = {
  color: '#007bff',
  textDecoration: 'underline',
  marginRight: '5px',
  textAlign: 'center',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'underline',
};

export default NewUserEmail;
