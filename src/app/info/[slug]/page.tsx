import Image from "next/image";
export async function generateStaticParams() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const { results: pokemons } = await response.json();
    return pokemons.map((pokemon: any) => ({slug: pokemon.name}));
    
}

export async function InfoDetails({ params, }: { params: { slug: string};}) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`)
    const { results: pokemon } = await response.json();

return (
    <div className= "flex item-center">
    <Image
    src = {pokemon.sprites.font_shiny}
    width = {80}
    height = {80}
    alt = {pokemon.name}
    ></Image>
<h2 className="text-2xl mb-4 font-bold">{pokemon.name}</h2>
    </div>
 );  
}
