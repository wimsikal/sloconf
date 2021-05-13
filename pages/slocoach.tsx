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
import SloCoachesGrid from '@components/slocoaches-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllSlocoaches } from '@lib/cms-api';
import { Slocoach } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  slocoaches: Slocoach[];
};

export default function ExpoPage({ slocoaches }: Props) {
  const meta = {
    title: 'SLOcoach - SLOConf',
    description: 'The SLOcoach provides consulting services to enable companies to run their cloud at scale.'
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="SLOcoach" description='The SLOcoach provides consulting services to enable companies to run their cloud at scale.  The move to the cloud is not trivial, a SLOcoach delivers site reliability and SLO expertise coupled with practical business savvy to help businesses architect, deploy, and optimize SLOs. This is done by bringing the entire company; business leaders, software engineers, product, and operations, together with one single focus, customer success.' />
        <SloCoachesGrid slocoaches={slocoaches} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slocoaches = await getAllSlocoaches();

  return {
    props: {
      slocoaches
    },
    revalidate: 60
  };
};
