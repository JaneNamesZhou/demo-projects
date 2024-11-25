
//留言数据对象
const comments = [
  {
    name: 'Danny',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    time: 'Thu Jan 12 2022'
  },
  {
    name: 'Jackson',
    comment: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    time: 'Thu Jan 11 2022'
  }
];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = (comments) => {
  // your code here 
  comments.forEach(item => {
    document.querySelector('#comments').insertAdjacentHTML('afterend', `
    <hr />
    <h4>
      <span>${item.name}</span>
      <span class="date">${item.time}</span>
    </h4>
    <p>${item.comment}</p>`);
  })
}

// 调用
renderComments(comments);

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = (comments) => {
  // your code here
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;
  const time = new Date();
  // 创建 hr 元素
  const hr = document.createElement('hr');

  // 创建 h4 元素
  const h4 = document.createElement('h4');
  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  const dateSpan = document.createElement('span');
  dateSpan.className = 'date';
  dateSpan.textContent = time;
  h4.appendChild(nameSpan);
  h4.appendChild(dateSpan);

  // 创建 p 元素
  const p = document.createElement('p');
  p.textContent = comment;

  // 创建一个临时的容器
  const container = document.createElement('div');
  container.appendChild(hr);
  container.appendChild(h4);
  container.appendChild(p);

  // 将临时容器添加到 #comments 之后
  const commentsDiv = document.querySelector('#comments');
  commentsDiv.parentNode.insertBefore(container, commentsDiv.nextSibling);


}


/**
 * @description 切换关闭留言和开启留言两种模式
 */
const toggleComment = () => {
  // your code here 


  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#comment');
  const closeButton = document.querySelector('.close');
  const commentBox = document.querySelector('.submit');
  if (closeButton.textContent === '开启留言') {
    // 禁止留言模式:给留言按钮以及两个姓名和留言输入框添加禁用属性，并且禁止留言按钮文本变为开启留言
    nameInput.disabled = false;
    commentInput.disabled = false;
    closeButton.textContent = '关闭留言';
    commentBox.disabled = false;
  } else {
    // 开启留言模式:给留言按钮以及两个姓名和留言输入框删除禁用属性，并且禁止留言按钮文本变为关闭留言
    nameInput.disabled = true;
    commentInput.disabled = true;
    closeButton.textContent = '开启留言';
    commentBox.disabled = true;
  }





}
