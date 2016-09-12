<template>
  <!-- 头部 S -->
  <header><span>询价促销</span><div class="return-box"><a v-link="{ name: 'index'}" class="back">返回</a></div></header>
  <!-- 头部 E -->
  <div class="content">
    <div class="list-wrap">
      <h3 class="title">英菲尼迪QX6混合动力英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
      <!-- 表单区 S -->
      <div class="form-wrap" id="myform">
        <validator name="validation">
        <form novalidate @submit.prevent="onSubmit">
        <!-- submit属性只能添加在 form处 -->

          <ul class="inp-mode">
            <li>
              <div class="outside select-inp" id="usercar2">
                <input type="text" placeholder="有个默认城市" id="usercar">
              </div>
            </li>
            <li>
              <div class="outside select-inp gray" id="usercity2" >
              <input type="text" placeholder="请选择上牌城市" id="usercity" v-validate:usercity="['cityNull']"></div>
              <div class="error" v-if="$validation.usercity.cityNull">{{$validation.usercity.cityNull}}</div>
            </li>



          <li>
              <div class="outside inner">
                <input  type="text"  placeholder="请填写姓名" id="username" v-validate:username="['userNull','userLegal']"  maxlength= "4" 
                detect-blur="off" detect-change="off" initial="off" @touched = "onBlur"
                ><i class="ico"  v-on:click="resetUser"></i>
                </div>
                
                <div class="error" v-if="$validation.username.userNull">{{$validation.username.userNull}}</div>
                <div class="error" v-if="$validation.username.userLegal">{{$validation.username.userLegal}}</div>

          </li>

            <li>
              <div class="outside inner">
              <input type="text" placeholder="请输入手机号" id="userphone"  v-validate:userphone="['phoneNull','phoneLegal']"  maxlength= "11"  detect-blur="off" detect-change="off" initial="off"><i class="ico"v-on:click="resetPhone"></i>
              </div>

               <div class="error" v-if="$validation.userphone.phoneNull">{{$validation.userphone.phoneNull}}</div>
                <div class="error" v-if="$validation.userphone.phoneLegal">{{$validation.userphone.phoneLegal}}</div>
            </li>

            <li>
                
              <!-- <input type="hidden" id="usercity" v-validate:usercity="['cityNull']"> -->

              <input type="hidden" id="userselect" v-validate:userselect="['selectLegal']">

              <input  type="submit" class="btn" value="确认提交" >
            </li>
          </ul>
        </form>
      </validator>
        <div class="tips">爱卡汽车会严格遵守<a href="javascript:" class="blue-txt">《用户服务协议》</a>和<a href="javascript:" class="blue-txt">《隐私权声明》</a>保证您的信息安全。</div>
      </div>
      <!-- 表单区 E -->
    </div>
    <div class="compare-txt">获取更多报价，对比最低价</div>
    <!-- 列表 S -->
    <ul class="dealer-wrap" >
      <!-- <li :class="{'cur':test($index)}" @click="choose($index)" v-for="item in jsondata">
        <h3 class="name">{{item.coaname}}<i class="ico"></i></h3>
        <p class="address">{{item.address}}</p>
      </li> -->


      <li @click="choose2($index)" v-for="item in jsondata">
        <h3 class="name">{{item.coaname}}<i class="ico"></i></h3>
        <p class="address">{{item.address}}</p>
      </li>
      
      
    </ul>
    <!-- 列表 E -->
    <div class="loading"><i class="ico"></i><em>Loading...</em></div>
  </div>
