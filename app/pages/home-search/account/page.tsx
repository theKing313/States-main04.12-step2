'use client'
import { api } from '@/app/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'
import styles from './Account.module.scss'
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

import { FavoritesList } from '@/app/components/FavoritesList/FavoritesList';
import Header from '@/app/components/Header';
import { redirect } from 'next/navigation';

const cx = classNames.bind(styles)
function Account() {
    const { data: accountInfo, isLoading: isGalaryScrollDataLoading } = useQuery({
        queryKey: ['getAccountInfo'],
        queryFn: async () => await api.getAccountInfo(),
    })


    if (!isGalaryScrollDataLoading && accountInfo === undefined) {
        redirect('/pages/AuthProvider')
    }

    return (
        <>
            <div className={cx('')}>
                <Header></Header>
            </div>
            <div className={cx('account_container')}>
                <div className={cx('account_profile')}>
                    <div className={cx('account_profile_info')}  >
                        <div className={cx('profile__image_info')}>
                            <div className={cx('profile__image')}>{accountInfo?.name[0]}</div>
                            <div className={cx('profile__name')}>{accountInfo?.name}</div>
                        </div>

                        <div className={cx('profile__phone')}>
                            <MdLocalPhone />
                            {accountInfo?.phone}
                        </div>
                        <div className={cx('profile__email')}>   <IoIosMail />{accountInfo?.email}</div>
                        <button className={cx('profile__button')}>
                            <AiFillEdit></AiFillEdit>
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className={cx('account_records')}>
                    <div className={cx('account_section')}>
                        <div className={cx('account_header')}>
                            <h2>Favorited Properties</h2>
                        </div>
                        <div className={cx('account_records__items')}>
                            <FavoritesList></FavoritesList>
                            {/* <Favorite /> */}

                        </div>

                    </div>


                </div>
            </div >
        </>
    )
}

export default Account