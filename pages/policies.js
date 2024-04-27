import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ResourceStaticLayout from '@/components/Layouts/ResourceStaticLayout';
import Link from 'next/link';
import { ChevronRight } from '@mui/icons-material';

const pageName = 'policies';

const policies = (children) => {
  const article = [
    {
      title: 'Privacy policy',
      para: `What makes Fidio the perfect platform for African entertainment around the world? In the vast domain of digital music Fidio is carving a niche at a remarkable pace. 
    
    Fidio is a fast-growing platform in the realm of live-streamed African music concerts and events, offering an exceptional experience to a tremendous audience across Africa. `,
    },
    {
      title: 'Terms of Use',
      para: `The difference between Fidio and the rest is the full African experience that we provide. Imagine lounging in your living room, or hanging out with friends, now you can revel in the energy and excitement of live performances from the comfort of your own home and device. `,
    },
    {
      title: 'Compliance and Legal',
      para: `So how can live-streaming break down borders you may ask- At Fidio we are committed to delivering musical experiences that transcend barriers, making each live-streamed event a sonic journey. `,
    },
  ];
  return (
    <ResourceLayout {...children}>
      <ResourceStaticLayout {...children}>
        <div className="container font-lexend mt-18 w-auto md:max-w-3xl mx-auto h-auto bg-dashBg ">
          <div className="flex pb-8 font-medium ">
            <Link href="/resources" className="cursor-pointer">
              Resources
            </Link>
            <ChevronRight />
            <p>policies</p>
          </div>
          <h2 className="text-4xl font-bold text-left pb-4">Policies</h2>
          <div className=" font-medium py-2 w-auto text-[14px] block md:hidden">
            <h3 className=" uppercase pb-3 text-[#A3A3A3]">Contents</h3>
            <ul className="flex gap-x-4  text-[#A3A3A3]">
              <li className="text-white">Privacy policy</li>
              <li>Terms of use </li>
              <li>Compliance and legal</li>
            </ul>
          </div>
          {article.map((articlee, idx) => (
            <div key={idx} className="py-2 w-auto md:w-[580px]">
              <div className="gap-y-3">
                <h2 className="text-[16px] font-medium py-2">
                  {articlee.title}
                </h2>
                <p className="text-[14px] text-[#A3A3A3] pb-2">
                  {articlee.para}
                </p>
              </div>
            </div>
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
export default policies;
