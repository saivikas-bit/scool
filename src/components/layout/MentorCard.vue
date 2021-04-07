<template>
  
    <div class="card">
        <div class="image">
            <img :src="image" :alt="name" />
        </div>
        <div class="card-content">
            <div class="person_name">
                {{name}}
            </div>
            <div class="person_qualification">
                {{qualification}}
            </div>
            <div class="buttons">
                <div class="btn">Biography</div>
                <div class="btn">Thriller</div>
                <div class="btn">Horror</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props:['image','name','qualification']

}
</script>

<style scoped>
.card{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    width: 18vw;
    height: 55vh;
    border-radius: 15px;
    margin-right: 5%;
    
}
.image{
    display: inline-block;
    width: 100%;
    height: 75%;
    
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
}
.card-content{
    text-align: center;
}
.person_name{
    font-size: 20px;
    font-weight: bold;
    color: #F3164D;
    margin:4px 0;
    text-transform: uppercase;
}
.buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.person_qualification{
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    margin: 4px 0px;
}

.btn{
    background: #F2F4F7;
    font-weight: 500;
    padding: 2px 8px;
    font-size: 12px;
    margin-top: 4px;
}

</style>