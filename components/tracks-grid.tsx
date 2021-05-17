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
import cn from 'classnames';
import { Track } from '@lib/types';
import styles from './tracks-grid.module.css';


type Props = {
  tracks: Track[];
};

export default function TracksGrid({ tracks }: Props) {
  return (
    <div className={styles.grid}>
      {tracks.map(track => (
        <>
        <Link key={track.name} href={`/tracks/${track.slug}`}>
        {/* <h2>{track.name}</h2> */}
        <div>
        <div className={styles.imageWrapper}>
          <Image
            alt={track.name}
            src={track.image.url}
            className={styles.image}
            quality="50"
            loading="lazy"
            title={track.name}
            width={900}
            height={500}
          />
        </div>
        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{track.name}</h2>
            <p className={styles.short}>{ track.short }</p>
            <p className={styles.description}>{ track.description }</p>
          </div>
        </div>
        </div>
        </Link>
        </>
      ))}
    </div>
  )
}