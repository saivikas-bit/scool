<template>
  <div class="layout">
      <div class="title">
          HeAR FROM THE MENTOR
      </div>
      <div class="video">
      <vimeo-player ref="player" class="vimeo" :video-id="videoID" @ready="onReady"  :options="{ responsive: true }"></vimeo-player>
      </div>
      <div class="list">
          <img src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2018/11/free-images-featured.png" alt="">
          <img src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2018/11/free-images-featured.png" alt="">
          <img src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2018/11/free-images-featured.png" alt="">
          <img src="https://buffer.com/resources/content/images/resources/wp-content/uploads/2018/11/free-images-featured.png" alt="">
      </div>

  </div>
</template>

<script>

export default {
    
    data() {
		return {
			videoID: '38648446',
			height: 500,
			playerReady: false
		}
	},
	methods: {
		onReady() {
			this.playerReady = true
		},
		play () {
			this.$refs.player.play()
		},
		pause () {
			this.$refs.player.pause()
		}
	}

}
</script>

<style scoped>
.layout{
    padding: 4% 8%;
}
.title{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
}
.video{
    /* height: 30vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2%;
    border-radius: 8px;
}
.vimeo{
    height: 40vh;
    width: 40vw;
    border-radius: 8px;
}
.list{
    display: flex;
    overflow: scroll;
    overflow-y:hidden;
    /* overflow-x: auto; */
    margin-top: 8%;
}
img{
    flex: none;
    height: 30vh;
    width: 25vw;
    margin-right: 4%;
    border-radius: 8px;
    margin-bottom: 1%;
}


::-webkit-scrollbar-track
{
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 4px;
    height: 4px;              /* height of horizontal scrollbar ← You're missing this */
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
	background-color:  #F3164D;
}
</style>