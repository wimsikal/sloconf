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

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import StageContainer from '@components/stage-container';
import Layout from '@components/layout';

import { getAllTalks } from '@lib/cms-api';
import { Talk } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  talk: Talk;
  allTalks: Talk[];
};

export default function StagePage({ talk, allTalks }: Props) {
  const meta = {
    title: 'SLOconf - Watch Talk',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <StageContainer talk={talk} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const talks = await getAllTalks();
  const talk = talks.find((s: Talk) => s.youtubeSlug === slug) || null;

  if (!talk) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      talk,
      allTalks: talks
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const talks = await getAllTalks();
  const slugs = talks.map((s: Talk) => ({ params: { slug: s.youtubeSlug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
