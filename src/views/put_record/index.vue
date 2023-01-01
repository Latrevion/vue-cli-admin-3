<template>
   <div class="min-body">
      <!--搜索-->
      <div class="zhb-search-row">
         <!--综合查询-->
         <div class="zhb-search-box">
            <span>综合查询</span>
            <el-input
                    v-model="params.query"
                    placeholder="不限"
                    class="input"
            />
         </div>
         <!--入库时间-->
         <div class="zhb-search-box">
            <span>入库时间</span>
            <el-date-picker
                    class="ict-date-picker"
                    v-model="params.time"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy/MM/dd"
                    value-format="yyyy-MM-dd"

            />
         </div>
         <div class="ict-query-button" >查 询</div>
      </div>
      <!--记录-->
      <div class="zhb-allnum-tip">
         <i class="icon zhb-iconfont zhb-icongantanhao"></i>
         共{{allNum}}条入库记录
      </div>
      <!--tabel展示-->
      <div class="zhb-tabel-box">
         <el-table
                 v-loading="loading"
                 border
                 :data="tableData"
                 :header-cell-style="{
                            background: '#f6f6f6',
                            width: '1184px',
                            height: '54px',
                            lineHeight: '54px',
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.85)',
                        }">
            <el-table-column  label="序号" width="50" >
               <template slot-scope="scope">
                  {{scope.$index+1}}
               </template>
            </el-table-column>
            <el-table-column prop="num" label="采购订单号" />
            <el-table-column prop="num2" label="订单号(电商交易专区)" />
            <el-table-column prop="title" label="请购单标题" />
            <el-table-column prop="gys" label="供应商" />
            <el-table-column prop="dw" label="采购单位" />
            <el-table-column prop="je" label="订单总金额" />
            <el-table-column prop="dz" label="收货地址" />
            <el-table-column label="操作" width="85">
               <template slot-scope="scope">
                  <el-button
                          type="text"
                          size="small"
                          @click="getDetailPage(scope.row)"
                  >查看</el-button>
                  <el-button
                          type="text"
                          size="small"
                  >删除</el-button>
               </template>
            </el-table-column>
         </el-table>
      </div>
      <!--分页-->
      <div class="zhb-page-box">
         <el-pagination
                 @current-change="handleCurrentChange"
                 :current-page="params.pageNum"
                 background
                 :page-sizes="[1, 2, 5, 10]"
                 :page-size="params.pageSize"
                 layout="total, prev, pager, next,sizes ,jumper"
                 :total="allNum"
         ></el-pagination>
      </div>
   </div>
</template>

<script>

    export default {
        name: "index",
        data: function () {
            return {
               params:{
                  query:'',
                  time:'',
                  pageNum:1,
                  pageSize:10
               },
               allNum:198,//总数
               loading:false,
               tableData:[
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
                  {num:"4900049322",num2:"202106110000004433",title:"2021年06月份电",gys:"深圳齐心集团",dw:"国网安徽省电力有限公司",je:"2802755",dz:"安徽省池州市贵池江口街道办事处殷汇路与生"},
               ]
            }
        },
        methods: {
           //分页查询
           handleCurrentChange(newPage) {
              this.params.pageNum = newPage
           },
           //查看详情页
           getDetailPage(row){
              const that = this;
              console.log(this.$router);
              this.$router.push('/detailPage')
              that.$store.commit('changePutDetailPageMsg',row)
              setTimeout(function () {
                 that.$store.commit('changeNavMenuData',that.$route.meta.data)
              },50)
           }
        }
    }
</script>

<style lang="scss" scoped>
   @import './index';
</style>
<style lang="scss">
   .zhb-search-box{
      .el-input__inner{
         height: 32px!important;
      }
      .el-range-editor.el-input__inner {
         border: 1px solid #DCDFE6!important;
      }
      .el-date-editor .el-range__icon {
         margin-top: -7px;
      }
   }
</style>
