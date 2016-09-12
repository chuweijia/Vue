<template>
  <div class="ask-mod" id="list">
    <ul class="select-ask-list" id="example" >
      <li v-for="item in jsondata">
        <div class="img-wrap"><img v-bind:src= "item.first_photo"></div>
        <h3 class="name">{{item.name}}</h3>
        <span class="price">{{item.dealer_price}}</span>
        <span class="gray-price"0>{{item.price_msg}}</span>
        <a href="javascript:;" class="ask-btn">问促销价</a>
      </li>
    </ul>
    
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import $ from 'jquery'
import IScroll from '../assets/js/iscroll5'
import layOutCss from '../assets/css/layout.css'
import scrollCss from '../assets/css/scroll.css'


Vue.use(VueResource)
  export default{
    el(){
     return {
       el:"#example"
     }
    },
    data(){
      return {
        flag : true,
        jsondata :[]
        // items : [
        //   {
        //     "name":"英菲尼迪QX6混合动力英菲尼迪QX6混合动力",
        //     "price":"19.99~39.99万",
        //     "grayPrice":"指导价：19.99~39.99万",
        //     "askBtn":"问促销价"
        //   },
        //   {
        //    "name":"英菲尼迪QX6混合动力英菲尼迪QX6混合动力2",
        //     "price":"19.99~39.99万2",
        //     "grayPrice":"指导价：19.99~39.99万2",
        //     "askBtn":"问促销价2"
        //   }
        // ]
      }
    },
    ready(){
       var self = this;
       var myScroll;


        this.$http.get('./static/Default.json').then((res) => { //默认加载全国的
          var returnData = res.body;
          self.jsondata = returnData;
          //this.flag = true ;//后端数据已返回完 且已加载完dom元素

        },(response) =>{
          console.log(response);
        });

        setTimeout(function(){
          console.log(123)
          myScroll = new IScroll('#wrapper', {
            bounceEasing: 'elastic', //back  elastic bounce 事件名称等..
            bounceTime: 1000,
          }); 
          myScroll.options.bounce = true ;//回弹事件 默认为true
          myScroll.on('scrollEnd', function(){
                    var wrapHeight = $("#wrapper").height();
                    var scrollHeight = $("#scroller").height();
                    var allHeight = parseInt(Math.abs(this.y)) + wrapHeight ;
                   
                    if(allHeight == scrollHeight){ //此时到底部
                        self.pullUpAction();//这里加样式
                        self.$http.get('/static/Default.json').then((res) => { //这里只是换了页数

                            var newObj = [{
                              "name": "new1",
                              "dealer_price": "19.99~39.99万",
                              "grayprice": "指导价19.99~39.99万",
                              "askprice": "问促销价"
                          },
                          {
                              "name": "new2",
                              "dealer_price": "19.99~39.99万",
                              "grayprice": "指导价19.99~39.99万",
                              "askprice": "问促销价"
                          },
                          {
                              "name": "new3",
                              "dealer_price": "19.99~39.99万",
                              "grayprice": "指导价19.99~39.99万",
                              "askprice": "问促销价"
                          }
                          ]

                          
                            for(var i in newObj){
                              self.jsondata.push(newObj[i]);
                            }   

                            setTimeout(function () {
                                myScroll.refresh();
                            }, 0);



                        },(res) =>{
                            console.log(res);
                        });

                    }

                  });




        },4000);
         




            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            //document.addEventListener('DOMContentLoaded', loaded, false); 相当于ready()事件 
        //},4000); //这个时间不可控 ..

    },
    methods:{
       pullUpAction :function() {
        //有bug  在首次触底后 再向上拉动会再次触发加载事件

        // var html;
        // $.getJSON('index.json', function (data, state) {
        //    console.log(data);
        //     if (data && state == 'success') {
        //          //本地测试，为了看到加载中效果故加上定时器
        //         setTimeout(function () {
        //             html = template('test', data);
        //              $('.select-ask-list').append(html);
        //              myScroll.refresh();
        //              console.log("我加载完成啦!!")
        //         }, 600);
        //     }
        // });
        }

    },
    InputData:function(){
      var data = []
      return 
    }






  }
</script>
