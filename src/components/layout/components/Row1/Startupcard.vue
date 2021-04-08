<template>
<div class="card">
    <div class="card_image">
        <img src="https://images.livemint.com/img/2019/08/20/600x338/startup-kElG--621x414@LiveMint_1566327573649.jpg" alt="">

    </div>
    <div class="card_content">
        <div class=" md-layout md-alignment-center-space-between">
        <div class="md-layout-item title">Iphone videography for product</div>
    <div class="md-layout-item items"> <span class="strike_price">₹ 999</span> <span class="original_price">₹ 649</span> </div>
    
    </div>
    <div class="md-layout">
        <div class="md-layout-item">
            <div class="progress">
                <div class="progress_width">
                    
                </div>
                <div style="font-size:12px;color:red;margin-top:0.5rem">
                    Apply Promocode
                </div>
            </div>
            <div class="font">
                <div style="opacity:50%;">
                <i class="fa fa-user" style="margin-right:0.8rem;"></i>By Shashank 
            </div>
            <div style="opacity:50%">
                <i class="fa fa-user" style="margin-right:0.8rem;"></i>By Shashank 
            </div>
            <div style="opacity:50%">
                <i class="fa fa-user" style="margin-right:0.8rem;"></i>By Shashank
            </div>

            </div>
            

        </div>
        <div class="md-layout-item d-flex">
            <button class="btn">
                Book Now
            </button>
        </div>
    </div>

    </div>
    <div class="card-content-mobile">
        <div class="card_title">
            STARTUP 101
        </div>
        <div class="card_content_body" style="margin-top:1rem">
            <div>
                <span style="width:20%;margin-right:1rem;opacity:50%">
                <i class="fa fa-user" style="margin-right:0.5rem"></i>By Shashank 
            </span>
             <span style="width:20%;opacity:50%">
                <i class="fa fa-user" style="margin-right:0.5rem"></i>By Shashank 
            </span>

            </div>
            <div style="margin-top:1rem">
                <span style="width:20%;margin-right:1rem;opacity:50%">
                <i class="fa fa-user" style="margin-right:0.5rem"></i>By Shashank 
            </span>
             <span style="width:20%">
                <span class="strike_price">₹ 999</span> <span class="original_price">₹ 649</span>
            </span>

            </div>
            <div class="button_book">
                <button class="btn_slot">Book A Slot</button>

            </div>
            

        </div>

    </div>
    

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

.card-content-mobile{
    display: none;
}

.card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 95%;
    height: 70%;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}
.card_image{
    width: 100%;
    display: inline-block;
    height: 80%;
}
.card_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: -1; */
}
.title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    text-transform: capitalize;
    margin-left: 2rem;
}
.card_content{
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     border-radius: 8px;
     position: absolute;
     height: 20%; 
     width: 100%;
     /* top: ; */
     /* bottom: 4%; */
     /* border: 2px solid red; */
     padding: 0.5rem 0;
     z-index: 100;
     /* overflow: hidden; */
}
.items{
    display: flex;
    justify-content: flex-end;
    padding-right: 3rem;
}
.strike_price{
    text-decoration: line-through;
    font-weight: bold;
    font-size: 14px;
    margin: 0 2rem;
}
.original_price{
    color: #F3164D;
    font-size: 25px;
    font-weight: bold;
}
.progress{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.progress_width{
    background: #F3164D;
}
.applypromo{
    text-transform: uppercase;
    color: #F3164D;
    text-decoration: underline;
}
.btn{
    text-transform: capitalize;
    background: #F3164D;
    padding: 0.5rem 2rem;
    border: 0;
    border-radius: 8px;
    margin-right:2rem;
    margin-top: 0.5rem;
    color: white;
    font-size: 14px;
}
.d-flex{
    display: flex;
    justify-content: flex-end;
}
.font{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;
}
@media screen and (max-width: 599px) {
    .card{
    width: 100%;
    height: 50vh;
}
.card_image img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    /* z-index: -1; */
}
.card_image{
    height: 48%;
    position: absolute;
}
.card_content{
    height: 50%;
    bottom: 0;
    padding: 0;
    display: none;
}
.card-content-mobile{
    display: block;
    position: absolute;
    bottom: 0%;
    padding: 1rem;
    height: 59%;
    width: 100%;
    
}
.card_title{
    font-size: 25px;
    font-weight: bold;
    margin-top: 1rem;
}
.original_price{
    font-size: 16px;
    margin: 0;
}
.button_book{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button_book button{
    padding: 0.8rem 1rem;
    background: red;
    color: white;
    border:0;
    border-radius: 8px;
    margin-top: 1rem;
}
}
</style>