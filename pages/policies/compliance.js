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

const pageName = 'compliance';

const compliance = (children) => {
  

  return (
    <ResourceLayout {...children}>
      <ResourceStaticLayout {...children}>
        <div><h1>Coming...</h1></div>
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
export default compliance;