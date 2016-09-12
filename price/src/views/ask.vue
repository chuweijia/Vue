<template>
 
  <header-component></header-component>
  
  <div class="content" id="wrapper">
  <div id="scroller">
      <selector-component></selector-component>
      
      <list-component></list-component>
      
    </div>
  </div>

  <slider-component></slider-component>


</template>
<!-- <template>
  <my-component></my-component>
</template> -->



<script>
   import Vue from 'Vue'
   import HeaderComponent from '../components/header.vue'
   import SelectorComponent from '../components/selector.vue'
   import ListComponent from '../components/list.vue'
   import SliderComponent from '../components/slider.vue'
   export default {
    el(){
      return {
        el:'body'
      }
    },
    components: {
           Vue,
           HeaderComponent,
           SelectorComponent,
           ListComponent,
           SliderComponent
      }
   }
  




//   Vue.component('child-component', {
//   // this does work, because we are in the right scope
//   template: '<div v-show="someChildProperty">Child</div>',
//   data: function () {
//     return {
//       someChildProperty: true
//     }
//   }
// })




</script>
