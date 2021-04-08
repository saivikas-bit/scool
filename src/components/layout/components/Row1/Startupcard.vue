<template>
<div class="card">
    <div class="card_image">
        <img src="https://images.livemint.com/img/2019/08/20/600x338/startup-kElG--621x414@LiveMint_1566327573649.jpg" alt="">

    </div>
    <div class="card_content">
        <div class=" md-layout md-alignment-center-space-between">
        <div class="md-layout-item title">Iphone videography for product</div>
    <div class="md-layout-item items"> <span class="strike_price">₹ 999</span> <span class="original_price">₹ 649</span> </div>
    <div>
        
    </div>
    
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
    

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
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

</style>