import { exportJsonToExcel } from './Export2Excel'
export default (headList, dataList, fileName) => {
  const headerList = headList.map((item) => {
    return item.label
  })
  const keyList = headList.map((item) => {
    return item.key
  })
  const dataResultList = dataList.map((dataItem) => {
    return keyList.map((key) => {
      return (!dataItem[key] && dataItem[key] !== 0) ? '' : String(dataItem[key])
    })
  })
  exportJsonToExcel(headerList, dataResultList, fileName)
}
