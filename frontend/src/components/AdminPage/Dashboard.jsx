import { Box } from '@chakra-ui/react'
import React from 'react'
import Chart from 'react-apexcharts'
import {Bar} from 'react-chartjs-2'
import { useSelector } from 'react-redux'
export const Dashboard = () => {

  const product=useSelector(store=>store.AppReducer.product)


let watch=product.filter((el)=>el.category=="watch").length
  let speaker=product.filter((el)=>el.category=="speaker").length
  let headphone=product.filter((el)=>el.category=="headphone").length
  let earbud=product.filter((el)=>el.category=="earbud").length
  let bluetoothHeadphone=product.filter((el)=>el.category=="bluetoothHeadphone").length
console.log("chart",product,watch)
return (
    <Box>

 

<Chart
         mt={300}
         type="pie"
         width={1000}
         height={500}
         series={[watch,speaker, headphone,earbud,bluetoothHeadphone]}
         
         options={{
           labels: ["Watch", "Speaker", "Headphone", "Earbud","BluetoothHeadphone","Other"],
           noData: { text: "Empty Data" },
           dropShadow: {
             enabled: true,
             top: 0,
             left: 0,
             blur: 3,
             opacity: 0.5,
           },
        //    theme:{monochrome:{enabled:true}}
        color:'red'
         }}
        >

        </Chart>
    </Box>
  )
}

