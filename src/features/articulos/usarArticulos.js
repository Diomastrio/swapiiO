// import supabase from "../../services/supabase";

// export async function usarArticulos() {
//   const { data, error } = await supabase.storage
//     .from("articulos")
//     .list("folder", {
//       limit: 100,
//       offset: 0,
//       sortBy: { column: "name", order: "asc" },
//     });
//   if (error) {
//     console.error(error);
//   }
//   return data;
// }
