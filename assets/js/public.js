/**
 * Created by vaio on 2015/10/12.
 */
/**
 * �ж��ն�����
 */
var browser={
    versions:function(){
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE�ں�
            presto: u.indexOf('Presto') > -1, //opera�ں�
            webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//����ں�
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻���uc�����
            iPhone: u.indexOf('iPhone') > -1 , //�Ƿ�ΪiPhone����QQHD�����
            iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
            webApp: u.indexOf('Safari') == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};

/**
 * ��ȡ����url�Ĳ���
 * @param  [varname] [description]{string} name ������
 */
function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

/**
 * ������������
 * @param {String} browserStr �������־�ַ���
 * @return {boolean}
 */
function browserType(browserStr){
    return (navigator.userAgent.indexOf(browserStr) != -1) ? true: false;
}

