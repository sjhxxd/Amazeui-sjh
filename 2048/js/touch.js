/**
 * Created by user on 2015/11/12.
 */
var mLocBegin, mLocEnd;

function loadTouch() {
    document.getElementById('touchArea').style.height = document.documentElement.clientHeight + 'px';
    document.getElementById('touchArea').ontouchstart = function (e) {
        console.log('mouseDown');
        mLocBegin = getTouchLoc(e);
    };
    document.getElementById('touchArea').ontouchmove = function (e) {
        console.info('mouseMove');
        mLocEnd = getTouchLoc(e);
    };
    document.getElementById('touchArea').ontouchend = function () {
        var direction = checkAct();
        console.warn(direction);
        switch (direction) {
            case 'left':
                Move.left();
                break;
            case 'up':
                Move.up();
                break;
            case 'right':
                Move.right();
                break;
            case 'down':
                Move.down();
        }
        if (deBug) ; else {
            if (roundFlag) randomNewNum()
        }
        F5();
    };

    document.getElementById('touchArea').onmousedown = document.getElementById('touchArea').ontouchstart;
    document.getElementById('touchArea').onmousemove = document.getElementById('touchArea').ontouchmove;
    document.getElementById('touchArea').onmouseup = document.getElementById('touchArea').ontouchend;
}

function getTouchLoc(e) {
    var eve = e || window.event;
    var loc = new Array[
        eve.touches ? eve.touches[0].clientX : eve.x,
        eve.touches ? eve.touches[0].clientY : eve.y
        ];
    return loc;
}
function checkAct() {
    var shiftX = mLocEnd[0] - mLocBegin[0];
    var shiftY = mLocEnd[1] - mLocBegin[1];
    if ((Math.abs(shiftX) < 100) && (Math.abs(shiftY) < 100)) return;
    if (Math.abs(shiftX) - Math.abs(shiftY) > 0) {
        if (shiftX > 0) {
            return 'right';
        } else {
            return 'left';
        }
    } else {
        if (shiftY > 0) {
            return 'down';
        } else {
            return 'up';
        }
    }
}