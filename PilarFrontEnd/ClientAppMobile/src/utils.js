export const getPokemonImgId = (id) => {
  switch(id.length){
    case 1: 
      return `00${id}`;
    case 2:
      return `0${id}`;
    case 3:
      return id;
  } 
}

/*
backgroundColor:'#8e1537'


P #8e1537
P — Light #c34b61
P — Dark #5a0012


*/