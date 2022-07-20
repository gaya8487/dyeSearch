<template >
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <div v-tooltip="{
    global: true,
    theme: {
      placement: 'bottom'
    },
  }">
  </div>



  <div id="container" class="container">
    <!--색깔 버튼-->
    <hr>
    <div style="text-align: left; color:gray">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </span> 색으로 찾기
    </div>
    <div style="background:#D3D3D3	; border-radius:10px; padding:9px ; border: 1px solid; ">
      <div>
        <div style="text-align:left">
          <span class="firstLevelBtnSpan" v-for="color in colorTypeData" :key="color.id">
            <button class="firstLevelBtn" v-bind:id="'firstBtn'+ color.id" v-on:click="firstLevelbtnClick(color.id)"
              v-bind:style="[{ 'background': color.code }, firstLevelBtnId == color.id ? {'border':'solid' } : {'border':'none'} ] ">
            </button>
          </span>
        </div>

        <div style="text-align:left;" v-show="firstLevelBtnId > 0 || secondBtnsFlag" class="secondBtnList">
          <span class=" secondLevelBtnSpan" v-for="(color) in colorsSecondBtnList" :key="color.id">
            <button class="secondLevelBtn" v-bind:id="'secondBtn'+ color.id"
              v-on:click="secondLevelBtnClick(color.id, color.colorType,color.btnId,color.code)"
              v-bind:style="[{ 'background': color.code }, secondLevelBtnId == color.btnId ? {'border':'solid' } : {'border':'none'} ] "
              v-tooltip="color.nameKr">
            </button>
          </span>
        </div>
      </div>

    </div>

    <br>
    <hr>
    <div style="text-align: left; color:gray">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path
            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </span> 이름으로 찾기
    </div>

    <div>
      <!--검색창-->
      <div class=" input-group mb-3">
        <input type="text" class="form-control" placeholder="염료명을 입력해주세요" aria-label="염료명을 입력해주세요"
          v-on:click="inputClick()" v-model=" searchText" aria-describedby="button-addon2">
      </div>
    </div>

    {{searchText}}
    {{firstLevelBtnId}}
    {{secondLevelBtnId}}
    {{selectColorCode}}



    <hr>

    <table class="table table-bordered table-sm ">
      <colgroup>
        <col style="width: 3%">
        <col style="width: 3%">
        <col style="width: 6%">
        <col style="width: 100px">
        <col style="width: ">
        <col style="width: 6%">
        <col style="width: 6%">
        <col style="width: 8%">
        <col style="width: 10%">
        <col style="width: 15%">
      </colgroup>
      <thead>
        <tr class="smallWidth">
          <th></th>
          <th class="smallTable">NO.</th>
          <th class="smallTable">아이콘</th>
          <th></th>
          <th>명칭</th>
          <th>제작</th>
          <th>거래 가능</th>
          <th>상점 판매</th>
          <th>가격</th>
          <th>화폐</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="color in colorsData" :key="color.id">
          <template v-for="index in 4" :key="index">
            <tr v-if="index==1" ref="target" @click="listToggle(color.id)">
              <td rowspan="3" style="color:royalblue">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  v-show="toggleOpen(color.id) ? false : true" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-chevron-up" viewBox="0 0 16 16" v-show="toggleOpen(color.id) ? true : false">
                  <path fill-rule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
              </td>
              <td class="smallTable" rowspan="3">{{color.id}}</td>
              <td class="smallTable" rowspan="3">
                <img style="width:100%" :src="getSrc(color.icon)">
              </td>
              <td rowspan="3" v-bind:style="{ 'background': color.code } ">
              </td>
              <td>{{color.name}}</td>
              <td rowspan="3">{{color.craft == "true" ? "O" : "X"}}</td>
              <td rowspan="3">{{color.trade == "true" ? "O" : "X"}}</td>
              <td rowspan="3">{{color.market == "true" ? "O" : "X"}}</td>
              <td v-if="getpriceLength(color.id) == 2">
                {{ getprice(color.id)[0].price }}<br>
                {{ getprice(color.id)[0].restriced == "true"? "(조건부)" : "" }}
              </td>
              <td v-if="getpriceLength(color.id) == 2">
                {{getcurrencyNmKr(getprice(color.id)[0].currencyId)}}
                <img :src="getSrcIcon(getcurrencyIcon(getprice(color.id)[0].currencyId))"
                  style="width:30px; height: 30px;" class="coin">
              </td>
              <td v-if=" getpriceLength(color.id)==1" rowspan="3">
                {{ getprice(color.id)[0].price }}<br>
                {{ getprice(color.id)[0].restriced == "true" ? "(조건부)" : "" }}
              </td>
              <td v-if="getpriceLength(color.id) == 1" rowspan="3">
                {{getcurrencyNmKr(getprice(color.id)[0].currencyId)}}
                <img :src="getSrcIcon(getcurrencyIcon(getprice(color.id)[0].currencyId))"
                  style="width:30px; height: 30px; " class="coin">
              </td>
              <td v-if="getpriceLength(color.id) == 0" rowspan="3"></td>
              <td v-if="getpriceLength(color.id) == 0" rowspan="3"></td>
            </tr>
            <tr v-if="index==2" @click="listToggle(color.id)">
              <td>{{ color.nameJp }}</td>
              <td v-if="getpriceLength(color.id) == 2" rowspan="2">{{getprice(color.id)[1].price }}</td>
              <td v-if="getpriceLength(color.id) == 2" rowspan="2">
                {{getcurrencyNmKr(getprice(color.id)[1].currencyId)}}
                <img :src="getSrcIcon(getcurrencyIcon(getprice(color.id)[1].currencyId))"
                  style="width:30px ; height: 30px;" class="coin">
              </td>
            </tr>
            <tr v-if=" index==3" @click="listToggle(color.id)" class="border-bottom border-dark">
              <td>{{color.nameKr}}</td>
            </tr>
            <tr v-if="index==4" v-show="toggleOpen(color.id) ? true : false" class="table-light">

              <td colspan="10" style="padding-left: 3%;">

                <table class="table secondList">
                  <tr>
                    <td :colspan="getSellNpcLength(color.id)" class="secondListTh">
                      <div style="display:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </div>판매 NPC

                    </td>
                    <td :colspan="getSellNpcLength(color.id)" class="secondListTh">
                      <div style="display:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      위치
                    </td>
                    <td class="secondListTh">가격</td>
                    <td class="secondListTh">화폐</td>
                  </tr>

                  <template v-for=" index in getSellNpcLength(color.id)" :key="index">
                    <tr>
                      <td :rowspan="getSellNpcIdsLength((getSellNpc(color.id))[index - 1].id)" class="secondListTd"
                        :colspan="getSellNpcLength(color.id)">
                        {{(getSellNpc(color.id))[index-1].nameJp }}
                      </td>
                      <td class="secondListTd" :rowspan="getSellNpcIdsLength((getSellNpc(color.id))[index - 1].id)"
                        :colspan="getSellNpcLength(color.id)">
                        {{(getSellNpc(color.id))[index-1].locationJp }}
                      </td>
                      <td class="secondListTd">
                        {{ getpriceById(getSellNpcIds((getSellNpc(color.id))[index - 1].id)[0])[0].price}}<br>
                        {{ getpriceById(getSellNpcIds((getSellNpc(color.id))[index - 1].id)[0])[0].restriced ==
                        "true"?"(조건부)" : "" }}
                      </td>
                      <td class="secondListTd">
                        {{getcurrencyNmKr(getpriceById(getSellNpcIds((getSellNpc(color.id))[index-1].id)[0])[0].currencyId)}}
                        <img
                          :src="getSrcIcon(getcurrencyIcon(getpriceById(getSellNpcIds((getSellNpc(color.id))[index-1].id)[0])[0].currencyId))"
                          style="width:30px ; height: 30px;" class="coin">
                      </td>
                    </tr>
                    <tr v-if=" getSellNpcIdsLength((getSellNpc(color.id))[index - 1].id)==2">
                      <td class="secondListTd">
                        {{ getpriceById(getSellNpcIds((getSellNpc(color.id))[index - 1].id)[1])[0].price}}<br>
                        {{ getpriceById(getSellNpcIds((getSellNpc(color.id))[index - 1].id)[1])[0].restriced ==
                        "true"?"(조건부)" : "" }}
                      </td>
                      <td class="secondListTd">
                        {{
                        getcurrencyNmKr(getpriceById(getSellNpcIds((getSellNpc(color.id))[index-1].id)[1])[0].currencyId)}}
                        <img
                          :src="getSrcIcon(getcurrencyIcon(getpriceById(getSellNpcIds((getSellNpc(color.id))[index-1].id)[1])[0].currencyId))"
                          style="width:30px ; height: 30px;" class="coin">
                      </td>
                    </tr>
                  </template>
                </table>
              </td>
            </tr>
          </template>
        </template>
      </tbody>

    </table>



    <!--

    <table class=" table table-bordered">
      <colgroup>
        <col style="width: 3%">
        <col style="width: 6%">
        <col style="width: 100px">
        <col style="width: ">
        <col style="width: 8%">
        <col style="width: 8%">
        <col style="width: 8%">
        <col style="width: 10%">
        <col style="width: 10%">
      </colgroup>
      <thead>
        <tr>
          <th>NO.</th>
          <th>아이콘</th>
          <th></th>
          <th>명칭</th>
          <th>제작</th>
          <th>거래 가능</th>
          <th>상점 판매</th>
          <th>가격</th>
          <th>화폐</th>
        </tr>
      </thead>
      <tbody>
        <tr class="firstList">
          <td rowspan="3">1</td>
          <td rowspan="3">
            <img style="width:100%"
              src="https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/4a/4a6d8277e74b6b7bc5553cbbeeee9ac543919604.png?n6.18">
          </td>
          <td rowspan="3" style="background:#e4dfd0;">
          </td>
          <td> Snow White Dye</td>
          <td rowspan="3">ㅇ</td>
          <td rowspan="3">ㅇ</td>
          <td rowspan="3">ㅇ</td>
          <td rowspan="3">261(조건부)</td>
          <td rowspan="3">길</td>
        </tr>
        <tr class="firstList">
          <td>カララント:スノウホワイト</td>
        </tr>
        <tr class="firstList">
          <td>염료 : 하얀눈색</td>
        </tr>
        <tr class="firstList">
          <td rowspan="3" class="border">2</td>
          <td rowspan="3">
            <img style="width:100%"
              src="https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/2b/2b2c7c5e38813cfd8abeb53a9468e94634ff245e.png?n6.18">
          </td>
          <td rowspan="3" style="background:#04afcd;"></td>
          <td>カララント:ターコイズブルー</td>
          <td rowspan="3">x</td>
          <td rowspan="3">ㅇ</td>
          <td rowspan="3">x</td>
          <td rowspan="3">100</td>
          <td rowspan="3">蒼天街振興券</td>
        </tr>
        <tr class="firstList">
          <td>Turquoise Blue Dye</td>
        </tr>
        <tr class="firstList">
          <td>염료 : 담청색</td>
        </tr>
        <tr class="secondSList" v-show="true">
          <td colspan="9">
            <table class="table secondList">
              <tr>
                <td rowspan="2" width="4%">
                  <div style="font-size: 30px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                    </svg>
                  </div>
                </td>
                <td colspan="3" class="secondListTh">판매 NPC</td>
                <td colspan="3" class="secondListTh">위치</td>
                <td class="secondListTh">가격</td>
                <td class="secondListTh">화폐</td>
              </tr>
              <tr>
                <td class="secondListTd" colspan="3">エニー</td>
                <td class="secondListTd" colspan="3">蒼天街<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X: 12.0 Y: 14.0</td>
                <td class="secondListTd">100</td>
                <td class="secondListTd">蒼天街振興券</td>
              </tr>
            </table>
          </td>
        </tr>


        <tr class="firstList">
          <td rowspan="3">3</td>
          <td rowspan="3">
            <img style="width:100%"
              src="https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/93/932a7604a7306e2626bcd6811eb2a828c3451f86.png?n6.18">
          </td>
          <td rowspan="3" style="background:#abb054;">
          </td>
          <td>Lime Green Dye</td>
          <td rowspan="3">x</td>
          <td rowspan="3">ㅇ</td>
          <td rowspan="3">ㅇ</td>
          <td>216(조건부)</td>
          <td>길</td>
        </tr>
        <tr class="firstList">
          <td>カララント:ライムグリーン</td>
          <td rowspan="2">1</td>
          <td rowspan="2">실프금엽화</td>
        </tr>
        <tr class="firstList">
          <td>염료 : 라임색</td>
        </tr>
      </tbody>
    </table>

    -->
    <br>

    <footer>
      <div class="card text-center">

        <div class="card-footer text-muted" style="text-align: left;">
          copyright
        </div>
      </div>
    </footer>
  </div>
  <br>
  <br>

