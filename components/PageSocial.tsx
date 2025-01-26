import type * as React from 'react'
import cs from 'classnames'
import Image from 'next/image'
import bilibiliIcon from "./icons/bilibili.png"

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
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
      <Image
        src={bilibiliIcon} // Use the imported StaticImageData
        alt="Bilibili"
        width={36}
        height={36}
      />
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
  }
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
