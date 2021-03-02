export default function OpenInfo({ openInfo }: { openInfo: any }) {

  return (
    <>
      <ul>
      {Object.keys(openInfo).map(weekday => (
        <li className="" key={weekday}>
          {Object.keys(openInfo[weekday]).map((index, i) => {
            const detail = openInfo[weekday]
            return (
              <div
                className="flex justify-between flex-grow-0 py-1"
                key={index}
              >
                {i === 0 ?
                  <div className="order-first text-lg px-2">
                    {weekday}
                  </div>
                  : 
                  <div className="order-first text-lg px-2 text-transparent">
                  {weekday}
                  </div>
                }
                <div className="order-2 flex-grow text-lg px-6">
                  {detail[index].start} ~ {detail[index].end} ({detail[index].minutes}分)
                </div>
                <div className="order-last text-gray-600 px-2">
                  {detail[index].fee}円
                </div>
              </div>
            )})}
          </li>
        ))}
      </ul>
    </>
  )
}