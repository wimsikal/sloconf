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

export const SITE_URL = 'https://sloconf.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'sloconf';
export const BRAND_NAME = 'SLOConf';
export const SITE_NAME_MULTILINE = ['SLO', 'Conf'];
export const SITE_NAME = 'SLOConf';
export const META_DESCRIPTION =
  'The first Service Level Objective Conference for Site Reliability Engineers';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'May 17-20, 2021';
export const SHORT_DATE = 'May 17-20'; // Update when start time is known ie May 17-20 - 9:00am PST
export const FULL_DATE = 'May 17-20th'; // Update when start time is known ie May 17-20th 9am Pacific Time (GMT-7)
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  '/code-of-conduct';
export const REPO = 'https://github.com/wimsikal/sloconf';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  // {
  //   name: 'Register',
  //   route: '/'
  // },
  {
    name: 'About',
    route: '/about'
  },
  {
    name: 'Tracks',
    route: '/tracks'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Labs',
    route: '/labs'
  },
  {
    name: 'Sponsors',
    route: '/sponsors'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  },
  // {
  //   name: 'Stage A',
  //   route: '/stage/a'
  // },
  // {
  //   name: 'Stage C',
  //   route: '/stage/c'
  // },
  // {
  //   name: 'Stage M',
  //   route: '/stage/m'
  // },
  // {
  //   name: 'Stage E',
  //   route: '/stage/e'
  // },
  // {
  //   name: 'Schedule',
  //   route: '/schedule'
  // },

  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  
];

export type TicketGenerationState = 'default' | 'loading';
