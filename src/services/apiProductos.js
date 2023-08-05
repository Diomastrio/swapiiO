import supabase, { supabaseUrl } from "./supabase";
// , { supabaseUrl }
export async function getProductos() {
  const { data, error } = await supabase.from("productos").select("*");

  if (error) {
    console.error(error);
    throw new Error("Productos could not be loaded");
  }

  return data;
}

export async function createEditProducto(newProducto, id) {
  const hasImagePath = newProducto.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProducto.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newProducto.image
    : `${supabaseUrl}/storage/v1/object/public/articulos/${imageName}`;
  // //https://fmggwikrusxsmyiwiwqu.supabase.co/storage/v1/object/public/articulos/lumquas%20sister.jpg
  // // 1. Create/edit cabin
  let query = supabase.from("productos");

  // A) CREATE
  if (!id) query = query.insert([{ ...newProducto, image: imagePath }]);
  // , image: imagePath
  // B) EDIT
  if (id)
    query = query.update({ ...newProducto, image: imagePath }).eq("id", id);
  // , image: imagePath
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Producto could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("articulos")
    .upload(imageName, newProducto.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("productos").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "La imagen del articulo no se pudo cargar y el producto no se creó"
    );
  }

  return data;
}

export async function deleteProducto(id) {
  const { data, error } = await supabase
    .from("productos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Producto could not be deleted");
  }

  return data;
}
