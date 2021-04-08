<template>
  <div class="layout">
    <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-30 md-xsmall-size-100">
     <key-takes></key-takes>
     <!-- dd -->
    </div>
    <div class="md-layout-item md-xsmall-size-100">
      <course-overview></course-overview>
    </div>
  </div>

</div>
</template>

<script>
import KeyTakes from './KeyTake.vue'
import CourseOverview from './CourseOverview.vue'

export default {
components:{
  KeyTakes,
  CourseOverview
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
  padding: 0 2%;
  padding-bottom: 1%;
}


@media screen and (max-width: 599px) {
 

}
</style>