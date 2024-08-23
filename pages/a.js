/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { AppConfigLayout, PageContainer } from '/modules/internal';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import { Menu } from '/modules/menu/';
import Head from 'next/head';

const pageName = 'a';

export const page = (props) => {
  // console.log('prrrrr', props);
  const createdDate = new Date(props?.articleData?.created);
  const publishDate = new Date(props?.articleData?.publish);

  return (
    <React.Fragment>
      <Head>
        <script
          type='application/ld+json'
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: props?.articleData?.title,
              description: props?.articleData?.contents
                .split('.')[0]
                .replace('<p>', ''),
              image: props?.articleData?.meta?.featuredImg,
              url: `https://www.fidio.ca/ar?p=${props?.articleData?.id}`,
              author: {
                '@type': 'Person',
                name: props?.authorData?.username, // Replace with the actual author name if available
              },
              publisher: {
                '@type': 'Organization',
                name: 'Fidio',
                logo: {
                  '@type': 'ImageObject',
                  url: '/img/internal/group4.png', // Replace with your logo URL
                },
              },
              datePublished: publishDate, // Replace with actual publication date if available
              dateModified: createdDate, // Replace with actual modification date if available
            }),
          }}
        />
      </Head>

      <PageContainer {...props} pageName={pageName}>
        {/* <Menu></Menu> */}
        <AppConfigLayout></AppConfigLayout>
      </PageContainer>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default page;
