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

const element_row = document.querySelector('.row')

stamp_list(team)

const element_form = document.querySelector('form')
element_form.addEventListener('submit', function(event) {
    event.preventDefault()
    element_row.innerHTML = ''
    const new_member = {}
    new_member.name = document.getElementById('nome').value
    new_member.role = document.getElementById('role').value
    new_member.image = document.getElementById('img').value
    team.push(new_member)
    stamp_list(team)

})

function stamp_list(list) {

    for (let i = 0; i < list.length; i++) {

        const member = list[i];
        const element_col = document.createElement('div')
        element_col.classList.add('col')
        const element_card = document.createElement('div')
        element_card.classList.add('member_card')
        const element_card_image = document.createElement('div')
        const element_image = document.createElement('img')
        element_image.setAttribute("src", `./assets/img/${member.image}`)
        element_card_image.append(element_image)
        const element_card_text = document.createElement('div')
        element_card_text.classList.add('p-3')
        const element_h3 = document.createElement('h3')
        element_h3.append(member.name)
        const element_p = document.createElement('p')
        element_p.classList.add('mb-0')
        element_p.append(member.role)
        element_card_text.append(element_h3, element_p)
        element_card.append(element_card_image, element_card_text)
        element_col.append(element_card)
        element_row.append(element_col)

    }

}