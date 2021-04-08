<template>
<div class="layout">
    <div class="title">
    Upcoming Experiential Micro-Course
</div>
<div class="images-container">
    <div class="images">
        <img src="https://www.visme.co/wp-content/uploads/2020/09/facebook-cover-page-header2.jpg" alt="">
    </div>
    <div class="images">
        <img src="https://www.visme.co/wp-content/uploads/2020/09/facebook-cover-page-header2.jpg" alt="">
    </div>
    <div class="images">
        <img src="https://www.visme.co/wp-content/uploads/2020/09/facebook-cover-page-header2.jpg" alt="">
    </div>
    <div class="images">
        <img src="https://www.visme.co/wp-content/uploads/2020/09/facebook-cover-page-header2.jpg" alt="">
    </div>
    
</div>

</div>


  
</template>

<script>
export default {

}
</script>

<style scoped>

.title{
    font-size: 25px;
    font-weight: bold;
}
.layout{
    padding-left: 2%;
    padding-top: 2%;
    /* padding: 2% 8%; */
}
.images-container{
    display: flex;
    overflow: scroll;
    overflow-y:hidden;
    width: 100%;
    overflow-x: auto; 
}
.images{
    flex: none;
    display: inline-block;
    height: 30vh;
    width: 30vw;
    margin-top: 2%;
    margin-left: 2%;
}
.images img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
::-webkit-scrollbar {
  display: none;
}
</style>