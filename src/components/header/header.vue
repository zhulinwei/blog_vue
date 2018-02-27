<template>
  <!-- 
    l-header 是头部最大的框，用于设置height和line-height
    l-heaader-wrapper用于设置头部的最大的宽度960，居中，flex布局，图片占大份，文字占小份
  -->
  <div class="l-header-wrapper">
    <div class="l-header">
      <div class="l-header-img l-hidden-xs l-hidden-ms">
        <img class="logo" src="./logo.png"  alt="logo" width="150px" height="90px">
      </div>
      <div class="l-header-tab">
        <div class="l-header-tab-item">
          <router-link to="/introduce">主页</router-link>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/blog/index">博客</router-link>
          <!-- <router-link :to="{ name: 'blog' }">博客</router-link> -->
        </div>
        <div class="l-header-tab-item">
          <a href="https://github.com/zhulinwei">联系我</a>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/search">搜索</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .l-header-wrapper {
    height: 40px;
    overflow: hidden;
    background-color: #ffffff;
  }
  .l-header {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    overflow: hidden;
  }
  .l-header-img {
    flex: 2;
  }
  .l-header-tab {
    flex: 1;
    display: flex;
    line-height: 40px;
  }
  .l-header-tab-item {
    flex: 1;
    text-align: center;
  }
  @media (min-width: 479px) {
    .l-header-wrapper {
      height: 90px;
      overflow: hidden;
      background-color: #ffffff;
    }
    .l-header-tab {
      flex: 1;
      display: flex;
      line-height: 90px;
    }
  }
</style>