import supabase from "./supabase";

export async function getPhone() {
  const { data, error } = await supabase.from("productos").select("phone");

  if (error) {
    console.error(error);
  }

  return data;
}
