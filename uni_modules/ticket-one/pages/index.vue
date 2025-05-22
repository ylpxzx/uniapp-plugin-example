<template>
  <view
      style="background-color: #eee"
      class="main-content flex justify-center items-center min-h-screen px-4 before-inset-0 before-m-auto before-fixed before-opacity-30 before-bg-cover before-bg-center before-z-10"
    >
      <view
        class="main-box text-gray-400 font-thin w-full max-w-sm sm-max-w-4xl grid sm-grid-cols-4fr_1fr"
      >
        <!-- boarding pass -->
        <view
          style="border-radius: 6px"
          class="py-6 px-6 sm-px-10 relative"
        >
          <section class="w-full grid grid-cols-3 gap-x-4 isolate overflow-hidden all-grid h2-text-4xl h2-bg-cyan-50 sm-h2-text-6xl h2-font-bold h2-z-10 h2-text-cyan-400 h2-uppercase div-relative div-flex div-items-center div-gap-2 before-div-absolute before-div-w-full before-div-h-px before-div-z-20 before-div-bg-gray-300 span-text-4xl span-rotate-90 p-text-gray-400 p-font-thin">
            <h2 class="animate-in grid place-content-center">长沙</h2>
            <view class="grid place-content-center line">
              <!-- <img
                id="plane-1"
                src="./aircraft.png"
                class="bg-cyan-50 -z-10"
                style="width: 30px; padding: 0 10px"
                alt=""
              /> -->
              <span
                id="plane-1"
                class="bg-cyan-50 -z-10 place-content-center"
                style="padding: 0 10px; font-weight: 700; font-size: 26px"
                >Z264</span
              >
            </view>
            <h2 class="animate-in grid place-content-center">拉萨</h2>
            <p class="animate-in grid place-content-center">Changsha</p>
            <span class="grid place-content-center"></span>
            <p class="animate-in grid place-content-center">Lasa</p>
          </section>
  
          <section
            style="border-radius: 6px; margin-top: 1.5rem; margin-bottom: 1.5rem"
            class="grid grid-cols-2 sm-grid-cols-4 gap-4 py-3 px-6 bg-cyan-100 font-thin whitespace-nowrap text-sm sm-text-base all-border-X text-font-bold text-text-cyan-400">
            <view>
              <h3 class="flex-center">离开</h3>
              <text class="flex-center font-bold">16:25</text>
            </view>
            <view>
              <h3 class="flex-center">抵达</h3>
              <text class="flex-center font-bold">21:40</text>
            </view>
            <view>
              <h3 class="flex-center">座位</h3>
              <text class="flex-center font-bold">06车12号</text>
            </view>
            <view>
              <h3 class="flex-center">票价</h3>
              <text class="flex-center font-bold">166.9元</text>
            </view>
            <!-- <div>
              <h3 class="flex-center">车票编号</h3>
              <text class="flex-center font-bold">FF346Y</text>
            </div> -->
          </section>
          <p class="text-xs" style="margin-top: 1.5rem; margin-bottom: 1.5rem">
            <text style="font-weight: 700;">重要提示：</text>航班起飞前<text style="color: red;">15分钟</text>停止登机，请您务必在此之前到达指定登机口登机.
          </p>
          <p class="text-xs" style="margin-top: 1.5rem; margin-bottom: 1.5rem"><text style="font-weight: 700;">车票编号：</text>228429554HOP43J545 JM</p>
        </view>
  
        <!-- stub -->
        <view style="border-radius: 6px" class="grid place-content-center p-0">
          <view
            class="py-6 sm-py-0 sm-rotate-90 w-full grid place-content-center gap-4"
          >
            <section
              class="w-full grid grid-cols-3 gap-x-2 all-grid h2-text-3xl h2-font-bold h2-text-cyan-400 h2-uppercase div-relative div-flex div-items-center div-gap-2 before-div-block before-div-w-full before-div-h-px before-div-bg-gray-300 after-div-block after-div-w-full after-div-h-px after-div-bg-gray-300 span-text-2xl span-rotate-90 p-text-gray-400 p-font-thin p-text-xs"
            >
              <h3 class="grid place-content-center">长沙</h3>
              <view class="grid place-content-center line">
                <!-- <img
                  src="./aircraft.png"
                  class="bg-cyan-50"
                  style="width: 20px; padding: 0 4px"
                  alt=""
                /> -->
                <span
                  id="plane-1"
                  class="bg-cyan-50 grid place-content-center"
                  style="font-weight: 700; font-size: 12px"
                  >Z264</span
                >
              </view>
              <h3 class="grid place-content-center">拉萨</h3>
              <p class="grid place-content-center">Changsha</p>
              <span class="grid place-content-center"></span>
              <p class="grid place-content-center">Lasa</p>
            </section>
            <section
              class="flex justify-between gap-4 font-thin text-xs sm-text-sm whitespace-nowrap div-text-center"
            >
              <view>
                <h3>离开</h3>
                <text>16:25</text>
              </view>
              <view>
                <h3>抵达</h3>
                <text>21:40</text>
              </view>
              <view>
                <h3>座位</h3>
                <text>06车12号</text>
              </view>
              <view>
                <h3>票价</h3>
                <text>166.9元</text>
              </view>
            </section>
						<image src="../static/qrcode.png" class="max-w-xs w-60" style="height: 80rpx;"></image>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
