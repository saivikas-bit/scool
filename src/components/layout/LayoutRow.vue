<template>
<div class="layout">
    <div class="md-layout md-gutter">
    <div class="md-layout-item">
        <brand-card></brand-card>
    </div>
    <div class="md-layout-item md-size-35">
        <book-session></book-session>
    </div>
  </div>

</div>

  
</template>

<script>
import BrandCard from './BrandCard.vue'
import BookSession from './BookSession.vue'
export default {
    components:{
        BrandCard,
        BookSession
    }

}
</script>

<style scoped>
.md-layout-item{
    /* border: 2px solid red; */
    margin: 3px;
}
.layout{
    padding: 0 10%;
}
    


</style>