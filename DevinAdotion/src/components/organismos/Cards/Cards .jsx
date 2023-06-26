import { useEffect, useState } from "react";
import { Card } from "../../index";

export default function Cards(){
const [estoques, setEstoques] = useState([]);
const [armazens, setArmazens] = useState([]);

const getData = (path, setData) => {
    fetch(`http://localhost:3333/${path}`)
      .then((res) => res.json())
      .then((dados) => setData(dados));
  };

  useEffect(() => {
    getData("estoque", setEstoques);
    getData("armazem", setArmazens);
  }, [])

  const getQuantidade = (animal, categoria, produto) => {
    return estoques
      .filter(
        (estoque) =>
          estoque.animal === animal &&
          estoque.categoria === categoria &&
          estoque.produto === produto
      )
      .reduce((acc, estoque) => acc + parseInt(estoque.quantidade), 0);
  };

  const racaoFilhote = getQuantidade("Cachorro", "Filhote", "Ração");
  const antiparasitarioFilhote = getQuantidade("Cachorro", "Filhote", "Antiparasitário");
  const antipulgasFilhote = getQuantidade("Cachorro", "Filhote", "Antipulgas");
  
  const racao = getQuantidade("Cachorro", "Adulto", "Ração" );
  const antiparasitario = getQuantidade("Cachorro", "Adulto", "Antiparasitário");
  const antipulgas = getQuantidade("Cachorro", "Adulto", "Antipulgas");
  
  const racaoGatoFilhote = getQuantidade("Gato", "Filhote", "Ração");
  const antiparasitarioGatoFilhote = getQuantidade("Gato", "Filhote", "Antiparasitário");
  const antipulgasGatoFilhote = getQuantidade("Gato", "Filhote", "Antipulgas");

  const racaoGato = getQuantidade("Gato", "Adulto", "Ração");
  const antiparasitarioGato = getQuantidade("Gato", "Adulto", "Antiparasitário");
  const antipulgasGato = getQuantidade("Gato", "Adulto", "Antipulgas");

    const cards = [
      {
        id: "estoque",
        title: "Kg de Ração Filhote",
        value: racaoFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: true
      },
      {
        id: "estoque",
        title: "Antiparasitário Filhote",
        value: antiparasitarioFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Antipulgas Filhote",
        value: antipulgasFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Kg de Ração Adulto",
        value: racao,
        clickable: true,
        isFirstCard: false,
        hasImg: true
      },
      {
        id: "estoque",
        title: "Antiparasitário Adulto",
        value: antiparasitario,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Antipulgas Adulto",
        value: antipulgas,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Kg de Ração Filhote",
        value: racaoGatoFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: true
      },
      {
        id: "estoque",
        title: "Antiparasitário Filhote",
        value: antiparasitarioGatoFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Antipulgas Filho",
        value: antipulgasGatoFilhote,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Kg de Ração Adulto",
        value: racaoGato,
        clickable: true,
        isFirstCard: false,
        hasImg: true
      },
      {
        id: "estoque",
        title: "Antiparasitário Adulto",
        value: antiparasitarioGato,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      },
      {
        id: "estoque",
        title: "Antipulgas Adulto",
        value: antipulgasGato,
        clickable: true,
        isFirstCard: false,
        hasImg: false
      }
    ];
      
  return (
    <section style={{ display: "flex", flexDirection:"row", flexWrap: "wrap" }}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title} 
          value={card.value} 
          clickable={card.clickable}
          sisFirstCard={card.isFirstCard}
          hasImg={card.hasImg}         
        />
      ))}
    </section>
  );
}