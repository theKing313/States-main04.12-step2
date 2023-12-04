'use client'
import styles from './FavoritesList.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)


import { MagazinesScrollBlock } from '@/app/api/types'
import { useEffect, useState } from 'react'
import { api } from '@/app/api'
import { MdFavorite } from "react-icons/md";

import { useMutation, useQuery } from '@tanstack/react-query'
import Header from '../Header'
import Image from 'next/image'

function FavoritesList() {
  const { data: accountInfo, isLoading: isGalaryScrollDataLoading } = useQuery({
    queryKey: ['getAccountInfo'],
    queryFn: async () => await api.getAccountInfo(),
  })
  const { data: getFav, isLoading: getFavDataLoading } = useQuery({
    queryKey: ['getFavoritesList'],
    queryFn: async () => await api.getFavoritesList(),
  })
  const [cardInfo, setCardInfo] = useState([])

  useEffect(() => {
    if (!isGalaryScrollDataLoading && !getFavDataLoading) {

      const filteredAccountInfo = getFav?.map((singlehome: any) => {
        if (singlehome?.userID === accountInfo?.$id) {
          singlehome.home && setCardInfo((current): any => { return [...current, singlehome.home] })
        }
      })

    }


  }, [accountInfo, getFav])

  return (
    <>
      {isGalaryScrollDataLoading && 'loading...'}
      {cardInfo?.map((item: any, index) => {
        return (
          <>
            <div className={cx('account_records__item')}>
              <div className={cx('item-card')}>
                <div className={cx('item-card__header')}>
                  <div className={cx('fav')}><MdFavorite></MdFavorite></div>
                  <div className={cx('item-card__image')}>
                    <Image alt='alt' src={item?.mainPhoto} fill></Image>
                  </div>
                </div>
                <div className={cx('card_content')}>
                  <div className={cx('card_details')}>
                    <div className={cx('card_details__price')}>{item?.price}</div>
                    <div className={cx('card_details__details__inner')}>{item?.features}</div>
                  </div>
                  <div className={cx('card_address')}>{item?.location}</div>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export { FavoritesList }
