<template>
  <!-- 头部 S -->
  <header><span>询价促销</span><div class="return-box"><a v-link="{ name: 'index'}" class="back">返回</a></div></header>
  <!-- 头部 E -->
  <div class="content">
    <div class="list-wrap">
      <h3 class="title">英菲尼迪QX6混合动力英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
      <!-- 表单区 S -->
      <div class="form-wrap">
        <form action="">
          <ul class="inp-mode">
            <li>
              <div class="outside select-inp">2014款经典全顺 柴油 加长轴 侯2014款经典全顺 柴油 加长轴 侯</div>
            </li>
            <li>
              <!-- 选择完成后，请去年.gray这个类名，字的颜色会变成黑色 -->
              <div class="outside select-inp gray">请选上牌城市</div>
              <div class="error">请选择上牌城市</div>
            </li>



            <li>
              <div class="outside inner"><input type="text" placeholder="填写姓名（最多四字）"><i class="ico"></i></div>
              <div class="error">请填写姓名</div>
            </li>
            <li>
              <div class="outside inner"><input type="text" placeholder="请输入手机号"><i class="ico"></i></div>
              <div class="error">请输入手机号</div>
            </li>



            <li>
              <input v-link="{ name: 'success'}" type="submit" class="btn" value="确认提交">
            </li>
          </ul>
        </form>




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
    </ul>
    <!-- 列表 E -->
    <div class="loading"><i class="ico"></i><em>Loading...</em></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import vueValidator from 'vue-validator'
  document.addEventListener('DOMContentLoaded', loaded, false); 
  function loaded(){
    console.log(123)
    console.log(vueValidator)
  } 
  
    export default{
        data(){
            return{
            }
        },
        components:{


        }
    }
</script>