</script>

<style scoped>

.animate-in {
    opacity: 0;
    transform-origin: center;
    animation: bounceIn 500ms forwards;
    animation-delay: 500ms;
}
@keyframes bounceIn {
   0% { opacity: 0;}
   100% {  opacity: 1;}
}

#plane-1{
    translate: -180px 0;
    opacity: 0;
    animation: fly-in 1000ms  ease-out forwards;
    animation-delay: var(--d, 0ms);

}
@keyframes fly-in {
    0%{ translate: -180px 0; opacity:1;}
    100%{ translate: 0; opacity:1;}
}

.main-box>view:first-child {
    background:
        radial-gradient(circle 10px at bottom left, #0000 98%, #ECFEFF) bottom left,
        radial-gradient(circle 10px at bottom right, #0000 98%, #ECFEFF) bottom right;
    background-size: 51% 100%;
    background-repeat: no-repeat;
}

.main-box>view:last-child {
    background:
        radial-gradient(circle 10px at top left, #0000 98%, #ECFEFF) top left,
        radial-gradient(circle 10px at top right, #0000 98%, #ECFEFF) top right;
    background-size: 51% 100%;
    background-repeat: no-repeat;
}

.main-box>view:first-child::before {
    content: '';
    position: absolute;
    border: 2px dashed #DDD;
    bottom: -1px;
    left: calc( 10px * 3) ;
    width: calc(100% - 10px * 6);
    height: 0;
}

@media (min-width: 640px) {
    .main-box>view:first-child {
        background:
            radial-gradient(circle 10px at top right, #0000 98%, #ECFEFF) top right,
            radial-gradient(circle 10px at bottom right, #0000 98%, #ECFEFF) bottom right;
        background-size: 100% 51%;
        background-repeat: no-repeat;
    }

    .main-box>view:last-child {
        background:
            radial-gradient(circle 10px at top left, #0000 98%, #ECFEFF) top left,
            radial-gradient(circle 10px at bottom left, #0000 98%, #ECFEFF) bottom left;
        background-size: 100% 51%;
        background-repeat: no-repeat;
    }

    .main-box>view:first-child::before{
        top: calc(10px * 3);
        right: -1px;
        bottom: auto;
        left: auto;
        height: calc(100% - 10px * 6);
        width:0;
    }
}
.main-content{
  margin:0;
  line-height:inherit
}
h1,h2,h3,h4,h5,h6{
  font-size:inherit;
  font-weight:inherit
}
b,strong{
  font-weight:bolder
}
h1,h2,h3,h4,h5,h6,hr,p,pre{
  margin:0
}

text {
  color: rgb(34 211 238)
}
.flex-center{
  display:flex;
  align-items:center;
  justify-content:center
}
.font-bold{
  font-weight:700
}
.isolate{
  isolation:isolate
}
.-z-10{
  z-index:-10
}
.flex{
  display:flex
}
.grid{
  display:grid
}
.min-h-screen{
  min-height:100vh
}
.w-60{
  width:15rem
}
.w-full{
  width:100%
}
.max-w-sm{
  max-width:24rem
}
.max-w-xs{
  max-width:20rem
}
.grid-cols-2{
  grid-template-columns:repeat(2, minmax(0, 1fr))
}
.grid-cols-3{
  grid-template-columns:repeat(3, minmax(0, 1fr))
}
.place-content-center{
  place-content:center
}
.items-center{
  align-items:center
}
.justify-center{
  justify-content:center
}
.justify-between{
  justify-content:space-between
}
.gap-4{
  gap:1rem
}
.gap-x-2{
  column-gap:0.5rem
}
.gap-x-4{
  column-gap:1rem
}
.overflow-hidden{
  overflow:hidden
}
.whitespace-nowrap{
  white-space:nowrap
}
.bg-cyan-100{
  background-color:rgb(207, 234, 254)
}
.bg-cyan-50{
  background-color:rgb(236 254 255)
}
.bg-white{
  background-color:rgb(255 255 255)
}
.bg-black{
  background-color:#000
}
.relative {
  position: relative;
}
.p-0{
  padding:0px
}
.px-4{
  padding-left:1rem;
  padding-right:1rem
}
.px-6{
  padding-left:1.5rem;
  padding-right:1.5rem
}
.py-3{
  padding-top:0.75rem;
  padding-bottom:0.75rem
}
.py-6{
  padding-top:1.5rem;
  padding-bottom:1.5rem
}
.text-sm{
  font-size:0.875rem;
  line-height:1.25rem
}
.text-xs{
  font-size:0.75rem;
  line-height:1rem
}
.font-thin{
  font-weight:100
}
.text-gray-400{
  color:rgb(156 163 175)
}
.before-fixed::before{
  content:'';
  position:fixed
}
.before-inset-0::before{
  content:'';
  inset:0px
}
.before-z-10::before{
  content:'';
  z-index:-10
}
.before-m-auto::before{
  content:'';
  margin:auto
}
.before-bg-cover::before{
  content:'';
  background-size:cover
}
.before-bg-center::before{
  content:'';
  background-position:center
}
.before-opacity-30::before{
  content:'';
  opacity:0.3
}
@media (min-width: 640px){
  .sm-max-w-4xl{
    max-width:56rem
  }
  .sm-rotate-90{
    transform:translate(0, 0) rotate(-90deg) skewX(0) skewY(0) scaleX(1) scaleY(1)
  }
  .sm-grid-cols-4{
    grid-template-columns:repeat(4, minmax(0, 1fr))
  }
  .sm-grid-cols-4fr_1fr{
    grid-template-columns:4fr 1fr
  }
  .sm-px-10{
    padding-left:2.5rem;
    padding-right:2.5rem
  }
  .sm-py-0{
    padding-top:0px;
    padding-bottom:0px
  }
  .sm-text-base{
    font-size:1rem;
    line-height:1.5rem
  }
  .sm-text-sm{
    font-size:0.875rem;
    line-height:1.25rem
  }
}
.div-text-center>view{
  text-align:center
}
.p-text-xs>p{
  font-size:0.75rem;
  line-height:1rem
}
.p-font-thin>p{
  font-weight:100
}
.p-text-gray-400>p{
  color:rgb(156 163 175)
}
.div-relative view{
  position:relative
}
.div-flex view{
  display:flex
}
.div-items-center view{
  align-items:center
}
.div-gap-2 view{
  gap:0.5rem
}
.before-div-absolute .line::before{
  content:'';
  position:absolute
}
.before-div-z-20 .line::before{
  content:'';
  z-index:-20
}
.before-div-block .line::before{
  content:'';
  display:block
}
.before-div-h-px .line::before{
  content:'';
  height:1px
}
.before-div-w-full .line::before{
  content:'';
  width:100%
}
.before-div-bg-gray-300 .line::before{
  content:'';
  background-color:rgb(209 213 219)
}
.after-div-block .line::after{
  content:'';
  display:block
}
.after-div-h-px .line::after{
  content:'';
  height:1px
}
.after-div-w-full .line::after{
  content:'';
  width:100%
}
.after-div-bg-gray-300 .line::after{
  content:'';
  background-color:rgb(209 213 219)
}
.h2-z-10 h2{
  z-index:10
}
.h2-bg-cyan-50 h2{
  background-color:rgb(236 254 255)
}
.h2-text-3xl h2{
  font-size:1.875rem;
  line-height:2.25rem
}
.h2-text-4xl h2{
  font-size:2.25rem;
  line-height:2.5rem
}
.h2-font-bold h2{
  font-weight:700
}
.h2-uppercase h2{
  text-transform:uppercase
}
.h2-text-cyan-400 h2{
  color:rgb(34 211 238)
}
</style>