</template>

<script>

import colorType from "./assets/colorType.json";  //1단 색깔 버튼
import colors from "./assets/colors.json";        //염색약 리스트
import price from "./assets/price.json";    //가격
import currency from "./assets/currency.json";    //통화
import npc from "./assets/npc.json";    //가격

// 불러온 JSON데이터
const colorTypeData   = colorType.color; 
const colorsData = colors.color;
const colorsDataList = colors.color;
const priceData      = price.price;
const currencyData = currency.currency;
const npcData = npc.npc;


export default {
  name: 'App',
  
  data() {
    return {
        firstLevelBtnId: 0,
        secondLevelBtnId: 0,
        selectColor: 0,
        toggleIds: [],
      searchText: "",
      selectColorCode : 0,
      secondBtnsFlag: false //두번재 버튼 리스트 전부 보이게,
      }
  },
  mounted() {
    //console.log('target', this.$refs.target);
  },
  methods: {
    firstLevelbtnClick: function (btnId) {
      this.firstLevelBtnId = btnId
      this.secondLevelBtnId = 0 
      this.searchText = ""
    },
    secondLevelBtnClick: function (id, btnType, btnId,code) {
      this.secondLevelBtnId = btnId,
      this.firstLevelBtnId = btnType,
      this.selectColor = id
      this.selectColorCode = code
      this.searchText = ""
    },
    inputClick: function () {
      this.firstLevelBtnId = 0,
        this.secondLevelBtnId = 0
    },
    listToggle: function (colorId) {

      if (this.toggleIds.includes(colorId)) {

        for (var i = 0; i < this.toggleIds.length; i++) {
          if (this.toggleIds[i] === colorId) {
            this.toggleIds.splice(i, 1);
            i--;
          }
        }

      } else {
        this.toggleIds.push(colorId)
      }

    },
    toggleOpen: function (colorId) {

      return this.toggleIds.includes(colorId);

    },
    getSrc: function (icon) {
      return require('./assets/dyeImage/' + icon + '.png');
    },
    getSrcIcon: function (icon) {
      return require('./assets/icon/' + icon + '.png');
    },
    getprice: function (dyeId) {
      return priceData.filter(price => price.dyeId == dyeId)
    },
    getpriceById: function (priceId) {
      return priceData.filter(price => price.id == priceId)
    },
    getpriceLength: function (dyeId) {
      return priceData.filter(price => price.dyeId == dyeId).length
    },
    getcurrencyNmKr: function (currencyId) {
      return currencyData.filter(currency => currency.id == currencyId)[0].nameKr
    },
    getcurrencyIcon: function (currencyId) {
      return currencyData.filter(currency => currency.id == currencyId)[0].icon
    },
    getSellNpc: function (dyeId) {

      let prices = priceData.filter(price => price.dyeId == dyeId)
      let priceIdList = prices.map((item) => { return item.id })
      let sellNpcList = new Array();

      for (var i = 0; i < npcData.length; i++) {


        if ((npcData[i].priceId).some(j => priceIdList.includes(j))) {

          sellNpcList.push(npcData[i]);
        }
      }

      return sellNpcList

    },
    getSellNpcLength: function (dyeId) {

      let prices = priceData.filter(price => price.dyeId == dyeId)
      let priceIdList = prices.map((item) => { return item.id })
      let sellNpcList = new Array();

      for (var i = 0; i < npcData.length; i++) {

        if ((npcData[i].priceId).some(i => priceIdList.includes(i))) {

          sellNpcList.push(npcData[i]);
        }
      }
      return sellNpcList.length
    },
    getSellNpcIdsLength: function (npcId) {

      let  npclist = npcData.filter(npc => npc.id == npcId)
      return npclist.map((item) => { return item.priceId })[0].length
    },
    getSellNpcIds: function (npcId) {

      let npclist = npcData.filter(npc => npc.id == npcId)
      return npclist.map((item) => { return item.priceId })[0]
    },

  }, 
  computed: {
    colorTypeData() {
      return colorTypeData.map((items) => {
        return items;
      });
    },
    //두번재 색깔 버튼
    colorsSecondBtnList() {

      let code =  colorsDataList.map((items) => {
        return items.code;
      });


      if (this.firstLevelBtnId == 0) {
        return colorsDataList.map((items) => {
          return items;
        });

      } else {

        if (this.firstLevelBtnId == 8) { //특수 염료 선택하면
          let removeDup = colorsDataList.filter((color, index) => (code.indexOf(color.code) == index)) //중복제거
          return removeDup.filter(color => color.colorType == this.firstLevelBtnId)
        }

        return colorsDataList.filter(color => color.colorType == this.firstLevelBtnId)
      }

    },
    //염료 리스트
    colorsData() {
      if (this.firstLevelBtnId == 0) {
        if (this.searchText != "") {
          let upperText = (this.searchText).toUpperCase()
          return colorsData.filter(color => ((color.nameKr).toUpperCase()).includes(upperText) || ((color.name).toUpperCase()).includes(upperText) || ((color.nameJp).toUpperCase()).includes(upperText))
        }

        return colorsData.map((items) => {
          return items;
        });
      } else if (this.secondLevelBtnId == 0) {
        return colorsData.filter(color => color.colorType == this.firstLevelBtnId)

      } else {
        let colorTypeList = colorsData.filter(color => color.colorType == this.firstLevelBtnId)

      // return colorTypeList.filter(color => color.id == this.selectColor)// id로 필터링
        return colorTypeList.filter(color => color.code == this.selectColorCode) //코드로 필터링
      }
    },
    
    priceData() {
      return priceData.map((items) => {
        return items
      })
      
    },
    currencyData() {
      return currencyData.map((items) => {
        return items
      })

    },
    npcData() {
      return npcData.map((items) => {
        return items
      })

    }
  
  }

}

