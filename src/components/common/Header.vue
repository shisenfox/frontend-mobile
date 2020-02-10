<template>
  <div class="nav">
    <div 
      class="header shadow"
      style="background-color: #fff;"
    >
      <div class="header_left">
        <div 
          class="left_img"
          @click="goBack()"
          v-if="!showCancel"
        ></div>
        <div 
          v-if="showCancel"
          @click="cancelSelect()"
          class="cancelText"
        >
          取消
        </div>
      </div>
      <h3>
        {{ title }}
      </h3>
      <div 
        class="header_right"
        v-if="showConfirm"
        :style="{color: finshColor}"
        @click="completeSelect()"
      >
        完成
      </div>
    </div>
    <div class="header_main"></div>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'foo'
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: false
    },
    finshColor: {
      type: String,
      default: '#393939'
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    completeSelect() {
      this.$emit('completeSelect')
    },
    cancelSelect() {
      this.$emit('cancelSelect')
    }
  }
};
</script>

<style scoped>
.nav {
  background: #fff;
}
.header_top1 {
  height: 28px;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  width: 100%;
}
.header_top2 {
  height: 28px;
  background-color: #fff;
}
.header_main {
  height: 88px;
}
.header {
  position: fixed;
  width: 100%;
  height: 88px;
  font-size: 28px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  z-index: 100;
}
.left_img {
  height: 34px;
  width: 34px;
  margin-left: 30px;
  background: url("../../assets/img/arrow_left.png") no-repeat center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.cancelText {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translate(0, -50%);
}
.header_right {
  height: 44px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
}
.header > h3 {
  font-size: 28px;
  font-weight: normal;
  line-height: 88px;
  text-align: center;
}
</style>
