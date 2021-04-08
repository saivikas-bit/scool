<template>
  <div class="card">
      <div class="title">
          Course Overview
      </div>
      <div class="content">
          Digital Marketing 101 is the ultimate primer you need to get started with a career in Digital marketing. This course is a Digital Marketing 101 is the ultimate primer you need to get started with a career in Digital marketing. This course isDigital Marketing 101 is the ultimate primer you need to get started. 
      </div>
      <div class="list">
          <ul>
              <li>Digital Marketing 101 is the ultimate primer</li>
              <li>Digital Marketing 101 is the ultimate primer</li>
              <li>Digital Marketing 101 is the ultimate primer</li>
          </ul>

      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 2rem 3rem;
    /* padding: 1rem 2rem; */
    width: 85%;
    height: 40vh;
    flex-direction: column;
    border-radius: 10px;   
}
.title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
}
li{
    list-style: decimal;
    margin: 1rem 0;
}
ul{
    padding: 0;
    margin: 1rem;
}
@media screen and (max-width: 599px) {
    .card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 1rem 1rem;
    border-radius: 8px;
    /* margin: 12px 0; */
    margin-top: 1rem;
    width: 100%;
    height: 70vh;
    margin-bottom: 1rem;
}
}

</style>