import React from 'react'
export const Data = ({ createDate }) => {

  // console.log("Date.jsx")
  const date_1 = new Date(createDate).getTime()
  const date_2 = new Date().getTime()
  const diff = new Date(date_2 - date_1)

  let sec = diff.getUTCSeconds()
  let minute = diff.getUTCMinutes()
  let hour = diff.getUTCHours()
  let day = diff.getUTCDate() - 1
  let month = diff.getUTCMonth()
  let year = diff.getUTCFullYear() - 1970

  // const ooo = year || month || day || hour || minute || sec  || "in few seconds ago"
  // console.log(ooo)

  return (
    <div className="comment-data_1 ">
      {(year > 1 && ` ${year} years ago`) ||
        (year === 1 && ` ${year} year ago`) ||
        (month > 1 && ` ${month} months ago`) ||
        (month === 1 && ` ${month} month ago`) ||
        (day > 1 && ` ${day} dayes ago`) ||
        (day === 1 && ` ${day} day ago`) ||
        (hour > 1 && ` ${hour} hours ago`) ||
        (hour === 1 && ` ${hour} hour ago`) ||
        (minute > 1 && ` ${minute} minutes ago`) ||
        (minute === 1 && ` ${minute} minute ago`) ||
        (sec && `${sec} seconds ago`) ||
        'a few seconds ago.'}
    </div>
  )
}
