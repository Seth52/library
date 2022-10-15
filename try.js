let myLibrary=[];


// filter will remove a specific object from array
function Book(title,author, pages,read){
    this.title=title
    this.author=author
    this.pages = pages
    this.read= read
   
}


function up(){
    
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readq = document.querySelector('#read').checked;
    let read=readq;
    
    //creates object and sends to array
    let book = new Book (title,author,pages,read); 
    myLibrary.push(book);
    

    
    
    //test of table creation
    
    const tbl = document.createElement("table");
    tbl.id='booklog';
    const tblBody = document.createElement('tbody');
    tblBody.id='bodyme';

    //create display of books in the table
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
    
    
    // read

     let reader = document.createElement('td');  
     reader.classList.add('reader'); 
    //cellText = document.createTextNode(myLibrary[i].read);
    cellText=document.createElement('input');
    cellText.type="checkbox";
    
   
    function check(){
      if(myLibrary[i].read == true){
     cellText.checked =true;
      }
    };
    check();
    reader.appendChild(cellText);
    row.appendChild(reader);
    



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
    
    
   
    }
      else {
        up();

      }
    })








// working on updating myLibrary array and dom 
const did = document.querySelector('#myBooks');
did.addEventListener('change',function(e){
  if(e.target.className =='reader'){
    console.log('ok');
  }
  
});






    //delete books    
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

 Book.prototype.read = function(){

      }


    //bubbling allows u to set an event listener at a higher target to
    //not have to be generated per creation
    

    /* protoype function that first allows you to toggle read status on book instance 

    function Book(title,author, pages,read, remove){
    this.title=title
    this.author=author
    this.pages = pages
    this.read= read
    }
<select name="read" id='read'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
    
    

*/