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
import styles from './cfp.module.css';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'Call for Papers - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Sponsors" description={meta.description} />
        <div className={styles.text}>
          <p>We are excited that you are interested in sponsoring the upcoming community-led event SLOConf, The Service Level Objective Conference for Site Reliability Engineers.</p>
          <p>Site Reliability Engineering is one of the hottest areas as companies look to build reliable systems and their online presence. As companies rush to adopt Site Reliability Engineering principles, SLOs are the most important place to begin. SLOs are the combination of cultural philosophies, practices, and tools.</p>
          <p>The SRE community needs a place to gather and focus on SLOs in depth. This virtual conference will cover topics at all levels, from introduction to SLOs to the practical application of SLOs.  This conference is a community event made and led by Site Reliability Engineers and influencers who care about reliability and becoming more customer centric by adopting, measuring and optimizing SLOs.</p>
          {/* <table>
            <tr>
              <th>THE GOODS</th>
              <th>SLO BURN<br />$2,500</th>
              <th>SLO STEADY<br />$5,000</th>
              <th>LET'S SLO<br />$10,000</th>
              <th>SLO<br />COMMUNITY<br />FREE*</th>
            </tr>
            <tr>
              <td>Live 15 minute hands-on lab <br />(Limited to 5 sponsors)</td>
              <td />
              <td />
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>2 pieces of hosted collateral <br />(no sales material permitted)</td>
              <td />
              <td />
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>Meet the vendors<br />dedicated slack channel</td>
              <td />
              <td />
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>Logo on website</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Company description on website</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Logo in emails</td>
              <td />
              <td>X</td>
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>Job postings to SLO attendees</td>
              <td>X</td>
              <td>X</td>
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>3 social media mentions before<br />& during event</td>
              <td />
              <td>X</td>
              <td>X</td>
              <td />
            </tr>
            <tr>
              <td>1 social media mention before<br />& during event</td>
              <td>X</td>
              <td />
              <td>X</td>
              <td>X</td>
            </tr>
          </table> */}
          <p><strong>Join SLOCONF Sponsors!</strong><br />
          <strong>Contact <a href='mailto:sharon@nobl9.com'>sharon@nobl9.com</a></strong></p>
        </div>
      </Layout>
    </Page>
  );
}


