//prenom popup


var yourname= prompt('Please enter your name:', ' ');
if ( (yourname==' ') || (yourname==null) )
{
yourname="Bob";
}

document.write("<H2>Moshimoshi, " + yourname + " ! Bienvenu/e à Ginza sushi <\/H2>");
