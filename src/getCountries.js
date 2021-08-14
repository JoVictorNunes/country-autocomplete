async function useCountries() {
  const result = await fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code', {
    method: 'get',
  })

  const data = await result.json()

  return data
}

export default useCountries