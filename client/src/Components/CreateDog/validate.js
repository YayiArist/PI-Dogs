export function validate(input) {
  let errors = {};

  if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name)) {
    errors.name =
      "(*)Dog's breed must contain only letters and spaces (and not end in space)";
  }
 /*  if (!/^\d+$/.test(input.min_weight)) {
    errors.min_weight = " (*) Must be an integer positive number";
  } */
   if (!/^\d+$/.test(input.max_weight)) {
    errors.max_weight = " (*) Must be an integer positive number";
  } 
  if (parseInt(input.max_weight) <= parseInt(input.min_weight)) {
    errors.max_weight = "(*) Please enter a higher number";
  } 
   /* if (!/^\d+$/.test(input.min_height)) {
    errors.min_height = " (*) Must be an integer positive number";
  } */
   if (!/^\d+$/.test(input.max_height)) {
    errors.max_height = " (*) Must be an integer positive number";
  }  
   if (parseInt(input.max_height) <= parseInt(input.min_height)) {
    errors.max_height = "(*) Please enter a higher number";
  }
  /*  if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(input.image)){
        errors.image = " (*)Please enter a valid URL (starting with https://)";
    }  */

  return errors;
}
