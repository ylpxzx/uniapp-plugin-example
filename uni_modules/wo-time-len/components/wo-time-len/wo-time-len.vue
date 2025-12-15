<template>
  <view>
    <view class="time-card">
      <view @click="onChangeTab(1)">
        <view class="time-text" :style="{ color: getColor(1) }">{{
          formatTime(
            `${form.startDate} ${pad(form.startHour)}:${pad(form.startMinute)}`
          )
        }}</view>
        <view class="time-date" :style="{ color: getColor(1) }">
          {{
            formatDate(
              `${form.startDate} ${pad(form.startHour)}:${pad(
                form.startMinute
              )}`,
              "MM月DD日"
            )
          }}
          {{
            ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
              getDay(
                `${form.startDate} ${pad(form.startHour)}:${pad(
                  form.startMinute
                )}`
              )
            ]
          }}
        </view>
      </view>
      <view @click="onChangeTab(2)">
        <view class="time-text" :style="{ color: getColor(2) }">{{
          formatTime(
            `${form.endDate} ${pad(form.endHour)}:${pad(form.endMinute)}`
          )
        }}</view>
        <view class="time-date" :style="{ color: getColor(2) }">
          {{
            formatDate(
              `${form.endDate} ${pad(form.endHour)}:${pad(form.endMinute)}`,
              "MM月DD日"
            )
          }}
          {{
            ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
              getDay(
                `${form.endDate} ${pad(form.endHour)}:${pad(form.endMinute)}`
              )
            ]
          }}
        </view>
      </view>
    </view>
    <view class="flex-center">
      <view>
        <picker-view
          indicator-style="height: 100rpx;"
          :value="pickerVal"
          @change="bindChange"
          class="picker-view px-4"
        >
          <picker-view-column>
            <view class="item" v-for="(item, index) in dates" :key="index">
              {{ formatDate(item, "MM月DD日") }}
              {{
                ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
                  getDay(item)
                ]
              }}
            </view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item, index) in hours" :key="index">{{
              item
            }}</view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item, index) in minutes" :key="index">{{
              pad(item)
            }}</view>
          </picker-view-column>
        </picker-view>
      </view>
    </view>
  </view>
</template>

<script>
import {
  pad,
  formatDate,
  formatTime,
  addMonth,
  addHour,
  getDay,
  getDatesBetween,
  startDateIsBeforeCurrent,
  endDateIsBeforeStartDate,
  endDateIsAfterLimitDate,
} from "./utils";

