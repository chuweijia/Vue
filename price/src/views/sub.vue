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
              <div class="outside select-inp" id="usercar2">2014款经典全顺 柴油 加长轴 侯2014款经典全顺 柴油 加长轴 侯</div>
            </li>
            <li>
              <!-- 选择完成后，请去年.gray这个类名，字的颜色会变成黑色 -->
              <div class="outside select-inp gray" id="usercity2">请选上牌城市</div>
              <div class="error">请选择上牌城市</div>
            </li>
           
  

        
        <!-- <div id="appp">
          <validator name="validation">
            <form novalidate>
              ID: <input type="text" id="chu" v-validate:chu="{required:{rule:true,message:'Can not be Null!!'},minlength:2,maxlength:6}"><br />
              <div>
                <span v-if="$validation.chu.required"> too short.</span>
              </div>
            </form>
          </validator>
        </div> -->

          


           <!--  <div class="username">
                <label for="username">username:</label>
                <input id="username" type="text" v-validate:username="{
                  maxlength: 256
                }">
                <span v-if="$validation.username.maxlength">{{ $validation.username.maxlength}}</span>
            </div>
 -->


          <li>
              <div class="outside inner">

                <input  type="text"  placeholder="请填写姓名" id="username" v-validate:username="{
                  required:{rule:true,message:'must be'}
                } "  @touched="onBlur" maxlength= "4" v-on:click = "onChu">
                </div>
                <!-- 当有值时 div.error为display为none -->
             <!--  <div class="error" v-if="$validation.username.required">{{unamMsg}}</div> -->
                <div class="error">{{unamMsg}}</div>
              <!-- <div class="error" v-if="unameError">{{unameErrorMsg}}</div> -->


          </li>

            <li>
              <div class="outside inner">
              <input type="text" placeholder="请输入手机号" id="userphone"  v-validate:userphone="{
                  required:{rule:true,message:'must be'}
                } "@touched="onBlur" maxlength= "11" ><i class="ico"></i>
              </div>


              <div class="error">{{phoneMsg}}</div>
              <!-- <div class="error" v-show="unameError">{{phoneErrorMsg}}</div> -->

            </li>
            <li>

             <!--  <input type="hidden" id="usercar" v-validate:usercar="{
                  required:{rule:true,message:'must be'}
                } ">
              <input type="hidden" id="usercity" v-validate:usercity="{
                  required:{rule:true,message:'must be'}
                } ">
              <input type="hidden" id="userselect" v-validate:userselect="{
                  required:{rule:true,message:'must be'}
                } "> -->
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
    <ul class="dealer-wrap">
      <li class="cur">
        <h3 class="name">北京华通汽车有限公司<i class="ico"></i></h3>
        <p class="address">地址：北京市朝阳区十八里店乡十八里店乡十北京市朝阳区十八里店乡十八里店乡十</p>
      </li>
      <li class="cur">
        <h3 class="name">北京华通汽车有限公司<i class="ico"></i></h3>
        <p class="address">地址：北京市朝阳区十八里店乡十八里店乡十北京市朝阳区十八里店乡十八里店乡十</p>
      </li>
      <li>
        <h3 class="name">北京华通汽车有限公司<i class="ico"></i></h3>
        <p class="address">地址：北京市朝阳区十八里店乡十八里店乡十北京市朝阳区十八里店乡十八里店乡十</p>
      </li>
      <li class="cur">
        <h3 class="name">北京华通汽车有限公司<i class="ico"></i></h3>
        <p class="address">地址：北京市朝阳区十八里店乡十八里店乡十北京市朝阳区十八里店乡十八里店乡十</p>
      </li>
      <li>
        <h3 class="name">北京华通汽车有限公司<i class="ico"></i></h3>
        <p class="address">地址：北京市朝阳区十八里店乡十八里店乡十北京市朝阳区十八里店乡十八里店乡十</p>
      </li>
    </ul>
    <!-- 列表 E -->
    <div class="loading"><i class="ico"></i><em>Loading...</em></div>
  </div>
