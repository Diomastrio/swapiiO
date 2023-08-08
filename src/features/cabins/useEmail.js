// import supabase from "../../services/supabase";
// async function insertUserEmail() {
//   // Get the user email
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   console.log(user.email); // prints the user email

//   // Insert a single row
//   const { data, error } = await supabase
//     .from("productos")
//     .insert([{ email: user.email }]);

//   // Handle the result
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// }
// export default insertUserEmail;

// async function insertUserEmail() {
//   // Get the user email
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   console.log(user.email); // prints the user email

//   // Return the user email
//   return user.email;
// }
