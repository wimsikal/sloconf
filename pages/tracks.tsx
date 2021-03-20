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

import { META_DESCRIPTION } from '@lib/constants';

export default function ExpoPage() {
  const meta = {
    title: 'Tracks - SLOConf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Tracks" description={meta.description} />
        <h2>New To SLOs</h2>
        <h3>Learn the basics & how to get started</h3>
        <p>SLOs are a key principle of Site Reliability Engineering and perhaps the most important place to begin. This beginner’s track will cover the fundamentals of SLOs, including how to use objectives, indicators, and error budgets to build reliable systems by focusing on customer outcomes. It will give you a basic understanding of what IS an SLO? </p>
        <h2>SLOcializing</h2>
        <h3>The human & cultural side of SLOs</h3>
        <p>The SLOcializing track will cover the human aspects of Service Level Agreements.  SLOs are a combination of cultural philosophies, practices, and tools. Learn about the SLO culture and how to transform your company to focus on customer outcomes. Gain insight on how best to convince your boss that SLOs rock and how to talk about the business value of SLOs. Do your SLOcial studies homework!</p>
        <h2>Technical and Deep Dive</h2>
        <h3>Visualizations, expressions, architectural strategy, doing it "at scale"</h3>
        <p>Lets face it, SLOs can be hard. This track will go deep into the technical aspects of SLOs. If you love statistics, math, visualizations, architectural strategy or doing SLOs at scale, this is the track for you. Nerd. Warning: The lessons here are designed to make your head hurt.</p>
        <h2>Beyond Theory</h2>
        <h3>Case studies, what it takes to build SLOs platform, failures</h3>
        <p>Beyond Theory covers everything practical. Get real world examples of SLOs embraced by SREs in practice. This track covers case studies, common failures and just good SLO stories. Come to this track to learn what works and how to avoid mistakes that others have made.</p>
      </Layout>
    </Page>
  );
}


