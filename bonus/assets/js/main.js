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
const element_row = document.querySelector('.row')

//faccio partire la funzione per stampare a schermo la lista
stamp_list(team)

//seleziono il form e resto in ascolto per l'evento click che dovrebbe generare un nuovo membro
const element_form = document.querySelector('form')
element_form.addEventListener('submit', function(event) {

    //evito il refresh della pagina
    event.preventDefault()

    //pulisco la dom
    element_row.innerHTML = ''

    //dichiaro il nuovo oggetto
    const new_member = {}

    //Aggiungo gli attributi
    new_member.name = document.getElementById('nome').value
    new_member.role = document.getElementById('role').value
    new_member.image = document.getElementById('img').value

    //e lo pusho nell'array di oggetti
    team.push(new_member)

    //stampo la lista aggiornata
    stamp_list(team)

})

/**
 * ### stampa a schermo una card per ogni oggetto della lista   
 * @param {Array} list lista di oggetti
 */
function stamp_list(list) {

    //ciclo per selezionare il singolo oggetto dalla lista
    for (let i = 0; i < list.length; i++) {

        //salvo l'oggetto in una variabile
        const member = list[i];

        //creo una colonna nella dom
        const element_col = create_element_with_class('div', 'col')

        //uso una funzione per crearmi tutti gli elementi ed attaccate al posto giusto gli attributi da visualizzare
        const element_card = create_card(member)

        //appendo la carta alla colonna
        element_col.append(element_card)

        //appendo la colonna alla riga
        element_row.append(element_col)

    }

}

/**
 * ###Crea elementi e gli assegna una classe
 * @param {string} element inserisci un elemento da creare
 * @param {string} css_class inserisci classe css da aggiungere all'elemento
 * @returns {string} elemento creato con relativa classe assegnata
 */
function create_element_with_class(element, css_class) {

    //creo elemento
    const node_dom = document.createElement(element)

    //assegno la classe
    node_dom.classList.add(css_class)

    //ritorno elemento completo di classe
    return node_dom
}

/**
 * ###Crea una card con gli attributi di un oggetto
 * @param {object} object Inserire l'oggetto con cui vuoi creare una card
 * @returns una card con attributo foto, attributo nome e attributo ruolo dell'oggetto 
 */
function create_card(object) {

    //creo la card
    const element_card = create_element_with_class('div', 'member_card')

    //creo la il contenitore per l'immagine della card
    const element_card_image = document.createElement('div')

    //creo l'elemento img
    const element_image = document.createElement('img')

    //imposto il search dell'immagine per trovare la foto in base all'oggetto
    element_image.setAttribute("src", `./assets/img/${object.image}`)

    //attacco l'immagine al contenitore per l'immagine
    element_card_image.append(element_image)

    //creo la parte della card per il testo
    const element_card_text = create_element_with_class('div', 'p-3')

    //creo un titolo
    const element_h3 = document.createElement('h3')

    //gli assegno il nome dell'oggetto
    element_h3.append(object.name)

    //creo un paragrafo
    const element_p = create_element_with_class('p', 'mb-0')

    //assegno il ruolo dell'oggetto
    element_p.append(object.role)

    //attacco i due testi al contenitore dei testi
    element_card_text.append(element_h3, element_p)

    //attacco i 2 contenitori alla card
    element_card.append(element_card_image, element_card_text)

    //ritorno la card completa
    return element_card
}