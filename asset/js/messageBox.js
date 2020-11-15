// 日志内容 messageBox 的渲染方式


var messageBox = messageBox || {};
messageBox.setContent = function(messageBoxContent){
    var messageBox = document.createElement('div');
    messageBox.setAttribute('class','messageBox '+ messageBoxContent.className);
    messageBox.style.animation = 'fadeIn ' + data.transitionTime/1000 +'s ease'
    document.getElementsByClassName('content').item(0).appendChild(messageBox);
    switch(messageBoxContent.className){
        case 'message':
            var messageContent = document.createElement('div');
            messageContent.setAttribute('class','messageContent');
            messageContent.innerText = messageBoxContent.messageContent.message;
            messageBox.appendChild(messageContent);
            break;
    }
    
}

/** 切换日志
 * @param flag 指定切换方向，为 0 表示上一条，为 1 表示下一条
 */
messageBox.changeContent = function(flag){
    if(!flag && contentIndex > 0){      
        data.transitionFlag = false;
        this.cleanContent(flag);
        contentIndex --;
        this.changeContentByIndex(contentIndex);
    }else if(flag && contentIndex < variable.length-1){
        data.transitionFlag = false;
        this.cleanContent(flag);
        contentIndex ++;
        this.changeContentByIndex(contentIndex);
    }
}
messageBox.changeContentByIndex = function(index){
    this.setContent(variable[index]);
}

/** 用于清除 messageBox 中的内容
 * @param flag 表示消息隐退方式，为 0 向右隐退，为 1 向左隐退，默认为 1
 */
messageBox.cleanContent = function(flag=1){
    var content = document.getElementsByClassName('messageBox').item(0);
    if(content){
        // content.style.transition = 'all ' + data.transitionTime/1000 + 's ease';
        if(!flag)
            addObjectClass(content,'fadeOutToRight');
        else    
            addObjectClass(content,'fadeOutToLeft');
        setTimeout(()=>{
            content.parentNode.removeChild(content);
            data.transitionFlag = true;
        },data.transitionTime+50)
    }
}
        