<template>
  <div class="nav-logo">
    <div class="header-logo shadow">
      <img src="../../assets/img/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
}
</script>

<style scoped lang="less">
.nav-logo {
  height: 88px;
  .header-logo {
    position: fixed;
    width: 100%;
    height: 88px;
    background-color: #fff;
    z-index: 100;
    img {
      height: 48px;
      position: absolute;
      top: 20px;
      left: 30px;
    }
  }
}
</style>
