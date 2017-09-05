<template>
  <div class="allD">
        <order></order>
  </div>
</template>

<script>
import order from './components/order.vue'
export default {
        components:{
            order
        }
}
</script>

<style>
        *{margin: 0;padding: 0;}
        ul li{list-style: none;}
        body{background: #eff0f4;}
        a{text-decoration: none;}
        .allD{margin: 0 auto;}
</style>