</template>
<script>

  import Vue from 'vue'
  //import router from './router'
  import VueValidator from 'vue-validator'
  import $ from 'jquery'
  Vue.use(VueValidator)
    export default{
        data(){
            return{
              el:"#myform",
              rules: {
                minlength: 3,
                maxlength: 5
              },
              unamMsg: '',//失焦点 判空
              phoneMsg:'',
              dis:false,
              unameError:false,
              unameErrorMsg:'',


              
                fcar:'',
                fcity:'',
                fname:'',
                fphone:''

            


            }

        },
        components:{
        },
        ready(){
          //奇葩的数据们

          //this.fcar = $('#usercar').text()
          //console.log($('#usercity').hasClass('gray'))

          console.log($('input[type = hidden]'))
           //console.log(this.$validation.username.pattern)//这特么始终为true 我还怎么判断
        },
        methods:{
           onBlur: function (e) { //失焦判空
            var target = e.target;
            var targetid = target.id;
            var len = target.value.split('').length;
              if( len == 0){
                switch (targetid){
                  case 'username':
                    this.unamMsg = '请填写姓名';
                    return false;
                  case 'userphone':
                    this.phoneMsg = '请填写手机号';
                    return false;

              }
                //this.blurmsg = '请填写姓名'//应该写v-if 返回bool值去 不该操作dom
            }
          },
          onChu:function(){
            console.log("come on")
          },
          // onChange:function(e){//失焦触发 这什么鸟事件
          //     console.log(e.target.value)
          //     //alert("change")
          // }
          
          // onKeyUp:function(e){
          //   //1.不该仅仅是键盘事件 应该实时获取
          //   //2.禁用后 无法回退 难道不该禁用？？
          //   var target = e.target;
          //   var len = target.value.split('').length;
          //   console.log(len)
          //   if( len>4||len==4 ){
          //     this.dis = true;
          //   }
          // },
          onClick:function(e){
            var unam = $("#username").val();
            var regName = /^[A-Za-z]+$/
            var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;   
            var tel = /^\d{3,4}-?\d{7,9}$/;  
            console.log("正则"+regName.test(unam))//true

          },
          onSubmit:function(e){
            var that = this;
            console.log(that.$validation.valid)
            // var self = this;
            // if(self.$validation.invalid) {
            //    self.formIsInvalid = true;
            // }
            // else{
            //   self.formIsInvalid = false;
            //   // form is valid so continue on...
            // }
            //  console.log("formIsInvalid"+self.formIsInvalid)



            var nodes = e.target.childNodes; //不想直接取dom操作 ..
            var arr = Array.prototype.slice.call(nodes,0);
            var ul = arr[3];//取出来表单数据
            var mylis = $(ul).find('li').not('li:last');//取得除了最后一个元素

            $(mylis).each(function(index, el) {
              var my = $( $(this).find('div:first')[0]).children().val();//第一次是uname 第二次是phone值
              var regName = /^[A-Za-z]+$/;
              //var regPhone = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/; 
              //var regName = /[^a-zA-Z0-9\x{4E00}-\x{9FA5}\-_]/u;
              var regPhone = /^(?!13800138000)(?!13901234567)(?!13201571188)1[38]\d{9}$|^15[012356789]{1}\d{8}$|^17[03678]{1}[0-9]{8}$|^14[57]{1}[0-9]{8}$/;
                if(index == 0){
                    if(!regName.test(my) && my == ""){//对名字进行语法判断 空+提交
                      //其实可以写不可为空的正则..我不会呀
                       that.unamMsg = "请填写姓名(空+提交)"
                    }
                    else if(!regName.test(my)){ // 这样
                       that.unamMsg = "请认真填写姓名哦"
                       that.$validation.valid = false;
                    }
                    that.fname = my ;
                } 
                else if(index == 1){//对手机号进行语法判断
                    if(!regPhone.test(my) && my == ""){//对手机进行语法判断 空+提交
                       that.phoneMsg = '请填写手机号(空+提交)'
                    }
                    else if(!regPhone.test(my)){
                       that.phoneMsg = "手机号输入有误"
                       //that.$validation.valid = false;
                    }
                    that.fphone = my;
                }

            });


            if(that.$validation.valid){ //为true时 可以提交 且最后定格的是最后一次更改的样子

              console.log("最终被打包好的FromData是")
              console.log(that.fname + that.fphone)
            }



            // var regName = /^[A-Za-z]+$/;
            // var regPhone = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
            // var v = regName.test($("#username").val());
            // var v2 = regPhone.test($("#userphone").val());


            //console.log(!regName.test($("#username").val()));//true   true
            //console.log($("#username").val() != "" );//false     true
           // console.log(!regName.test($("#username").val())  && $("#username").val() != "" ) //false

            //  if(!regName.test($("#username").val())  && $("#username").val() != "" ){
            //   console.log(1)
            //    this.unamMsg = "请认真填写姓名"; 
            // }


            // else if(!regPhone.test($("#userphone").val())){
            //   this.phoneMsg = "手机号输入有误";
            // }


            // else if($("#userphone").val().split('').length == 0){
            //   this.unamMsg = "请填写姓名"; 
            // }
            // else if($("#userphone").val().split('').length == 0){
            //   this.phoneMsg = "请输入手机号";
            // }


            // else if(!regName.test($("#username").val())){
            //   this.unamMsg = "请填写姓名"; 
            // }


            // else{
            //   console.log("验证信息全部正确 可以提交了")
            // }

          }

        }
    }
</script>
