class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
           this.data[address] = []; 
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
                
            }
        }
        return undefined;
    }

    keys() {
        const aggregatedKey = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]){
                for (let j = 0; j < this.data[i].length; j++) {
                    const element = this.data[i][j];
                    aggregatedKey.push(element[0]);
                }
            }
        }
        return aggregatedKey;
    }
}

const myHT = new HashTable(2);
myHT.set('grapes', 1000);
myHT.set('sandesh', 25);
myHT.set('akela', 120);
console.log(myHT.get('grapes'));
console.log(myHT.keys());
