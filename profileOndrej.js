document.getElementById("defaultOpen").click();

    function openTab(e,tabName) {
        var current = document.getElementById(tabName);
        var other = document.getElementsByClassName('tabContent');
        var activeBtn = document.getElementsByClassName('active');
        
        for(i=0;i<activeBtn.length;i++) {
            activeBtn[i].classList.remove('active');
        }
        e.target.classList.add('active');
        
        for(i=0;i<other.length;i++) {
            other[i].style.display = 'none';
        }
        current.style.display = 'block';
    }