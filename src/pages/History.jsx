import React, { useEffect, useState } from 'react'
import { getWatchHistory } from '../services/allApi'

function History() {


  const [history, setHistory] = useState([])
  const getHistory = async () => {
    let res = await getWatchHistory()
    console.log("history", res.data)
    setHistory(res.data)

  }

  useEffect(() => {
    getHistory()
  }, [])

  return (
    <div>
      <table className='table table-striped bg-dark text-light'>
        <tr>
          <th>id</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
        {
          history.map((item,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.date}</td>
            </tr>

          ))
        }

      </table>
    </div>
  )
}

export default History