/* 公用js */
(function(window,undefined){
    YLZ = window.YLZ || {};
    //外网服务器
    YLZ.base='http://1600f753m5.iok.la/doctest/';
    //内网
    //YLZ.base = 'http://172.16.1.59:8081/';
    window.isLogin = false;
    YLZ.len = function(s){
           return s.length;
           var l = 0;
           var a = s.split("");
           for (var i = 0; i < a.length; i++) {
               if (a[i].charCodeAt(0) < 299) {
                   l++;
               } else {
                   l += 2;
               }
           }
           return l;
    };
    YLZ.getLocalTime=function(nS) {
        return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,11)
    };
    $('.top em').on('tap',function(){
        var preUrl = document.referrer;
        if(preUrl.indexOf('code')!=-1 && preUrl.indexOf('state')!=-1){
            location.href = preUrl.split('?')[0];
        }else{
           window.history.back(-1); 
        }
        
    });
    $('.nav dl').eq(0).on('tap',function(){
        location.href='home_page.html'
    });
    String.prototype.getQuery = function(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = this.substr(this.indexOf("\?")+1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    };
    var url=location.href;
    if(url.getQuery('code')!=null&&url.getQuery('code')!=''&&url.getQuery('state')!=null&&url.getQuery('state')!='') {
        //debugger;
        $.ajax({
            type: 'post',
            url: YLZ.base + 'pat/sessions?',
            contentType: 'application/json; charset=utf-8',
            async:false,
            dataType: 'json',
            data: JSON.stringify({
                code: url.getQuery('code'),
                state: url.getQuery('state')
            }),
            success: function (data) {
                if(data.result.code!=50001){
                    window.patientId = data.userId;
                    window.xyftoken = data.token;
                    window.YLZ.token = data.token;
                    localStorage.setItem("userId", window.patientId);
                    localStorage.setItem("userToken", window.xyftoken);
                    localStorage.setItem("userToken1", window.YLZ.token);
                    window.isLogin = true;
                }
            }
        });
    }
})(window);


