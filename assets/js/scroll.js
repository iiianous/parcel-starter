let scroll = (function() {
    let section = document.querySelector('section');

    function getScrollDir() {
        let last = 0;
        section.addEventListener('scroll', function(e) {
           let pos = e.target.scrollTop;
           if ( pos > last ){
               // down
               console.log('down..')
           } 
           
           if(pos < last && pos != last) {
                console.log('up..')
           }
           last = pos;
        })
    }

    section.addEventListener('scroll', function(e) {
        changeRangePos(e);
        getScrollDir()
    }, false)

    function changeRangePos(e) {
        let range   = document.querySelector('#range');
        let rounded = range.querySelector('.rounded');

        let currentValue = rounded.style.left;
        let max = 200;

        if ( parseInt( currentValue) < 200 ) {
            let added = parseInt( currentValue) + 5;
            rounded.style.left = parseInt( currentValue ) + 5 + 'px'
        }
    }

})()
