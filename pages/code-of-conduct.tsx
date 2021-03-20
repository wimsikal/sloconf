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
import styles from './code-of-conduct.module.css';

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'Code of Conduct - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Code of Conduct" description='At SLOConf we believe in inclusivity, kindness and a positive community for all.' />
        <div className={styles.text}>
          <p>We expect participants of SLOConf to conduct themselves in a professional and respectful manner at all times. This means:</p>
          <h2>Do:</h2>
          <ul>
            <li>Use welcoming and positive language</li>
            <li>Respect others views whether they do/don’t align with yours</li>
            <li>Display empathy towards other community members</li>
            <li>Be respectful of others in the public & private media</li>
          </ul>
          <h2>Don't:</h2>
          <ul>
            <li>Make personal or political attacks</li>
            <li>Harass another person, whether publicly or privately</li>
            <li>Use sexualized language or make nonconsensual sexual / nonsexual advances</li>
            <li>Use another person's property whether physical or electronic, without their permission</li>
            <li>Do any other actions that can be interpreted as inappropriate in a professional setting</li>
          </ul>
          <p><strong>NOTE:</strong> Permission and consent can be revoked at any given time. Once it has been revoked, it is no longer acceptable to continue a certain act, conversation or interaction with all involved parties whom no longer wish to take part.</p>
          <p><strong>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact the organizers immediately at coc@sloconf.com.</strong></p>
          <p>SLOConf is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), location, or technology choices.</p>
          <p>We do not tolerate harassment of conference participants in any form. Sexual language and imagery are not appropriate anywhere, including talks, chat rooms, Twitter and other online media. Conference participants violating these rules may be expelled from the conference at the discretion of the conference organizers.</p>
          <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images on any media, deliberate intimidation, stalking, following, sustained disruption of talks or other events, and unwelcome sexual attention.</p>
          <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
          <p>Sponsors and speakers are also subject to the anti-harassment policy. Sponsors and speakers may not use sexualized images, activities, or other material during their talks or any media in relation to the conference.</p>
          <p>If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from any private, online conference platforms.</p>
          <p>We expect participants to follow these rules at all conference platforms.</p>
          <h2>Attribution</h2>
          <p>This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</a> licensed under <a href='https://creativecommons.org/licenses/by/4.0/deed.ast'>CC by 4.0</a> and Vercel’s Code of Conduct in <a href='https://github.com/vercel/virtual-event-starter-kit'>virtual-event-starter-kit</a> licensed under <a href='https://github.com/vercel/virtual-event-starter-kit/blob/main/LICENSE'>Apache 2.0.</a></p>
          <p>For answers to common questions about this code of conduct, see <a href='https://www.contributor-covenant.org/faq'>https://www.contributor-covenant.org/faq</a></p>
        </div>
      </Layout>
    </Page>
  );
}


