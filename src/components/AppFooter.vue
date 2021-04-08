<template>
<div class="footer">
    <div class="container">
        <div class="logo">
            scool<span class="logo_dot">.</span>
            <span class="logos">
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter-square"></i>
            </span>
            <div class="sub_title">© 2020 Hundred Eyes Educational Services Pvt Ltd</div>
        </div>
        <div  class="sub_sets">
            <div>About</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>

        </div>

    </div>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 15vh;
    background-color:black;
    padding: 2% 8%;
    color: white;
}
.logo{
    font-size: 25px;
    font-weight: bold;
}
.logos{
    margin-left: 18px;
}
.logos i{
    margin: 0 8px;
    font-size: 15px;
}
.logo_dot{
    color: tomato;
}
.sub_title{
    opacity: 50%;
    font-size: 10px;
    margin-top: 8px;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sub_sets{
display: flex;
flex: 1;
 justify-content: flex-end; 
align-items: center;
}
.sub_sets div{
    margin-right: 2%;
    /* flex: 1;  */
    opacity: 50%;
}

@media screen and (max-width: 599px) {
 .sub_sets{
     display: none;
 }
 .container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 18px;
}

}


</style>