const names = [
  "Sanjay", "Arun", "Priya", "Deepak", "Meena", "Kiran", "Ravi", "Asha", "Manoj", "Nisha",
  "Anita", "Rahul", "Sneha", "Vijay", "Divya", "Karthik", "Latha", "Surya", "Geetha", "Raj",
  "Sunil", "Anjali", "Varun", "Pooja", "Suresh", "Neha", "Ajay", "Bhavana", "Mohan", "Kavya",
  "Vinod", "Lakshmi", "Naveen", "Shruti", "Harsha", "Vidya", "Aravind", "Swathi", "Ashok", "Devi",
  "Dinesh", "Pavithra", "Mahesh", "Reshma", "Vimal", "Nandini", "Sathish", "Ishwarya", "Roshan", "Preethi",
  "Rohit", "Tanvi", "Abhinav", "Lavanya", "Karan", "Snehal", "Zara", "Aditya",
  "Harini", "Dev", "Gayathri", "Sakshi", "Pranav", "Aarthi", "Rekha", "Nikhil", "Trisha", "Siddharth",
  "Krishna", "Monica", "Amit", "Ankita", "Ritika", "Deeksha", "Harsh", "Rupa", "Shaan", "Mala",
  "Shweta", "Kabir", "Tanushree", "Yash", "Tanya", "Virat", "Bhavana", "Shreyas", "Sanya", "Diksha",
  "Arvind", "Charan", "Esha", "Imran", "Jhanvi", "Lekha", "Nithya", "Omkar", "Pankaj", "Ragini",
  "Sudeep", "Tarun", "Vaishnavi", "Yuvraj", "Anju", "Bhuvana", "Chetan", "Dharani", "Edison", "Farah",
  "Gauri", "Hansika", "Indu", "Jayesh", "Keerthi", "Lohit", "Madhu", "Neel", "Oviya", "Padma",
  "Quincy", "Ramya", "Sai", "Tushar", "Urmila", "Vikas", "Waseem", "Xavier", "Yamini", "Zubin",
  "Ashwini", "Bindu", "Chandru", "Dolly", "Elakkiya", "Faisal", "Gokila", "Hari", "Ishaan", "Jeni",
  "Kaviya", "Lalit", "Mouli", "Nagesh", "Ovi", "Priyansh", "Quasar", "Rohini", "Sowmya", "Taran",
  "Uday", "Vani", "Wasim", "Xena", "Yashika", "Zaheer", "Avinash", "Benny", "Cyril", "Diya",
  "Ena", "Farzana", "Girish", "Hemal", "Indira", "Jaideep", "Kushal", "Laya", "Moksha", "Naman",
  "Omar", "Pratik", "Qadir", "Rajani", "Shiva", "Tanish", "Usha", "Viren", "Wendy", "Xavi",
  "Yogesh", "Zeenat", "Ajmal", "Barkha"
];

//creating the variables
const input = document.getElementById("search");
const resulList = document.getElementById("resultlist")
const keystokes = document.getElementById("keystokes")
const searchcount = document.getElementById("searchcount")
const loader = document.getElementById("loading")
const backtoTop = document.getElementById("backtoTop")

let Totalkeys = 0;
let searches = 0;
let timer;
// Debouncing
function debounceSearch(value){
    clearTimeout(timer)

    loader.style.display = "block"
    timer = setTimeout(()=>{
        loader.style.display = "none";
        showResults(value);
        searches++
        searchcount.textContent = searches;
    },1000)
}
//Matched Results
function showResults(query){
    resulList.innerHTML=""
    const filtered = names.filter(name => name.toLowerCase().includes(query.toLowerCase()))
    if(filtered.length ===0){
        resulList.innerHTML= "<li> No result found</li>"
        return
    }
    filtered.forEach(name=>{
        const highlighted = name.replace(new RegExp(query, "gi"), match => `<span class="highlight" >${match}</span>`);
        const li = document.createElement("li");
        li.innerHTML = highlighted
        resulList.appendChild(li);
    });
}
//Inputs
input.addEventListener("input",(ele)=>{
    Totalkeys++;
    keystokes.textContent=Totalkeys;
    debounceSearch(ele.target.value);
});

//Throttle
let throttleTme;
window.addEventListener("scroll",()=>{
    if(throttleTme)
        return;
    throttleTme = setTimeout(()=>{
        if(window.scrollY>200){
            backtoTop.style.display = "block"
        }
        else{
            backtoTop.style.display="none"
        }
        throttleTme =null
    },500);
});

backtoTop.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior:"smooth"});
});
