/*Ciao ragazzi,
esercizio di oggi: Our Team
nome repo: js-our-team
Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
----------------------------------------------------------------------------------------------
Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
----------------------------------------------------------------------------------------------
Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
----------------------------------------------------------------------------------------------
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
stampare dinamicamente una card per ogni membro del team.
----------------------------------------------------------------------------------------------
BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: 
cliccando sul pulsante "add" viene creato un nuovo oggetto, 
il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.*/


//Genero il mio array,dove ripongo le mie card con tutte le informazioni
const cardArray=[
    {
        image: 'css/img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        styleJob: 'Founder & CEO'
    },
    {
        image: 'css/img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        styleJob: 'Chief Editor'
    },
    {
        image: 'css/img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        styleJob: 'Office Manager'
    },
    {
        image: 'css/img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        styleJob: 'Social Media Manager'
    },
    {
        image: 'css/img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        styleJob: 'Developer'
    },
    {
        image: 'css/img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        styleJob: 'Graphic Designer'
    }
];

//Associo una variabile al mio container
const containerClass=document.querySelector('.team-container');
//Stampo una card per volta scorrendo l'array
for(let i = 0; i < cardArray.length; i++){
   const thisCard=cardArray[i];


//Creo un template con i dati giusti inseriti nel cardArray
const cardDraw=`
<div class="team-card">
<div class="card-image">
<img
  src="${thisCard.image}"/>
</div>
<div class="card-text">
<h3>${thisCard.name}</h3>
<p>${thisCard.styleJob}</p>
</div>
</div>`;

//Infine lo concateno a containerClass
containerClass.innerHTML += cardDraw;
}
           


