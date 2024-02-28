const loadPhone = async(searchText) => {
const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
const data = await res.json();
const phones = data.data;
// console.log(phones);
displayPhones(phones);
}

const displayPhones = phones => {
// console.log(phones);
//1.call the div their we store data
const phoneContainer = document.getElementById("phone-container")
// data will be empty 
phoneContainer.textContent = "";  
//display 1st 12 phone
const showAllContainer = document.getElementById("show-all-container")
if(phones.length > 12){
showAllContainer.classList.remove("hidden")
}else{
    showAllContainer.classList.add("hidden")
}
phones = phones.slice(0,12);
phones.forEach(phone => {
console.log(phone);
//2.create a div in daynamic
const phoneCard = document.createElement("div");
phoneCard.classList =`card p-4 bg-base-100 shadow-2xl`;
//3.set innerHTML
phoneCard.innerHTML = `
<figure><img src="${phone.image}" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">${phone.phone_name}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
`;
//append the child 
phoneContainer.appendChild(phoneCard);
toggleLoadingSpinner(false);
});

}

//handle search
const handleSearch = () => {
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    loadPhone(searchText);
}


const handleSearch2 = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById("search-field2");
    const searchText = searchField.value;
    loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById("loading-spinner")
    loadingSpinner.classList.remove("hidden")
    if(isLoading){
    loadingSpinner.classList.remove("hidden")
    }else{
        loadingSpinner.classList.add("hidden")
    }

}
// loadPhone();