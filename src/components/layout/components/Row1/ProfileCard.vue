<template>

<div class="d-flex card">
    <img src="https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg" alt="name">
    <div class="title">
        Deepak Shapeti
    </div>
    <div class="subtitle">
        Obsessive Serial Entrepreneur
    </div>
    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="buttons">
                <div class="btn">Biography</div>
                <div class="btn">Thriller</div>
                <div class="btn">Horror</div>
    </div>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
img{
    border-radius: 8px;
    height: 50vh;
    width: 80%;
    object-fit: cover;
}
.card{
    width: 70%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 1.5rem 3rem;
    height: 100%;
    /* box-shadow: ; */
}
.content{
    text-align: center;
    margin-top: 8px;
    font-size: 10px;
}
.subtitle{
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
}
.title{
    margin-top: 8px;
    font-size: 24px;
    color:  #F3164D;
    font-weight: bold;
}
.buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.btn{
    background: #F2F4F7;
    font-weight: 500;
    padding: 2px 8px;
    font-size: 12px;
    margin-top: 4px;
    margin-right: 1.5rem;
}
@media screen and (max-width: 599px) {
    .card{
    display: none;
}
}

</style>