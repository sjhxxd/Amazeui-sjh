/**
 * Created by vaio on 2015/10/13.
 */

    function Rdo_Click(v){
//            v=1,ִ��false,v=0,ִ��true
        var blnShow=(v)?false:true;
//            ��art�������
        var strArt=document.getElementById("art");
        strArt.setAttribute("hidden",blnShow);
    }


