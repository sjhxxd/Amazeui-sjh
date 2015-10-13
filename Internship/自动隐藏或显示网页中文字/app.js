/**
 * Created by vaio on 2015/10/13.
 */

    function Rdo_Click(v){
//            v=1,执行false,v=0,执行true
        var blnShow=(v)?false:true;
//            给art添加属性
        var strArt=document.getElementById("art");
        strArt.setAttribute("hidden",blnShow);
    }


