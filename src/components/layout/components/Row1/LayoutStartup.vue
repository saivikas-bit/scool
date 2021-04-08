<template>
<div class="layout">
    <div class="md-layout md-gutter">
    <div class="md-layout-item md-xsmall-size-100">
      <layout-startup></layout-startup>
      <breif-desc></breif-desc>
    </div>
    <div class="md-layout-item md-size-35 md-xsmall-size-100">
      <startup-profile></startup-profile>
      
    </div>
  </div>

</div>

  
</template>

<script>
import LayoutStartup from './Startupcard.vue'
import StartupProfile from './ProfileCard'
import BreifDesc from './BreifDesc'
export default {
  components:{
    LayoutStartup,
    StartupProfile,
    BreifDesc
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
  padding: 3% 2%;
}

</style>