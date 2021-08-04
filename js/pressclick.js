/*用于添加带点击效果的点击事件，element需添加data-pressed属性，放置点击时候的class样式，建议element使用同一个事件，通过id分发逻辑。
使用示例：
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
        .pressed{
            color: green;
        }
        .pressed1{
            color: red;
        }
    </style>
</head>
<body>

<div id="test" data-pressed="pressed"> test </div>
<div id="test1" data-pressed="pressed1"> test1 </div>
<script type="text/javascript" src="./js/pressclick.js"></script>
<script>
    var listener = function(e, id) {
        switch(id) {
            case "test":
            console.log("test is clicked");
            break;
            case "test1":
            console.log("test1 is clicked");
            break;
        }
    }
    addClickListener(document.getElementById("test"), listener)
    addClickListener(document.getElementById("test1"), listener)
</script>
</body>
</html>


*/
    var clickListeners = {}
    var isMobile = undefined;
    function checkMobile() {
        if (isMobile === undefined) {
           let info = navigator.userAgent;
            let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
            for (let i = 0; i < agents.length; i++) {
                if (info.indexOf(agents[i]) >= 0) {
                    isMobile = true;
                    return true;
                }
            }
            isMobile = false;
            return false; 
        }
            
    }
    function startTouch(e){
            let id = e.target.id
            e.target.classList.add(e.target.dataset.pressed)
            return false
        }

    function endTouch(e){
        let id = e.target.id
        e.target.classList.remove(e.target.dataset.pressed)
        clickListeners[id](e, e.target.id)
        return false
    }

    function addClickListener(element, listener){
        checkMobile()
        if (isMobile) {
            element.ontouchstart = startTouch
            element.ontouchend = endTouch   
        } else {
            element.onmousedown = startTouch
            element.onmouseup = endTouch
        }
        clickListeners[element.id] = listener
    }