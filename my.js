//运动框架
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var off=true;
        var current=0;
        for (var attr in json){
            //var current = parseInt(getStyle(obj,attr));
            if (attr == "opacity"){
                current=json[attr]
            }
            else{
                var current = parseInt(getStyle(obj,attr));
            }
            speed = (json[attr] - current) / 10;
            speed= speed >0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr == "opacity"){
                obj.style.opacity=json[attr] / 100;
                obj.style.filter= "alpha(opacity="+json[attr]+")";
            }
            else if(attr == "zIndex"){
                obj.style.zIndex=json[attr]
            }
            else
            {
                obj.style[attr]=current + speed + "px"
            }


            /*if (!speed){
             clearInterval(obj.timer);
             alert("到位置了")
             }*/
            if (current != json[attr]) {
                off = false;
            }
        }

        if (off){
            clearInterval(obj.timer);
            //alert("到位置了")
            if (fn){
                fn();
            }
        }

    },30)

}

function $(id){return document.getElementById(id)}

function getStyle(obj,attr){  //谁的      那个属性
    if (obj.currentStyle){
        //ie
        return obj.currentStyle[attr]
    }
    else{
        return getComputedStyle(obj,null)[attr]
    }
}

function scroll(){
    if (document.body.scrollTop || document.body.scrollLeft) //正常浏览器
    {
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
    else
    {
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
}