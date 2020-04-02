//HTML要素を変数化
let tanaka = document.getElementById("tanaka");

let watanabe = "渡部";

tanaka.textContent = watanabe;

const hantei = (name) => {
    let tanakaInner = tanaka.innerHTML;
    let result = tanakaInner == name;
    console.log(result);
}

hantei("渡部");