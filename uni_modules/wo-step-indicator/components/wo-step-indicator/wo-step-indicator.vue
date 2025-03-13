<template>
  <view>
		<template v-for="(step, index) in steps" :key="index">
			<view :data-step="index" :class="getStepClass(index)" style="display: flex;">
				<view class="steps__step-number">{{ step.index }}</view>
				<view class="steps__step-name">{{ step.name }}</view>
			</view>
			<view v-if="index < steps.length - 1" class="steps__connector"></view>
		</template>
  </view>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [
        { index: 'A', name: 'Step 1' },
        { index: 'B', name: 'Step 2' },
        { index: 'C', name: 'Step 3' },
        { index: 'D', name: 'Step 4' },
      ],
    },
    defaultStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      steps: this.options,
      step: this.defaultStep,
    };
  },
  methods: {
    prev() {
      if (this.step > 0) {
        this.step--;
        this.$emit('change', { step: this.step, data: this.steps[this.step - 1] });
      }
    },
    next() {
      if (this.step < this.steps.length) {
        this.step++;
        this.$emit('change', { step: this.step, data: this.steps[this.step - 1] });
      }
    },
    getStepClass(index) {
      if (index < this.step - 1) {
        return 'steps__step--done';
      } else if (index === this.step - 1) {
        return 'steps__step--current';
      } else {
        return '';
      }
    },
  },
};
</script>

<style scoped>
.steps__connector,
.steps__step {
  position: relative;
}

.steps__connector {
  background-color: hsl(223, 10%, 80%);
  margin-inline-start: 0.75em;
  width: 0.125em;
  height: 1.25em;
  transform: translateX(-50%);
  transition: background-color 0.3s;
}

.steps__connector:before {
  background-color: hsl(223, 90%, 70%);
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  transform: scale(1, 0);
  transform-origin: 50% 0;
  transition: background-color 0.3s, transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.steps__step {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
}

.steps__step-name {
  font-size: 0.5em;
  line-height: 2;
  transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1), font-weight 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.steps__step-number {
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: hsl(223, 10%, 80%);
  border-radius: 50%;
  margin-inline-end: 0.5em;
  width: 1.5em;
  height: 1.5em;
  transition: background-color 0.3s cubic-bezier(0.65, 0, 0.35, 1), box-shadow 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}

.steps__step--current .steps__step-name,
.steps__step--done .steps__step-name {
  font-weight: 700;
}

.steps__step--current .steps__step-number,
.steps__step--done .steps__step-number {
  background-color: hsl(223, 90%, 70%);
}

.steps__step--current .steps__step-number,
.steps__step--current .steps__step-name {
  transition-delay: 0.3s;
}

.steps__step--current .steps__step-number {
  box-shadow: 0 0 0 0.125em hsla(223, 90%, 30%, 0.4);
}

.steps__step--done+.steps__connector:before {
  transform: scale(1, 1);
}

.steps__step--current {
  font-weight: bold;
}
</style>
