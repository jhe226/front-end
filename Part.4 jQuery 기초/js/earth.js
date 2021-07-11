$(document).ready(function(){
    // 지구 이미지 웹요소(노드) 찾아서 저장
    var $earth = $("#earth");
    // 버튼에 이벤트 등록.
    // 5초만에 left 값 480px으로 설정함으로써 움직이는 애니메이션 형태가 된다.
    $("#btnStart").click(function(){
        $earth.animate({
            left : "480px"
        }, 1000)
    })
})