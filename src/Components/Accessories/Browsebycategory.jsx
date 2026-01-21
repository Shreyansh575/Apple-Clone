import React from 'react'

const Browsebycategory = () => {
    const data = [
        
        {
            name:'New Arrivals',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-new-arrivals?wid=150&hei=150&fmt=png-alpha&.v=MHJMNFZpZ2lNV2VpM0kvS3l0MmtMRUdHcytVTzRFUWw5OWR3R3hqMmNaZVZlWHF2VnFYLzRqRmtxUnJOQzhEQUNDMjdGUmVxdFdidVQvRGNMc2E5aTFxYUJZbXpaVCtKd0FGaHhjZm8vaW8'
        },
        {
            name:'Cases and Protection',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=S05kWmNGWE9hZDZaT1FKVFNuaGdVUGNlWmRlQmV1eS9BdHMrUE1wdll1UWJOVGRvSmtOWnlYeHFxVlI4RXc1QTAzOVFHb3N0MkVmS01ZcFh0d1Y4R2dVbSt5MGVNaVNPb3FSUHVrTzF4TVU'
        },
        {
            name:'Charging Essentials',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-charging-essentials?wid=150&hei=150&fmt=png-alpha&.v=WUpwR3lUeSt6UHB5aVBSbXk2NWtCNlNtd2tFOGVVMldtdXlyNVZmaVV0WStvbUhZZVNlSWdNVThRenZVUVFBWnV5NVU0QmM2b3hmeWJWTTVtN1o5ZnVKbGxrdTJ1WWdEcE1mZ09PaGluazkrYWpGdS9XeFgvbS9ITnNYOEhYaG4'
        },
        {
            name:'Mg Safe',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-magsafe?wid=150&hei=150&fmt=png-alpha&.v=YUVSVU5YdW1relRQQWIyNy9ZTHVIeTljREFtUTNNT1R4UHNwTUszQXlVNmw2RnZyN09RVjJ1OHFNbzcxOVVOS04rMzlnZEQxaHdlaXpCUkhGR0pzVXJRdXNQaVFsakM4QlY3YXNXZWswMXM'
        },
        {
            name:'Headphones and Speakers',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=QUNGdXFLUjhiNHR5MWwxZVBseG9YelNZaVoycWZ5ZmovNEhwRk00enpCWWdDQkFHeGZGdi93cGNaMUdBUklYN01iai8wMUhBVnQvOXhReVRnQWhPbnlJRkVTVm1FQ2xYWFFMbkJqMTltQkU'
        },
        {
            name:'Apple Watch Bands',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-watch-bands?wid=150&hei=150&fmt=png-alpha&.v=djRrbVVSRUNpU1lxbmtSR1lLUCtCc1RacDlDbm1QSit3eG5adys2RnVMUWdDQkFHeGZGdi93cGNaMUdBUklYN01iai8wMUhBVnQvOXhReVRnQWhPbjZ0aGNHd21IazlUQnV3TWxCbFBDK2s'
        },
        {
            name:'home Office',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-house-wifi?wid=150&hei=150&fmt=png-alpha&.v=L3dPNTNBSnRRYUlUa3ljTENLSTFrTVo1WVpMaEFjZ2daaDl4cCtJdyt6QXdWQTN3S1NSZDJDZlRHS2I5VmQ0dGF2UFNqNEdyVTlvVHg0SWswWTRzYnhXZmdGbDlPQkxBQXNNNlVrR2trdDA'
        },
        {
            name:'Mice and Keyboards',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-mice-keyboards?wid=150&hei=150&fmt=png-alpha&.v=VFY4M2wzcXVod3JJNHdnUnkzM0gwZ0tIdHFLdFJEUkxjWi9MQ09JVnBNdTA1VFJaK01HeGQ3RHU3cnhkQUxaSTdvSGFYRHZNc0laMlJVcTFTTTlCeTRFQVZkaFpFeUdPT3JFNWszWHVVelk'
        },
        {
            name:'AirTag and Accessories',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-airtag?wid=150&hei=150&fmt=png-alpha&.v=WVRPR082VlVOVmNHc2dpaWNxU0RzTFdwM2NjYVprVDN6bjN3dkV0SUFlbjZIZEhwL3dSa1M5SklOclQ1RHBiT05pMUFURjRFZ1JzbDY3cUdiaG5SZEFSOWRMNW1pNnV0czhnSVZFWFJ4cjQ'
        },
        {
            name:'Health and Fitness',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-health-fitness?wid=150&hei=150&fmt=png-alpha&.v=Vmk5SEc0dHZqTTNCUnhpbVA2cUVKcnJXQ0hzV29VQ0xhSVREdWR4MmRxTzA1VFJaK01HeGQ3RHU3cnhkQUxaSXg2bitObzZwQzk4cEorV1dZdzhIa3dTY25sdFUrWDZZNzVBRXdkMXY4dzg'
        },
        {
            name:'Accessiblities',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-accessibility?wid=150&hei=150&fmt=png-alpha&.v=YlNtSU1pSVVXTVpBa3oxZTFhVVNHUzQxeWJDcWZvOEdMVVQxZkFZaitxM2UzRFhDb1gvK05vbS8rdUM4dzlFcWZnRVlDKzVEcTJtejlCWjJQTHB5VHZqaGkxMTZpdlJQbVZaeS91N2F1WVE'
        },
        {
            name:'Gaming',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-gaming?wid=150&hei=150&fmt=png-alpha&.v=WTNpSGExNlg5U05yTUJzWTE0NkFVanpwWmo4R1loMitjYTNLYTFyVnI4YjZIZEhwL3dSa1M5SklOclQ1RHBiTzhWR0hPUWNVSGo1Mm83ays4QXBBeDJkby9ZeWdUTUViTW1sczExU0U3dDg'
        },
        {
            name:'Photography',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-photography-creativity?wid=150&hei=150&fmt=png-alpha&.v=QXE3RHV3WEt5a3VxM1VSVXhrZjRueW9lbS9KU01KZVd6RDRCaDI1amUwYms1Uk4zM1FqMWJKVWJaZFV6WmY4eStoM1I2ZjhFWkV2U1NEYTArUTZXemx5cmsvVDh1RU5xV0pmSzdncXpGS05xc2NGcDgvUDhoYzlYRnBSdjl6dVY'
        },
        {
            name:'Creative Tools',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-creative-tools?wid=150&hei=150&fmt=png-alpha&.v=UnhRY3dnSEdyUGdQNEVXclpueStqS3hCdGJ4UlJOYXpYQlBLMUcxZk1GeTA1VFJaK01HeGQ3RHU3cnhkQUxaSTdvSGFYRHZNc0laMlJVcTFTTTlCeTk0VE9RRXRHNnIwa1NXQ3RWcnU1eGs'
        },
        {
            name:'SmartHome and Accessories',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-home-automation?wid=150&hei=150&fmt=png-alpha&.v=L3dPNTNBSnRRYUlUa3ljTENLSTFrRzNRamd1MnBPbXFUTWxFRTg1T1k2cnZKRVlHbDJZRDEyQ2hOOW0yeWxBdm53M0FRZHBXNTh1U1lFVEtSR2YzTnFJT0tFclNEd3lXRzhxZzk2b3Q5VDg'
        },
        {
            name:'Software ',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-software?wid=150&hei=150&fmt=png-alpha&.v=cXlZMzZYMFJCMnIwenBPTGdLMml0clNsL2prRXhzMzhFN2hsM1d6YnZCRzVSU2dLRkw0MkFUQVl6ekNJOWJObEhKSmUvK2g5U2IyQkljeDNtM2xnTWE2TzJUR21qcHZNd1BLbHVmVThQZDA'
        },
        {
            name:'Storage',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-storage?wid=150&hei=150&fmt=png-alpha&.v=STg2V0NxSWJJcWtDbFVUL0FHQXNDTmFJc21hUk5KaS8xS2xPWngreDBpYWw2RnZyN09RVjJ1OHFNbzcxOVVOS2E0aS9jRWtFeWZyYkgzaXhKdFBHTFF5cHRpeCtpaWVvK20rYk5xQnNmM1U'
        },
    ]
  return (
    <div className='flex justify-center'>
        <div className='flex w-[75vw] gap-16
          justify-center flex-wrap'>
            {data.map((elem)=>{
                  return(
<div>
                <div>
                <div className=' '>
                    <div className='border-1 rounded-full p-8'>

                    <img src={elem.img} className='w-[5vw]  ' alt="" />
                    </div>
                </div>

                    </div>
                    <div className='flex w-30 text-center mt-2 justify-center hover:text-blue-700 hover:underline flex-wrap'>{elem.name}</div>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default Browsebycategory
