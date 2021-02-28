export default function OpenInfo({ openInfo }: { openInfo: any }) {

  return (
    <>
      <div>
        {Object.keys(openInfo).map(key => (
        <div className="flex py-1" key={key}>
            <div className="w-2/12">
              <div className="text-center">
                <div className="text-lg">
                    {key}
                </div>
              </div>
            </div>
            <div className="w-10/12 px-1">
            <div className="text-lg text-left px-2">
              {openInfo[key].start} ~ {openInfo[key].end} ({openInfo[key].minutes}分)
              </div>
            </div>
          <div className="text-gray-600 flex flex-row items-center w-full justify-end px-4">
            {openInfo[key].fee}円
          </div>
          </div>
        ))}
      </div>
      </>
  )
}