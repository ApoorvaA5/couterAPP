function Increment(input){
    var count=Number(document.getElementById('count').innerText)
    count = count + input
    document.getElementById('count').innerText=count
}
function decrement(input){
    var count=Number(document.getElementById('count').innerText)
    count = count-input
    document.getElementById('count').innerText=count
}
function Incrementrandom(){
    var input=Number(document.getElementById('increment-input').value)
    Increment(input)

}
function Decrementrandom(){
    var input=Number(document.getElementById('increment-input').value)
    Increment(input)
}

