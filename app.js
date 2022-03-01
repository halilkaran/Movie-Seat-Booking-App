const seat = document.querySelectorAll(".seat");
let seats ;
let filmname  ;
let arr  ;

let selectseats;
const getDataFromDatabase = () => {
    arr = JSON.parse(localStorage.getItem("arr")) || [];
    seats = JSON.parse(localStorage.getItem("seats")) || 0;
    filmname = JSON.parse(localStorage.getItem("filmname")) || "";
    
    
};
getDataFromDatabase();
console.log(selectseats);

let count = 0;
seat.forEach((s) => {
  s.className += ` ${count}`;
  count++;
  console.log(s.className);
});




seat.forEach((seat,index) => {
  
    if (arr.includes(index)) {
    seat.className = `seat selected ${index}`;
}





    console.log(seat.className);
    seat.addEventListener("click", () => {
        
        if (seat.className == `seat ${index}`) {
            seat.className = `seat selected ${index}`;
            seats++
            localStorage.setItem("seats", JSON.stringify(seats));
            arr.push(index)
            
        } else if (seat.className != `seat occupied ${index}`) {
            seat.className = `seat ${index}`;
            seats--;
             localStorage.setItem("seats", JSON.stringify(seats));
            arr = arr.filter((i) => i != index); 

        }
    update();
        calculate();
        console.log(seat.className);
        localStorage.setItem("arr", JSON.stringify(arr));
       
console.log(arr);
    })
})


const calculate = () => {
    const price = document.querySelector("#movie").value;
    document.querySelector("#total").textContent= price*seats;
    document.querySelector("#count").textContent = seats;
    document.querySelector("#film").textContent =filmname;

}
calculate();

document.querySelector("#movie").addEventListener("click", () => {
  update()
     calculate();
})

const update = () => {
    const sb = document.querySelector("#movie");
    const selectedValues = [].filter
      .call(sb.options, (option) => option.selected)
      .map((option) => option.text);

    filmname = selectedValues[0].slice(0, -5);
     localStorage.setItem("filmname", JSON.stringify(filmname));
}
