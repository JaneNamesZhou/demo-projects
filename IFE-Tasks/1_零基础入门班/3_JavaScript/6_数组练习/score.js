
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let html = '';
    // your code here
    rows.forEach(element => {
        html += `
                <tr>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                </tr>
                `
    });
    return html;
}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
    //your code here 
    let name = rows[0][0];
    let score = rows[0][1];
    // your code here
    rows.forEach(element => {
        let [el_name, el_score] = element;
        if (parseInt(el_score) > parseInt(score)) {
            name = el_name;
            score = el_score;
        }
    });
    return `
    <li>第一名：${name}，分数：${score}</li>
            `;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {

    //you code here

    rows.forEach(element => {
        let [el_name, el_score] = element;
        if (parseInt(el_score) < parseInt(score)) {
            name = el_name;
            score = el_score;
        }
    });
    return `
    <li>最后一名：${name}，分数：${score}</li>
            `;
}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
    // your code here
    //your code here  
    let score = 0;
    // your code here
    rows.forEach(element => {
        score += parseInt(element[1]);
    });
    score = score / rows.length;
    return `
    <li>平均分:${score}</li>
            `;
}
