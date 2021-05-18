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
import { Lab } from '@lib/types';
import styles from './labs-grid.module.css';

type Props = {
  labs: Lab[];
};

export default function TracksGrid({ labs }: Props) {
  const active = labs.filter(b => b.show === true);
  return (
    <div className={styles.grid}>
      {active.map(lab => (
        <>
          {/* <h2>{track.name}</h2> */}
          <Link key={lab.title} href={lab.url}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div>
              <div className={styles.imageWrapper}>
                <Image
                  alt={lab.title}
                  src={lab.image.url}
                  className={styles.image}
                  quality="50"
                  loading="lazy"
                  title={lab.title}
                  width={768}
                  height={300}
                />
              </div>
              <div className={styles.cardBody}>
                <div>
                  <h2 className={styles.name}>{lab.title}</h2>
                  <p className={styles.description}>{lab.description}</p>
                </div>
              </div>
            </div>
            </a>
          </Link>
        </>
      ))}
    </div>
  );
}
