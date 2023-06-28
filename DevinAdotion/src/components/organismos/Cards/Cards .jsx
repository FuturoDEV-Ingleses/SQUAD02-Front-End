import { useEffect, useState } from "react";
import { Card } from "../../index";

export default function Cards(){
const [estoques, setEstoques] = useState([]);
const [armazens, setArmazens] = useState([]);

const getData = (path, setData) => {
    fetch(`http://localhost:8080/dashboard`)
      .then((res) => res.json())
      .then((dados) => setData(dados));
  };

  useEffect(() => {
    getData("estoque", setEstoques);
    getData("armazem", setArmazens);
  }, [])

  const getQuantidade = (animal, categoria, produto) => {
    // debugger
    return estoques
      .filter(
        (estoque) =>
          estoque.animal.toUpperCase() === animal.toUpperCase() &&
          estoque.categoria.toUpperCase() === categoria.toUpperCase() &&
          estoque.produto.toUpperCase() === produto.toUpperCase()
      )
      .reduce((acc, estoque) => acc + parseInt(estoque.quantidade), 0);
  
    };

  const racaoFilhote = getQuantidade("Cachorro", "Filhote", "Racao");
  const antiparasitarioFilhote = getQuantidade("Cachorro", "Filhote", "Antiparasitario");
  const antipulgasFilhote = getQuantidade("Cachorro", "Filhote", "Antipulgas");
  const cachorroFilhote = armazens.filter((armazem) => armazem.animal === "Cachorro", "Filhote").length;
  
  const racao = getQuantidade("Cachorro", "Adulto", "Racao" );
  const antiparasitario = getQuantidade("Cachorro", "Adulto", "Antiparasitario");
  const antipulgas = getQuantidade("Cachorro", "Adulto", "Antipulgas");
  const cachorroAdulto = estoques.filter((estoque) => estoque.animal === "Cachorro", "Adulto").length;
  
  const racaoGatoFilhote = getQuantidade("Gato", "Filhote", "Racao");
  const antiparasitarioGatoFilhote = getQuantidade("Gato", "Filhote", "Antiparasitario");
  const antipulgasGatoFilhote = getQuantidade("Gato", "Filhote", "Antipulgas");
  const gatoFilhote = estoques.filter((estoque) => estoque.animal === "Gato", "Filhote").length;

  const racaoGato = getQuantidade("Gato", "Adulto", "Racao");
  const antiparasitarioGato = getQuantidade("Gato", "Adulto", "Antiparasitario");
  const antipulgasGato = getQuantidade("Gato", "Adulto", "Antipulgas");
  const gatoAdulto = estoques.filter((estoque) => estoque.animal === "Gato", "Adulto").length;

  const cards = [
    {
      id: "estoque",
      title: " Cachorro Filhote",
      subtitle: "Kg de Ração",
      value: racaoFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: true
    },
    {
      id: "estoque",
      title: " Cachorro Filhote",
      subtitle: "Antiparasitário",
      value: antiparasitarioFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: " Cachorro Filhote",
      subtitle: "Antipulgas",
      value: antipulgasFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Cachorro",
      subtitle: "Filhote",
      value: cachorroFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Cachorro Adulto",
      subtitle: "Kg Ração",
      value: racao,
      clickable: true,
      isFirstCard: false,
      hasImg: true
    },
    {
      id: "estoque",
      title: "Cachorro Adulto",
      subtitle: "Antiparasitário",
      value: antiparasitario,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Cachorro Adulto",
      subtitle: "Antipulgas",
      value: antipulgas,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Cachorro",
      subtitle: "Adulto",
      value: cachorroAdulto,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato Filhote",
      subtitle: "Kg de Ração",
      value: racaoGatoFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: true
    },
    {
      id: "estoque",
      title: "Gato Filhote",
      subtitle: "Antiparasitário",
      value: antiparasitarioGatoFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato Filhote",
      subtitle: "Antipulgas",
      value: antipulgasGatoFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato",
      subtitle: "Filhote",
      value: gatoFilhote,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato Adulto",
      subtitle: "Kg de Ração",
      value: racaoGato,
      clickable: true,
      isFirstCard: false,
      hasImg: true
    },
    {
      id: "estoque",
      title: "Gato Adulto",
      subtitle: "Antiparasitário",
      value: antiparasitarioGato,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato Adulto",
      subtitle: "Antipulgas",
      value: antipulgasGato,
      clickable: true,
      isFirstCard: false,
      hasImg: false
    },
    {
      id: "estoque",
      title: "Gato",
      subtitle: "Adulto",
      value: gatoAdulto,
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
          subtitle={card.subtitle}
          value={card.value} 
          clickable={card.clickable}
          isFirstCard={card.isFirstCard}
          hasImg={card.hasImg}         
        />
      ))}
    </section>
  );
}