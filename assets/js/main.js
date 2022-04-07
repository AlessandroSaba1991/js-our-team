/* 
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede
*/

const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//seleziono l'elemento della dom
const element_container = document.querySelector('.container')

//inizializzo una variabile a 1 che verrà incrementata ad ogni ciclo e la utilizzo per segnare i vari membri   
let c = 1

//ciclo l'array per prendewre i singoli oggetti
for (let i = 0; i < team.length; i++) {

    //assegno il singolo oggetto ad una variabile
    const member = team[i];

    //creo un elemento nella dom per inserire il titolino
    const element_member = document.createElement('div')

    //appendo il titolino con la variabile 
    element_member.append(`Member N*${c} Information  `)

    //appendo l'elemento creato all'elemento della dom
    element_container.append(element_member)

    /************ 
     (Metodo 1)
     ************/

    //ciclo l'oggetto così posso estrapolare gli attributi 
    for (let key in member) {

        //creo un div per la descrizione
        const element_info = document.createElement('div')

        //gli attacco tutti gli attributi
        element_info.append(` ${key} ${member[key]}`)

        //e lo attacco al container nella dom
        element_container.append(element_info)
    }
    //incremento variabile
    c++

    /* Metodo 2 prendevo gli attributi con member.name etcetc
    console.log(`Member N*${c} Information`);
    console.log(member.name);
    console.log(member.role);
    console.log(member.image); 
    */
}