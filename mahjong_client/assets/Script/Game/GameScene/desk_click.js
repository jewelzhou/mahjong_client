cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },
    // 返回
    onReturnClick() {
        cc.log(`返回`);
    },
    // 扩展tool
    onKuoZhanClick() {
        cc.log(`扩展`);
        cc.dd.Reload.loadPrefab("Game/Prefab/KuoZhanTool", (prefan) => {
            const kzTool = cc.instantiate(prefan);
            this.node.addChild(kzTool);
        });
    },
    // 语音
    onSoundClick() {
        cc.log(`语音`);
    },
    // 碰
    onPengClick() {
        cc.log(`发送碰牌请求`);
    },
    // 杠
    onGangClick() {
        cc.log(`发送杠牌请求`);
    },
    onHuClick() {
        cc.log(`发送胡牌请求`);
    },
    // 过
    onGuoClick() {
        cc.log(`过牌`);
    },
    // 吃
    onChiClick() {
        cc.log(`发送吃牌的请求`);
    },
});
