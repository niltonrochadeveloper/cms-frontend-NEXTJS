
export async function Auth() {

  const response = await fetch('http://localhost:7000/')
  const result = await response.json()

  return {
    response,
    result
  }

}
