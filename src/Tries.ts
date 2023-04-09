interface TrieNodeType {
	[key: string]: TrieNode;
}

class TrieNode {
	childrens: TrieNodeType  = {};
	isSequance = false;
}


export default class Tries {
	root = new TrieNode();


	insert(sequnce: string){
		let current = this.root;
		for(let number of sequnce){
			if(Object.keys(current.childrens).includes(number)){
				current = current.childrens[number];
			} else {
				current.childrens[number] = new TrieNode();
				current = current.childrens[number];
			}
		}
		current.isSequance = true;
	}


	search(sequnce: string): boolean{
		let current = this.root;
		for(let number of sequnce){
			if(Object.keys(current.childrens)){
				current = current.childrens[number];
			} else {
				return false;
			}
		}
		return current.isSequance;
	}


	private suggestHelper(root: TrieNode, list: string[], prefix: string) {
		if(list.length == 5){
			return;
		}

		if (root.isSequance) {
		  list.push(prefix);
		}

		if (Object.keys(root.childrens).length) {
			for (let number of Object.keys(root.childrens)) {
				this.suggestHelper(root.childrens[number], list, prefix + number);
			  }
		}
	  }
	 
	  suggest(prefix: string) {
		let current = this.root;
		let curr = prefix;
		for(let number of prefix){
			if(Object.keys(current.childrens).includes(number)){
				current = current.childrens[number];
			} else {
				return [];
			}
		}		
		let list: string[] = [];
		this.suggestHelper(current, list, curr);
		return list;
	  }
}



const t = new Tries();


t.insert("1000000001")
t.insert("1000000002")
t.insert("1000000003")
t.insert("1000000004")
t.insert("1000000005")
t.insert("1000000006")
t.insert("1000000007")
t.insert("1000000008")
t.insert("1000000009")
t.insert("1200000001")
t.insert("1200000002")
t.insert("1000000001")
t.insert("1000000002")
t.insert("1000000003")
t.insert("1000000004")
t.insert("1000000005")
t.insert("1000000006")
t.insert("1000000007")
t.insert("1000000008")
t.insert("1000000009")
t.insert("1200000001")
t.insert("1200000002")

t.insert("1000000011")
t.insert("1000000022")
t.insert("1000000033")
t.insert("1000000044")
t.insert("1000000055")
t.insert("1000000066")
t.insert("1000000077")
t.insert("1000000088")
t.insert("1000000099")
t.insert("1200000011")
t.insert("1200000022")

t.insert("1000000101")
t.insert("1000000202")
t.insert("1000000303")
t.insert("1000000404")
t.insert("1000000505")
t.insert("1000000606")
t.insert("1000000707")
t.insert("1000000808")
t.insert("1000000909")
t.insert("1200000201")
t.insert("1200000102")


t.insert("1000000001")
t.insert("1000000002")
t.insert("1000000003")
t.insert("1000000004")
t.insert("1000000005")
t.insert("1000000006")
t.insert("1000000007")
t.insert("1000000008")
t.insert("1000000009")
t.insert("1200000001")
t.insert("1200000002")

t.insert("100001001")
t.insert("100001002")
t.insert("100001003")
t.insert("100001004")
t.insert("100001005")
t.insert("100001006")
t.insert("100001007")
t.insert("100001008")
t.insert("100001009")
t.insert("120001001")
t.insert("120001002")



t.insert("111001001")
t.insert("111001002")
t.insert("111001003")
t.insert("111001004")
t.insert("111001005")
t.insert("111001001")
t.insert("111001002")
t.insert("111001003")
t.insert("111001004")
t.insert("111001005")
t.insert("111001001")
t.insert("111001002")
t.insert("111001003")
t.insert("111001004")
t.insert("111001005")
t.insert("111001001")
t.insert("111001002")
t.insert("111001003")
t.insert("111001004")
t.insert("111001005")
t.insert("111001001")
t.insert("111001002")
t.insert("111001003")
t.insert("111001004")
t.insert("111001005")


console.log(t.suggest("1"))
