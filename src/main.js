import { createApp } from 'vue'
import App from './App.vue'


//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//v-tooltip
import tooltip from "./directives/tooltip.js";
import "./assets/tooltip.css";

//GA
import VueGtag from 'vue-gtag-next'

//i18n
import { createI18n } from 'vue-i18n'

const messages = {
  ko: {
    message: {
        hello: 'hello world',
          title: 'FF14 염료 리스트',
          subTitle1: '색으로 찾기',
          subTitle2: '이름으로 찾기',
          input: "염료명을 입력해주세요",
          icon:"아이콘",
          dyeName: "명칭",
          craft: "제작",
          trade: "거래가능",
          market: "상점판매",
          price: "가격",
          currency: "화폐",
          npcName : "판매NPC",
          location: "위치"
    }
  },
  ja: {
    message: {
        hello: 'こんにちは、世界',
          title: '「FF14」カララントリスト',
          subTitle1: '色で探す',
          subTitle2: '名称で探す',
          input: "カララント名を入力してください。",
           icon:"アイコン",
          dyeName: "名称",
          craft: "製作",
          trade: "取引可能",
          market: "販売",
          price: "価格",
          currency: "貨幣",
          npcName : "販売NPC",
          location: "エリア"
        
    }
  }
}

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false, // you must set `false`, to use Composition API
  locale: 'ko', // set locale
  fallbackLocale: 'ja', // set fallback locale
  messages // set locale messages
})



const app = createApp(App);
// app.directive's first argument is the directive's name you will use
// it can be whatever you wish
app.directive("tooltip", tooltip);


app.use(i18n);

app.use(VueGtag,{
    property : {id : 'G-BP0X6SK19K'}
});

app.mount("#app");

