import Image from 'next/image'
import styles from './Galary.module.scss'
import type { GalaryI } from '@/app/api/types'
import classNames from 'classnames/bind'
import Link from 'next/link'
const cx = classNames.bind(styles)
import { api } from '@/app/api';
import { useMutation, useQuery } from '@tanstack/react-query'
import { useDebounce } from '@/app/hooks/useDebounce'
function Galary({ updatedAt, description, features, lat, location, lon, mainPhoto, price, status, $id }: GalaryI) {
    const { data: accountInfo, isLoading: isGalaryScrollDataLoading } = useQuery({
        queryKey: ['getAccountInfo'],
        queryFn: async () => await api.getAccountInfo(),
    })
    const {
        mutate: addToFav,
        // isLoading,
        isError,
        error,
    } = useMutation({
        mutationFn: ({ userId, homeID }: { userId: string | undefined, homeID: string }): any => { //values: any
            // return values values?.email, values?.password
            if (userId !== undefined) {
                return api.addToFavoriteList(userId, homeID)
            }

        },
        onSuccess: (response) => {
        },
    })
    const addGalaryToFav = (id: any) => {
        addToFav({ userId: accountInfo?.$id, homeID: id })
    };
    const addFav = useDebounce(addGalaryToFav)
    return (

        <section className={cx('galary-wrapper', 'item')}>
            <button onClick={(e) => addFav($id)}>add to fav</button>
            <Link href={`/GalaryScroll/Galary/${$id}`} className="gallery-card " data-slick-index="0" aria-hidden="false" >
                <div className={cx('image-wrapper')}>
                    <Image className={cx('image')} src={mainPhoto} fill={true} alt={features} />
                </div>
                <div className={cx('details')}  >
                    <p className={cx('title')} >{features}</p>
                    <p className={cx('price')} >${price}</p>
                    <p className={cx('subtitle')} >{features}</p>
                </div>
            </Link>
        </section>
    )
}

export { Galary }
