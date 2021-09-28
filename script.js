var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://thumbs.dreamstime.com/b/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg", "Yash.jpeg", "https://c8.alamy.com/comp/W4EC9W/family-young-parents-with-children-cartoon-W4EC9W.jpg","Mini_Pup.jpg","pup.jpg","oscar.jpg"];
var names = ["Mom", "Dad", "Me", "Us","Mini","Pupies","Oscar"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}