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
import styles from './contest.module.css';
import Image from 'next/image';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'SLOcontest - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="SLO Contest" description={meta.description} />
        <div className={styles.text}>
          <h2>Win a DJI Mini 2 Fly More Combo Quadcopter</h2>
          <Image
            src="/dji-mini-2-fly-more-combo.jpg"
            alt="Picture of DJI Mini 2 Fly More Combo Quadcopter"
            width={500}
            height={500}
          />
          <h3>Valued at $600</h3>
          <h2>Win the newest Fitbit: Fitbit Sense!</h2>
          <Image
            src="/fitbit.png"
            alt="Picture of Fibbit Sense"
            width={500}
            height={500}
          />
          <h3>10 Winners of Alex Hidalgo's SLO Book</h3>
          <Image
            src="/slo-book.jpg"
            alt="Picture of SLO Book"
            width={500}
            height={500}
          />
          <p>
            10 runners up will win a copy of Alex Hidalgo’s book <a href='https://www.alex-hidalgo.com/the-slo-book'>“Implementing Service Level
            Objectives”</a> Winners will be chosen at random. Must be 18 and older to participate. US,
            EU and UK only. One entry per contestant. More info here (link to page) Register to win
            at sloconf.com! Good luck!
          </p>
          <h2>How to play:</h2>
          <ol>
            <li>Tell us why you love SLOs</li>
            <li>Tag a friend</li>
            <li>Register to attend @SLOconf</li>
            <li>Use #SLOConf hashtag</li>
          </ol>

          <h3>General Rules</h3>
          <ul>
            <li>Contest valid in the US, EU and UK only. Participants must be 18 and older.</li>
            <li>April 21st-May 20th</li>
            <li>SLOconf wants to know why you love SLOs</li>
            <li>
              To enter, tweet why you love SLOs and tag a friend! (one entry per person, no multiple
              accounts){' '}
            </li>
            <li>Winner will be chosen randomly by May 20th</li>
            <li>Winner will receive a brand new drone with camera or a Fitbit Sense</li>
            <li>
              10 runner ups will receive Alex Hidalgo’s book Implementing Service Level Objectives
            </li>
            <li>TBA on Twitter May 20th</li>
            <li>This is a SLOconf event hosted by Nobl9</li>
          </ul>
        </div>
      </Layout>
    </Page>
  );
}
