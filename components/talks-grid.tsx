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
  return (
    <div className={styles.grid}>
      {talks.map(talk => (
        <Link key={talk.title} href={`https://youtu.be/${talk.youtubeSlug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}></div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{talk.title}</h2>

                {talk.track.map(t => (
                  <p className={styles.track} key={t.name}>
                    {t.name}
                  </p>
                ))}

                <p>
                  {talk.speaker.map(t => (
                    <div>
                      <div className={styles['avatar-group']}>
                        <div key={t.name} className={styles['avatar-wrapper']}>
                          <Link href={`/speakers/${t.slug}`}>
                          <Image
                            loading="lazy"
                            alt={t.name}
                            className={styles.avatar}
                            src={t.image.url}
                            title={t.name}
                            width={72}
                            height={72}
                          />
                          </Link>
                        </div>
                        <Link href={`/speakers/${t.slug}`}>
                          <span className={styles.speaker} key={t.name}>
                            {t.name}{' '}
                          </span>
                          </Link>
                      </div>
                    </div>
                  ))}
                </p>
                {`${talk.description} `}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
