import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import Link from 'next/link';
import ResourceCards from '@/components/cards/ResourceCards';
import { SvgOne, SvgTwo, SvgThree } from '@/components/icons';

const pageName = 'resources';

const resources = (props) => {
  const resources = [
    {
      img: <SvgOne />,
      title: 'Frequently Asked Questions',
      footer: 'questions asked the most',
      link: '/faq',
    },
    {
      img: <SvgTwo />,
      title: 'Policies and Terms of Use',
      footer: 'questions asked the most',
      link: '/poilicies',
    },
    {
      img: <SvgThree />,
      title: 'Guides and Knowledge Base',
      footer: 'questions asked the most',
      link: '/guides',
    },
  ];
  return (
    <ResourceLayout {...props}>
      <div className='flex flex-col gap-20 items-center md:flex-row md:items-start'>
        {resources.map((resource, idx) => (
          <Link key={idx} href={resource.link} className='cursor-pointer'>
            <ResourceCards
              img={resource.img}
              title={resource.title}
              footer={resource.footer}
            />
          </Link>
        ))}
      </div>
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

export default resources;
