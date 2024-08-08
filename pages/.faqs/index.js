import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ResourceStaticLayout from '@/components/Layouts/ResourceStaticLayout';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';

const pageName = 'faqs';

const faqs = (children) => {
  const faqs = [
    {
      question: 'How does Fidio make money?',
      ans: 'Accumsan aliquet in sit non auctor. Semper malesuada consectetur eget mauris sed sollicitudin aliquam. Gravida eros ipsum proin molestie elementum in at. Ullamcorper suspendisse in ipsum in mi. Consectetur integer feugiat vitae duis vitae eu platea. Commodo at semper et varius. Mattis nulla tempor est netus. Eu sed at vitae aenean sem quam vestibulum sapien tincidunt. Quisque dictumst.',
    },
    {
      question: 'Another frequently asked question?',
      ans: 'Accumsan aliquet in sit non auctor. Semper malesuada consectetur eget mauris sed sollicitudin aliquam. Gravida eros ipsum proin molestie elementum in at. Ullamcorper suspendisse in ipsum in mi. Consectetur integer feugiat vitae duis vitae eu platea. Commodo at semper et varius. Mattis nulla tempor est netus. Eu sed at vitae aenean sem quam vestibulum sapien tincidunt. Quisque dictumst.',
    },
    {
      question: 'Another frequently asked question?',
      ans: 'Accumsan aliquet in sit non auctor. Semper malesuada consectetur eget mauris sed sollicitudin aliquam. Gravida eros ipsum proin molestie elementum in at.',
    },
    {
      question: 'Another frequently asked question?',
      ans: 'Accumsan aliquet in sit non auctor. Semper malesuada consectetur eget mauris sed sollicitudin aliquam. Gravida eros ipsum proin molestie elementum in at. Eu sed at vitae aenean sem quam vestibulum sapien tincidunt. Quisque dictumst.',
    },
  ];
  return (
    <ResourceLayout {...children}>
      <ResourceStaticLayout {...children}>
        <div className='container font-lexend mt-18 max-w-3xl mx-auto h-auto bg-dashBg '>
          <div className='flex pb-8 font-medium cursor-pointer'>
            <Link href='/'>Resources</Link>
            <ChevronRight />
            <Link href='/faq'>FAQs</Link>
          </div>
          <h2 className='text-3xl font-bold text-left  pb-8'>FAQs</h2>
          {faqs.map((faq, idx) => (
            <ul key={idx} className=' divide-y '>
              <li className='border-b border-b-[#404040]'>
                <details className='group'>
                  <summary className='flex items-center justify-between flex-row-reverse gap-3  py-3 font-medium marker:content-none hover:cursor-pointer'>
                    <svg
                      className='w-5 h-5 text-gray-500 transition group-open:rotate-90'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                      ></path>
                    </svg>
                    <span>{faq.question}</span>
                  </summary>

                  <article className=' pb-4 text-[#A3A3A3] font-[16px]'>
                    <p className=''>{faq.ans}</p>
                  </article>
                </details>
              </li>
            </ul>
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
export default faqs;
