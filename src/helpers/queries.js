const URI_HEROES = import.meta.env.VITE_API_HEROES

export const leerHeroesAPI = async() => {
  try {
    const respuesta = await fetch(URI_HEROES)
    const heroes = await respuesta.json()
    return heroes
  } catch (error) {
    console.log(error);
  }
}

export const leerUnHeroeAPI = async(id) => {
  try {
    const respuesta = await fetch(`${URI_HEROES}/${id}`)
    const heroe = await respuesta.json()
    return heroe
  } catch (error) {
    console.log(error);
  }
}