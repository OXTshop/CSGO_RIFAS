const skinsData = [
    { 
        name: "MAC-10 | Discoteca", 
        price: "1,50", 
        image: "imagens/MAC-10  Discoteca.png",
        highlighted: true, // Adicione esta propriedade para destacar o item
        link: "https://riffa.co/8117b0bf-7348-11ee-98d5-1684c9dbbe5f"
    },
    { 
        name: "MAC-10  Discoteca", 
        price: "1,50", 
        image: "imagens/MAC-10  Discoteca.png",
        highlighted: false, // Adicione esta propriedade para destacar o item
        link: "https://riffa.co/8117b0bf-7348-11ee-98d5-1684c9dbbe5f"
    },

];

function displaySkins() {
    const skinsList = document.getElementById("skins-list");

    skinsData.forEach(skin => {
        const skinCard = document.createElement("div");
        skinCard.classList.add("skin-card");
        if (skin.highlighted) {
            skinCard.classList.add("highlighted"); // Adicione uma classe "highlighted" ao item destacado
        }
        skinCard.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <h2>${skin.name}</h2>
            <p>Preço: $${skin.price}</p>
            <button onclick="window.open('${skin.link}', '_blank')">Participar da RIFA</button>
        `;
    
        skinsList.appendChild(skinCard);
    });
}

displaySkins();
