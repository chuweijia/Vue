<template>
  <!-- 分类 S -->
  <ul class="select-cars-type row">
    <li><a @click="showPro" class="item">城市</a><i class="line"></i></li>
    <li><a href="javascript:;" class="item">品牌</a><i class="line"></i></li>
    <li><a href="javascript:;" class="item">级别</a><i class="line"></i></li>
    <li><a href="javascript:;" class="item">价格</a></li>
  </ul>
  <!-- 分类 E -->
  <!-- 标签 S -->
  <div class="tags-mode">
    <div class="tag-group row">
      <ul>
        <li><span>5万-10万<i class="ico"></i></span></li>
        <li><span>50万以上<i class="ico"></i></span></li>
        <li><span>MPV商务<i class="ico"></i></span></li>
        <li><span>5万-10万<i class="ico"></i></span></li>
        <li><span>5万-10万<i class="ico"></i></span></li>
        <li><span>5万-10万<i class="ico"></i></span></li>
      </ul>
    </div>
    <!-- 默认类名为 .show  收起状态时添加类名 .hide -->
    <div class="show hide"><a href="javascript:;">收起</a></div>
  </div>
  <!-- 标签 E -->
</template>
<script>
  import Vue from 'vue'
  import $ from 'jquery'
  import IScroll from '../../dist/lib/js/iscroll'
  export default{
    methods : {
      showPro : function () {
        $("body").height(Tools.winHeight);
        $("#layer").fadeIn(400);
        $("#drawer").css({
          "top": $("body").scrollTop(),
          "height": $(window).height(),
          "display": "block"
        }).animate({
          "left": "30%"
        }, 400, function (e) {
          var maxScroll = $("#box").height() - Tools.winHeight;
          $("#box dl").each(function () {
            $(this).attr("scroll",$(this).get(0).offsetTop > maxScroll ? maxScroll : $(this).get(0).offsetTop);
          });
          Tools.myScroll = new IScroll("#wrapper", {
            mouseWheelSpeed: 20000,
            onScrollMove: function () {
              if ((this.y < this.maxScrollY) && (this.pointY < 1)) {
                this.scrollTo(0, this.maxScrollY, 400);
                return false;
              } else if (this.y > 0 && (this.pointY > window.innerHeight - 1)) {
                this.scrollTo(0, 0, 400);
                return false;
              }
            }
          });
          document.body.addEventListener('touchmove',Tools.prevent, false);
        });
      }
    },
    data () {
      return {}
    }
  }
</script>
