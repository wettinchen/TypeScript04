## TypeScript 04
## Chapter 04: Functions
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Type Aliases
        (1)設定 Guitarist 和 userId 的類別，
        透過類別別名設置更改 albums 的類別和 userId 的類別
        (2)設定 PostId 的介面，
        不能透過類別別名設置更改，會顯示錯誤

###  4. Literal Types
        Literal Types 的優點 Do not Repeat Yourself
        (1)設定 myName 的類別為文字類別 Dave，
        設定 myName 為 Dave，不會顯示錯誤
        (2)設定 myName 為 John，
        Dave 以外文字類別會顯示錯誤
        (3)設定 userName 的類別為文字類別 Dave, John 或 Amy，
        設定 userName 為 Amy，不會顯示錯誤
        (4)設定 userName 為 Rachel，
        Dave, John 或 Amy 以外文字類別會顯示錯誤

###  5. Basic Functions
        (1)宣告 add，參數為 a 和 b，回傳 a 加 b；
        因為錯誤無法轉譯為 main.js
        (2)設定參數為 a 和 b 的類別為 number
        (3)設定回傳的類別為 number

###  6. Functions with no return value
        (1)宣告 logMsg，參數為 message，型態為 any；
        設定 logMsg 型態為 void 不回傳結果
        (2)用範例說明
        (3)移除錯誤後，在 terminal 輸入 tsc -w
        執行 Live Server，並在 Console 觀察結果

###  7. The function keyword
        使用 function關鍵字 宣告 subtract，
        參數為 c 和 d，回傳 c 減 d

###  8. Function Type Aliases
        設定 mathFunction 類別為 number，參數 a 和 b  類別都是 number
        宣告 multiply 類別為 mathFunction，
        參數為 c 和 d，回傳 c 乘 d

###  9. Function Interface
        設定 mathFunction 類別為 number，參數 a 和 b  類別都是 number

### 10. Optional Parameters
        (1)宣告 addAll，
        參數為 a, b 和 c，回傳 a 加 b 加 c；
        設定 addAll 和 參數為 a, b, c，的類別為 number
        (2)若設定 c 的類別為 number 或 undefined，需要透過設定 type guard 避免錯誤
        (3)設定 type guard

### 11. Default Parameters
        (1)宣告 sumAll，
        參數為 a, b 和 c，c 的預設值為 2，回傳 a 加 b 加 c；
        設定 sumAll 和 參數為 a, b, c，的類別為 number
        (2)設定 a 預設值為 10，c 的預設值為 2
        觀察 a 為 undefined, b 為 3, c 為預設值的結果
        (3)設定 a 預設值為 10，c 的預設值為 2，
        設定 a 為 3 的結果會顯示錯誤

### 12. Function with Rest Params
        (1)宣告 total，類別為 number，
        設定剩餘參數格式為 ...numbers，類別為 number[]，
        使用 array.reduce() 回傳結果
        (2)設定 a 為類別為 number，其他參數為剩餘參數
        使用 a 和 array.reduce() 回傳結果

### 13. The never type
        (1)使用 throw 使 createError函數的類別為 never
        (2)使用 while迴圈 使 infinite函數的類別為 never
        (3)修改 while迴圈 使 infinite函數的類別不為 never

### 14. Using the never type
        (1)宣告 numberOrString函數，類別為 string，
        參數 value 的類別為 number 或 string，用 if設定兩個可能條件，沒有回傳會有錯誤
        (2)新增回傳為 createError 避免錯誤

### 15. Custom Type Guard
        宣告 isNumber函數作為客製化的type guard，
        並作為 numberOrString 的helper 函數