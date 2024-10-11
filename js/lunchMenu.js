function changeMenu(menu){
    // document.querySelector('#viewDefault').remove();
    var result = document.querySelector('#restauView');
    
    if (menu === "bao") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/bao_thumb.jpg" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">바오하우스</div>
                <div class="sub">중식당</div>
            </div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                </ul>
            </div>
        </div>`;

    } else if (menu === "kanda") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/kanda_thumb.png" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">칸다소바</div>
                <div class="sub">중식당</div>
            </div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                </ul>
            </div>
        </div>`;
    } else if (menu === "ant") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/ant_thumb.jpg" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">개미집</div>
                <div class="sub">낙지요리</div>
            </div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음 +밥</div><div class="menuPrice">11,000원</div></li>
                </ul>
            </div>
        </div>`;
    }

    result.innerHTML = baoInner;
}


