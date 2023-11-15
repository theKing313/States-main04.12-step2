'use client'

import Image from 'next/image'
import { Formik } from 'formik'
import ArrowIcon from '../../shared/ArrowIcon'
import { useState } from 'react'
import Link from 'next/link'
import type { FooterBlock } from '@/app/api/types'
import styles from './Newsletter.module.scss'
import classNames from 'classnames/bind'
import { api } from '@/app/api'
const cx = classNames.bind(styles)

interface NewsError {
  email?: string
}

export function Newsletter({ phoneNumber, mail, contactsInfo, address, socialLinks }: FooterBlock) {
  const [emailFocused, setEmailFocused] = useState(false)
  return (
    <div className={cx('newsletter')}>
      <div className={cx('newsletterFormBlock')}>
        <h3 className={cx('newsletterTitle')}>Newsletter</h3>
        <p className={cx('newsletterDescription')}>
          For exclusive news and market updates sign up for our newsletter.
        </p>

        <Formik
          initialValues={{ email: '' }}
          validate={(values) => {
            const errors: NewsError = {}
            if (!values.email) {
              errors.email = 'E-mail is  required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values) => console.log(values)}>
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <p
                className={cx('newsletterValidationError', {
                  newsletterValidationErrorHidden: !errors.email,
                })}>
                {errors.email}
              </p>
              <form
                className={cx('newsletterForm', { newsletterFormError: errors.email })}
                onSubmit={handleSubmit}>
                <input
                  id='email'
                  type='email'
                  name='email'
                  className={cx('newsletterInput')}
                  onChange={handleChange}
                  onBlur={() => {
                    if (!values.email) {
                      setEmailFocused(false)
                    }
                  }}
                  onFocus={() => {
                    setEmailFocused(true)
                  }}
                  value={values.email}
                />
                <label htmlFor='email' className={cx('newsletterLabel', { newsletterLabelUp: emailFocused })}>
                  E-mail Address
                </label>
                <button type='submit' className={cx('newsletterSubmitButton')}>
                  <ArrowIcon className={cx('newsletterSubmitIcon')} direction='right' fill='#c28563' />
                </button>
              </form>
            </>
          )}
        </Formik>
      </div>

      <div className={cx('newsletterInfoBlock')}>
        <Link href='/' className={cx('logoLink')}>
          <Image
            src={api.sdk.storage.getFileView(api.otherImagesBucket, 'logo').href}
            alt='Логотип компании'
            className={cx('newsletterLogo')}
            height={720}
            width={1280}
          />
        </Link>

        <div className={cx('newsletterNavHolder')}>
          <div className={cx('newsletterContacts')}>
            <p className={cx('newsletterContactsTitle')}>Contact Us</p>
            <p className={cx('newsletterContactsSubtitle')}>{contactsInfo}</p>
            <Link href={'tel:' + phoneNumber} className={cx('newsletterLink')}>
              {phoneNumber}
            </Link>
            <Link href={'mailto:' + mail} className={cx('newsletterLink', 'newsletterLinkLast')}>
              {mail}
            </Link>
          </div>
          <div className={cx('newsletterContacts')}>
            <p className={cx('newsletterContactsTitle')}>Address</p>
            <p className={cx('newsletterContactsSubtitle', 'newsletterContactsSubtitleAddress')}>{address}</p>
          </div>

          <ul className={cx('newsletterNavigation')}>
            <li>
              <Link href={'/'} className={cx('newsletterLink')}>
                Home Search
              </Link>
            </li>
            <li>
              <Link href='/' className={cx('newsletterLink')}>
                About Jade
              </Link>
            </li>
            <li>
              <Link href='/' className={cx('newsletterLink')}>
                Communities
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className={cx('newsletterLink', 'newsletterLinkLast', 'newsletterLinkLastOptional')}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className={cx('newsletterSocials')}>
            {socialLinks.map((link, i) => (
              <li key={link.href + i}>
                <Link href={link.href} className={cx('newsletterLink')}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
