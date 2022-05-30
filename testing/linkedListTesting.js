import { LinkedList } from "../utils/LinkedList/linkedList.js";
import { frostSpells } from "../classes/Cards/Mage/frost.js";
import { Card } from "../classes/Cards/card.js";

const deck = new LinkedList();
const frostBolt = new Card(frostSpells['frostbolt']);
const iceBarrier = new Card(frostSpells['iceBarrier']);
const frostNova = new Card(frostSpells['frostNova']);

deck.addCardToEnd(frostBolt);
deck.addCardToEnd(iceBarrier);
deck.addCardToEnd(frostNova);
deck.shuffle();
deck.displayDeck();
