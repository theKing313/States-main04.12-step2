import { Client, Account, Databases, Functions, Storage } from 'appwrite'
import type {
  HeroBlock,
  TwoSidesBlock,
  MagazinesScrollBlock,
  SponsorsBlock,
  VideoPlayerBlock,
  ContactBlock,
  FooterBlock,
} from './types'

let instance: null | Api = null

class Api {
  sdk
  generalDB
  blocksCollection
  blockContentBucket
  otherImagesBucket
  blockHouses
  constructor() {
    if (instance) {
      throw new Error('New API instance cannot be created!!')
    }
    instance = this
    let appwrite = new Client()
    appwrite.setEndpoint('https://appwrite.homesapp.ru/v1').setProject('65140369acf5f3040759')
    const functions = new Functions(appwrite)
    const account = new Account(appwrite)
    const database = new Databases(appwrite)
    const storage = new Storage(appwrite)
    this.sdk = { database, account, functions, storage }
    this.generalDB = '651c37077ab95bb6d02f'
    this.blocksCollection = '651c370ebdabc8f03125'
    this.blockContentBucket = '65221cff6c4a69775309'
    this.otherImagesBucket = '6536fb1714acfb91ffcd'


    this.blockHouses = '654c917198f9d04b38c5'


  }

  provider() {
    if (this.sdk) {
      return this.sdk
    }
  }

  async getAllDocs() {
    let allDocs = await this.sdk.database.listDocuments(this.generalDB, this.blocksCollection) // '[DATABASE_ID]', '[COLLECTION_ID]'

    return allDocs
  }

  async getBlock(
    type: 'hero' | 'twoSides' | 'magazinesScroll' | 'sponsors' | 'videoPlayer' | 'contact' | 'footer' | 'Houses'
  ) {
    const allDocs = await this.getAllDocs()
    const curDoc = allDocs.documents.find((e) => e.id === type)
    if (curDoc) return curDoc.value
    else return null
  }

  async getHero(): Promise<HeroBlock | null> {
    const block = await this.getBlock('hero')
    if (block) {
      const parsedBlock = JSON.parse(block) as HeroBlock
      // move logic to admin panel :) fuck this
      // const bgVideoUrl = this.sdk.storage.getFileView(this.blockContentBucket, 'hero-bgVideo')
      // const bgVideoMeta = await this.sdk.storage.getFile(this.blockContentBucket, 'hero-bgVideo')
      // const bgPosterUrl = this.sdk.storage.getFileView(this.blockContentBucket, 'hero-bgPoster')
      // const bgPosterMeta = await this.sdk.storage.getFile(this.blockContentBucket, 'hero-bgPoster')
      // parsedBlock.bgVideoUrl = bgVideoUrl.href
      // parsedBlock.bgVideoMimeType = bgVideoMeta.mimeType
      // parsedBlock.bgVideoPoster = bgPosterUrl.href
      return parsedBlock
    } else return null
  }

  async getTwoSides(): Promise<TwoSidesBlock | null> {
    const block = await this.getBlock('twoSides')
    if (block) return JSON.parse(block) as TwoSidesBlock
    else return null
  }



  async getGalaryScroll(): Promise<any | null> {

    let block = await this.sdk.database.listDocuments(this.generalDB, this.blockHouses) // '[DATABASE_ID]', '[COLLECTION_ID]'

    if (block) return block.documents as any
    else return null
  }

  async getMagazinesScroll(): Promise<MagazinesScrollBlock | null> {
    const block = await this.getBlock('magazinesScroll')

    if (block) return JSON.parse(block) as MagazinesScrollBlock
    else return null
  }

  async getSponsors(): Promise<SponsorsBlock | null> {
    const block = await this.getBlock('sponsors')
    if (block) return JSON.parse(block) as SponsorsBlock
    else return null
  }

  async getVideoPlayer(): Promise<VideoPlayerBlock | null> {
    const block = await this.getBlock('videoPlayer')
    if (block) return JSON.parse(block) as VideoPlayerBlock
    else return null
  }

  async getContact(): Promise<ContactBlock | null> {
    const block = await this.getBlock('contact')
    if (block) return JSON.parse(block) as ContactBlock
    else return null
  }

  async getFooter(): Promise<FooterBlock | null> {
    const block = await this.getBlock('footer')
    if (block) return JSON.parse(block) as FooterBlock
    else return null
  }
}

const api = new Api()

export { api }
