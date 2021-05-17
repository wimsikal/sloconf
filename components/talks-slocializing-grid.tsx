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

import Link from 'next/link';
import Image from 'next/image';
import { Talk } from '@lib/types';
import styles from './talks-grid.module.css';

type Props = {
  talks: Talk[];
};

export default function TalksGrid({ talks }: Props) {
  const newtoslos = talks.filter(t => t.tracknum === 2)
  return (
    <div className={styles.grid}>
      {newtoslos.map(newtoslos => (
        <Link key={newtoslos.title} href={`https://youtu.be/${newtoslos.youtubeSlug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}></div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{newtoslos.title}</h2>
                {newtoslos.track.map(t => (
                  <div key={t.name}>{t.name}</div>
                ))}


                {newtoslos.speaker.map(t => (
                  <span key={t.name}>{t.name} </span>
                ))}
                <br />
                <br />

                {`${newtoslos.description} `}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
