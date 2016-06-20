function dog(){
    this.name = "boo";
    setInterval(
        function(){
            console.log(this.name + " woofed!");
        }, 1000);
}

dog();