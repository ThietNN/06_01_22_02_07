function run(){
    let x = parseInt(document.getElementById("a").value)
    let y = parseInt(document.getElementById("b").value)
    let z = (x*y)/2
    document.getElementById("result").innerText= "Diện tích của hình tam giác là " + z
}