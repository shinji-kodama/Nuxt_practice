import dayjs from 'dayjs'

export default ({ app }, inject) => {
  // Vue、コンテキスト、ストアに$hello(msg）を挿入します。
  inject('dayjs', ( string => dayjs(string)))
}