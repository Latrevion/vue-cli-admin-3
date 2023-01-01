<template>
    <!--详情页-->
    <div class="min-body">
        <div class="detailPage-box">
            <!--订单信息-->
            <div class="">
                订单信息

            </div>

            <!--商品信息-->


        </div>
    </div>
</template>

<script>
    export default {
        name: "detailPage",
        data:function () {
            return {

            }
        },
        created() {
            console.log(this.$store.state.putDetailPageMsg);
        }
    }
</script>

<style lang="scss" scoped>
    .detailPage-box{
        width: calc(100% - 100px);
        margin:0 auto;
        padding-top:40px;
    }

</style>
