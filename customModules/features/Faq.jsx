import React from 'react';

const FaqContent = () => {
  return (
    <div className='pt-[20px] px-4 h-full'>
      <div className='max-w-4xl mx-auto'>
        <main class=' p-4 '>
          <h1 class='text-2xl font-semibold mb-4'>
            Frequently Asked Questions
          </h1>
          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>What is Fidio?</h3>
            <p className='font-sans'>
              Fidio is a streaming service that offers direct access to live
              musical concerts by award-winning and emerging African artists.
              It's a platform dedicated to promoting African music.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              How do I create an account on Fidio?
            </h3>
            <p className='font-sans'>
              Creating an account on Fidio is easy. Sign up or Log In with your
              existing Google account and you’re all set.
            </p>
          </section>
          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              What types of content can I find on Fidio?
            </h3>
            <p className='font-sans'>
              Fidio offers a wide range of content, including live concerts,
              exclusive videos, Festivals and podcasts. You'll find something
              for every interest.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>Is Fidio free to use?</h3>
            <p className='font-sans'>
              Fidio offers both free and premium content. You can access some
              content for free, while certain premium content may require a
              Pay-Per-View purchase.
            </p>
          </section>

          <section class=' p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              How can I upload my own content or stream on Fidio?
            </h3>
            <p className='font-sans'>
              If you're interested in uploading your content or streaming on
              Fidio, please contact{' '}
              <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                support@fidio.ca
              </a>
            </p>
          </section>
          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Do I need to download an app to use Fidio on my mobile device?
            </h3>
            <p className='font-sans'>
              Fidio is accessible via a web browser, so there's no need to
              download an app. However, we are working to offer a mobile app for
              a more convenient experience.
            </p>
          </section>

          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              Is my data and payment information secure on Fidio?
            </h3>
            <p className='font-sans'>
              Yes, we take data security seriously. Fidio uses Stripe for
              payment processing and AWS Solutions to protect your information.
            </p>
          </section>
          <section class='p-4 shadow rounded-lg mb-4'>
            <h3 class='text-lg font-semibold mb-2'>
              What should I do if I encounter technical issues while using
              Fidio?
            </h3>
            <p className='font-sans'>
              If you experience technical issues, please contact
              <a href='mailto:privacy@fidio.ca' class='text-blue-500'>
                support@fidio.ca
              </a>{' '}
              to report the issue.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FaqContent;
