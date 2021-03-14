"use strict";
// button はあるので ! で null でないと伝える
var button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log('click');
});
//# sourceMappingURL=app.js.map