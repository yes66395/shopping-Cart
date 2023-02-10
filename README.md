# shopping-Cart
雜物商城 連結<a href="https://yes66395.github.io/shopping-Cart/" target="_blank">點我</a>

*注意!如果什麼都沒有，出現Loading文字，極大的可能是api壞掉，api的來源為這<a href="https://fakeapi.platzi.com/en/rest/products">點我</a>
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
5. 可查看商品詳情。
6. 清空購物車。
7. 自動計算總價格與總數量。
8. 商品數量的遞增與遞減，最大為99(限制)，最小則為1(隨著總價格與總數量而變化)。
9. 搜尋功能，查找商品 。

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

說實話，我以為很簡單，但實際上，對我這種完全沒寫過的人來講還滿困難，我是第一次寫這個，看輕了購物車整體的邏輯。<br/>
最大的問題還是在於Vuex與Vue-Router，其中Vuex我卡了很久，到現在也是懵懂懵懂。
<br/>
商品轉址，已修復。
商品搜尋OK
CSS樣式修復完成

