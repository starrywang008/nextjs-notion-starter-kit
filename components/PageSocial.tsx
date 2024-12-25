import type * as React from 'react'
import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
  
  config.instagram && {
    name: 'instagram',
    href: `https://www.instagram.com/${config.instagram}`,
    title: `Instagram @${config.instagram}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 2.16c3.204 0 3.584.012 4.85.07 1.25.058 2.017.276 2.49.46.604.23 1.038.503 1.49.955.452.452.725.886.955 1.49.184.473.402 1.24.46 2.49.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.25-.276 2.017-.46 2.49-.23.604-.503 1.038-.955 1.49-.452.452-.886.725-1.49.955-.473.184-1.24.402-2.49.46-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.25-.058-2.017-.276-2.49-.46-.604-.23-1.038-.503-1.49-.955-.452-.452-.725-.886-.955-1.49-.184-.473-.402-1.24-.46-2.49C2.172 15.584 2.16 15.204 2.16 12s.012-3.584.07-4.85c.058-1.25.276-2.017.46-2.49.23-.604.503-1.038.955-1.49.452-.452.886-.725 1.49-.955.473-.184 1.24-.402 2.49-.46 1.266-.058 1.646-.07 4.85-.07M12 0c-3.278 0-3.692.014-4.978.072-1.304.06-2.535.29-3.49.676a6.738 6.738 0 0 0-2.43 1.588A6.738 6.738 0 0 0 .072 6.532C-.014 7.488-.044 8.72.072 10.023.014 11.308 0 11.722 0 15s.014 3.692.072 4.978c.06 1.304.29 2.535.676 3.49a6.738 6.738 0 0 0 1.588 2.43 6.738 6.738 0 0 0 2.43 1.588c.956.386 2.187.616 3.49.676C8.308 23.986 8.722 24 12 24c3.278 0 3.692-.014 4.978-.072 1.304-.06 2.535-.29 3.49-.676a6.738 6.738 0 0 0 2.43-1.588 6.738 6.738 0 0 0 1.588-2.43c.386-.956.616-2.187.676-3.49.058-1.286.072-1.7.072-4.978s-.014-3.692-.072-4.978c-.06-1.304-.29-2.535-.676-3.49a6.738 6.738 0 0 0-1.588-2.43A6.738 6.738 0 0 0 16.468.72c-.956-.386-2.187-.616-3.49-.676C15.692.014 15.278 0 12 0zm0 5.82c-3.412 0-6.18 2.768-6.18 6.18s2.768 6.18 6.18 6.18 6.18-2.768 6.18-6.18-2.768-6.18-6.18-6.18zM12 16.02a3.842 3.842 0 1 1 0-7.685 3.842 3.842 0 0 1 0 7.685zm6.605-10.81a1.472 1.472 0 1 1 0-2.944 1.472 1.472 0 0 1 0 2.944z' />
      </svg>
    )
  },

  config.bilibili && {
    name: 'bilibili',
    href: `https://space.bilibili.com/${config.bilibili}`,
    title: `Bilibili ${config.author}`,
    icon: (
      <img
        src='/path-to-bilibili-icon.png'
        alt='Bilibili'
        style={{ width: 24, height: 24 }}
      />
    )
  },
].filter(Boolean)

export function PageSocial() {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
