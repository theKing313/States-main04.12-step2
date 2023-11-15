import { ListingsScroll } from './ListingsScroll'

const defaultData = {}

async function ListingsScrollWrapper() {
  // const data = fetch('') // fetch data from server on server and pass it to component
  const data = defaultData
  return <ListingsScroll {...data} />
}

export { ListingsScrollWrapper }
