function scuberGreetingForFeet(Value){
  // Write your code here!
if(Value <= 400){
  return "This one is on me!"
} else if (Value > 399 &&  Value < 2000){
  return `That will be twenty bucks.`
}
 else if (2000<Value && Value<=2500){
  return `I will gladly take your thirty bucks.`
 }
 else 
  return "No can do." 
 
}

function ternaryCheckCity(City){
  // Write your code here!
  if (City==`NYC`){
    return "Ok, sounds good."
  }
  else 
  return "No go.";
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch (Tip) {
    case 'generous':
        return 'Thank you so much.';
    case 'not as generous':
        return 'Thank you.';
    default:
        return 'Bye.';
  
}}