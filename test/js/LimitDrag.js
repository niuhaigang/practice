function LimitDrag (id){  
    Drag.call(this,id);  
}  
  
for(var i in Drag.prototype){  
    LimitDrag.prototype[i] = Drag.prototype[i];  
}  
  
//重写 MouseMove 函数  
  
LimitDrag.prototype.fnMouseMove = function(ev){  
  
    var oEvent = ev||event;  
  
    var left = oEvent.clientX - this.divX;  
    var top = oEvent.clientY - this.divY  
  
    if(left<0){  
        left = 0;  
    }else if(left >document.documentElement.clientWidth - this.oDiv.offsetWidth){  
        left= document.documentElement.clientWidth - this.oDiv.offsetWidth;  
    }  
  
    if(top<0){  
        top = 0;  
    }else if(top > document.documentElement.clientHeight - this.oDiv.offsetHeight){  
        top =  document.documentElement.clientHeight - this.oDiv.offsetHeight  
    }  
  
    this.oDiv.style.left = left+'px';  
    this.oDiv.style.top = top+'px';  
  
}  