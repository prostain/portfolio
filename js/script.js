
/**
 **
 **                   Défilement de la navbar
 **
 **/

$(function(){
// On recupere la position du bloc par rapport au haut du site
    let position_top_raccourci = $("#navigation").offset().top;

//Au scroll dans la fenetre on déclenche la fonction
    $(window).scroll(function () {

//si on a defile de plus de 150px du haut vers le bas
        if ($(this).scrollTop() > position_top_raccourci) {

//on ajoute la classe "fixNavigation" a <div id="navigation">
            $('#navigation').addClass("fixNavigation");
        } else {

//sinon on retire la classe "fixNavigation" a <div id="navigation">
            $('#navigation').removeClass("fixNavigation");
        }
    });
});

/**
 *
 * display navbar
 *
 */


function myFunction()
{

    let x = document.getElementById("myLinks");
    if (x.style.display === "block" ) {
        x.style.display = "none";
        document.body.style.overflow = "initial";
    } else {
        x.style.display = "block";
        document.body.style.overflow = "hidden";
    }

}

function init()
{
    let tailleFenetre = document.body.clientWidth;
    let x = document.getElementById("myLinks");
    if (tailleFenetre <769) {
        x.style.display = "none";
        document.body.style.overflow = "initial";
    }

}




/****************************************************************************/
/**             modales
 **
 */

// Get the button that opens the modal

function getId(monId) {
// Get the button that opens the modal
    var btn = document.getElementById(monId);

    var idName = btn.name;

    // Get the modal
    var modal = document.getElementById(idName);

// Get the <span> element that closes the modal
    var close1 = document.getElementsByClassName("close")[0];
    var close2 = document.getElementsByClassName("close")[1];
    var close3 = document.getElementsByClassName("close")[2];
    // var close4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

// When the user clicks on <span> (x), close the modal
    close1.onclick = function () {
        modal.style.display = "none";
    };
    close2.onclick = function () {
        modal.style.display = "none";
    };
    close3.onclick = function () {
        modal.style.display = "none";
    };
    /*close4.onclick = function () {
        modal.style.display = "none";
    };*/

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}


function envoie() {
    console.log('coucou');
    $.ajax ({
        type: 'POST',
        async: false,
        url: './functions.php',
        data : {
            name : $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        success: function () {
            alert('envoie OK');

        },
    })
}