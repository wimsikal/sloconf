/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps } from 'next';

import Page from '@components/page';
import LabsGrid from '@components/labs-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllLabs } from '@lib/cms-api';
import { Lab } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  labs: Lab[];
};

export default function LabsPage({ labs }: Props) {
  const meta = {
    title: 'Labs - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Labs and Demos" description={meta.description} />
        <LabsGrid labs={labs} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const labs = await getAllLabs();

  return {
    props: {
      labs
    },
    revalidate: 60
  };
};
