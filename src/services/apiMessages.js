import supabase from "./supabase";
export async function getMessages() {
  const { data, error } = await supabase.from("messages").select("*");

  if (error) {
    console.error(error);
    throw new Error("Mensajes no pudieron ser cargados");
  }

  return data;
}
