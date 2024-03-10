import React from 'react'
import StudioLayout from '@/components/Layouts/StudioLayout'

import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'

const events = () => {
  return (
    <StudioLayout>
      <div>events</div>
    </StudioLayout>
  )
}

export const getServerSideProps = async (context) => {
	let currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName])
  return await getServerSidePropsFunc(currentProps, context)
}

export default events