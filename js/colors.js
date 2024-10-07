function nightDayHandler(self) {
    var target = document.querySelector('body');
    target.classList.toggle('night');
    
    if (self.value === 'night') {
        self.value = 'day'
    } else {
        self.value = 'night'
    }
}