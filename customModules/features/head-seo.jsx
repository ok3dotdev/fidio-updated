import React from 'react';
import Head from 'next/head';

const HeadSEO = ({ site = {}, page = {}, schema }) => {
  // ({ site, page, schema });
  // set <head> variables
  const siteTitle = site.title;

  const siteFavicon = site.seo?.favicon || '/favicon.svg';
  const siteFaviconLegacy = site.seo?.faviconLegacy || '/favicon.ico';
  const siteTouchIcon = site.seo?.touchIcon;

  const templateTags = [
    {
      tag: '{{page_title}}',
      value: page.title,
    },
    {
      tag: '{{site_title}}',
      value: siteTitle,
    },
  ];

  const metaTitle = replaceTemplateTags(
    page.seo?.metaTitle || site.seo?.metaTitle,
    templateTags
  );
  // console.log('title', page.seo?.metaTitle, site.seo?.metaTitle);
  const metaDesc = page.seo?.metaDesc || site.seo?.metaDesc;

  const shareTitle = replaceTemplateTags(
    page.seo?.shareTitle || site.seo?.shareTitle,
    templateTags
  );
  const shareDesc = page.seo?.shareDesc || site.seo?.shareDesc;
  const shareGraphic =
    page.seo?.shareGraphic?.asset || site.seo?.shareGraphic?.asset;
  const shareCanonical = page.seo?.shareCanonical || site.seo?.shareCanonical;
  const shareUrl = page.seo?.shareUrl || site.seo?.shareUrl;

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='format-detection' content='telephone=no' />

      <link rel='icon' href={siteFaviconLegacy} sizes='any' />
      <link preload='true' rel='icon' type='image/svg+xml' href={siteFavicon} />
      <link preload='true' rel='mask-icon' href={siteFavicon} color='#000000' />
      <link rel='canonical' href={shareCanonical} />
      <meta property='og:url' content={shareUrl} />
      {/* {siteTouchIcon && (
        <link
          rel='apple-touch-icon'
          href={imageBuilder.image(siteTouchIcon).width(192).height(192).url()}
        />
      )} */}

      <link rel='preconnect' href='https://cdn.sanity.io' crossOrigin='' />

      <title>{metaTitle}</title>
      {metaDesc && <meta name='description' content={metaDesc} />}

      {shareTitle && (
        <>
          <meta property='og:title' content={shareTitle} />
          <meta name='twitter:title' content={shareTitle} />
        </>
      )}

      {shareDesc && (
        <>
          <meta property='og:description' content={shareDesc} />
          <meta name='twitter:description' content={shareDesc} />
        </>
      )}

      {shareGraphic && (
        <>
          <meta property='og:image' content={shareGraphic} />
          <meta name='twitter:image' content={shareGraphic} />
        </>
      )}

      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />

      {siteTitle && <meta property='og:site_name' content={siteTitle} />}

      {/* {schema && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )} */}
    </Head>
  );
};

export default HeadSEO;

// replace template tags with values
function replaceTemplateTags(string, templateTags = []) {
  let newString = string;

  templateTags.map((v) => {
    newString = newString.replace(new RegExp(v.tag, 'g'), v.value);
  });

  return newString;
}
