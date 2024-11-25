// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    element.addEventListener(event, listener);
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    element.removeEventListener(event, listener);
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener,但是listener只执行一次
function addEventOnce(element, event, listener) {
    // your implement
    element.addEventOnce(event, listener);
}

// 例如：
function clicklistener(element) {
  element.addEventListener("click", function(e) {
    console.log("clicked");
  });
}

// 测试用例
addEvent("#doma", "click", clicklistener);//给id 为 doma 元素的点击事件添加了clicklistener事件处理程序
removeEvent("#doma", "click", clicklistener);//给 id 为 doma 元素的点击事件删除了clicklistener事件处理程序
addEvent("#doma", "click", onceClicklistener);//给 id 为 doma 元素的点击事件添加了onceClicklistener事件处理程序，doma 元素点击后onceClicklistener事件处理程序从 doma 元素上删除