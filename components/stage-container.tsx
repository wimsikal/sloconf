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

import useSWR from 'swr';
import cn from 'classnames';
import { Talk } from '@lib/types';
import useLoginStatus from '@lib/hooks/use-login-status';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import TracksSidebar from './tracks-sidebar';
import ConfEntry from './conf-entry';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  talk: Talk;
  // talks: Talk[];
  // Talks: Talk[];
};

export default function StageContainer({ talk }: Props) {
  const { loginStatus, mutate } = useLoginStatus();

  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        {loginStatus === 'loggedIn' ? (
          <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
            <iframe
              allow="autoplay; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={`https://youtube.com/embed/${talk.youtubeSlug}`}
              title={talk.title}
              width="100%"
            />

            <div className={cn(styles.bottom, styleUtils.appear, styleUtils['appear-second'])}>
              <div className={styles.messageContainer}>
                <div className={styles['avatar-group']}>
                  {talk.speaker.map(t => (
                    <div key={t.name} className={styles['avatar-wrapper']}>
                      <Image
                        loading="lazy"
                        alt={t.name}
                        className={styles.avatar}
                        src={t.image.url}
                        title={t.name}
                        width={72}
                        height={72}
                      />
                    </div>
                  ))}
                </div>
                <div>
                <h2>{talk.title}</h2>
                <div>
                {talk.speaker.map(t => (
                  <span>
                    {t.name} @ {t.company}<br />
                  </span>
                ))}
                </div>
                {/* {talk.track} */}
                </div>
                {/* <h2 className={styles.stageName}>{talk.title}</h2> */}
                {/* <div>
                    {talk.speaker.map(t => (
                      <div>
                        <Link href={`/speakers/${t.slug}`}>
                          <div>
                            <span className={styles.name}>{t.name} </span>
                            <span className={styles.company}>@{t.company}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div> */}
              </div>
              <a
                href="https://sloconf.slack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>Ask a question on Slack</span>
              </a>
            </div>
          </div>
        ) : loginStatus === 'loading' ? null : (
          <ConfEntry onRegister={() => mutate()} />
        )}
      </div>
      {/* <ScheduleSidebar allStages={updatedStages} /> */}
      {/* <TracksSidebar  /> */}
    </div>
  );
}
