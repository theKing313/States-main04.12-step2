import { api } from '@/app/api'
import { VideoPlayer } from './VideoPlayer'

const defaultData = {
  videoUrl: 'https://www.youtube.com/watch?v=MSb-a0X0xAc',
  backgroundImageUrl:
    'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/dnxjbuzgbepg1ownwkwt/36531c609eea3903915b5d9036e61b821161a663_s2_n1',
}

async function VideoPlayerWrapper() {
  const data = await api.getVideoPlayer()
  return data && <VideoPlayer {...data} />
}

export { VideoPlayerWrapper }
