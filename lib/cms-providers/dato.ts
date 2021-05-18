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


import { Job, Sponsor, Stage, Speaker, Track, Lab, Slocoach, Talk } from '@lib/types';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  const data = await fetchCmsAPI(`
    {
      allSpeakers(first: 100, orderBy: name_ASC) {
        name
        bio
        title
        slug
        twitter
        github
        company
        talk {
          title
          description
          youtubeSlug
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
        }
      }
    }
  `);

  return data.allSpeakers;
}

export async function getAllStages(): Promise<Stage[]> {
  const data = await fetchCmsAPI(`
    {
      allStages(first: 100, orderBy: order_ASC) {
        name
        slug
        stream
        discord
        schedule {
          title
          start
          end
          speaker {
            name
            slug
            image {
              url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
            }
          }
        }
      }
    }
  `);

  return data.allStages;
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  const data = await fetchCmsAPI(`
    {
      allCompanies(first: 100, orderBy: tierRank_ASC) {
        name
        description
        slug
        website
        callToAction
        callToActionLink
        discord
        youtubeSlug
        tier
        links {
          url
          text
        }
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 300})
        }
      }
    }
  `);

  return data.allCompanies;
}
export async function getAllTracks(): Promise<Track[]> {
  const data = await fetchCmsAPI(`
    {
      allTracks(first: 10, orderBy: order_ASC) {
        name
        short
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 100})
        }
        description
        talk {
          title
          speaker {
            name
          }
        }
        order
        slug
      }
    }
  `);

  return data.allTracks;
}

export async function getAllLabs(): Promise<Lab[]> {
  const data = await fetchCmsAPI(`
    {
      allLabs(first: 10, orderBy: title_ASC) {
        title
        description
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 900, h: 00})
        }
        url
        show
      }
    }
  `);

  return data.allLabs;
}

export async function getAllJobs(): Promise<Job[]> {
  const data = await fetchCmsAPI(`
    {
      allJobs(first: 100, orderBy: companyName_ASC) {
        id
        companyName
        title
        description
        discord
        link
        rank
      }
    }
  `);

  return data.allJobs;
}

export async function getAllTalks(): Promise<Talk[]> {
  const data = await fetchCmsAPI(`
    {
      allTalks(first: 100, orderBy: title_ASC) {
        title
        description
        speaker {
          name
          title
          company
          slug
            image {
              url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
            }
        }
        youtubeSlug
        track {
          name
        }
        tracknum
      }
    }
  `);

  return data.allTalks;
}

export async function getAllSlocoaches(): Promise<Slocoach[]> {
  const data = await fetchCmsAPI(`
    {
      allSlocoaches(first: 100, orderBy: order_ASC) {
        name
        description
        website
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop, w: 900, h: 500})
        }
        order
      }
    }
  `);

  return data.allSlocoaches;
}

  