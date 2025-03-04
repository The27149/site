/**初始化ui */
function initUI(list) {
    let content = ``;
    list.forEach(cfg => {
        let { id, showName } = cfg;
        let template = `
    <button id="${id}" type="button">${showName}</button>
    <br><br>
    `;
        content += template;
    })
    $(`body`).html(content);
}

/**添加事件 */
function addEvent(list) {
    list.forEach(cfg => {
        let { id, url, isOpenNewWeb } = cfg;
        $(`#${id}`).click(() => {
            let option = isOpenNewWeb ? `_blank` : `_self`;
            window.open(url, option);
        })
    })
}