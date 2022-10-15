let myLibrary=[/*[title = 'The Hobbit', author='tolk'],[title='shh', author='me',t='t']*/];


// filter will remove a specific object from array
function Book(title,author, pages,read, remove){
    this.title=title
    this.author=author
    this.pages = pages
    this.read=read
   
}


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
   
    }
      else {
        up();

      }
    })
    
    const list= document.querySelector('#testme');
    list.addEventListener('click',function(e){
        if(e.target.className == 'removal'){
            e.target.parentNode.remove();
            
            
           
          for(i=0;i<myLibrary.length;i++){
            let g = e.target.id.replace('remove','');
            if (g==i){
                myLibrary.splice(i,1)
            }
           }
        }
    })


    //bubbling allows u to set an event listener at a higher target to
    //not have to be generated per creation
    