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
      para: `Thank you for visiting Fidio. Your privacy is important to us. This privacy policy ('Privacy Policy') describes how we, our affiliated and associated entities, as further detailed below (collectively 'Fidio', 'we', 'us', and 'our'), collects, uses, discloses, transfers, stores, retains, or otherwise processes your personal data, and the choices you can make about the way your information is collected and used by Fidio. Please review our Privacy Policy as it may change in the future and contact us at privacy@fidio.ca or the correspondence address below if you have any questions or concerns or wish to exercise your privacy rights.`,
    },
    {
      title: 'Terms of Use',
      para: `This web page contains our full User agreement (“Agreement”). You may print this document for reference. Limited use of the Site is offered to you by FIDIO subject to, and conditioned upon your acceptance of, these Terms of Service. Your use of the Site constitutes your legally binding acceptance of and agreement to these Terms of Service. Under these Terms of Service only, Fidio grants you a license to view and use the interactive features of this Site. If you do not agree to these Terms of Service, you are not an authorized User and should discontinue any use of the Site and Services.`,
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
