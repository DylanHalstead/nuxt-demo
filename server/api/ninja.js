export default defineEventHandler(async (e) => {

  // Handle query params/get data
  // const { name } = getQuery(e)

  // Handle post data
  // const { age } = await readBody(e)

  // api call with private key ($fetch is useFetch for backend)
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=lrwIYZiSq2dQOr9qfsngA1XCjxN7ziH76DmK1zg6')


  // return {
  //   message: `Hello ${name}! You are ${age} years old`
  // }

  return data

})