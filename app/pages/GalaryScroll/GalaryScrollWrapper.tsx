// import { api } from '@/app/api'
import { api } from '@/app/api'
import { GalaryScroll } from './GalaryScroll'



async function GalaryScrollWrapper() {
    const data = await api.getGalaryScroll()
    return data && <GalaryScroll galaryList={data} />
}

export { GalaryScrollWrapper }
