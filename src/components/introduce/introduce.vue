<template>
  <div>
    <!-- <l-header></l-header> -->
    <div class="l-introduce-wrapper">
      <div class="l-introduce">
        <div class="l-introduce-row lightGrey">
          <div class="introduce-item">
            <h2>Level.Z</h2>
            <p><span>Full Stack developer / Node Developer</span></p>
            <h2>一个有思想的全栈/node工程师</h2>
            <p>我懂生活，懂感恩，是一个奋进的小青年。人生是一杯酒，我是一位品酒的人。</p>
          </div>
          <div class="introduce-item l-hidden-xs"></div>
        </div>
      </div>
      <div class="l-introduce darkGrey">
        <div class="l-introduce-row">
          <div class="introduce-item l-hidden-xs"></div>
          <div class="introduce-item">
            <h2>关于我</h2>
            <p>个人网址：www.51linwei.top</p>
            <p>github地址：https://github.com/zhulinwei</p>
            <p>微信：1171567018</p>
            <p>微信订阅号：AnttyZhu</p>
          </div>
        </div>
      </div>
    </div>
    <l-footer></l-footer>
  </div>
</template>

<script>
  // import header from 'components/header/header.vue'
  import footer from 'components/footer/footer.vue'
  export default {
    name: 'app',
    components: {
      // "l-header": header,
      'l-footer': footer,
    }
  }
</script>

<style>
  .l-introduce {
    overflow: hidden;
  }
  .l-introduce.darkGrey {
    background: #343434;
    color: #fff;
  }
  .l-introduce-row {
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 960px;
  }
  .introduce-item {
    flex: 1;
    margin-left: 20px;
    line-height: 30px;
  }
  .introduce-item h2 {
    font-size: 18px;
  }
  @media (min-width: 479px) {
    .l-introduce-row {
      display: flex;
      padding: 70px 0 20px 0;
    }
  }
</style>
