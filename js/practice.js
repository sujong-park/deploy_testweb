// function nightDayHandler(self) {
//     var target = document.querySelector('body');
//     target.classList.toggle('night');
    
//     if (self.value === 'night') {
//         self.value = 'day'
//     } else {
//         self.value = 'night'
//     }
// }

function practiceColor() {
    var chapColor = document.querySelector('#chap13Color');
    if(chapColor.value === "default"){
        chapColor.style.backgroundColor = "blue";
        chapColor.value = "change";
    } else {
        chapColor.style.backgroundColor = "black";
        chapColor.value = "default";
    }

}

function practiceText() {
    var name = prompt("이름을 입력하세요");
    var chapText = document.querySelector('#chap13Text');

    if (name == true){
        chapText.innerText = name;
    } else {
        chapText.innerText = "text change";
    }

}


function practiceConfirm() {
    var ConfirmMessage = confirm("확인 하시겠습니까?");
    var practiceConfirm = document.querySelector('#chap13Confirm');

    if (ConfirmMessage == true){
        practiceConfirm.innerText = "확인";
    } else {
        practiceConfirm.innerText = "취소";
    }
}