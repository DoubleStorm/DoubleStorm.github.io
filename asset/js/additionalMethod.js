var additionalMethod = new Object();
additionalMethod.changeStyle = function(){
    let styles = data.styles;
    let content = document.querySelector('.content');
    let contentClass = content.getAttribute('class').split(' ');
    let nowStyleIndex = styles.indexOf(contentClass[1]);
    contentClass.pop();
    contentClass.push(styles[(nowStyleIndex + 1)%(styles.length)]);
    content.setAttribute('class',contentClass.join(' '));
}