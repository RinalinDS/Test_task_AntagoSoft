export const DateFunction = () => {
  const d = new Date();
  const curr_date = d.getDate();
  let curr_month: string | number = d.getMonth() + 1;
  const curr_year = d.getFullYear();
  switch (curr_month) {
    case 1 :
      curr_month = "January"
      break
    case 2 :
      curr_month = "February"
      break
    case 3 :
      curr_month = "March"
      break
    case 4 :
      curr_month = "April"
      break
    case 5 :
      curr_month = "May"
      break
    case 6 :
      curr_month = "June"
      break
    case 7 :
      curr_month = "July"
      break
    case 8 :
      curr_month = "August"
      break
    case 9 :
      curr_month = "September"
      break
    case 10 :
      curr_month = "October"
      break
    case 11 :
      curr_month = "November"
      break
    case 12 :
      curr_month = "December"
      break
  }
  return `${curr_date} ${curr_month} ${curr_year}`
}