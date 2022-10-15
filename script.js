// Library Array
let myLibrary=[/*[title = 'The Hobbit', author='tolk'],[title='shh', author='me',t='t']*/];

// Object Constructor

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  
}
// function to return info abt a book
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages,${this.read}`;

}
//dummy book 
//const book1 = new Book('The Hobbit', 'Tolkein','500','not read yet');



// check out for each

// grabs value from form adds to array and writes them into DOM 

function up(){
    
let title = document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let pages = document.querySelector('#pages').value;
let readq = document.querySelector('#read');
let read = readq.options[readq.selectedIndex].value;

//creates object and sends to array
let book = new Book (title,author,pages,read); 
myLibrary.push(book);


console.log(book)
console.log(`${title}, by ${author}, ${pages}, ${read}`);


//test of table

const tbl = document.createElement("table");
tbl.id='booklog';
const tblBody = document.createElement('tbody');
tblBody.id='bodyme';
//test 2
for(i=0; i < myLibrary.length; i++){
const row=document.createElement('tr');
row.setAttribute('id',`${i}book`)

let cell = document.createElement('td');
let cellText = document.createTextNode(myLibrary[i].title);
cell.appendChild(cellText);
row.appendChild(cell);

cell = document.createElement('td');
cellText = document.createTextNode(myLibrary[i].author);

cell.appendChild(cellText);
row.appendChild(cell);
 cell = document.createElement('td');
cellText = document.createTextNode(myLibrary[i].pages);

cell.appendChild(cellText);
row.appendChild(cell);

 cell = document.createElement('td');
cellText = document.createTextNode(myLibrary[i].read);
cell.appendChild(cellText);
row.appendChild(cell);

let remove = document.createElement('td');
cellText = document.createTextNode('Remove');
remove.classList.add('removal');
remove.setAttribute('id',`${i}remove`)
//adds event listener on remove and just leaves the number but doesnt reload dom until press submit again
/*remove.addEventListener('click',function(){
  let ty=remove.id.replace('remove','')
 let x = `${i}remove`;
 console.log(x);
  const bye =document.getElementById(x).parentElement;
  console.log(bye);
  
  
});*/


remove.appendChild(cellText);
row.appendChild(remove);

 
tblBody.appendChild(row);}

    
document.getElementById('testme').appendChild(tblBody);


}




//Create object from form info 
document.getElementById("sub").addEventListener('click', function (){
  if(document.getElementById('bodyme') !==null){
  document.getElementById('bodyme').remove();
  up();

// remove button
document.querySelector(".removal").addEventListener('click', function (){
  //for(i=0; i<myLibrary.length; i++){
    //document.getElementById(`${i}book`){
      let b = document.querySelector(".removal");
  let fatha = b.parentElement;

    //}
  //}
  //let fatha = removal.parentElement.getAttribute('tr');
  
  console.log(fatha);
  console.log('nip');
 
})
}
  else {
    up();
    

    //remove button
/*document.querySelector(".removal").addEventListener('click', function (){
  let b = document.querySelector(".removal");
  let fatha = b.parentElement.id;

  
  console.log(fatha);
 
  console.log('yes2')
})*/
  }
})

