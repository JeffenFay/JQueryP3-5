//création de variables windowxxxxxx pour définir les dimensions de l'écran
var windowWidth = $(window).innerWidth();
var windowHeight = $(window).innerHeight();
//variables définissant les dimensions du carré
var carreWidth = $('#carre').width();
var carreHeight = $('#carre').height();
//mise en position absolue pour pouvoir déplacer l'élément
$("#carre").css({top:150 , position: 'absolute'});

$('#saisie').keydown(function(event) {
    //détection de la touche appuyée et définition des différents cas en codage ASCII
    switch (event.which) {
    //gauche
    case 37:
        //incrémentation de la position selon le paramètre passé en référence en css
        $('#carre').css('left', '-=10');
        //condition définissant la postion du carré en fonction de la limite de l'écran
        if($('#carre').position().left<=0){
          //déplacement du carré en bout d'écran en retirant la largeur du carré
          $('#carre').css('left', windowWidth-carreWidth);
        }
        break;
    //haut
    case 38:
        //incrémentation négative de la position selon le paramètre passé en référence en css
        $('#carre').css('top', '-=10');
        //condition définissant la postion du carré en fonction de la limite de l'écran
        if($('#carre').position().top<=0){
          //déplacement du carré en bout d'écran en retirant la hauteur du carré
          $('#carre').css('top', windowHeight-carreHeight);
        }
        break;
    //droite
    case 39:
        //incrémentation de la position selon le paramètre passé en référence en css
        $('#carre').css('left', '+=10');
        //condition définissant la postion du carré en fonction de la limite de l'écran en retirant sa largeur
        if($('#carre').position().left>=windowWidth-carreWidth){
          //déplacement du carré en bout d'écran
          $('#carre').css('left', 0);
        }
        break;
    //bas
    case 40:
        //incrémentation de la position selon le paramètre passé en référence en css
        $('#carre').css('top', '+=10');
        //condition définissant la postion du carré en fonction de la limite de l'écran en retirant sa hauteur
        if($('#carre').position().top>=windowHeight-carreHeight){
          //déplacement du carré en bout d'écran
          $('#carre').css('top', 0);
        }
        break;
    }
})
