let myLibrary=[];


class Book{
  constructor(title, author, pages, read){
    this.title=title
    this.author=author
    this.pages = pages
    this.read= read
  }
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
    create();
  }
    

    function create(){
    
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
     reader.id=`reader${i}`;
   
    //cellText = document.createTextNode(myLibrary[i].read);
    
       function big(){

        if(myLibrary[i].read == true){
             readText = document.createTextNode("Read");
            
          
        }
        else {readText=document.createTextNode("Not Read");
        
        
      }
      
    }
big();

       
  
  
    reader.appendChild(readText);
    row.appendChild(reader);
    
  


    let remove = document.createElement('td');
    cellText = document.createTextNode('Remove');
    remove.classList.add('removal');
    remove.setAttribute('id',`${i}remove`);
  
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








// READ STATUS  -- need to update object -- need to have true false event listener for other added books and update object 
const did = document.querySelector('#testme');

 did.addEventListener('click',function(e){
    if(e.target.className =='reader'){
  
     let c = e.target;
    
    
    for(i=0;i<myLibrary.length;i++){
        let g=e.target.id.replace('reader','');
 
        if (g==i && c.textContent=="Read"){
          document.getElementById(`reader${g}`).textContent='Not Read';
           
            myLibrary[g].read=false;
      
        }
        else if (g==i && c.textContent=="Not Read"){
            document.getElementById(`reader${g}`).textContent='Read';
            myLibrary[g].read=true;
        }
     }
     
     }
  
   });






    //delete books    
    const list= document.getElementById('testme');
  
    list.addEventListener('click',(e)=>{
        if(e.target.className=='removal'){
            for(let i = 0;  i<=myLibrary.length;i++){
              let g = e.target.id.replace('remove','');
              if(g==i){
                myLibrary.splice(i,1)
                e.target.parentNode.parentNode.remove();
              }
            }


        }

      create();
       
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


// filter will remove a specific object from array