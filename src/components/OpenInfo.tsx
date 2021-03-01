export default function OpenInfo({ openInfo }: { openInfo: any }) {

  return (
    <>
      {Object.keys(openInfo).map(weekday => (
        <div>
          {Object.keys(openInfo[weekday]).map((index, i) => {
              const detailInfo = openInfo[weekday]
              return (
                <div className="flex py-1">
                  <div className="w-1/12">
                    <div className="text-center">
                      <div className="text-lg">
                        {i===0?weekday:""}
                      </div>
                    </div>
                  </div>
                  <div key={index}>
                  <div>
                    <div className="w-12/12 px-1">
                      <div className="text-lg text-left px-2">
                        {detailInfo[index].start} ~ {detailInfo[index].end} ({detailInfo[index].minutes}分)
                      </div>
                    </div>
                    <div className="text-gray-600 flex flex-row items-center w-full justify-end px-4">
                      {detailInfo[index].fee}円
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        ))}
    </>
  )
}