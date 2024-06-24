window.onload = () => {
    function log(tip, ...params) {
        tip = `%clog======${tip}======`;
        const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`];
        let color = ``;
        if (colors.includes(params[0])) color = `color: ${params[0]}`;
        else color = `color: orange`;
        params.unshift(color);
        console.log(tip, ...params);
    }

    /////////////////////////////////////////////////////////

    $(`#mathGraphics0`).click(() => {
        //[腾讯云， cloudflare]
        const urlList = [`https://math-gfx-1327442820.cos.ap-guangzhou.myqcloud.com/web-mobile/index.html`, `https://math-gfx.pages.dev/`];
        const url = urlList[0];
        let res = window.open(url, `_blank`, `width=1920,height=1280`);
    })

    $(`#mathGraphics1`).click(() => {
        //[腾讯云， cloudflare]
        const urlList = [`https://math-gfx-1327442820.cos.ap-guangzhou.myqcloud.com/web-mobile/index.html`, `https://math-gfx.pages.dev/`];
        const url = urlList[1];
        let res = window.open(url, `_blank`, `width=1920,height=1280`);
    })

    $(`#encryption`).click(() => {
        window.open(`encryption/index.html`, `_self`);
    })

}