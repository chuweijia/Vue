<template>
  <!-- 头部 S -->
  <header><span>询价成功</span>
    <div class="return-box"><a v-link="{ name: 'submit', params : { id: list.id }}" class="back">返回</a></div>
  </header>
  <!-- 头部 E -->
  <div class="content">
    <div class="success-box">
      <span class="txt">提交成功！</span><br>
      当地经销商会尽快与你联系
    </div>
    <div class="compare-txt">你可能关注</div>
    <div class="ask-success-mode">
      <div class="ask-mod">
        <ul class="select-ask-list">
          <li>
            <div class="img-wrap"><img src="http://img2.xcarimg.com/PicLib/s/s7351_420.jpg" alt=""></div>
            <h3 class="name">英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
            <span class="price">19.99~39.99万</span>
            <span class="gray-price">指导价：19.99~39.99万</span>
            <a href="javascript:;" class="ask-btn">一键询价</a>
          </li>
          <li>
            <div class="img-wrap"><img src="http://img2.xcarimg.com/PicLib/s/s7351_420.jpg" alt=""></div>
            <h3 class="name">英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
            <span class="price">19.99~39.99万</span>
            <span class="gray-price">指导价：19.99~39.99万</span>
            <a href="javascript:;" class="ask-btn">一键询价</a>
          </li>
          <li>
            <div class="img-wrap"><img src="http://img2.xcarimg.com/PicLib/s/s7351_420.jpg" alt=""></div>
            <h3 class="name">英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
            <span class="price">19.99~39.99万</span>
            <span class="gray-price">指导价：19.99~39.99万</span>
            <a href="javascript:;" class="ask-btn">一键询价</a>
          </li>
          <li>
            <div class="img-wrap"><img src="http://img2.xcarimg.com/PicLib/s/s7351_420.jpg" alt=""></div>
            <h3 class="name">英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
            <span class="price">19.99~39.99万</span>
            <span class="gray-price">指导价：19.99~39.99万</span>
            <a href="javascript:;" class="ask-btn">一键询价</a>
          </li>
          <li>
            <div class="img-wrap"><img src="http://img2.xcarimg.com/PicLib/s/s7351_420.jpg" alt=""></div>
            <h3 class="name">英菲尼迪QX6混合动力英菲尼迪QX6混合动力</h3>
            <span class="price">19.99~39.99万</span>
            <span class="gray-price">指导价：19.99~39.99万</span>
            <a href="javascript:;" class="ask-btn">一键询价</a>
          </li>
        </ul>
      </div>
      <div class="back-bt"><a href="javascript:" class="btn">返回选车页</a></div>
    </div>
    <!-- 当页面无内容，只有一个loading时添加类名 .ld-space -->
    <div class="loading"><i class="ico"></i><em>Loading...</em></div>
    <!-- 加载失败 S -->
    <div class="loading-fail ld-space">
      <a href="javascript:" class="ld-wrap">
        <i class="ico"></i>
        <strong>加载失败</strong>
        <span>点击重新加载</span>
      </a>
    </div>
  </div>
  <!-- 加载失败 E -->
</template>
<script>
  import Vue from 'vue'
  export default{
    data(){
      return {}
    },
    components: {}
  }
</script>
