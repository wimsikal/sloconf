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


import Page from '@components/page';
import Header from '@components/header';
import Layout from '@components/layout';
import styles from './labs.module.css';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'Labs - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Hands-on Labs" description={meta.description} />
        <div className={styles.text}>
        <p>Join us in the SLOConf Labs, a hands-on and interactive virtual experience where you can work on your SLO skills. </p>
        <p>Explore differant labs, each focusing on a topic that relates to Service Level Objects and delivering reliable systems. Topics include Service Level Objectives, Service Level Indicators, Error Budgets, and the tools to support them.</p><p>Details for the labs are coming soon.</p>
        <h2>Do you want to help?</h2>
        <p>If you would like to help build or sponsor a lab. Please contact <a href="mailto:danny@nobl9.com">danny@nobl9.com</a></p>
        <p>SLOConf is looking for volunteers to help staff the "Office Hours" to help support the labs.</p>
        </div>
      </Layout>
    </Page>
  );
}


