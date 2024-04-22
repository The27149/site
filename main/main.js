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

    $(`#mathGraphics`).click(() => {
        window.open(`mathGraphics/index.html`);
    })

}