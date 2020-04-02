//HTML要素を変数化
let tanaka = document.getElementById("tanaka");

let watanabe = "渡部";

tanaka.textContent = watanabe;

const hantei = () => {
    let tanakaInner = tanaka.innerHTML;
    let result = tanakaInner == "田中";
    console.log(result);
    
}

hantei();