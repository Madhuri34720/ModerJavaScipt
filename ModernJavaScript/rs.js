var obj={a:{b:{c:{d:"foo"}}}};

const {d}=
obj.a.b.c?.f

var obj = {
    x: 12,
    getX: () => {
      return this.x;
    }
  };
  const output = obj.getX;
  console.log(output());


  let a= "gaurav"
  a.hasRepeatingChar();

  hasRepeatingChar =function(str){
      [...str].map(chr=>function(){
           let filterarr= [...str].filter(chr1 => chr===chr);
           if(filterarr.length>0){            
               return true;
           }
           else{
               return false;
           }
          
      })
  }



  function httpRequeset(httpRequeset,callfunction)
  {

      fetch(httpRequeset).then(callfunction(res));
  }
  

  httpRequeset(a1,function(r1){
    if(r1){
        httpRequeset(a2,function(r2){

            if(r2){
                httpRequeset(a2,function(r2){
            }
        })
    }
  })


  <div name="test-div”>find me</div>


  document.querySelector(["name=])