# svelte-pokedex

# 🛑 This is a Work-In-Progress 🛑

> _Redo of my [react-pokedex](https://github.com/siuangie91/svelte-pokedex.git) project._

> ℹ️ Tasks are managed in this [GitHub Project](https://github.com/siuangie91/svelte-pokedex/projects/1).

Simple dropdown-based Pokedex built on the [Svelte](https://svelte.dev/) framework that pulls data from the [PokeAPI](https://pokeapi.co/) using its [GraphQL interface](https://pokeapi.co/docs/graphql). 

Styled using [TailwindCSS](https://tailwindcss.com/). 

Scaffolded with [SvelteKit](https://kit.svelte.dev/).

## Stack
<p>
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" style="padding-right: 1rem;" />
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" title="Svelte" style="padding-right: 1rem;" /> 
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt="GraphQL" title="GraphQL" style="padding-right: 1rem;" /> 
  &nbsp;  
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" title="TailwindCSS" style="padding-right: 1rem;" />
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" title="Jest" style="padding-right: 1rem;" /> 
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku" title="Heroku" style="padding-right: 1rem;" /> 
</p>

## Routes

### `/` (homepage)

<table>
  <tr>
    <td>
      <p>Displays a dropdown of first 20 Generation 1 Pokemon.</p>
      <p>Select a Pokemon and click "Add to List" and it'll show up in the list on the right.</p>
      <p>Click a Pokemon in your seen list to see more details on it; the app will open a new tab on the `/pokemon/:name` route.</p>
    </td>
    <td>
      <img width="1200" alt="Screen Shot 2022-09-18 at 9 34 37 PM" src="https://user-images.githubusercontent.com/11896191/190937518-92948b43-6beb-4397-ab54-7354bdc41447.png">
    </td>
  </tr>
</table>

### `/pokemon/:name`

<table>
  <tr>
    <td>
      <p>Pulls the data for the Pokemon given by the `:name` parameter from PokeAPI, and renders the information in the style of a Pokemon card.</p>
    </td>
    <td>
      <img width="600" alt="Screen Shot 2022-09-18 at 9 27 51 PM" src="https://user-images.githubusercontent.com/11896191/190937806-976d5502-48bc-468c-8025-9d15cf275117.png">
    </td>
  </tr>
</table>







