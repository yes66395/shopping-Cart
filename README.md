# shopping-Cart
雜物商城 連結<a href="https://yes66395.github.io/shopping-Cart/" target="_blank">點我</a>

*注意!如果什麼都沒有，出現Loading文字，極大的可能是api壞掉，api的來源為這<a href="https://fakeapi.platzi.com/en/rest/products">點我</a>
<br/>
完成結果:
<br/>
<img src="https://github.com/yes66395/POSData/blob/main/%E5%9C%96%E7%89%872.png?raw=true"  />
<br/>
<img src="https://github.com/yes66395/POSData/blob/main/%E5%9C%96%E7%89%871.png" />

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
9. 搜尋功能，查找商品
