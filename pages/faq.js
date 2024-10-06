import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ResourceStaticLayout from '@/components/Layouts/ResourceStaticLayout';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pageName = 'faq';

const faq = (children) => {
  const faqs = [
    {
      question: 'What is Fidio?',
      ans: `Fidio is a streaming service that offers direct access to live musical concerts by award-winning and emerging African artists. It's a platform dedicated to promoting African music.`,
    },
    {
      question: 'How do I create an account on Fidio?',
      ans: 'Creating an account on Fidio is easy. Sign up or Log In with your existing Google account and you’re all set.',
    },
    {
      question: 'What types of content can I find on Fidio?',
      ans: `Fidio offers a wide range of content, including live concerts, exclusive videos, Festivals and podcasts. You'll find something for every interest.`,
    },
    {
      question: 'Is Fidio free to use?',
      ans: `Fidio offers both free and premium content. You can access some content for free, while certain premium content may require a Pay-Per-View purchase.`,
    },
    {
      question: 'How can I upload my own content or stream on Fidio? ',
      ans: `If you're interested in uploading your content or streaming on Fidio, please contact support@fidio.ca`,
    },
    {
      question: 'Do I need to download an app to use Fidio on my mobile device',
      ans: `Fidio is accessible via a web browser, so there's no need to download an app. However, we are working to offer a mobile app for a more convenient experience.`,
    },
    {
      question: 'Is my data and payment information secure on Fidio',
      ans: `Yes, we take data security seriously. Fidio uses Stripe for payment processing and AWS Solutions to protect your information.`,
    },
    {
      question:
        'What should I do if I encounter technical issues while using Fidio?',
      ans: `If you experience technical issues, please contactsupport@fidio.ca to report the issue.`,
    },
  ];

  return (
    <ResourceLayout {...children}>
      <ResourceStaticLayout {...children}>
        <div className='container font-lexend mt-18 max-w-3xl mx-auto h-auto bg-dashBg '>
          <div className='flex pb-8  text-[16px] font-medium '>
            <Link href='/resources' className='cursor-pointer '>
              Resources
            </Link>
            <p>FAQs</p>
          </div>
          <h2 className='text-4xl font-bold text-left  pb-8'>FAQs</h2>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-left'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.ans}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </ResourceStaticLayout>
    </ResourceLayout>
  );
};

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};
export default faq;
