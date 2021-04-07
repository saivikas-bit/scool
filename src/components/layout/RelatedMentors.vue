<template>

<div class="layout">
    <div class="title">
        Related Mentors
    </div>
    <div class="container">
        <mentor-card :image="link1" name="Deepak Shapeti" qualification="Obsessive Serial Entrepreneur" ></mentor-card>
        <mentor-card :image="link2" name="Danish Sheikh" qualification="Charisma Coach" ></mentor-card>
        <mentor-card :image="link3" name="Lavanyaa Dar" qualification="Beauty Entrepreneur" ></mentor-card>
        <mentor-card :image="link4" name="Lavanyaa Dar" qualification="Beauty Entrepreneur" ></mentor-card>
    </div>

</div>
  
</template>

<script>
import MentorCard from './MentorCard.vue'
export default {
    components:{
        MentorCard
    },
    data(){
        return{
            link1:"https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg",
            link2:"https://image.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg"
            ,link3:"https://st2.depositphotos.com/1662991/8837/i/600/depositphotos_88370500-stock-photo-mechanic-wearing-overalls.jpg",
            link4:"https://api.time.com/wp-content/uploads/2019/12/time-person-of-the-year-kamala-harris-portrait.jpg"
        }
    }

}
</script>

<style scoped>
.container{
    margin-top: 6%;
    display: flex;
}
.layout{
    padding: 2% 8%;
    margin-top: 5%;
}
.title{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
}
</style>