export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    limitUseTime: {
      type: Number,
      default: 0,
    },
    tabIndex: {
      type: Number,
      default: 1,
    },
  },
  emits: ["change", "error"],
  data() {
    return {
      tab: this.tabIndex,
      form: { ...this.value },
      pickerVal: [0, 0, 0],
      dates: getDatesBetween(
        formatDate(new Date()),
        formatDate(addMonth(new Date(), 2))
      ),
      hours: Array.from({ length: 24 }, (_, i) => i),
      minutes: Array.from({ length: 60 }, (_, i) => i),
    };
  },
  computed: {
    getColor() {
      return (tabIndex) => {
        if (
          this.form.startDate === this.form.endDate &&
          String(this.form.startHour) === String(this.form.endHour) &&
          String(this.form.startMinute) === String(this.form.endMinute)
        ) {
          return "#f54a45";
        }
        if (tabIndex === 1) {
          const resColor =
            this.tab === tabIndex
              ? startDateIsBeforeCurrent(
                  this.form.startDate,
                  this.form.startHour,
                  this.form.startMinute
                )
                ? "#f54a45"
                : "#3370ff"
              : "inherit";
          return resColor;
        }
        if (tabIndex === 2) {
          let colorStr =
            this.tab === tabIndex
              ? endDateIsBeforeStartDate(
                  this.form.startDate,
                  this.form.startHour,
                  this.form.startMinute,
                  this.form.endDate,
                  this.form.endHour,
                  this.form.endMinute
                )
                ? "#f54a45"
                : "#3370ff"
              : "inherit";
          if (this.limitUseTime) {
            colorStr = endDateIsAfterLimitDate(
              this.form.startDate,
              this.form.startHour,
              this.form.startMinute,
              this.form.endDate,
              this.form.endHour,
              this.form.endMinute,
              this.limitUseTime
            )
              ? "#f54a45"
              : colorStr;
          }
          return colorStr;
        }
      };
    },
  },
  watch: {
    tabIndex(val) {
      this.tab = val;
    },
  },
  methods: {
    onConfirm() {
      if (
        startDateIsBeforeCurrent(
          this.form.startDate,
          this.form.startHour,
          this.form.startMinute
        )
      ) {
        this.$emit("error", "开始时间不能早于当前时间");
        uni.showToast({
          title: "开始时间不能早于当前时间",
          icon: "none",
          duration: 3000,
        });
        return;
      }
      if (
        endDateIsBeforeStartDate(
          this.form.startDate,
          this.form.startHour,
          this.form.startMinute,
          this.form.endDate,
          this.form.endHour,
          this.form.endMinute
        )
      ) {
        this.$emit("error", "结束时间不能早于开始时间");
        uni.showToast({
          title: "结束时间不能早于开始时间",
          icon: "none",
          duration: 3000,
        });
        return;
      }
      if (
        this.form.startDate === this.form.endDate &&
        String(this.form.startHour) === String(this.form.endHour) &&
        String(this.form.startMinute) === String(this.form.endMinute)
      ) {
        this.$emit("error", "开始时间不能等于结束时间");
        uni.showToast({
          title: "开始时间不能等于结束时间",
          icon: "none",
          duration: 3000,
        });
        return;
      }
      if (this.limitUseTime) {
        if (
          endDateIsAfterLimitDate(
            this.form.startDate,
            this.form.startHour,
            this.form.startMinute,
            this.form.endDate,
            this.form.endHour,
            this.form.endMinute,
            this.limitUseTime
          )
        ) {
          this.$emit("error", "选择范围不能超过限制时间");
          uni.showToast({
            title: "选择范围不能超过限制时间",
            icon: "none",
            duration: 3000,
          });
          return;
        }
      }
      this.$emit("change", this.form);
    },
    getEndDateLimit() {
      if (this.limitUseTime) {
        const start = new Date(
          `${this.form.startDate} ${pad(this.form.startHour)}:${pad(
            this.form.startMinute
          )}`
        );
        const endDateTimeLimit = addHour(start, this.limitUseTime);
        this.dates = getDatesBetween(
          formatDate(this.form.startDate),
          formatDate(endDateTimeLimit)
        );
      }
    },
    onChangeTab(index) {
      this.tab = index;
      if (this.tab === 2) {
        this.getEndDateLimit();
        this.pickerVal = [
          this.dates.indexOf(this.form.endDate),
          this.hours.indexOf(Number(this.form.endHour)),
          this.minutes.indexOf(Number(this.form.endMinute || 0)),
        ];
      }
      if (this.tab === 1) {
        this.dates = getDatesBetween(
          formatDate(new Date()),
          formatDate(addMonth(new Date(), 2))
        );
        setTimeout(() => {
          this.pickerVal = [
            this.dates.indexOf(this.form.startDate),
            this.hours.indexOf(Number(this.form.startHour)),
            this.minutes.indexOf(Number(this.form.startMinute || 0)),
          ];
        }, 100);
      }
    },
    bindChange(e) {
      if (this.tab === 1) {
        this.form.startDate = this.dates[e.detail.value[0]];
        this.form.startHour = this.hours[e.detail.value[1]];
        this.form.startMinute = this.minutes[e.detail.value[2]];
      }
      if (this.tab === 2) {
        this.form.endDate = this.dates[e.detail.value[0]];
        this.form.endHour = this.hours[e.detail.value[1]];
        this.form.endMinute = this.minutes[e.detail.value[2]];
      }
    },
    pad,
    formatDate,
    formatTime,
    getDay,
  },
  mounted() {
    this.pickerVal = [
      this.dates.indexOf(this.form.startDate),
      this.hours.indexOf(Number(this.form.startHour)),
      this.minutes.indexOf(Number(this.form.startMinute || 0)),
    ];
    if (this.tab === 2) {
      this.getEndDateLimit();
      this.pickerVal = [
        this.dates.indexOf(this.form.endDate),
        this.hours.indexOf(Number(this.form.endHour)),
        this.minutes.indexOf(Number(this.form.endMinute || 0)),
      ];
    }
  },
  expose: ["onConfirm"],
  onShow() {
    this.pickerVal = [
      this.dates.indexOf(this.form.startDate),
      this.hours.indexOf(Number(this.form.startHour)),
      this.minutes.indexOf(Number(this.form.startMinute || 0)),
    ];
    if (this.tab === 2) {
      this.getEndDateLimit();
      this.pickerVal = [
        this.dates.indexOf(this.form.endDate),
        this.hours.indexOf(Number(this.form.endHour)),
        this.minutes.indexOf(Number(this.form.endMinute || 0)),
      ];
    }
  },
};
</script>

<style lang="scss" scoped>
.picker-view {
  width: 750rpx;
  height: 300rpx;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.time-card {
  display: flex;
  gap: 120rpx;
  justify-content: center;
  align-items: center;
  padding: 60rpx 0;

  .time-text {
    font-size: 44rpx;
    font-weight: bold;
    line-height: 64rpx;
    color: #1f2329;
    padding-bottom: 6rpx;
  }

  .time-date {
    font-size: 28rpx;
    font-weight: normal;
    line-height: 44rpx;
    color: #333333;
  }
}

:deep(.uni-picker-view-wrapper) {
  padding: 0 40rpx;
}
</style>
