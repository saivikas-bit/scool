<template>
<div>
    <div class="main_body">
<app-header></app-header>
<main>
    <layout-row></layout-row>
    <layout-banners></layout-banners>
    <container-video></container-video>
    <related-mentors></related-mentors>
</main>

</div>
<app-footer></app-footer>
</div>

    
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LayoutRow from './components/layout/LayoutRow.vue'
import LayoutBanners from './components/layout/LayoutBanners.vue'
import ContainerVideo from './components/layout/ContainerVideo.vue'
import RelatedMentors from './components/layout/RelatedMentors'
import AppFooter from './components/AppFooter.vue'


export default {
    components:{
        AppHeader,
        LayoutRow,
        LayoutBanners,
        ContainerVideo,
        RelatedMentors,
        AppFooter
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

</style>