export default async function handler(req, res) {
  const { city } = req.query
  const apiKey = process.env.WEATHER_KEY

  if (!apiKey) {
    console.error('SERVER ERROR: WEATHER_KEY is not defined in environment variables')
    return res.status(500).json({ error: 'API key not configured' })
  }

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ error: 'City parameter is required and must be a string' })
  }

  try {
    const apiUrl = new URL('https://api.openweathermap.org/data/2.5/weather')
    apiUrl.searchParams.append('q', city)
    apiUrl.searchParams.append('units', 'metric')
    apiUrl.searchParams.append('lang', 'en')
    apiUrl.searchParams.append('appid', apiKey)

    const response = await fetch(apiUrl.toString())

    if (!response.ok) {
      const errorData = await response.json()
      return res.status(response.status).json({
        error: errorData.message || 'Weather API error',
      })
    }

    const data = await response.json()

    // Кэширование на Vercel (10 минут)
    // s-maxage=600 — кэш на сервере, stale-while-revalidate — обновление в фоне
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')

    return res.status(200).json(data)
  } catch (error) {
    console.error('Fetch error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
