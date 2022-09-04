
function Fizzbuzz(props: string) {
  if(!props){
    return props;
  }
  
  let num:number;
  num = Number(props);
  
  let result = ""

  result = (num % 3 == 0 ? 'fizz' : '')
      + (num % 5 == 0 ? 'buzz' : '');

  if(result == ""){
    result = props;
  }
  return result;
}

export default Fizzbuzz;
