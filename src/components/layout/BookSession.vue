<template>
  
    <div class="card">
        <div class="title">
            <div class="sub-title">
                Book a mentoring session
            </div>
        </div>
        <div class="main-body">
            <div class="date">
                Sunday, 23 Dec <span class="slots">(4 slots available)</span> 
            </div>
            <div class="sessions">
                <div class="slot-button">2.00pm</div>
                <div class="slot-button">3.00pm</div>
                <div class="slot-button">4.00pm</div>
            </div>
            <div class="date">
                Sunday, 23 Dec <span class="slots">(4 slots available)</span> 
            </div>
            <div class="sessions">
                <div class="slot-button">2.00pm</div>
                <div class="slot-button">3.00pm</div>
                <div class="slot-button">4.00pm</div>
            </div>
            <div class="date">
                Sunday, 23 Dec <span class="slots">(4 slots available)</span> 
            </div>
            <div class="sessions">
                <div class="slot-button">2.00pm</div>
                <div class="slot-button">3.00pm</div>
                <div class="slot-button">4.00pm</div>
            </div>
            
        </div>
        <div class="bottom-side">
            <div class="book">Book a Slot</div>
        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    width: 100%;
    height: 40vh;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;
}
.title{
      -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.219);
       -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.158);
            box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.123);
        display: flex;
        padding: 15px;

}
.sub-title{
    font-size: 16px;
    font-weight: bold;
}
.main-body{
    height: 26vh;

}
.bottom-side{
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 16px; */
    padding-top: 11px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    /* position: absolute; */
    /* bottom: 0; */
    width: 100%;
}
.book{
    border-radius: 8px;
    background:#F3164D;
    color: white;
    opacity: 0.2;
    padding:8px 12px;
    /* margin-bottom: 12px; */
}
.slots{
    opacity: 45%;
    font-size: 8px;
}
.date{
    font-size: 10px;
    margin-bottom: 8px;
}
.main-body{
    padding: 10px 18px;
    overflow: scroll;
    overflow-x: hidden;
}
.slot-button{
    border: 1px solid #F3164D;
    border-radius: 6px;
    color: #F3164D;
    padding: 1px 8px;
    display: inline-block;
    font-size: 10px;
    margin-right: 25px;
}
.sessions{
    margin-bottom: 8px;
}

::-webkit-scrollbar-track
{
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	background-color:  #F3164D;
}

</style>