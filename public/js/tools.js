$(document).ready(function() {
    alert('this works')

    var checkListItems = []
    var checkListDates = []
    var checkListSelector = 0

    $('button, input[class="add"]').click(function() {
        checkListItems.push( $('input[type="text"]').val() )
        checkListDates.push( new Date( $('input[type="datetime-local"]').val() ) )
	    $('.checklist').append('<input type="checkbox" name=' + checkListSelector + '>'
            + checkListItems[checkListSelector]
            + ' @ ' + checkListDates[checkListSelector].toDateString()
            + ' ' + checkListDates[checkListSelector].toLocaleTimeString() + '<br>')
        checkListSelector = checkListSelector + 1
    })

    function notification(checkListItem) {
        alert('this is the notification for ' + checkListItems[checkListItem])
        if ( $('[name=' + checkListItem + ']').is(':checked') ) {
            var behavior = prompt("What unlisted behaviors helped your completion " + checkListItems[checkListItem] + " ?")

            if (behavior == null || behavior == "") {
                alert("It is nice to see that you have found good behaviors.")
            } else {
                 $('[name="good"]').append(behavior)
            }
        } else {
            var behavior = prompt("What unlisted behaviors hindered your completion " + checkListItems[checkListItem] + " ?")

            if (behavior == null || behavior == "") {
                alert("Try avoiding your bad behaviors.")
            } else {
                $('[name="bad"]').append(behavior)
            }
        }
    }

    function surprise() {
        (function loop() {
            var now = new Date()
            alert('it is time')
            for (i = 0; i < checkListSelector; i++) {
                if (now.getTime() >= checkListDates[i].getTime()) {
                    notification(i)
                }
            }
            now = new Date()                   // allow for time passing
            var delay = 60000 - (now % 60000)  // exact ms to next minute interval
            setTimeout(loop, delay)
        })()
    }

    surprise(notification)

})
