<template>
    <header class="header">
        <div class="logo">
            scool<span>.</span> 
        </div>
        <ul>
            <li class="list-item">Become a mentor</li>
            <li class="join_us">Join us</li>
        </ul>
    </header>

  
</template>

<script>
export default {

}
</script>

<style scoped>

header{
    /* position: fixed; */
    width: 100%;
    /* top: 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 3%;
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
}
.logo{
    font-size: 28px;
    flex: 2;
}
.logo >span{
    color: #F3164D;
}
.list-item{
    font-size: 14px;
}
.join_us{
    border: 2px solid red;
    background: #F3164D;
    color: white;
    padding:4px 20px;
    border-radius: 5px;
/* margin-right: 25px; */
}
@media screen and (max-width: 599px) {
 
ul{
    display: none;
}
header{
    width: 100%;
    height: 10vh;
}
}

</style>

