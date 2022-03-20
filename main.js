var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "Daddy.png", "Mummy.png", "Me.png"];
var names = ["Family Book", "Daddy", "Mummy", "Me"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = ["Daddy.png", "Mummy.png", "Me.png"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Daddy", "Mummy", "Me"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
