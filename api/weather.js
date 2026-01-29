export default async function handler(req, res) {
  const { city } = req.query
  const apiKey = process.env.WEATHER_KEY

  if (!city) {
    return res.status(400).json({ error: 'City is required' })
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${encodeURIComponent(city)}` +
      `&units=metric&lang=ru&appid=${apiKey}`
    )

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Weather API error' })
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ error: 'Server error' })
  }
}
