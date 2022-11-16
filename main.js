window.onload = function() {

     var canvas = document.getElementById("canvas");
     var context = canvas.getContext('2d');

     canvas.width = window.innerWidth;
     console.log(canvas.width)
     canvas.height = window.innerHeight;
   console.log(canvas.height)


    document.querySelector("#file").addEventListener("change",function(e){
        img = new Image;
        img.onload = function() {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        img.src = URL.createObjectURL(e.target.files[0]);
    })
    $(".image-container img").click(function(e){
        var id = $(this).attr("id");
        $("#hidden").attr("src", "shapes/" + id + ".png");
        img1 = document.getElementById("hidden");
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-in';
        context.drawImage(img1, 0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation='source-over';
    })
}