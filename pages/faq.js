import React from 'react';
import ResourceLayout from '@/components/Layouts/ResourceLayout';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import ResourceStaticLayout from '@/components/Layouts/ResourceStaticLayout';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowRightAltOutlined,
  ArrowRightAltSharp,
  ArrowRightTwoTone,
  ChevronRight,
} from '@mui/icons-material';
import { ArrowRightIcon, ArrowRightToLine } from 'lucide-react';
import Faq from '/customModules/doc/faq';
import HomeLayout from '../customModules/features/HomeLayout';

const pageName = 'faq';

const faqs = (props) => {
  return (
    <HomeLayout pageName={pageName} pageData={''} props={props}>
      <Faq />
    </HomeLayout>
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
