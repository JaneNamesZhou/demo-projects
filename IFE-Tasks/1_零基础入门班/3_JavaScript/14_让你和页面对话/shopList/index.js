
//TODO:实现购物清单的添加和删除
// 请您在 index.js 中实现以下功能

// 实现购物清单的添加。给添加按钮绑定点击事件处理程序:addItemToList 函数

/** 实现 addItemToList 函数功能，给 id 为 shopping-list 的 列表添加购物清单子项元素，值为输入框中的取值。每一个新生成购物清单子项元素格式如下：
<li>
  <p>项目名称</p>
  <button>删除</button>
</li>
您可以使用 insertAdjacentHTML 和 Documentdocu.createElement()这两种方式都实现一次
**/

//insertAdjacentHTML
function addItemToList(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const item = document.getElementById('item-name');
    const todosList = document.getElementById('shopping-list');
    const itemText = item.value.trim();
    if (itemText) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `<p>${itemText}</p><button>删除</button>`;
        todosList.insertAdjacentElement('afterbegin', newTask);// 此外，项目的顺序应与数组中的顺序相同。因此，第一个项目应该首先显示（在顶部）。

        // 清空输入框
        item.value = '';
    }

}
//Document.createElement()
// function addItemToList(event) {
//     event.preventDefault(); // 阻止表单默认提交行为
//     const item = document.getElementById('item-name');
//     const todosList = document.getElementById('shopping-list');
//     const itemText = item.value.trim();
//     if (itemText) {
//         // 创建新的 li 元素
//         const newTask = document.createElement('li');
//         const p = document.createElement('p');
//         p.textContent = itemText;
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '删除';
//         newTask.appendChild(p);
//         newTask.appendChild(deleteButton); 

//         // 将新的 li 元素添加到 ul 中
//         todosList.appendChild(newTask);

//         // 清空输入框
//         item.value = '';
//     }

// }


/** 实现购物清单的删除功能。点击删除按钮，实现删除该子项，您有两种实现方式：

给每一个删除按钮都绑定点击事件处理程序:removeItemFromList ，完成删除购物清单项，但是您会发现，每此新生成的购物清单子项，您都需要绑定一次，这很麻烦

更优秀的处理办法是：使用事件委托的方式， 给 id 为 shopping-list 的 列表绑定点击事件处理程序:removeItemFromList，实现删除购物清单子项
实现 removeItemFromList 函数，完成删除功能
**/

const shoppingList = document.getElementById('shopping-list');

// 使用事件委托
shoppingList.addEventListener('click', removeItemFromList); 

function removeItemFromList(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        const listItem = event.target.parentElement;
        shoppingList.removeChild(listItem);
    }
}




