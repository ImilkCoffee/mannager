<template >
<div class='box'>
    <div class="msg">
    <p class='error'>404</p>
    <span>对不起!你输入的网址找不到了!</span>
    </div> 
</div>
    
</template>

<script>
export default {

}
</script>

<style lang='scss'>
html,body{
    padding: 0;
    margin:0;
    .box{
    background: url('../assets/psb1.jpg')no-repeat center/cover;
    color:aliceblue;
    height: 100%;
    font-family: '微软雅黑';
.msg{
    position: absolute;
    top:150px;
    left: 200px;
    .error{
        font-size: 80px;
        margin-left: 40px;
        color: blue;
    }
}
}
}



</style>
