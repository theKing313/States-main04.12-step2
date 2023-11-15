import Link from 'next/link'
import styles from './FloatingContacts.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface FloatingContactsProps {}

function FloatingContacts() {
  return (
    <section className={cx('floating-contacts-wrapper')}>
      <div className={cx('floating-contacts')}>
        <Link href='/' className={cx('item')}>
          <svg xmlns='http://www.w3.org/2000/svg' width='26' height='18' fill='none' viewBox='0 0 26 18'>
            <path
              fillRule='evenodd'
              d='M1.273 18l7.734-7.735c.395.352.838.647 1.32.87.592.275 1.233.44 1.885.488.779.055 1.567-.059 2.297-.334.62-.235 1.189-.584 1.684-1.023L23.927 18H1.273zm6.454-9L0 16.727V1.273L7.727 9zM25.2 1.3v15.427l-7.71-7.71c2.603-2.54 5.154-5.13 7.71-7.717zM23.927 0l-8.78 8.78c-.343.339-.744.61-1.192.792-.903.367-1.942.349-2.831-.05-.37-.167-.707-.398-1.003-.675l-.403-.389c-.01-.014-.021-.029-.034-.042-.049-.058-.104-.109-.166-.152-2.8-2.714-5.54-5.49-8.28-8.264h22.69z'
              clipRule='evenodd'></path>
          </svg>
        </Link>
        <Link href='/' className={cx('item')}>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='none' viewBox='0 0 25 25'>
            <path d='M24.1 18.172l-5.109-2.635c-.71-.369-1.606-.185-2.106.448l-1.87 2.397c-1.817-.974-3.213-1.923-4.82-3.53-1.71-1.713-2.633-3.136-3.58-4.9l2.37-1.845c.631-.5.842-1.397.447-2.108L6.8.914C6.325.018 5.192-.272 4.376.28l-3.24 2.16C.374 2.944-.047 3.813.005 4.709.057 5.63.19 6.789.4 7.606c.948 3.636 3.213 7.404 6.4 10.592 3.186 3.188 6.952 5.454 10.586 6.403.816.21 1.975.316 2.923.395.922.053 1.79-.395 2.291-1.16l2.107-3.293c.58-.817.263-1.923-.606-2.371z'></path>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export { FloatingContacts }
