# shopping-Cart
雜物商城 連結<a href="https://yes66395.github.io/shopping-Cart/" target="_blank">點我</a>

*注意!如果什麼都沒有，出現Loading文字，極大的可能是api壞掉，api的來源為這<a href="https://fakeapi.platzi.com/en/rest/products">點我</a>
<br/>
左邊的Navigation，有時候文字會突然不一樣，是因為api的問題。見諒。
<br/>
完成結果:
<br/>
<img src="https://github.com/yes66395/POSData/blob/main/%E5%9C%96%E7%89%873.png?raw=true"  />
<br/>
<img src="https://github.com/yes66395/POSData/blob/main/%E5%9C%96%E7%89%874.png?raw=true" />

## 用到的技術

1. Vue2X語法 (目前還是用到Vue2X的語法，但是是Vue3X的環境)
2. Vite搭建Vue環境
3. Vue-Router 配置
4. Axios 串接資料
5. Vuex4 狀態管理庫

<br/>

## 功能的說明

1. 左邊的商品分類，對應資料id做點擊切換，看到不同的商品。(id存在sessionStorage)
2. 加入購物車，如點擊同一件商品，商品數量+1，不會重複出現。
3. 點擊右上角的購物車，數字跟著所點擊到的商品變化，一件商品+1，數量不列入計算。
4. 可刪除單一商品。
5. 點擊圖片可查看商品詳情。
6. 可清空購物車。
7. 自動計算總價格與總數量。
8. 商品數量的遞增與遞減，最大為99(限制)，最小則為1(隨著總價格與總數量而變化)。
9. 搜尋功能，查找商品，如找不到該商品，會有文字提醒。缺點就是沒有那麼絲滑
10. 登入功能。CSS有點問題，趕緊修復

帳號 : john@mail.com
密碼 : changeme
<br/>
如果錯誤就在麻煩你登入一次，謝謝。

## 安裝步驟
```
git clone https://github.com/yes66395/shopping-Cart.git //把這個項目複製下來

cd 到這個項目的資料夾 

npm install //安裝該項目所需要套件

//啟動服務
npm run dev 
服務為 http://127.0.0.1:5173/
```
## 總結:

說實話，我以為很簡單，但實際上，對我這種無開發經驗完全沒寫過的人來講還滿困難，並且也是第一次寫這個<br/>，看輕了購物車整體的邏輯(包括畫面的構想)，實際上還可以更複雜。<br/>
但最大的問題還是在於Vuex與Vue-Router，其中Vuex我卡了很久，到現在也是懵懂懵懂。<br/>
登入的流程，實作了一遍，邊看邊寫，終於有一點點搞懂怎麼作
<br/>

## 發生的問題
1. 計數器，Vuex開啟嚴格模式，會出錯，重新修改了一遍，已經OK。
2. 商品轉址，已修復。
3. 商品搜尋OK，但缺點就是沒有那麼絲滑。
4. CSS樣式修復完成(重新改寫了一遍)。
5. 目前還缺訂單模組(尚在開發當中)程式碼會重新在上傳。<br/>
6. 登入模組，會盡快完成。 OK 已打包部屬到gitpage
