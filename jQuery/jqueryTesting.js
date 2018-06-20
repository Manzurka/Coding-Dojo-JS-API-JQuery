$(document).ready(function(){
    $.get('/notes', function(all_notes){
        console.log(all_notes);
        for(var i=0; i < all_notes.length; i++){
             var html_str= `
               <div class="notes" id="${all_notes[i].id}">
                   <h2>${all_notes[i].title}</h2>
                   <form action="/notes/${all_notes[i].id}/update" method="post">
                       <p>${all_notes[i].description}</p>
                   </form>
                   
                   <button id="delete">Delete</button>
               </div>
               <div class="hidden" id="${all_notes[i].id}" style="display:none">
                   <form action="/notes/${all_notes[i].id}/update" method="post">
                       <input type="text" name="title" placeholder="${all_notes[i].title}"/>
                       <br>
                       <button id="update">Update</button>
                     </form>
               <div>
               `;
             $('#all_notes').append(html_str);
             
           $('p').click(function(){
               var html_str =` 
                   <textarea name="description"></textarea>
                   <button id="update">Update</button>
               `;
               $(this).html(html_str);
        })
        
        }
    }, 'json')
    
     $('form').submit(function(){
         
         $.post('/notes/create', $(this).serialize(), function(note){
             var html_str= `
               <div class="notes"  id="${note.id}">
                       <h2>${note.title}</h2>
                       <p>${note.description}
                       <button id="edit">Edit</button>
                       <button id="delete">Delete</button></p>
               </div>
               `;
           $('#all_notes').append(html_str);
         }, 'json')
         
          return false;
     })
     
     $('form').submit(function(){
     $.post('/notes/{id}/update', $(this).serialize(), function(note){
             var html_str= `
               <div id="${note.id}">
                       <h2>${note.title}</h2>
                       <form action="/notes/${all_notes[i].id}/update" method="post">
                           <p>${all_notes[i].description}</p>
                       </form>
                       
                       <button id="delete">Delete</button>
               </div>
               `;
           $('#all_notes').append(html_str);
         }, 'json')
         
          return false;
     })
     
//			  $.get('notes/{id}/edit', function(note){
//				  var html_str= `
//					 <form action="/notes/${note.id}/update" method="post">
//							<input type="text" name="title" placeholder="${note.title}"/>
//							<textarea name="description" placeholder="${note.description}"></textarea>
//							<button id="edit">Edit</button>
//					 </form>`;
//				  $('#1').html(html_str);
//		  })
    });