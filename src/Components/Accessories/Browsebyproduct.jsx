import React from 'react'

const Browsebyproduct = () => {
    const data = [
        {
            name:'Mac',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-mac?wid=225&hei=225&fmt=png-alpha&.v=RXNvWlJ4V1ZvbXYyaGFad0xPTE0zejRlNEtzN04xeVBsalpiTEw5SEcybExnM2hYRFc5SGdWTVhpekFBQlhOTjl5REg3M1hmc2lySnZXVWZqSDY0dWc'
        },
        {
            name:'iPad',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-ipad?wid=225&hei=225&fmt=png-alpha&.v=enRKU0hDbTlJSFFNZ1BiODVVVmQ2R3crRGExNTRMQ3JlZGVlTWt4VVV1c0w3OXV2a21IVzZTalA1aGt3Q21GMnZMeG94cFNQN1VnQXZFYXhBd3laQUg1cU1XNzliRmYrYjhjMnhmd2RlR2M'
        },
        {
            name:'iPhone',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-iphone?wid=225&hei=225&fmt=png-alpha&.v=a1hQcVRnTVdlaVZPUHFYVE1nVXZMb1pLdVBNS25Jd0pNUlNLMmQwWVFtcUJOT0xId1plRlZlMnByRGNoUWkrWlROUlFrSUpZWjVDUGZPQ3htNjE0V1NBSmo4SnZRWkZYNUVPQWI1cmo5TTA'
        },
        {
            name:'Watch',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-watch?wid=225&hei=225&fmt=png-alpha&.v=OXJsSmJwZHF2NVJid2lSMlZvb2tZZ05PR2d3YXluNDRtakt1ODg2eFRWY0hlMmdwZjdXT2xtODRmTUhJcUZNWlNDbEdjanVwbmtBekVYNFlnRWlMSHhRVTBCdm55OEw1dlFrbldOU28xT0U'
        },
        {
            name:'Apple Vision Pro',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-vision-pro?wid=150&hei=150&fmt=png-alpha&.v=M09HTFZmR2pRK1FCbU5LM2krbkhSVUl6ZnNBazJaeVllZlRsQWU1UVBaSlNmeXM3TEZ3V05LSWVXNHUyemFMeGVsZlBCTGNZaVh1dEVyMGlqVFI1QUlFUmx2ckUzVEpOQjJsK2ZocGhubUk'
        },
        {
            name:'Air Pods',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-airpods?wid=225&hei=225&fmt=png-alpha&.v=Q2wvSGF4S2JwTmJCaVlwclhxKzQ0UFBqWFlpWWl3TnZlR2tKNFlHcUk0eGlvVzF3Q2IzdmtJY1RhMGhTZ25pU09DZ2VaNU9haUpKaXQwRmdPcyt2M0R6aENxTzRyTXUrVUlxN21pL2w1MFk'
        },
        {
            name:'Tv & Home',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-tv?wid=225&hei=225&fmt=png-alpha&.v=K2JKQUsvZmxuVnZZaWkweXAzNXdmMlNFU3NHMDZtczBLZ2FSR0gzZWN4V2JMQkJvZmEyY08xMStaSG9qcHFqRmovM1hkaldYSERrY2dRMXVUczlCSmc'
        },
        {
            name:'Beats',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-beats?wid=225&hei=225&fmt=png-alpha&.v=aUxCTzg5WlNLNXVMUURCSGl0KzZvWFl2aG9zWmRwQTZYUnNtalp4OTl2SUhlMmdwZjdXT2xtODRmTUhJcUZNWkVKcHRTS3NWRVgxWmpqNXg3K2dhRXhaMFlia0E0WWRkQXkrdmJoVkN6Yzg'
        },
        
    ]
  return (
    <div className='flex justify-center'>
        <div className='flex space-x-17 space-y-10 text-center w-[85vw] flex-wrap justify-center'>
            {data.map((elem)=>{
                return(

                <div>
                <div className='border-1 rounded-full  p-8'>

                    <img src={elem.img} className='w-[5vw] ' alt="" />
                </div>
                    <div className='hover:text-blue-700 hover:underline mt-3'>{elem.name}</div>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default Browsebyproduct
