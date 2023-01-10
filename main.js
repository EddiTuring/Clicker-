const count = document.querySelector("#count");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

let cot = 0;
const onClickPlus = () =>{
	cot++;
	if(cot > 10){
		cot += 1
	} if (cot > 50){
		cot += 2
	}
	if (cot > 100){
		cot += 3
	}
	if (cot > 200){
		cot += 4
	}
	if (cot > 400){
		cot += 5
	}
	if (cot > 800){
		cot += 6
	}
	if (cot > 1000){
		cot += 10
	}
count.innerHTML = cot
};

const onClickMinus = () =>{
	if(cot == 0){return}
	cot--;
count.innerHTML = cot
};

btn.addEventListener("click", onClickPlus);
btn2.addEventListener("click", onClickMinus);