let greetings = ['HELLO', 'BONJOUR', '你好', 'HALLO', 'HOLA', 'こんにちは', 'OLÁ', 'مرحبا'];

let hello = document.querySelector('.hello');
var i = 0;

let helloLoop = () => {
    if(i == greetings.length) i = 0;

    hello.innerHTML = greetings[i];
    setTimeout(helloLoop, 2000);
    
    i++;
}
helloLoop();
