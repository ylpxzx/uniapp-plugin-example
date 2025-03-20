<template>
	<view class="drop" :class="{ 'drop--expanding': isExpanding, 'drop--collapsing': isCollapsing }"
		:style="{ '--drop-start-height': `${state.itemStartHeight}px`, '--drop-end-height': `${state.itemsEndHeight}px`, '--drop-flare-dist': `${state.itemsEndHeight}px` }">
		<view class="drop__btn" :aria-expanded="isExpanded" @click="toggle">{{ selectedOption.label }}</view>
		<view class="drop__items" data-items
			:class="[isExpanding ? 'drop__height-anim' : '', isCollapsing ? 'drop__height-anim' : '']"
			:style="{ 'height': isExpanded ? 'auto' : '' }">
			<view class="drop__items-inner">
				<view v-for="option in menuOptions" :key="option.label" class="drop__btn"
					:class="[selectedOption.value === option.value ? 'drop__btn--selected' : '']" :value="option.label"
					@click="selectOption(option)">{{ option.label }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			default: () => [
				{ label: "windows", value: 1 },
				{ label: "mac", value: 2 },
				{ label: "linux", value: 3 },
				{ label: "test", value: 4 }
			],
		},
		defaultValue: {
			type: Number,
			default: 1,
		},
	},
	data() {
		return {
			state: {
				itemStartHeight: 0,
				itemsEndHeight: 0,
				isDrop: false
			},
			menuOptions: this.options,
			selectedOption: this.options.find(option => option.value === this.defaultValue),
			isExpanded: false,
			isCollapsing: false,
			isExpanding: false
		};
	},
	mounted() {
		uni.createSelectorQuery().in(this).select(".drop__items-inner").boundingClientRect(data => {
			this.state.itemsEndHeight = data.height;
		}).exec();
	},
	methods: {
		toggle() {
			if (this.isCollapsing || !this.isExpanded) {
				this.expand();
			} else if (this.isExpanding || this.isExpanded) {
				this.collapse();
			}
		},
		expand() {
			if (this.menuOptions.length === 0) return;

			this.isExpanded = true;
			this.isExpanding = true;
			setTimeout(() => {
				this.state.itemStartHeight = this.state.itemsEndHeight;
				this.state.itemsEndHeight = 0;
				this.isExpanding = false;
			}, 300);
		},
		collapse() {
			if (this.menuOptions.length === 0) return;
			this.isExpanded = false;
			this.isCollapsing = true;
			setTimeout(() => {
				this.state.itemsEndHeight = this.state.itemStartHeight;
				this.state.itemStartHeight = 0;
				this.isCollapsing = false;
			}, 300);
		},
		selectOption(option) {
			this.selectedOption = option;
			this.$emit("change", this.selectedOption);
			this.collapse();
		}
	}
};
</script>

<style scoped>
.drop {
	/* border-radius: 0.5em; */
	margin: auto;
	padding: 0.25em 0.25em 0 0.25em;
	position: relative;
}

.drop,
.drop:after {
	transition: background-color 0.3s;
}

.drop__btn {
	/* border-radius: 0.5em; */
	cursor: pointer;
	margin-bottom: 0.25em;
	padding: 0.75em;
	position: relative;
	z-index: 1;
}

/* 箭头旋转动效 start */
.drop__btn:after {
	border-top: 0.375em solid currentColor;
	border-right: 0.375em solid transparent;
	border-left: 0.375em solid transparent;
	content: "";
	display: block;
	margin-left: auto;
	width: 0;
	height: 0;
	transform-origin: 50% 37.5%;
	transition: transform 500ms cubic-bezier(0.33, 1, 0.68, 1);
	position: absolute;
	right: 1em;
	top: 1.4em;
}

.drop__btn[aria-expanded="true"]:after {
	border-top: 0.375em solid currentColor;
	border-right: 0.375em solid transparent;
	border-left: 0.375em solid transparent;
	transform: rotate(0.5turn);
}

/* 箭头动效 end */

.drop--collapsing,
.drop--expanding,
.drop__items {
	overflow: hidden;
}

.drop__items {
	height: 0;
	position: relative;
}

/* 勾选图标 start */
.drop__items .drop__btn:after {
	border: 0;
	content: "\2713";
	display: none;
	position: absolute;
	right: 2em;
	top: 0.75em;
}

.drop__items .drop__btn--selected:after {
	display: block;
}

/* 勾选图标 end */

.drop__btn[aria-expanded="true"] .drop__items {
	height: auto;
}

.drop__height-anim {
	animation: heightAnim 500ms cubic-bezier(0.33, 1, 0.68, 1.33);
}

@keyframes heightAnim {
	0% {
		height: var(--drop-start-height);
	}

	100% {
		height: var(--drop-end-height);
	}
}
</style>
