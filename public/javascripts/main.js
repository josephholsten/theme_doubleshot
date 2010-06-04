setTransparentGifURL('Media/transparent.gif');

function applyEffects() {
    var registry=IWCreateEffectRegistry();
    registry.registerEffects({
        reflection_0: new IWReflection({
            opacity:0.50,
            offset:1.00
        })
    });
    registry.applyEffects();
}
function onPageLoad() {
    applyEffects()
}