import React, { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  useEffect(() => {
    SetPlayer1LP(100000);
    SetPlayer2LP(100000);
  }, []);

  const [Deck1, setDeck1] = useState([
    {
      id: 1,
      name: "Luffy B+",
      edition: "1x1",
      type: "Character",
      image: "/images/LuffyBcard.png",
      attack: 1000,
    },
    {
      id: 2,
      name: "Sanji A",
      edition: "2",
      type: "Character",
      image: "/images/sanjiAcardModeclassic.png",
      attack: 1200,
    },
    {
      id: 15,
      name: "Magellan Venom Dragon A",
      edition: "15",
      type: "Magical Skill",
      image: "/images/MagellanVenomdragonASpecial.png",
    },
    {
      id: 100,
      name: "Kaze Energy",
      edition: "100",
      type: "Energy",
      image: "/images/KazeEnergy.png",
    },
    {
      id: 25,
      name: "Zoro",
      edition: "25",
      type: "Character",
      image: "/images/ZoroD.png",
      attack: 700,
    },
    {
      id: 20,
      name: "Legendary Sword Shusui X",
      edition: "20",
      type: "Equip",
      image: "/images/Shusui.png",
    },
    {
      id: 17,
      name: "Disappear",
      edition: "17",
      type: "Trap",
      image: "/images/Disappear.png",
    },

    {
      id: 2,
      name: "Gatling Gun B",
      edition: "4",
      type: "Skill",
      image: "/images/GatlingGunB.png",
    },
    {
      id: 11,
      name: "Merry Go",
      edition: "11",
      type: "Ship",
      image: "/images/Merrygo.png",
    },

    {
      id: 3,
      name: "Small Potion",
      edition: "3",
      type: "Item",
      image: "/images/SmallPotion.png",
    },
    {
      id: 5,
      name: "Sanji A",
      edition: "5",
      type: "Character",
      image: "/images/sanjiAcard.png",
      attack: 1200,
    },
    {
      id: 1,
      name: "Luffy B+",
      edition: "1x2",
      type: "Character",
      image: "/images/LuffyBcardSpecial1.png",
      attack: 1000,
    },
    {
      id: 1,
      name: "Luffy B+",
      edition: "1x3",
      type: "Character",
      image: "/images/LuffyBcardSpecial2.png",
      attack: 1000,
    },
  ]);

  const [Player1LP, SetPlayer1LP] = useState(0);
  const [Player2LP, SetPlayer2LP] = useState(0);

  const [Player1C, SetPlayer1C] = useState(0);
  const [Player2C, SetPlayer2C] = useState(0);

  const DamagingPlayer2 = (cardattack) => {
    if (Player2Cell1.length == 0) {
      SetPlayer2LP(Player2LP - cardattack);
    }
  };

  //const [Deck1, setDeck1] = useState([1, 5, 9, 56, 63, { id: 1, num: 1 }, 41]);
  const [Display1, SetDisplay1] = useState([]);
  const [Hand1, setHand1] = useState([]);
  const [Stack1, setStack1] = useState([]);
  const [Player1Cell1, setPlayer1Cell1] = useState([]);
  const [Player1Cell2, setPlayer1Cell2] = useState([]);
  const [Player1Cell3, setPlayer1Cell3] = useState([]);
  const [Player1Cell4, setPlayer1Cell4] = useState([]);
  const [Player1Cell5, setPlayer1Cell5] = useState([]);
  const [Player2Cell1, setPlayer2Cell1] = useState([]);
  const [Player2Cell2, setPlayer2Cell2] = useState([]);
  const [Player2Cell3, setPlayer2Cell3] = useState([]);

  const Draw = () => {
    const v = Math.floor(Math.random() * Deck1.length);
    if (Deck1.length > 0) {
      setStack1([Deck1[v]]);
      Hand1.push(Deck1[v]);

      Deck1.splice(v, 1);
    }

    console.log(v);

    console.log(Hand1);
    console.log(Deck1);
  };

  const MovetoBoard = () => {};

  return (
    <Container>
      <Frame1>
        Life points : {Player1LP}
        <button
          onClick={() => {
            SetPlayer2LP(Player2LP - 2000);
            console.log(Player2LP);
          }}
        >
          Attack
        </button>
        <InsideFrame1>
          <DeckUnit1>
            <Itemdeck />
          </DeckUnit1>
          <button onClick={Draw}>Draw</button>
          <Handcards2>
            {Hand1.map((card) => (
              <>
                <ButtonItemX
                  key={card}
                  img={card.image}
                  onDoubleClick={() => {
                    SetDisplay1(card);
                  }}
                >
                  {card.name}
                  <img src={card.image}></img>
                  <button
                    onClick={() => {
                      setStack1(card);

                      if (
                        (card.type == "Ship" ||
                          card.type == "Item" ||
                          card.type == "Magical Skill" ||
                          card.type == "Trap") &&
                        Player1Cell4.length == 0
                      ) {
                        Player1Cell4.push(card);
                      } else if (
                        (card.type == "Ship" ||
                          card.type == "Item" ||
                          card.type == "Magical Skill" ||
                          card.type == "Trap") &&
                        Player1Cell4.length == 1 &&
                        Player1Cell5.length == 0
                      ) {
                        Player1Cell5.push(card);
                      }

                      if (
                        card.type == "Character" &&
                        Player1Cell1.length == 0
                      ) {
                        Player1Cell1.push(card);
                      } else if (
                        card.type == "Character" &&
                        Player1Cell1.length == 1 &&
                        Player1Cell2.length == 0
                      ) {
                        Player1Cell2.push(card);
                      } else if (
                        card.type == "Character" &&
                        Player1Cell2.length == 1 &&
                        Player1Cell3.length == 0
                      ) {
                        Player1Cell3.push(card);
                      }

                      Hand1.splice(Hand1.indexOf(card), 1);
                      console.log(Player1Cell1);
                    }}
                  >
                    Insert
                  </button>
                </ButtonItemX>
              </>
            ))}
          </Handcards2>
        </InsideFrame1>
      </Frame1>
      <FrameCenter>
        <Zoom>
          <img src={Display1.image} alt="" />
        </Zoom>
        <Board>
          <Cell>
            {Player1Cell1.map((card) => (
              <>
                <Mix>
                  <ButtonX
                    onClick={() => {
                      console.log(card.name);
                      SetDisplay1(card);
                    }}
                  >
                    <img src={card.image} alt="" />
                  </ButtonX>
                  <Stix>
                    <ButtonX onClick={() => DamagingPlayer2(card.attack)}>
                      <button>attack</button>
                    </ButtonX>
                    <button>1</button>
                    <button>2</button>
                  </Stix>
                </Mix>
              </>
            ))}
          </Cell>
          <Cell>
            {Player1Cell2.map((card) => (
              <>
                <Mix>
                  <ButtonX
                    onClick={() => {
                      console.log(card.name);
                      SetDisplay1(card);
                    }}
                  >
                    <img src={card.image} alt="" />
                  </ButtonX>
                  <Stix>
                    <ButtonX onClick={() => DamagingPlayer2(card.attack)}>
                      <button>attack</button>
                    </ButtonX>
                    <button>1</button>
                    <button>2</button>
                  </Stix>
                </Mix>
              </>
            ))}
          </Cell>
          <Cell>
            {Player1Cell3.map((card) => (
              <>
                <Mix>
                  <ButtonX
                    onClick={() => {
                      console.log(card.name);
                      SetDisplay1(card);
                    }}
                  >
                    <img src={card.image} alt="" />
                  </ButtonX>
                  <Stix>
                    <ButtonX onClick={() => DamagingPlayer2(card.attack)}>
                      <button>attack</button>
                    </ButtonX>
                    <button>1</button>
                    <button>2</button>
                  </Stix>
                </Mix>
              </>
            ))}
          </Cell>
          <BlockedCell />
          <Cell>
            {Player1Cell4.map((card) => (
              <>
                <ButtonX
                  onClick={() => {
                    console.log(card.name);
                    SetDisplay1(card);
                  }}
                >
                  <img src={card.image} alt="" />
                </ButtonX>
              </>
            ))}
          </Cell>
          <Cell>
            {Player1Cell5.map((card) => (
              <>
                <>
                  <ButtonX
                    onClick={() => {
                      console.log(card.name);
                      SetDisplay1(card);
                    }}
                  >
                    <img src={card.image} alt="" />
                  </ButtonX>
                </>
                <></>
              </>
            ))}
          </Cell>
          <Cell />
          <Cell />
          <Cell />
          <BlockedCell />
          <Cell />
          <Cell />
        </Board>
      </FrameCenter>
      <Framelast>
        <InsideFramelast>
          <DeckUnit2>
            <Itemdeck />
          </DeckUnit2>

          <Handcards2>
            <div>Hand Cards are : {Hand1.length}</div>
            <Itemx />
            <Itemx />
            <Itemx />
            <Itemx />
            <Itemx />
          </Handcards2>
        </InsideFramelast>
        Life points : {Player2LP}
        <button>Attack</button>
      </Framelast>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: grey;
  height: 100vh;

  justify-content: space-between;
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 20%;
  background: black;
  color: white;
  font-size: 20px;
`;

const InsideFrame1 = styled.div`
  display: flex;
  flex-direction: row;

  height: 80%;
  width: 80vh;
  background: darkblue;
`;

const DeckUnit1 = styled.div`
  display: flex;
  height: 100%;
  width: 13vh;
  background: white;
  justify-content: center;
  align-items: center;
`;

const FrameCenter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 45%;
  background: grey;
`;

const Framelast = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  background: black;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 20px;
`;

const InsideFramelast = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;

  height: 80%;
  width: 80vh;
  background: darkcyan;
`;

const DeckUnit2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 13vh;
  background: white;
`;

const Handcards2 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: 90%;

  background: grey;
  justify-self: center;
  align-self: center;
`;

const Itemx = styled.div`
  height: 90%;
  width: 15%;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    height: 90%;
    width: 100%;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const ButtonItemX = styled.div`
  height: 90%;
  width: 15%;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    height: 90%;
    width: 100%;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Iteml = styled.div`
  height: 80%;
  width: 10%;
  background: blue;
`;

const Itemdeck = styled.div`
  height: 80%;
  width: 80%;
  background: brown;
`;

const Board = styled.div`
  border: 5px solid black;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 70%;
  width: 60%;
`;

const Cell = styled.div`
  border: 2px solid brown;
  background-color: darkbeige;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockedCell = styled.div`
  background-color: black;
  border: 2px solid black;
`;

const ItemInCell = styled.div`
  height: 90%;
  width: 80%;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    height: 100%;
    width: 100%;
    &:hover {
      transform: scale(3);
    }
  }
`;

const Zoom = styled.div`
  height: 100%;
  width: 25%;
  background: white;
  border: 5px solid black;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ButtonX = styled.button`
  height: 90%;
  width: 90%;
  cursor: pointer;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  img {
    height: 100%;
    width: 100%;
    &:hover {
      transform: scale(2);
    }
  }
  button {
    height: 10%;
    font-size: 10px;
  }
`;

const Mix = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Stix = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