</template>
<script>

  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import VueValidator from 'vue-validator'
  import $ from 'jquery'
  // Vue.validator('unam', {  //我这样写会报错 ..貌似写法不支持
  //   message: function (field) { // error message with function
  //     return '用户名格式错误'
  //   },
  //   //check: Vue.validator('required') // re-use validator logic
  //   check:function(val){
  //     return /^[A-Za-z]+$/.test(val);
  //   }
  // })
  Vue.use(VueResource);
  Vue.use(VueValidator);
  Vue.use($);
    export default{
        data(){
            return{
              el:"#myform",
              blur:'',
              jsondata :[],
              isT:false,
              arr:[],
              ind2:'',
              index2:'',
              flag:false,
              dealers:[]
            }

        },
        ready(){
           var self = this;
          //渲染-前一页车系对应的车型列表
          //渲染-默认渲染上一步结果中的第一项
          $('#usercar')[0].value = '2014款经典全顺 柴油 加长轴 侯2014款经典全顺 柴油 加长轴 侯';


          //经销商列表渲染
          this.$http.get('./static/Dealer.json').then((res) => { //默认加载全国的
                  var returnData = res.body.result.list;
                  self.jsondata = returnData;
                  
                  
                },(response) =>{
                  console.log(response);
                });


          //this.$http.get('a.php',params{ 'a' : 1, 'bb' :1}).then
          //经销商点击事件 前台样式

          //self.isT = true;
          //经销商点击事件 后台存取数据
          //$('#userselect').value = self.dealers; //choose方法里面获取的 

         //console.log($('#userselect').val())


        },
        validators:{

          userLegal:{
            message:'用户名格式错误',
            check:function(val){
              //console.log(this.touched)
              
              // if(!this.touched){ //不失焦时候

              //     var regName = /^[A-Za-z]+$/;
              //     if(!(val== "") && !regName.test(val)){
              //       console.log("非空+格式错误");
              //       return false;
              //     }
              //     else if(val== ""){ //必须加限制
              //       return true;
              //     }
              // }
              // else if(this.touched){
              //   return true;
              // }

            if(!(val=="")){//不为空时进行合法判断
                  // console.log("1")
                  // console.log(this.touched)//正常显示.
                  // if(this.touched){//失焦时
                  //   console.log("2")
                  //   return true;
                  // }
                  // else if(!this.touched){//非失焦 即提交时
                  //   var regName = /^[A-Za-z]+$/;
                  //   if(regName.test(val)){//合法时
                  //      console.log("3")
                  //     return true;
                  //   }
                  //   else if(!regName.test(val)){//不合法时
                      
                  //     return false;
                  //   }


                  // }
                  var regName = /^[A-Za-z]+$/;
                  if(regName.test(val)){//合法时
                       console.log("3")
                      return true;
                    }
                  else if(!regName.test(val)){//不合法时
                      
                      return false;
                    }

            }

            else if(val==""){//为空直接什么也不显示
              return true;
            }

            }
          },
          userNull:{
            message:'用户名不能为空',
            check:Vue.validator('required') 
          },
          cityNull:{
            message:'请选择上牌城市哦',
            check:Vue.validator('required') 
          },
          phoneLegal:{
            message:"手机号输入有误",
            check:function(val){
              if(!(val=="")){
                    var regPhone = /^(?!13800138000)(?!13901234567)(?!13201571188)1[38]\d{9}$|^15[012356789]{1}\d{8}$|^17[03678]{1}[0-9]{8}$|^14[57]{1}[0-9]{8}$/;
                    if(regPhone.test(val)){
                        return true;
                      }
                    else if(!regPhone.test(val)){
                        return false;
                      }

              }
              else if(val==""){
                return true;
              }
            }
          },

          phoneNull:{
            message:'请填写手机号',
            check:Vue.validator('required') 
          },
          selectLegal:{
            message:'至少选中一项',
            check:Vue.validator('required') //即传入userselect的值不为空
          }
        },
        methods:{
          // onBlur:function(){
          //   console.log("我失去焦点了");
          //   this.blur = 'blur';

          // },
          // test:function(ind){ //获取bool值 去显示

          //   console.log(ind);
          //   if(ind == this.index2){
          //     return true;
          //   }

          // },
          // choose:function(index){ //只会写单选啊..哭哭
          //   this.flag = true;

          //   //console.log(index)
          //   this.index2 = index;
          //   //console.log(this.index2);
          //   this.test(index);
          //   //console.log("index"+this.index2+"");

            
          // },
        choose2:function(index){
          var dealerLis = $('.dealer-wrap').find('li');
          $(dealerLis[index]).toggleClass('cur');
          //console.log($(dealerLis).hasClass('cur'))
          var self = this;
          var array = [];
          $.each($(dealerLis),function(index, el) {//这函数放这里不太好吧 每次点击都会查询一次
            if($(el).hasClass('cur')){ //筛选目标元素的目标属性 假设是名字
              //self.dealers.push($(el).find('h3').text());
              array.push($(el).find('h3').text());

            }
          });
          self.dealers = array;//局部变量给全局变量
         // console.log(self.dealers)
          $('#userselect').val(self.dealers)
          console.log( $('#userselect').val());

        },
          resetUser:function(){
            //alert(1)
            $('#username')[0].value = '';
          },
          resetPhone:function(){
            $('#userphone')[0].value = '';
          },
          onBlur:function(e){
            console.log("我在失焦！！")
            //e.stopPropagation();
            //console.log(this.$validation)
            //console.log(this.$validation.touched)
          },
          onSubmit:function(e){

            var self = this;
            //e.stopPropagation();

            self.$validate(['usercity','username','userphone','userselect'],false, function () { //只能一个验证器被重写一次。

              if (self.$validation.invalid) {
                console.log("前端验证未通过！！")
                e.preventDefault()
              }
              else if(self.$validation.valid){
                console.log("前端验证通过！！")
                this.$http
              }


            });
            //self.$validation.touched  = false;
            // console.log("55555");
            // console.log(this.$validation)
            // console.log(this.$validation.touched)
          }

        }
    }
</script>
