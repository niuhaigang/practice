
function Drag(id){  
  
    var _this = this;  
  
    this.divX = 0;  
    this.divY = 0;  
  
    this.oDiv = document.getElementById(id);  
  
    this.oDiv.onmousedown = function(ev){  
        _this.fnMouseDown(ev);  
    }  
}  
  
Drag.prototype.fnMouseDown = function(ev){  
  
    var _this = this;  
  
    var oEvent = ev||event;  
  
    this.divX = oEvent.clientX - this.oDiv.offsetLeft;  
    this.divY = oEvent.clientY - this.oDiv.offsetTop;  
  
    document.onmousemove = function(ev){  
        _this.fnMouseMove(ev);  
  
        return false;//取消选中  
    };  
  
    document.onmouseup = function(){  
        _this.fnMouseUp();  
    }  
  
}  
  
Drag.prototype.fnMouseMove = function(ev){  
    var oEvent = ev||event;  
  
    this.oDiv.style.left = oEvent.clientX - this.divX+'px';  
    this.oDiv.style.top = oEvent.clientY- this.divY+'px';  
}  
  
Drag.prototype.fnMouseUp = function(){  
    document.onmousemove = null;  
    document.onmousedown = null;  
} 