import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ResourceStaticLayout from '@/components/Layouts/ResourceStaticLayout';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import { ChevronRight } from '@mui/icons-material';

const pageName = 'policies';

const Policies = (children) => {
  const router = useRouter();

  const article = [
    {
      title: 'Privacy policy',
      para: `What makes Fidio the perfect platform for African entertainment around the world? In the vast domain of digital music Fidio is carving a niche at a remarkable pace.
      
      
      Fidio is a fast-growing platform in the realm of live-streamed African music concerts and events, offering an exceptional experience to a tremendous audience across Africa.`,
    },
    {
      title: 'Terms of Use',
      para: `The difference between Fidio and the rest is the full African experience that we provide. Imagine lounging in your living room, or hanging out with friends, now you can revel in the energy and excitement of live performances from the comfort of your own home and device.\n\nAdditional sentence or paragraph for "Terms of Use" if needed.`,
    },
    {
      title: 'Compliance and Legal',
      para: `So how can live-streaming break down borders you may ask- At Fidio we are committed to delivering musical experiences that transcend barriers, making each live-streamed event a sonic journey.\n\nAdditional sentence or paragraph for "Compliance and Legal" if needed.`,
    },
  ];
  return (
    <ResourceLayout {...children}>
      <ResourceStaticLayout {...children}>
        <div className='container font-lexend mt-18 w-auto md:max-w-3xl mx-auto h-auto bg-dashBg '>
          <div className='flex pb-8 font-medium '>
            <Link href='/resources' className='cursor-pointer'>
              Resources
            </Link>
            <ChevronRight />
            <p>policies</p>
          </div>

          <h2 className='text-4xl font-bold text-left pb-4'>Policies</h2>
          <div className=' font-medium py-2 w-auto text-[14px] block md:hidden'>
            <h3 className=' uppercase pb-3 text-[#A3A3A3]'>Contents</h3>
            <ul className='flex flex-col gap-y-2 text-[#A3A3A3] cursor-pointer'>
              {[
                { label: 'Privacy policy', href: '/policies/privacy' },
                { label: 'Terms of use', href: '/policies/terms' },
                {
                  label: 'Compliance and legal',
                  href: '/pages/policies/compliance',
                },
              ].map(({ label, href }) => (
                <li
                  key={href}
                  className={cn(
                    'text-[#A3A3A3]',
                    router.pathname === href && 'text-white'
                  )}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {article.map((articlee, idx) => (
            <div key={idx} className='py-2 w-auto md:w-[560px]'>
              <div className='gap-y-3'>
                <h2 className='text-[16px] font-medium py-6'>
                  {articlee.title}
                </h2>
                <p className='text-[14px] text-[#A3A3A3]'>{articlee.para}</p>
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
export default Policies;
