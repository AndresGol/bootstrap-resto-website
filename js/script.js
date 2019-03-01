//prenom popup


var yourname= prompt('Saisissez votre nom SVP:', ' ');
if ( (yourname==' ') || (yourname==null) )
{
yourname="Commensal";
}

document.write("<H2>Moshimoshi, " + yourname + " ! Bienvenu/e à Ginza sushi <\/H2>");


