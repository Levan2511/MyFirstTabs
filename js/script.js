window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let infoHeader = document.querySelector('.info-header');
    let infoBtn = document.querySelectorAll('.info-header-tab');
    let infoTabContent = document.querySelectorAll('.info-tabcontent');

    function hideOtherTabContent(a) {
        for(let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.add('hide');
            infoTabContent[i].classList.remove('show');
        }
    }
    hideOtherTabContent(1);


    function showExactTab(b) {
        if(infoTabContent[b].classList.contains('hide')) {
            hideOtherTabContent(0);
            infoTabContent[b].classList.remove('hide');
            infoTabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function(event) {
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')){

            for(let i = 0; i < infoBtn.length; i++) {

                if(target == infoBtn[i]) {
                    showExactTab(i);
                    break;
                }
            }
        }
    });

})