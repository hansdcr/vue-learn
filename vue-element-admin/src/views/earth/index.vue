<template>
  <div>
      <div id="mapContainer" style="width:600px; height:600px"></div>
      <div ref="myDialog">
        <el-button type="text" @click="dialogVisible = true" >点击打开 Dialog</el-button>
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
      </div>
        <!-- <div class="hans">
            <MyDialog :show="showDialog" @confirm="confirm" @cancel="cancel" :title="'弹窗组件标题'" :confirmText="`确认`">
                <p>主题内容</p>
                <p>主题内容</p>
            </MyDialog>
        </div> -->
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china.js';
// import MyDialog from '../dialog/index'


export default {
  name: "Map",
//   components: {
//        MyDialog
//   },
  mounted() {
    this.initCharts()
  },
  created() {
      // this.initCharts()
  },
  data() {
    return {
        dialogVisible: false,
        id: 'map',
        chart: null,
        showDialog: true
    };
  },
  methods: {
    cancel(show) {
        //this.showDialog = show
        console.log('========取消')
        this.showDialog = false
    },
    confirm(show) {
        this.showDialog = show
        console.log('--------确认')
    },

    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },

    initCharts() {
        var myChart = this.$echarts.init(document.getElementById('mapContainer'))
        myChart.on('click', (params)=>{
            console.log('---------',params)
            this.dialogVisible = true

            // let divObj = document.getElementById('myDialog')
            let divObj = this.$refs.myDialog
            console.log('----dom divObj', divObj)
            divObj.style.width=250
            divObj.style.height300
            divObj.style.border='1px solid #ccc'
            divObj.style.position='absolute'
            divObj.style.top = divY
            divY.style.left = divX

            // divObj.css({
            //     width: 250,
            //     height: 300,
            //     border: '1px solid #ccc',
            //     position: 'absolute',
            //     top: divY,
            //     left: divX,
            //     // backgroundColor: tomato
            // })

            let divX = getMousePos().x
            let divY = getMousePos().y

            
        })
        // 获取横纵坐标
        function getMousePos(event){
            let e = event || window.event
            let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
            let scrollY = document.documentElement.scrollTop || document.body.scrollTop
            let x = e.pageX || e.clientX + scrollX
            let y = y = e.pageY || e.clientY + scrollY
            console.log('鼠标位置x,y', x,y)
            return { x: x, y: y }
        }

        var option = {
            // 标题
            title : {
                text: '中国地区图',
                subtext: '中国地区图',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                show: true
            },
            // 图例按钮
            legend: {
                orient: 'vertical',
                x:'left',
                data:['省份']
            },
            dataRange: {
                min: 0,
                max: 2500,
                x: 'left',
                y: 'bottom',
                text:['高','低'],           
                calculable : true
            },
            // 工具栏
            // toolbox: {
            //     show: true,
            //     orient : 'vertical',
            //     x: 'right',
            //     y: 'center',
            //     feature : {
            //         mark : {show: true},
            //         dataView : {show: true, readOnly: false},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [
                {
                    name: '省份',
                    type: 'map',
                    mapType: 'china',
                    roam: false,

                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '北京',value: Math.round(Math.random()*1000)},
                        {name: '天津',value: Math.round(Math.random()*1000)},
                        {name: '上海',value: Math.round(Math.random()*1000)},
                        {name: '重庆',value: Math.round(Math.random()*1000)},
                        {name: '河北',value: Math.round(Math.random()*1000)},
                        {name: '河南',value: Math.round(Math.random()*1000)},
                        {name: '云南',value: Math.round(Math.random()*1000)},
                        {name: '辽宁',value: Math.round(Math.random()*1000)},
                        {name: '黑龙江',value: Math.round(Math.random()*1000)},
                        {name: '湖南',value: Math.round(Math.random()*1000)},
                        {name: '安徽',value: Math.round(Math.random()*1000)},
                        {name: '山东',value: Math.round(Math.random()*1000)},
                        {name: '新疆',value: Math.round(Math.random()*1000)},
                        {name: '江苏',value: Math.round(Math.random()*1000)},
                        {name: '浙江',value: Math.round(Math.random()*1000)},
                        {name: '江西',value: Math.round(Math.random()*1000)},
                        {name: '湖北',value: Math.round(Math.random()*1000)},
                        {name: '广西',value: Math.round(Math.random()*1000)},
                        {name: '甘肃',value: Math.round(Math.random()*1000)},
                        {name: '山西',value: Math.round(Math.random()*1000)},
                        {name: '内蒙古',value: Math.round(Math.random()*1000)},
                        {name: '陕西',value: Math.round(Math.random()*1000)},
                        {name: '吉林',value: Math.round(Math.random()*1000)},
                        {name: '福建',value: Math.round(Math.random()*1000)},
                        {name: '贵州',value: Math.round(Math.random()*1000)},
                        {name: '广东',value: Math.round(Math.random()*1000)},
                        {name: '青海',value: Math.round(Math.random()*1000)},
                        {name: '西藏',value: Math.round(Math.random()*1000)},
                        {name: '四川',value: Math.round(Math.random()*1000)},
                        {name: '宁夏',value: Math.round(Math.random()*1000)},
                        {name: '海南',value: Math.round(Math.random()*1000)},
                        {name: '台湾',value: Math.round(Math.random()*1000)},
                        {name: '香港',value: Math.round(Math.random()*1000)},
                        {name: '澳门',value: Math.round(Math.random()*1000)}
                    ]
                }
            ]
            } // end option
        myChart.setOption(option)
    } // end initCharts
  } // end methods
} // end export default
</script>

<style lang="scss" scoped>
.hans {
    width: 10px;
    height: 10px;
    // background-color: tomato;
}
</style>