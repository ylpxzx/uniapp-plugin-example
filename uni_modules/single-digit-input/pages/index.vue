<template>
	<view style="height: 100vh;">
		<view
		      style="
		        display: flex;
		        justify-content: center;
		        align-items: center;
		        height: 60%;
		      "
		    >
		      <input type="text" maxlength="6" />
		    </view>
	</view>
</template>

<script>
</script>

<style scoped>
	:deep(uni-input) {
		height: auto !important;
	}
	:deep(.uni-input-input) {
	  --w: 6ch;   /* control the width for each letter */
	  --g: 24rpx; /* the gap between letters */
	  --b: 4rpx;   /* the border thickness */
	  --c: #888;
	  --_n: attr(maxlength type(<integer>)); 
		height: 100rpx;
	  font-size: 24rpx;
		font-weight: 700;
	  line-height: 72rpx; /* control the height */
	  letter-spacing: var(--w);
	  font-family: monospace;
		color: var(--c);
	  width: calc(var(--_n)*(1ch + var(--w)));
	  padding-left: calc((var(--w) - var(--g))/2);
	  clip-path: inset(0 calc(var(--w)/2) 0 0);
	  background:
	    repeating-linear-gradient(90deg,
	      var(--c) 0 var(--b),#0000 0 calc(1ch + var(--w) - var(--g) - var(--b)),
	      var(--c) 0 calc(1ch + var(--w) - var(--g)),#0000 0 calc(1ch + var(--w))),
	    conic-gradient(at calc(100% - var(--g) - 2rpx) var(--b),#0000 75%,var(--c) 0) 
	     0 0/calc(1ch + var(--w)) calc(100% - var(--b));
	  border: none;
	  outline: 0;
	}
	:deep(.uni-input-input:focus-visible) {
	  --c:rgb(61, 120, 215);
	}
</style>