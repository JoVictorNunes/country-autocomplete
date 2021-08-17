# Country Autocomplete

A React autocomplete component to select countries.

It uses two API's:

- [https://restcountries.eu/](https://restcountries.eu/) to get the country names.
- [https://www.countryflags.io/](https://www.countryflags.io/) to get the flags.

## Prop

You must pass a function to the AutocompleteCountry component's `callback` prop. The function is called and receives a string as single argument that represents the current country every time the user changes the input value.

*callback*: **Function(country: string) => any**

## How to run

Clone the repository:

`git clone https://github.com/JoVictorNunes/country-autocomplete.git`

In the project directory, you can run:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
