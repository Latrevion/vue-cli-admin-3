<template>
   <div class="min-body">
      <!--添加用户-->
      <div class="add-user-box">
         <div class="ict-query-button" >添加用户</div>
      </div>
      <!--表格展示-->
      <!--tabel展示-->
      <div class="user-tabel-box">
         <el-table
                 v-loading="loading"
                 border
                 :data="userData"
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
            <el-table-column prop="user" label="用户名" />
            <el-table-column prop="phone" label="手机号" />
            <el-table-column prop="time" label="创建时间" />
            <el-table-column label="操作" width="85">
               <template slot-scope="scope">
                  <el-button
                          type="text"
                          size="small"
                  >删除</el-button>
                  <el-button
                          type="text"
                          size="small"
                          @click="handleClick(scope.row)"
                  >重置</el-button>
               </template>
            </el-table-column>
         </el-table>
      </div>


   </div>
</template>

<script>
    export default {
        name: "user",
        data: function () {
            return {
               userData:[
                  {user:"姜磊",phone:"13134245678",time:"2021-08-04 17:45:31"},
                  {user:"李新",phone:"15874521745",time:"2021-08-04 17:45:31"},
                  {user:"姜磊",phone:"13134245678",time:"2021-08-04 17:45:31"},
                  {user:"姜磊",phone:"13134245678",time:"2021-08-04 17:45:31"},

               ],
               loading:false
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
   @import "./user";
</style>
