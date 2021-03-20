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
import styles from './about.module.css';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'About - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="About SLOConf" description={meta.description} />
        <div className={styles.text}>
          <p>Site Reliability Engineering is one of the hottest areas as companies look to build reliable systems and their online presence. As companies rush to adopt Site Reliability Engineering principles, Service Level Agreements (SLOs) are the most important place to begin. SLOs are the combination of cultural philosophies, practices, and tools.</p>
          <p>The SRE community needs a place to gather and focus on SLOs in depth. This virtual conference will cover topics at all levels, from introduction to SLOs to the practical application of SLOs.  This conference is a community event made and led by Site Reliability Engineers and influencers who care about reliability and becoming more customer centric by adopting, measuring and optimizing SLOs.</p>
          <h2>How it started</h2>
          <p>Inspired by a <a href='https://twitter.com/KitMerker/status/1359874708800294912' target="_blank">twitter conversation</a> on the elevation of customer experience and happiness between engineers and product managers, the SLOConf, the Service Level Objective Conference for Site Reliability Engineers is a community-led event. The opportunity to share, educate, and learn about SLOs, builds on the success of the <a href='https://www.meetup.com/Beyond-Seattle-SRE/' target="_blank">Beyond Seattle SRE Meetup</a>.</p>
          <h2>Tracks</h2>
          <p>This event will have four tracks focused on everything you want to learn about SLOs. <br /><a href="/tracks">Learn more</a></p>
          <h2>Labs</h2>
          <p>SLOConf will also bring you hands-on labs built to learn more about SLOs.<br /> <a href='/labs'>Learn more</a></p>
          <h2>What to expect</h2>
          <p>As a community-led SLOConf, attendees can participate throughout their day based on what they want to learn and engage on. Expect minimal synchronous communication. Also, we take learning seriously, so there is a strict no sales pitch policy.</p> 
          <p>By participating in SLOConf, you agree to the SLOConf - <a href='/code-of-conduct'>Code of Conduct</a></p>
          <p><strong>Join in the SLOConf with:</strong>
          <ul>
            <li>Laser focus on learning about Service Level Objectives and closely related concepts - error budgets, service level indicators (SLIs), Slogicians</li>
            <li>Live Slack discussion hosted by Beyond Seattle SRE Meetup</li>
            <li>On demand pre-recorded videos curated by the program committee from the community</li>
            <li>Live 15 minute hands-on labs</li>
            <li>Networking opportunities with job postings from companies hiring now</li>
          </ul>
          </p>
          <p>Get the latest update by following @SLOConf on <a href="https://twitter.com/sloconf" target="_blank">Twitter</a>.</p>
          <p>In the meantime, you can watch the Beyond Seattle SRE Meetups <a href="https://vimeo.com/showcase/8271600" target="_blank">here</a>.</p>
        </div>
      </Layout>
    </Page >
  );
}


