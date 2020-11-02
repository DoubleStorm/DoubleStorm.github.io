/** 给 DOM 元素增加类 
 * @param obj 指定一个 DOM 元素
 * @param className 要添加的类的名称
*/
function addObjectClass(obj,className){
    let classString = obj.getAttribute('class') || "";
    let classArr = classString ? classString.split(" ") : [];
    for(var i=0;i<classArr.length;i++){
        if(classArr[i] == className){
            break;
        }
    }
    if(i == classArr.length){
        classArr.push(className);
        obj.setAttribute('class',classArr.join(' '));
    }
}

/** 给 DOM 元素减少类 
 * @param obj 指定一个 DOM 元素
 * @param className 要减少的类的名称
*/
function removeObjectClass(obj,className){
    let classString = obj.getAttribute('class') || "";
    let classArr = classString ? classString.split(" ") : [];
    for(let i in classArr){
        if(classArr[i] == className){
            classArr.splice(i,1);
            obj.setAttribute('class',classArr.join(' '));
            break;
        }
    }
}

/** 若 DOM 元素具有该类则将其删除，若没有则将其添加
 * @param obj 指定 DOM 元素
 * @param className 指定类名
 */
function toggleObjectClass(obj,className){
    let classString = obj.getAttribute('class') || "";
    let classArr = classString ? classString.split(" ") : [];
    let flag = true;
    for(let i in classArr){
        if(classArr[i] == className){
            classArr.splice(i,1);
            flag = false;
            break;
        }
    }
    if(flag){
        classArr.push(className);
    }
    obj.setAttribute('class',classArr.join(' '));
}