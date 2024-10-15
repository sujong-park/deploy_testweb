function changeMenu(menu, message){
    // document.querySelector('#viewDefault').remove();
    var result = document.querySelector('#restauView');
    
    if (menu === "1") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/bao_thumb.jpg" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">바오하우스</div>
                <div class="sub">중식당</div>
            </div>
            <div class="viewMessage"></div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">가지튀김</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">비건탄탄면</div><div class="menuPrice">12,500원</div></li>
                    <li><div class="menuName">비건마파두부</div><div class="menuPrice">12,500원</div></li>
                    <li><div class="menuName">고주량하이볼</div><div class="menuPrice">8,000원</div></li>
                    <li><div class="menuName">수제라임청소다</div><div class="menuPrice">6,000원</div></li>
                    <li><div class="menuName">루로우판(대)</div><div class="menuPrice">11,900원</div></li>
                    <li><div class="menuName">가지튀김(소)</div><div class="menuPrice">9,000원</div></li>
                    <li><div class="menuName">바오맥주(IPA)</div><div class="menuPrice">7,500원</div></li>
                    <li><div class="menuName">클래식바오</div><div class="menuPrice">5,000원</div></li>
                    <li><div class="menuName">새우바오</div><div class="menuPrice">5,000원</div></li>
                    <li><div class="menuName">우육미엔</div><div class="menuPrice">11,900원</div></li>
                    <li><div class="menuName">딴딴미엔</div><div class="menuPrice">11,900원</div></li>
                    <li><div class="menuName">토마토달걀볶음</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">루로우판</div><div class="menuPrice">7,900원</div></li>
                    <li><div class="menuName">대만맥주</div><div class="menuPrice">8,000원</div></li>
                </ul>
            </div>
        </div>`;

    } else if (menu === "2") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/kanda_thumb.png" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">칸다소바</div>
                <div class="sub">중식당</div>
            </div>
            <div class="viewMessage"></div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">이에케 돈코츠 라멘</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">마제소비</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">아부라소바</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">돼지껍데기아부라소바</div><div class="menuPrice">13,500원</div></li>
                    <li><div class="menuName">야끼교자</div><div class="menuPrice">6,500원</div></li>
                    <li><div class="menuName">우메보시(메실)에이드</div><div class="menuPrice">2,500원</div></li>
                    <li><div class="menuName">하이볼</div><div class="menuPrice">6,000원</div></li>
                    <li><div class="menuName">레드락생맥주</div><div class="menuPrice">4,000원</div></li>
                    <li><div class="menuName">콜라</div><div class="menuPrice">2,000원</div></li>
                    <li><div class="menuName">펩시제로</div><div class="menuPrice">2,000원</div></li>
                    <li><div class="menuName">사이다</div><div class="menuPrice">2,000원</div></li>
                </ul>
            </div>
        </div>`;
    } else if (menu === "3") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/ant_thumb.jpg" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">개미집</div>
                <div class="sub">낙지요리</div>
            </div>
            <div class="viewMessage"></div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">낙지볶음+밥</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">낙새볶음+밥</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">낙곱볶음+밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙곱새볶음+밥</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">곱창버섯전골(2인)</div><div class="menuPrice">30,000원</div></li>
                    <li><div class="menuName">불낙버섯전골(2인)</div><div class="menuPrice">30,000원</div></li>
                </ul>
            </div>
        </div>`;
    } else if (menu === "4") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/ant_thumb.jpg" alt="">
        </div>
        <div class="viewInfo">
            <div class="title">
                <div class="tit">한뚝배기</div>
                <div class="sub">백반,가정식</div>
            </div>
            <div class="viewMessage"></div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">뚝배기불고기</div><div class="menuPrice">12,000원</div></li>
                    <li><div class="menuName">돼지김치찌개</div><div class="menuPrice">8,500원</div></li>
                    <li><div class="menuName">제육볶음</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">꽃게된장찌개</div><div class="menuPrice">8,500원</div></li>
                    <li><div class="menuName">해물순두부찌개</div><div class="menuPrice">8,500원</div></li>
                    <li><div class="menuName">청국장</div><div class="menuPrice">8,500원</div></li>
                    <li><div class="menuName">햄치즈순두부찌개</div><div class="menuPrice">8,500원</div></li>
                    <li><div class="menuName">차돌고추장찌개</div><div class="menuPrice">9,000원</div></li>
                    <li><div class="menuName">제육볶음과된장찌개정식</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">낙지볶음과된장찌개정식</div><div class="menuPrice">11,000원</div></li>
                    <li><div class="menuName">소불고기와김치찌개정식</div><div class="menuPrice">13,000원</div></li>
                    <li><div class="menuName">스팸과김치찌개정식</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">떡갈비와된장찌개정식</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">낙지볶음</div><div class="menuPrice">10,000원</div></li>
                    <li><div class="menuName">불닭볶음과된장찌개</div><div class="menuPrice">12,000원</div></li>
                </ul>
            </div>
        </div>`;
    } else if (menu === "5") {
        baoInner = 
        `<div class="viewImg">
            <img src="/img/menu/younge_thumb.jpg" alt="">
        </div>
        
        <div class="viewInfo">
            <div class="title">
                <div class="tit">용이초밥</div>
                <div class="sub">초밥, 롤</div>
            </div>
            <div class="viewMessage"></div>
            <div class="viewMenu">
                <h3 class="tit">Menu</h3>
                <ul class="menuList">
                    <li><div class="menuName">용이세트14p</div><div class="menuPrice">16,000원</div></li>
                    <li><div class="menuName">경화세트12p</div><div class="menuPrice">10,500원</div></li>
                    <li><div class="menuName">물고기세트 14p</div><div class="menuPrice">20,000원</div></li>
                    <li><div class="menuName">고급모듬세트11p</div><div class="menuPrice">20,000원</div></li>
                    <li><div class="menuName">프리미엄연어유정세트16p</div><div class="menuPrice">19,000원</div></li>
                    <li><div class="menuName">새우사랑세트14p</div><div class="menuPrice">19,000원</div></li>
                    <li><div class="menuName">롤혜은세트10p</div><div class="menuPrice">9,500원</div></li>
                    <li><div class="menuName">근손실방지소고기정호세트8p</div><div class="menuPrice">14,000원</div></li>
                    <li><div class="menuName">솜사탕연여가영세트13p</div><div class="menuPrice">14,000원</div></li>
                </ul>
            </div>
        </div>`;
    }

    result.innerHTML = baoInner;
    document.querySelector('.viewMessage').innerHTML = message;

}

function randomMenu() {
    var restaurants = document.getElementsByClassName('restaurant');
    var randomNum = Math.floor(Math.random() * restaurants.length); 

    console.log(randomNum);

    var anchorTag = restaurants[randomNum].getElementsByTagName('a')[0];
    anchorTag.click();
}



function newRegister(){
    var newItem = document.createElement('li');
    var newItemBtn = document.createElement('span');
    var newMenu = document.querySelector('#addMenu');
    var newText = document.createTextNode(newMenu.value);

    newItem.appendChild(newText);
    newItem.appendChild(newItemBtn);
    
    if (newMenu.value != ""){
        var itemList = document.querySelector("#addMenuList");
        itemList.insertBefore(newItem, itemList.childNodes[0]); 
        
        newMenu.value="";
    } else {
        alert("먹고 싶은 메뉴를 작성해주세요.");

    }
    
    var menuItems = document.querySelector('#addMenuList').querySelectorAll("li"); 

    for(i=0; i<menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {  // 항목 클릭했을 때 실행할 함수
            if(this.parentNode)    // 부모 노드가 있다면 
            this.parentNode.removeChild(this);  // 부모 노드에서 삭제
        });
    }
    



}







