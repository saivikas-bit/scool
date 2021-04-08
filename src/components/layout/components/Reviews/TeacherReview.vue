<template>
  <div class="layout">
      <div class="review">
          <div class="title">
              Reviews
          </div>
          <div class="reviews">
              <div class="review_image">

              </div>
              <div class="titles">
                  Ankit Jain  <span style="opacity:50%;font-size:10px;margin-left:1rem">November 20, 2020 AT 11:23 AM</span> 
                  <div class="subtitle" style="opacity:80%;font-weight:normal">
                      The only class you’ll ever need in marketing!
                  </div>
                  <div class="likes">
                      <i class="fa fa-heart" style="color:red"></i> <span>36</span>
                  </div>
              </div>
          </div>
          <div class="reviews">
              <div class="review_image">

              </div>
              <div class="titles">
                  Ankit Jain  <span style="opacity:50%;font-size:10px;margin-left:1rem">November 20, 2020 AT 11:23 AM</span> 
                  <div class="subtitle" style="opacity:80%;font-weight:normal">
                      The only class you’ll ever need in marketing!
                  </div>
                  <div class="likes">
                      <i class="fa fa-heart" style="color:red"></i> <span>36</span>
                  </div>
              </div>
          </div>
          <div class="reviews">
              <div class="review_image">

              </div>
              <div class="titles">
                  Ankit Jain  <span style="opacity:50%;font-size:10px;margin-left:1rem">November 20, 2020 AT 11:23 AM</span> 
                  <div class="subtitle" style="opacity:80%;font-weight:normal">
                      The only class you’ll ever need in marketing!
                  </div>
                  <div class="likes">
                      <i class="fa fa-heart" style="color:red"></i> <span>36</span>
                  </div>
              </div>
          </div>
          <div class="all_reviews">
          see all reviews
      </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.all_reviews{
    text-align: center;
    padding: 0.5rem;
    border: 2px solid red;
    color: red;
    border-radius: 8px;
}


.layout{
  padding: 2% 2%;
  
}
.review{
    /* border: 2px solid black; */
    height: 55vh;
    margin-right: 13%;
  
}
.reviews{
      display: flex;
    align-items: center;
    margin: 2rem 0rem;
}
.title{
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 2rem;
}
.review_image{
    width: 4rem;
    border-radius: 50%;
    height: 4rem;
    background: grey;
}
.titles{
    margin-left: 1rem;
    font-weight: bold;
}
.likes{
    margin-top: 1rem;
    margin-left: 1rem;
}

</style>