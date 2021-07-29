const formBtn = document.querySelector('#formbtn')
const yourName = document.getElementById('yourname');
const partnersName = document.getElementById('partnersname');

formBtn.addEventListener('click', loveCal);


function loveCal(e){
    //
    if(yourName.value === '' || partnersName.value === ''){
        //showAlert
        const div = document.createElement('div');
        div.className = "alert text-white text-center w-50 mx-auto";
        div.appendChild(document.createTextNode('Please Fill the Both Name!'));
        //calling the dom
        const container = document.querySelector('.container');
        const card = document.querySelector('.card')
        //inserting
        container.insertBefore(div, card);
        //timeout
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }else{
       //clearField();
        //console.log(yourName, partnersName);
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${yourName.value}&sname=${partnersName.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "633789c72emsh7cbda0cfcb7d751p1ffb07jsnd16f8949460a",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(data => {
    const output = document.querySelector('.result');
    //
    output.innerHTML = `
    <h6> Percentage: <h1>${data.percentage}%</h1></h6>
    <h6> Result: ${data.result}</h6>
    <h6>${data.fname} & ${data.sname}</h6>
    <h6> </h6>
    `;
    setTimeout(() => {
        window.location.reload();
    },3000);
})
.catch(err => console.log(err))

    }

    e.preventDefault();
}

// function clearField(){
//      document.querySelector('#yourname').value="";
//      document.querySelector('#partnersname').value=""; 
// }















// fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "633789c72emsh7cbda0cfcb7d751p1ffb07jsnd16f8949460a",
// 		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });