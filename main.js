class CallBack {
    fn;
    target
}
/**入口按钮的配置选项 */
class EntranceConfig {
    idx;    //序号
    id;     //dom id
    showName;//按钮显示名称
    url;    //跳转地址
    isOpenNewWeb;   //是否开新窗口
    width;  //宽
    height; //高
    callBack;   //自定义按钮事件

    constructor() {
        this.isOpenNewWeb = true;
        this.callBack = null;
    }
}

function log(tip, ...params) {
    tip = `%clog======${tip}======`;
    const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`];
    let color = ``;
    if (colors.includes(params[0])) color = `color: ${params[0]}`;
    else color = `color: orange`;
    params.unshift(color);
    console.log(tip, ...params);
}

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
        let { id, url, isOpenNewWeb, width, height, callBack } = cfg;
        $(`#${id}`).click(() => {
            let option = isOpenNewWeb ? `_blank` : `_self`;
            if (width * height > 0) {
                window.open(url, option, `width=${width},height=${height}`);
            } else {
                window.open(url, option);
            }
            if (callBack) callBack.fn.call(callBack.target);
        })
    })
}

window.onload = () => {
    //简易配置
    let cfgList = [
        { id: `mathGraphics0`, showName: `math graphics0--腾讯云`, url: `https://math-gfx-1327442820.cos.ap-guangzhou.myqcloud.com/web-mobile/index.html`, width: 1920, height: 1280 },
        { id: `mathGraphics1`, showName: `math graphics1--cloudflare`, url: `https://math-gfx.pages.dev/`, width: 1920, height: 1280 },
        { id: `mathBezier`, showName: `math 贝塞尔曲线--cloudflare`, url: `https://bezier-dte.pages.dev`, width: 1920, height: 1280 },
        { id: `encryption`, showName: `加密`, url: `encryption/index.html` },
        { id: `game`, showName: `game`, url: `game/index.html` },
        { id: `malaysia`, showName: `malaysia`, url: `malaysia/index.html` },
    ];

    //初始化实际配置
    let list = [];
    cfgList.forEach((item, idx) => {
        let cfg = new EntranceConfig();
        cfg.idx = idx + 1;
        Object.assign(cfg, item);
        list.push(cfg);
    })

    initUI(list);
    addEvent(list);
}