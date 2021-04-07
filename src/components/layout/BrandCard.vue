<template>
    <div class="card md-layout">
        <div class="brand-image md-layout-item">
            <img src="https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" alt="">
        </div>
        <div class="md-layout-item">
            <div class="title">
                anas khan
            </div>
            <div class="sub-title">
                Brand Strategist & Storyteller
            </div>
            <div class="buttons">
                <button>branding</button>
                <button>seo</button>
                <button>smm</button>
                <button>sro</button>

            </div>
            <div class="paragraph">
                With a decade plus experience as an educationist and a marketer, Anas Khan is the quintessential intellectual thinker, who has been the responsible for genesis of key features like ZPD based algorithm, lean Read More…

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
    width: 90%;
    height: 40vh;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px 10px;
    /* display: flex; */
}
.brand-image{
    display: inline-block;
    height: 35vh;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    width: 40%;
    margin-right: 12px;

}
img{
    height: 100%;
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
    /* position: absolute; */
    /* display: inline-block; */
}
.title{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 21px;
    margin: 18px 0;
    /* margin-block: ; */
}
.sub-title{
    font-size: 14px;
    margin-bottom: 8px;
}
.paragraph{
    font-size: 12px;
}
button{
    margin-right: 12px;
    background: #F0F0F0;
    border: 0px;
    border-radius: 8px;
    padding: 2px 8px;
}
.buttons{
    margin-bottom: 8px;
}


</style>