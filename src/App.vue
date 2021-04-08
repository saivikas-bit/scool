<template>
<div>
    <div class="main_body">
<app-header></app-header>
<main>
    <layout-startup></layout-startup>
    <!-- <layout-row></layout-row> -->
    <layout-row2></layout-row2>
    <layout-row3></layout-row3>
    <teacher-review></teacher-review>
    <layout-banners></layout-banners>
    <!-- <container-video></container-video> -->
    <related-mentors></related-mentors>
</main>

</div>
<app-footer></app-footer>
</div>

    
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// import LayoutRow from './components/layout/LayoutRow.vue'
import LayoutBanners from './components/layout/LayoutBanners.vue'
// import ContainerVideo from './components/layout/ContainerVideo.vue'
import RelatedMentors from './components/layout/RelatedMentors'
import AppFooter from './components/AppFooter.vue'
import LayoutStartup from './components/layout/components/Row1/LayoutStartup'
import LayoutRow2 from './components/layout/components/row2/LayoutRow2'
import LayoutRow3 from './components/layout/components/row3/LayoutRow3'
import TeacherReview from './components/layout/components/Reviews/TeacherReview.vue'

export default {
    components:{
        AppHeader,
        // LayoutRow,
        LayoutBanners,
        // ContainerVideo,
        RelatedMentors,
        AppFooter,
        LayoutStartup,
        LayoutRow2,
        LayoutRow3,
        TeacherReview
    },
    data(){
        return{

        }
    }
    
}
</script>


<style>
.main_body{
    padding-left: 5%;
   
}
iframe{
    border-radius: 12px;
}
@media screen and (max-width: 599px) {
    
.main_body{
    padding: 0 1rem;
}
}

</style>