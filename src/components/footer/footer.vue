<template>
  <div class="l-footer-wrapper">
    <div class="l-footer">
      <p>Copyright © <a href="javascript:;">2017-2018 Level.Z All Rights Reserved</a></p>
      <p><a href="javascript:;">粤ICP备17044709号</a></p>
    </div>
  </div>
</template>

<style>
.l-footer-wrapper {
  height: 40px;
  color: #ccc;
  text-align: center;
  background-color:#343434;
  /* flex实现垂直居中   */
  display: flex;
  align-items: center;
}
.l-footer {
  margin: 0 auto;
  line-height: 14px;
}
.l-footer a {
  color: #ccc;
}
@media (min-width: 479px) {
  .l-footer-wrapper {
    height: 80px;
    text-align: center;
    color: #ccc;
    background-color:#343434;
    /* flex实现垂直居中   */
    display: flex;
    align-items: center;
  }
  .l-footer {
    margin: 0 auto;
    line-height: 20px;
  }
  
}
</style>
