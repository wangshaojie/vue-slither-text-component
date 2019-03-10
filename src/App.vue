<template>
  <div id="app">
    <slither-text :repeat="12" >
      <template v-for="item in stock">
        <span class="badge ml-2" :class="parseInt(item.float) >=0 ? 'badge-danger' : 'badge-success'">{{item.close}}</span>
          {{item.name}}
      </template>
    </slither-text>

    <slither-text :paused="true" >
      这个暂停了——————>>当地时间7日，美国总统国家安全事务助理博尔顿接受福克斯新闻网采访时表示，总统特朗普对与朝鲜进行更多对话持开放态度。
    </slither-text>


    <slither-text :duration="30" >
      这个延迟了——————>>当地时间7日，美国总统国家安全事务助理博尔顿接受福克斯新闻网采访时表示，总统特朗普对与朝鲜进行更多对话持开放态度。
    </slither-text>

    <slither-text :key="text">
      {{ text }}
    </slither-text>
  </div>
</template>

<script>
  import SlitherText from './components/SlitherText.vue'
  export default {
    name: 'App',
    components: {
      SlitherText
    },
    data() {
      return {
        isPaused: false,
        text : "lalala",
        stock:[{
          'name' : '上证指数',
          'close' : '2969.86',
          'float' : '-4.40%'
        },
          {
            'name' : '深证指数',
            'close' : '9363.72',
            'float' : '-3.25%'
          },{
            'name' : '恒生指数',
            'close' : '28228.42',
            'float' : '1.91%'
          },{
            'name' : '特斯拉',
            'close' : '284.140',
            'float' : '2.73%'
          },{
            'name' : '英伟达',
            'close' : '150.640',
            'float' : '1.380%'
          },{
            'name' : '携程',
            'close' : '40.810',
            'float' : '1.32%'
          },{
            'name' : '哔哩哔哩',
            'close' : '17.940',
            'float' : '0.79%'
          },{
            'name' : '好未来',
            'close' : '34.750',
            'float' : '0.32%'
          }]

      }
    }
  }
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
  table code {
    white-space: nowrap;
  }
</style>