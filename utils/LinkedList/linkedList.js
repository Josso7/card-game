class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    displayDeck(){
        let currNode = this.head
        while(currNode !== null){
            console.log(`${currNode.data.name}`)
            currNode = currNode.next;
        }
    }

    addCardToEnd(card){
        let node = new Node(card);        
        if(this.head === null){
            this.head = node;
            this.length++;
            return this.head
        }

        let currNode = this.head;
        while(currNode.next !== null){
            currNode = currNode.next
        }

        currNode.next = node;
        this.length++;
        return node;
    }

    shuffle(){
        let deckArray = [];
        let currNode = this.head
        while(currNode !== null){
            deckArray.push(currNode.data)
            currNode = currNode.next
        }

        for (let i = deckArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deckArray[i], deckArray[j]] = [deckArray[j], deckArray[i]];
        }   
        currNode = this.head;
        while(deckArray.length !== 0){
            currNode.data = deckArray.shift();
            currNode = currNode.next
        }
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export { LinkedList, Node }