<template>
    <div >
        <img src="./logo.png" alt="" id="image"/>
    </div>
</template>
<script>
export default {
    name: 'MyDialog',
    mounted() {
        this.init()
    },
    methods: {
        init(){
                var image = document.getElementById("image")
                var clientX = 0, clientY = 0
                document.onclick = function(event){
                    var event = event || window.event;
                    console.log('----clientX, clientY', event.clientX, event.clientY)
                    clientX = event.clientX
                    clientY = event.clientY
                }
                setInterval(function(){
                    console.log(image.style.left, image.style.top)
                    image.style.left = clientX / 2 +"px"
                    image.style.top = clientY / 2  +"px"
                    // image.offsetLeft = clientX/2 +"px"
                    // image.offsetTop = clientY/2 + "px"
                }, 1000)
        }
    }
}

</script>

<style lang="less" scoped>
#image {
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    position: absolute;
    background-color:tomato;
}
</style>