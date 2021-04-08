<template>
<div class="layout">
    <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-55 md-xsmall-size-100">
    <container-video></container-video>
    </div>
    <div class="md-layout-item md-size-35 md-xsmall-size-100">
        <emc-card></emc-card>
    </div>
  </div>
</div>
  
</template>

<script>
import ContainerVideo from '../../ContainerVideo.vue'
import EmcCard from './EmcCard.vue'
export default {
components:{
    ContainerVideo,
    EmcCard
}
}
</script>

<style scoped>
.md-layout-item{
    /* border: 2px solid red; */
    padding: 0;
    /* margin-right: ; */
}
.layout{
  padding: 0% 1%;
  padding-bottom: 1%;
  margin-top: 1rem;
}

</style>