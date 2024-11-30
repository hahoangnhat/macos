/* TODO: 
    1. Handle access token
    2. Handle loading state
  */
const fetchInstance = async (endpoint: string, request?: RequestInit) => {
  const url = process.env.NEXT_PUBLIC_API_URL + endpoint
  const token = ''
  const requestOptions: RequestInit = {
    ...request,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
      ...request?.headers,
    },
  }

  const response = await fetch(url, requestOptions)
  const data = await response.json()

  if (!response.ok) {
    return Promise.reject(data)
  }

  return Promise.resolve(data)
}

export default fetchInstance
