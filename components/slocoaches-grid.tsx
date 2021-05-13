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
import { Slocoach } from '@lib/types';
import styles from './slocoaches-grid.module.css';

function SlocoachCard({ slocoach }: { slocoach: Slocoach }) {
  return (
    <Link key={slocoach.name} href={slocoach.website}>
      <a
        role="button"
        tabIndex={0}
        className={cn(styles.card)}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={slocoach.name}
            src={slocoach.cardImage.url}
            className={cn(styles.image)}
            loading="lazy"
            title={slocoach.name}
            width={900}
            height={500}
          />
        </div>
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{slocoach.name}</h2>
              <p className={styles.description}>{slocoach.description}</p>
            </div>
          </div>
      </a>
    </Link>
  );
}

type Props = {
  slocoaches: Slocoach[];
};

export default function SlocoachesGrid({ slocoaches }: Props) {

  return (
    <>
      <div className={styles.grid}>
        {slocoaches.map(slocoach => (
          <SlocoachCard key={slocoach.name} slocoach={slocoach} />
        ))}
      </div>

    </>
  );
}
