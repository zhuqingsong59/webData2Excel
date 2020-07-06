# webData2Excel
>  export data to excel in browser

## Installation


```bash
 npm i webData2Excel
```

## Usage

```
 import webData2Excel form 'webData2Excel'

   ...

 webData2Excel(headList, dataList, fileName)
```

## Parameters format
### headList
object array, object has two props, label and key  

for example：
```
[
 {label: '表头名称1', key: 'prop1'},
 {label: '表头名称2', key: 'prop2'}
 ...
]
```
### dataList
object array  with data

for example：
```
[
 {prop1: '数据1-1', prop2: '数据1-2', ...},
 {prop1: '数据2-1', prop2: '数据2-2', ...}
 ...
]
```
### fileName
string  

for example：
```
'文件名称'
```
