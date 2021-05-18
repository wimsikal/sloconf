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
 import cn from 'classnames';
 import TalksGrid from '@components/talks-grid';
 import Layout from '@components/layout';
 import Header from '@components/header';
 import styles from './talks.module.css';
 
 import { getAllTalks } from '@lib/cms-api';
 import { Talk } from '@lib/types';
 import { META_DESCRIPTION } from '@lib/constants';
import { ta } from 'date-fns/locale';
 
 type Props = {
   talks: Talk[];
 };
 
 export default function Talks({ talks }: Props) {
   const meta = {
     title: 'Talks - SLOConf',
     description: META_DESCRIPTION
   };
   return (
     <Page meta={meta}>
       <Layout>
         <Header hero="Talks" description={meta.description} />

         <div className={styles.container}>
        <a
          href='https://join.slack.com/t/sloconf/shared_invite/zt-pjpo902s-TaGPFm1CYNVH58bcI6b0Yg'
          target="_blank"
          rel="noopener noreferrer"
          className={cn(styles.button, styles['button-resource'])}
        >
          <span className={styles.truncate}>Join the conference on Slack</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
          
          </svg>
        </a>
        </div>

         <TalksGrid talks={talks} />
       </Layout>
     </Page>
   );
 }
 
 export const getStaticProps: GetStaticProps<Props> = async () => {
   const talks = await getAllTalks();
 
   return {
     props: {
       talks
     },
     revalidate: 60
   };
 };
 