export const NameRandomizer = () => {
  const names = ['Dwyane Wade', 'Tom Brady', 'Patrick Mahomes', 'Yana Klochkova', 'Lewis Hamilton']
  return names[Math.floor(Math.random() * 5)]
}