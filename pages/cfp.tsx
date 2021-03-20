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
        <Header hero="Call for Papers" description={meta.description} />
        <div  className={styles.text}>
        <p>SLOConf - The Service Level Objective Conference for Site Reliability Engineers is opening the Call for Papers (CFP) to share your ideas for consideration. The CFP opens March 8, 2021 and closes on March 26, 2021.</p>
        <p>You can submit CFPs <a href='https://forms.gle/Rx4rknSEspTAuxcTA'>here</a>.</p>
        <p>The world wants to share and learn about SLOs. Building on the success of the Beyond Seattle SRE Meetup, we are preparing a virtual event on May 17-20 that will educate and connect engineers, practitioners, and interested parties to learn and share.</p>

        <p>Format:
<ul>
            <li>Call for presentations: 5-10 minute pre-recorded videos, curated by program committee</li>
            <li>Slack discussion area (hosted by Beyond Seattle SRE Meetup)</li>
            <li>Minimal synchronous communication (maybe an optional kickoff/close zoom, live Q&A Panel)</li>
            <li>Maximally inclusive, attend-while-you-work, focused on learning all about Service Level Objectives (and closely related concepts: error budgets, service level indicators [SLIs], Slogicians).</li>
            <li>Strict no sales pitch policy</li>
          </ul>
        </p>
        <p>There will be 4 tracks at SLOConf:
<ol>
            <li>New To SLOs - learn the basics & how to get started</li>
            <li>SLOcializing - big picture, business value of SLOs, convince your boss that SLOs rock</li>
            <li>Technical and Deep Dive - visualizations, expressions, architectural strategy, doing it "at scale"</li>
            <li>Beyond Theory - case studies, what it takes to build SLOs platform, failures</li>
          </ol>
        </p>

        <p>Note: SLOConf is not a replacement for also important related big topics like observability or incident response, DevOps, or even SRE. This event is focused on SLOs.</p>

        <p>How to submit your proposal:
<ol>
            <li>Provide a biography and contact for all speakers.</li>
            <li>Provide a title for your talk.</li>
            <li>Provide a detailed and focused description with a max of 900 characters. This is what will be used on the online schedule if your talk is accepted.</li>
            <li>You can submit CFPs <a href='https://forms.gle/Rx4rknSEspTAuxcTA'>here</a>.</li>
          </ol>
        </p>

        <p>Important Dates:
<ul>
            <li>Open CFP: March 8</li>
            <li>CFP Submission Deadline: March 26</li>
            <li>CFP Approval Date: April 2</li>
            <li>Final Videos: May 3</li>
            <li>Event Dates: May 17-20</li>
          </ul>
        </p>
        <p>By participating in SLOConf, you agree to the SLOConf - <a href='/code-of-conduct'>Code of Conduct</a></p>
        <p>Thank you for taking the time to share your wisdom with the SRE community. Good luck, and we certainly hope to see you as a speaker at SLOConf 2021.</p>
        </div>
      </Layout>
    </Page>
  );
}


