/*公共的js样式*/
(function(window,undefined){
    //添加星星
    window.cloudFunction={
        pageNum:1,
        pageSize:8,
        addStar:function(data,html){
            if(Math.ceil(data.score)==1){
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }else if(Math.ceil(data.score)==2){
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }else if(Math.ceil(data.score)==3){
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }else if(Math.ceil(data.score)==4){
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }else if(Math.ceil(data.score)==5){
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">';
                html+='<img src="../statics/img/yellow.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }else{
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">';
                html+='<img src="../statics/img/gray.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                return html;
            }
        },
        addTeam:function(data){
            for(var i=0;i<data.length;i++){
                var html='';
                html+='<dl data-id="'+data[i].id+'">';
                if(data[i].images==''||data[i].images==null){
                    html+='<dt><img src="../statics/img/default_head.jpg" alt=""></dt>';
                }else{
                    html+='<dt><img src="'+data[i].images+'" alt=""></dt>';
                }
                html+='<dd>'+data[i].name+'<span class="free_enquiry border" data-id="'+data[i].id+'">免费问诊</span></dd>';
                html+=' </dl>';
                $('#expert_team').append(html)
            }
        }
    };

    //搜索页面的回退事件
    $('.search').on('tap','em img',function(){
        window.history.back(-1);
    });
    //热门医生,推荐医生的跳转,也包括首页的跳转
    $('.old_expert,.relative_doc,#hospital_experts').on('click','dl',function(){
        localStorage.setItem('doctorId',$(this).attr('data-id'));
        location.href='doctorPage.html';
    });
    $('.old_expert').on('click','.free_enquiry',function(){
        localStorage.setItem('drop','no');
        localStorage.setItem('doctorId',$(this).attr('data-id'));
        location.href='fxychat.html';
    });

    //为每一个医院添加点击事件
    $('#addHospital').on('click','li',function(){
        localStorage.setItem('xyfId',$(this).attr('data-id'));
        location.href='recommend_hospital.html';
    });
    $('#search_hospital').on('click','dl',function(){
        localStorage.setItem('xyfId',$(this).attr('data-id'));
        location.href='recommend_hospital.html';
    });


})(window);