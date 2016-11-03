function cekajKomentare(){
  setTimeout(function(){
    
    if(document.querySelector("div.block.komentari") != null){
      document.querySelector("div.block.komentari").remove();
    } else {
      cekajKomentare();
    }
  },100);
}

cekajKomentare();
