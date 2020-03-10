

/*
面向过程
* 1.生成子弹
* 2.移动端鼠标点击位置
* 3.生成烟花例子
* 4.烟花粒子炸开


面向对象*/

//    1.生成炸弹
document.onclick = function(e) {
    //    获取鼠标坐标位置
    //    this指向谁用指代谁 arguments 实参集合
    //     console.log(this);
    //     console.log(arguments);
    console.log(e);
    //兼容性解决
    var e = e || window.event;
    var x = e.clientX,
        y = e.clientY;
    var h = window.innerHeight;
    //    生成烟花
    firework(x,y,h);

}




//封装firework

//定时器变量
var timer = null;
function firework(x,y,h) {
    var oDiv = document.createElement("div");
    oDiv.className = "firework";
    oDiv.style.left = x + "px";
    oDiv.style.top = h + "px";
    //把div添加到body里面
    document.body.appendChild(oDiv);
//    子弹向上移动
    // * 2.移动端鼠标点击位置
//    定时器
    var speed = 10;
    timer = setInterval(function() {
        //获取样式中的顶部 = 原来的顶部 - 给定的值 + px
        oDiv.style.top = oDiv.offsetTop - speed + "px";
        //判断 当到达鼠标点击位置 停止
        if (oDiv.offsetTop <= y) {
            clearInterval(timer);
        //    清除子弹
            document.body.removeChild(oDiv);
        //    生成烟花粒子
            createFires(x, y);

        }
    },30);
}


//封装createFires
// * 3.生成烟花例子
function createFires (x, y) {
     //生成50-100个粒子
     var n = Math.ceil(Math.random()*50) + 50;
     var fires = [];
     for (var i=0; i < n; i++) {
         fires[i] = document.createElement("div");
         fires[i].className = "fires";
         fires[i].style.left = x + "px";
         fires[i].style.top = y + "px";
         //给每个烟花粒子随机速度值
         fires[i].speedX = Math.random()*20 - 10;
         fires[i].speedY =Math.random()*20 - 10;
         document.body.appendChild(fires[i]);
     }
//     定时器改变粒子炸开
// * 4.烟花粒子炸开
    setInterval(function() {
        for (var j = 0;j<n; j++) {
            fires[j].style.left = fires[j].offsetLeft + fires[j].speedX + "px";
            fires[j].style.top = fires[j].offsetTop + fires[j].speedY + "px";
            fires[j].speedY += 1;
        }
    },30);
}
