class MyCollection extends Array{
    dump(){
        this.forEach(item=>{
            console.log(item);
        })
    }
}

let c = new MyCollection();
c.push(1);
c.push(2);
c.push(3);

c.dump();

/* output
1
2
3
*/