console.log("colorsData",colorsData);
console.log("priceData", priceData);
console.log("currency", currencyData);




</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
  .secondListTh{
    background-color: #cbccce;
    border:solid 1px;
  }
  .secondListTd{
    border:solid 1px;
    background-color: white;
  }
  .table-bordered>:not(caption)>*>*{
    line-height: initial;
    vertical-align:middle;
  }
  .firstLevelBtnSpan{
     width:60px; 
     height:60px;
     display: inline-block;
     margin:1px;
  }
  .firstLevelBtn{
     width:100%; 
     height:100%;
     border-radius: 19px;
  }
  .secondLevelBtnSpan {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 2px;
  }
  .secondBtnList{
    background-color: whitesmoke;
    border:black solid 1px;
    border-radius: 10px;
    padding:4px ;
    
  }
  .secondLevelBtn {
    width: 100%;
    height: 100%;
    border-radius: 10px;

  }
  #firstBtn8{
    background: linear-gradient(318deg, red, orange, yellow, green, blue, indigo, violet, red);
  }



  @media (max-width: 768px) {
    .smallTable{
      
      display:none

    }
    .smallWidth>th:nth-child(4) {
        
      width: 10%
    }
    .smallWidth > th:nth-child(5){

      width:50%
    }
   .smallWidth>th:nth-child(9) {
    
        width: 15%
    }
    .smallWidth>th:nth-child(10) {
          
         width: 20%
    }

    .coin{
      display: none;
    }
    .table{
      font-size: 15px;
    }
  }
 
 
 

</style>
