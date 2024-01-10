const height =document.querySelector('#height')
const weight =document.querySelector('#weight')
const goals = document.querySelector('#goals')
const btn = document.querySelector('#result')
console.log(height,weight,goals,btn)
//“적정체중 = (본인신장-100)*0.9”
//1.height 의 value가 나오는지 본다
//2.weight의 value가 나오는지본다
//3. 적정체중 변수를 만든뒤 계산식을 만든다
//4. 초과 체중의 변수를 만든다
//5. 최종 칸에  결과가 출력되게 만든다
btn.addEventListener('click',function(){
    console.log(".")
    console.log(Number(height.value))
    console.log(Number(weight.value))
    let Proper_weight = (Number(height.value)-100)*0.9
    let total =Number(weight.value)- Number(Proper_weight);
    goals.value = `적정체중은 ${Proper_weight}kg이며 ${total} 초과되었습니다`
})
