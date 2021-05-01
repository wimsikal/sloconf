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
import TracksGrid from '@components/tracks-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllTracks } from '@lib/cms-api';
import { Track } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  tracks: Track[];
};

export default function TracksPage({ tracks }: Props) {
  const meta = {
    title: 'Tracks - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Tracks" description={meta.description} />
        <TracksGrid tracks={tracks} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tracks = await getAllTracks();

  return {
    props: {
      tracks
    },
    revalidate: 60
  };
};
