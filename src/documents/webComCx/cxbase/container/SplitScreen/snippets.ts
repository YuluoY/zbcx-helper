export const snippets = {
  basic: {
    title: '基础用法',
    description: '自定义分屏案例，使用`cx-image-view`组件',
    code: `<template>
  <div>
    <p>自定义分屏案例，使用\`cx-image-view\`组件</p>
    <section class="section" style="height: 500px;  overflow: scroll;">
      <cx-split-screen :comList="comList"></cx-split-screen>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comList: [
        {
          com: 'cx-image-view',
          param: { src: '/static/file/奥特曼.jpg' }
        },
        {
          com: 'cx-image-view',
          param: { src: '/static/file/怪兽1.webp' }
        },
        {
          com: 'cx-image-view',
          param: { src: '/static/file/奥特曼.jpg' }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 250px;
  width: 700px;
}
</style>`
  }
}; 