import supabase from "./supabase";

export async function getNumber(id) {
  let { data: productos, error } = await supabase
    .from("productos")
    .select("phone")
    .single(id);

  //   let query = supabase.from("productos");
  //   if (id) query = query.select.eq("id", id);
  //   const { data, error } = await query.select().single();
  //   console.log(data.phone);
  //   if (error) {
  //     console.error(error);
  //     throw new Error("Producto could not be created");
  //   }
}