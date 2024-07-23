import { Html, useGLTF, Float } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import * as THREE from 'three'
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import { useThree } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

function Phone() {
    const phone = useRef()
    const frame = useRef()
    const scene = useThree((state) => state.scene)

    const { scene: modelScene } = useGLTF('/iPhone-v2.gltf', true, loader => {
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/draco/gltf/')
      loader.setDRACOLoader(dracoLoader)
  })

  const nftPhoneSection = document.querySelector('.NFTPhone')

  nftPhoneSection.addEventListener('mousemove', (event) => { 
    const x = event.clientX / window.innerWidth - 0.5
    const y = event.clientY / window.innerHeight - 0.5

    phone.current.rotation.y += (x  - phone.current.rotation.y) / 30
    phone.current.rotation.x += (y - phone.current.rotation.x)  / 10

  })

  useEffect(() => {
      scene.add(modelScene)
      return () => scene.remove(modelScene)
  }, [modelScene])


    const svg = `
    <svg width="842" height="1191" viewBox="0 0 842 1191" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.17">
    <path d="M565 123.4V131.1L571.3 123.4H565Z" fill="white"/>
    <path d="M578 123.4L565 139.3V148.6L585.5 123.4H578Z" fill="white"/>
    <path d="M577.7 150.6H570.1L592.2 123.4H599.8L577.7 150.6Z" fill="white"/>
    <path d="M591.9 150.6H584.3L606.5 123.4H614L591.9 150.6Z" fill="white"/>
    <path d="M606.2 150.6H598.6L620.7 123.4H628.3L606.2 150.6Z" fill="white"/>
    <path d="M620.4 150.6H612.8L634.9 123.4H642.5L620.4 150.6Z" fill="white"/>
    <path d="M634.7 150.6H627.1L649.2 123.4H656.8L634.7 150.6Z" fill="white"/>
    <path d="M648.9 150.6H641.3L663.4 123.4H671L648.9 150.6Z" fill="white"/>
    <path d="M663.2 150.6H655.6L677.7 123.4H685.3L663.2 150.6Z" fill="white"/>
    <path d="M677.4 150.6H669.8L691.9 123.4H699.5L677.4 150.6Z" fill="white"/>
    <path d="M691.7 150.6H684.1L706.2 123.4H713.8L691.7 150.6Z" fill="white"/>
    <path d="M705.9 150.6H698.3L720.4 123.4H728L705.9 150.6Z" fill="white"/>
    <path d="M720.1 150.6H712.6L734.7 123.4H742.3L720.1 150.6Z" fill="white"/>
    <path d="M734.4 150.6H726.8L748.9 123.4H756.5L734.4 150.6Z" fill="white"/>
    <path d="M748.6 150.6H741.1L763.2 123.4H770.8L748.6 150.6Z" fill="white"/>
    <path d="M762.9 150.6H755.3L777.4 123.4H785L762.9 150.6Z" fill="white"/>
    <path d="M777.1 150.6H769.6L791.7 123.4H799.3L777.1 150.6Z" fill="white"/>
    <path d="M805.9 123.4L783.8 150.6H791.4L807.4 130.9V123.4H805.9Z" fill="white"/>
    <path d="M798 150.6H805.6L807.4 148.4V139.1L798 150.6Z" fill="white"/>
    </g>
    <path d="M682.4 107H33.6001V109H682.4V107Z" fill="white"/>
    <path d="M229 77.0999H33.3999V51.5999H211.5L229 69.0999V77.0999ZM35.3999 75.0999H227V69.9999L210.7 53.6999H35.3999V75.0999Z" fill="white"/>
    <path d="M127 53H124V76H127V53Z" fill="white"/>
    <path opacity="0.46" d="M711.7 102.4V109.3H741.9L748.8 102.4H711.7Z" fill="white"/>
    <path d="M807.3 109.8H784.2V93H807.3V109.8ZM785.3 108.8H806.4V94H785.3V108.8Z" fill="white"/>
    <path d="M806.9 27.7H800.2V30.1H806.9V27.7Z" fill="white"/>
    <path d="M39.0999 27.7H32.3999V30.1H39.0999V27.7Z" fill="white"/>
    <path d="M40.3001 90.3H33.6001V92.7H40.3001V90.3Z" fill="white"/>
    <g opacity="0.3">
    <path d="M690 40H688.5V41.5H690V40Z" fill="white"/>
    <path d="M703 40H701.5V41.5H703V40Z" fill="white"/>
    <path d="M716 40H714.5V41.5H716V40Z" fill="white"/>
    <path d="M729 40H727.5V41.5H729V40Z" fill="white"/>
    <path d="M741.9 40H740.4V41.5H741.9V40Z" fill="white"/>
    <path d="M754.9 40H753.4V41.5H754.9V40Z" fill="white"/>
    <path d="M767.9 40H766.4V41.5H767.9V40Z" fill="white"/>
    <path d="M780.9 40H779.4V41.5H780.9V40Z" fill="white"/>
    <path d="M793.9 40H792.4V41.5H793.9V40Z" fill="white"/>
    <path d="M806.9 40H805.4V41.5H806.9V40Z" fill="white"/>
    <path d="M690 52.5H688.5V54H690V52.5Z" fill="white"/>
    <path d="M703 52.5H701.5V54H703V52.5Z" fill="white"/>
    <path d="M716 52.5H714.5V54H716V52.5Z" fill="white"/>
    <path d="M729 52.5H727.5V54H729V52.5Z" fill="white"/>
    <path d="M741.9 52.5H740.4V54H741.9V52.5Z" fill="white"/>
    <path d="M754.9 52.5H753.4V54H754.9V52.5Z" fill="white"/>
    <path d="M767.9 52.5H766.4V54H767.9V52.5Z" fill="white"/>
    <path d="M780.9 52.5H779.4V54H780.9V52.5Z" fill="white"/>
    <path d="M793.9 52.5H792.4V54H793.9V52.5Z" fill="white"/>
    <path d="M806.9 52.5H805.4V54H806.9V52.5Z" fill="white"/>
    <path d="M690 65.1001H688.5V66.6001H690V65.1001Z" fill="white"/>
    <path d="M703 65.1001H701.5V66.6001H703V65.1001Z" fill="white"/>
    <path d="M716 65.1001H714.5V66.6001H716V65.1001Z" fill="white"/>
    <path d="M729 65.1001H727.5V66.6001H729V65.1001Z" fill="white"/>
    <path d="M741.9 65.1001H740.4V66.6001H741.9V65.1001Z" fill="white"/>
    <path d="M754.9 65.1001H753.4V66.6001H754.9V65.1001Z" fill="white"/>
    <path d="M767.9 65.1001H766.4V66.6001H767.9V65.1001Z" fill="white"/>
    <path d="M780.9 65.1001H779.4V66.6001H780.9V65.1001Z" fill="white"/>
    <path d="M793.9 65.1001H792.4V66.6001H793.9V65.1001Z" fill="white"/>
    <path d="M806.9 65.1001H805.4V66.6001H806.9V65.1001Z" fill="white"/>
    <path d="M690 77.7H688.5V79.2H690V77.7Z" fill="white"/>
    <path d="M703 77.7H701.5V79.2H703V77.7Z" fill="white"/>
    <path d="M716 77.7H714.5V79.2H716V77.7Z" fill="white"/>
    <path d="M729 77.7H727.5V79.2H729V77.7Z" fill="white"/>
    <path d="M741.9 77.7H740.4V79.2H741.9V77.7Z" fill="white"/>
    <path d="M754.9 77.7H753.4V79.2H754.9V77.7Z" fill="white"/>
    <path d="M767.9 77.7H766.4V79.2H767.9V77.7Z" fill="white"/>
    <path d="M780.9 77.7H779.4V79.2H780.9V77.7Z" fill="white"/>
    <path d="M793.9 77.7H792.4V79.2H793.9V77.7Z" fill="white"/>
    <path d="M806.9 77.7H805.4V79.2H806.9V77.7Z" fill="white"/>
    </g>
    <path d="M806.558 93.074L784.447 108.915L785.029 109.728L807.14 93.8869L806.558 93.074Z" fill="white"/>
    <path d="M774.8 108.8H753.7V109.8H774.8V108.8Z" fill="white"/>
    <path d="M43.2002 983.8H42.3002V984.7H37.6002V983.8H36.7002V982.9H38.6002V983.8H41.4002V981.9H37.6002V981H36.7002V979.1H37.6002V978.2H41.4002V979.1H42.3002V980H40.4002V979.1H38.5002V981H42.3002V981.9H43.2002V983.8Z" fill="#F6F3EC"/>
    <path d="M51.0004 984.7H44.4004V978.1H51.0004V979H46.3004V980.9H50.1004V981.8H46.3004V983.7H51.0004V984.7Z" fill="#F6F3EC"/>
    <path d="M58.8003 984.7H56.0003V983.8H55.1003V982.9H54.2003V984.8H52.3003V978.2H58.0003V979.1H58.9003V981.9H57.0003V982.8H57.9003V983.7H58.8003V984.7ZM57.0003 981V979.1H54.2003V981.9H56.0003V981H57.0003Z" fill="#F6F3EC"/>
    <path d="M66.2 979.1H64.3V983.8H66.2V984.7H60.5V983.8H62.4V979.1H60.5V978.2H66.2V979.1Z" fill="#F6F3EC"/>
    <path d="M74.5004 984.7H67.9004V978.1H74.5004V979H69.8004V980.9H73.6004V981.8H69.8004V983.7H74.5004V984.7Z" fill="#F6F3EC"/>
    <path d="M82.3003 983.8H81.4003V984.7H76.7003V983.8H75.8003V982.9H77.7003V983.8H80.5003V981.9H76.7003V981H75.8003V979.1H76.7003V978.2H80.5003V979.1H81.4003V980H79.5003V979.1H77.6003V981H81.4003V981.9H82.3003V983.8Z" fill="#F6F3EC"/>
    <path d="M96.0004 983.8V984.7H93.2004V983.8H92.3004V982.9H91.4004V980H92.3004V979.1H93.2004V982.9H94.1004V983.8H96.0004ZM97.9004 982.9H97.0004V983.8H96.0004V980H95.0004V979.1H93.1004V978.2H96.0004V979.1H96.9004V980H97.8004V982.9H97.9004Z" fill="#F6F3EC"/>
    <path d="M105.2 984.7H99.5V983.8H101.4V980H100.4V979.1H101.4V978.2H103.3V983.9H105.2V984.7Z" fill="#F6F3EC"/>
    <path d="M42.9004 998.5H42.2004V997.8H41.5004V997H40.8004V996.3H40.0004V995.6H39.3004V994.9H38.6004V994.2H37.9004V993.5H38.6004V994.2H39.3004V994.9H40.0004V995.6H40.7004V996.3H41.4004V997H42.1004V997.7H42.8004V998.5H42.9004Z" fill="#F6F3EC"/>
    <path d="M49.0006 998.5H48.3006V997.8H47.6006V997H46.9006V996.3H46.2006V995.6H45.5006V994.9H44.8006V994.2H44.1006V993.5H44.8006V994.2H45.5006V994.9H46.2006V995.6H46.9006V996.3H47.6006V997H48.3006V997.7H49.0006V998.5Z" fill="#F6F3EC"/>
    <path d="M55.0006 998.5H54.3006V997.8H53.6006V997H52.9006V996.3H52.2006V995.6H51.5006V994.9H50.8006V994.2H50.1006V993.5H50.8006V994.2H51.5006V994.9H52.2006V995.6H52.9006V996.3H53.6006V997H54.3006V997.7H55.0006V998.5Z" fill="#F6F3EC"/>
    <path d="M67.1005 998.5H62.0005V993.4H63.5005V997.8H67.2005V998.5H67.1005Z" fill="#F6F3EC"/>
    <path d="M72.8004 994.1H71.3004V997.8H72.8004V998.5H68.4004V997.8H69.9004V994.1H68.4004V993.4H72.8004V994.1Z" fill="#F6F3EC"/>
    <path d="M79.2006 998.5H77.7006V996.3H77.0006V997H76.3006V996.3H75.6006V998.5H74.1006V993.4H75.6006V994.1H76.3006V994.8H77.0006V994.1H77.7006V993.4H79.2006V998.5Z" fill="#F6F3EC"/>
    <path d="M84.9005 994.1H83.4005V997.8H84.9005V998.5H80.5005V997.8H82.0005V994.1H80.5005V993.4H84.9005V994.1Z" fill="#F6F3EC"/>
    <path d="M91.0005 994.1H89.5005V998.5H88.0005V994.1H86.5005V993.4H91.0005V994.1Z" fill="#F6F3EC"/>
    <path d="M97.4003 998.5H92.3003V993.4H97.4003V994.1H93.7003V995.6H96.6003V996.3H93.7003V997.8H97.4003V998.5Z" fill="#F6F3EC"/>
    <path d="M103.4 997H102.7V997.7H102V998.4H98.3003V993.3H102V994H102.7V994.7H103.4V997ZM102 997V994.8H101.3V994.1H99.8003V997.8H101.3V997H102Z" fill="#F6F3EC"/>
    <path d="M114.1 976.9H112.3V998.8H114.1V976.9Z" fill="#F6F3EC"/>
    <path d="M682.4 1025.3H33.6001V1027.3H682.4V1025.3Z" fill="white"/>
    <g opacity="0.3">
    <path d="M708.9 981.2L705.1 985.9V1001.6L721.7 981.2H708.9Z" fill="white"/>
    <path d="M745.8 981.2H733L705.1 1015.4V1027.1H708.4L745.8 981.2Z" fill="white"/>
    <path d="M732.5 1027.1H719.7L757.1 981.2H769.9L732.5 1027.1Z" fill="white"/>
    <path d="M756.6 1027.1H743.8L781.2 981.2H794L756.6 1027.1Z" fill="white"/>
    <path d="M805.3 981.2L767.9 1027.1H780.7L807.8 993.9V981.2H805.3Z" fill="white"/>
    <path d="M792 1027.1H804.8L807.8 1023.4V1007.7L792 1027.1Z" fill="white"/>
    </g>
    <path d="M808.3 970.3H801.6V972.7H808.3V970.3Z" fill="white"/>
    <path d="M33.7998 159H32.7998V958.8H33.7998V159Z" fill="white"/>
    <path d="M33.2998 159H36.7998V168L35.1998 169.6H33.2998V159Z" fill="white"/>
    <path d="M33.2998 958.8H36.7998V949.7L35.1998 948.1H33.2998V958.8Z" fill="white"/>
    <path d="M809.1 159H808.1V958.8H809.1V159Z" fill="white"/>
    <path d="M808.6 159H805.1V168L806.7 169.6H808.6V159Z" fill="white"/>
    <path d="M808.6 958.8H805.1V949.7L806.7 948.1H808.6V958.8Z" fill="white"/>
    <g opacity="0.3">
    <path d="M35.9001 1053.9H34.1001V1055.7H35.9001V1053.9Z" fill="white"/>
    <path d="M51.6999 1053.9H49.8999V1055.7H51.6999V1053.9Z" fill="white"/>
    <path d="M67.4001 1053.9H65.6001V1055.7H67.4001V1053.9Z" fill="white"/>
    <path d="M83.1999 1053.9H81.3999V1055.7H83.1999V1053.9Z" fill="white"/>
    <path d="M99.0002 1053.9H97.2002V1055.7H99.0002V1053.9Z" fill="white"/>
    <path d="M114.8 1053.9H113V1055.7H114.8V1053.9Z" fill="white"/>
    <path d="M130.6 1053.9H128.8V1055.7H130.6V1053.9Z" fill="white"/>
    <path d="M146.3 1053.9H144.5V1055.7H146.3V1053.9Z" fill="white"/>
    <path d="M162.1 1053.9H160.3V1055.7H162.1V1053.9Z" fill="white"/>
    <path d="M177.9 1053.9H176.1V1055.7H177.9V1053.9Z" fill="white"/>
    <path d="M35.9001 1069.1H34.1001V1070.9H35.9001V1069.1Z" fill="white"/>
    <path d="M51.6999 1069.1H49.8999V1070.9H51.6999V1069.1Z" fill="white"/>
    <path d="M67.4001 1069.1H65.6001V1070.9H67.4001V1069.1Z" fill="white"/>
    <path d="M83.1999 1069.1H81.3999V1070.9H83.1999V1069.1Z" fill="white"/>
    <path d="M99.0002 1069.1H97.2002V1070.9H99.0002V1069.1Z" fill="white"/>
    <path d="M114.8 1069.1H113V1070.9H114.8V1069.1Z" fill="white"/>
    <path d="M130.6 1069.1H128.8V1070.9H130.6V1069.1Z" fill="white"/>
    <path d="M146.3 1069.1H144.5V1070.9H146.3V1069.1Z" fill="white"/>
    <path d="M162.1 1069.1H160.3V1070.9H162.1V1069.1Z" fill="white"/>
    <path d="M177.9 1069.1H176.1V1070.9H177.9V1069.1Z" fill="white"/>
    <path d="M35.9001 1084.4H34.1001V1086.2H35.9001V1084.4Z" fill="white"/>
    <path d="M51.6999 1084.4H49.8999V1086.2H51.6999V1084.4Z" fill="white"/>
    <path d="M67.4001 1084.4H65.6001V1086.2H67.4001V1084.4Z" fill="white"/>
    <path d="M83.1999 1084.4H81.3999V1086.2H83.1999V1084.4Z" fill="white"/>
    <path d="M99.0002 1084.4H97.2002V1086.2H99.0002V1084.4Z" fill="white"/>
    <path d="M114.8 1084.4H113V1086.2H114.8V1084.4Z" fill="white"/>
    <path d="M130.6 1084.4H128.8V1086.2H130.6V1084.4Z" fill="white"/>
    <path d="M146.3 1084.4H144.5V1086.2H146.3V1084.4Z" fill="white"/>
    <path d="M162.1 1084.4H160.3V1086.2H162.1V1084.4Z" fill="white"/>
    <path d="M177.9 1084.4H176.1V1086.2H177.9V1084.4Z" fill="white"/>
    <path d="M35.9001 1099.7H34.1001V1101.5H35.9001V1099.7Z" fill="white"/>
    <path d="M51.6999 1099.7H49.8999V1101.5H51.6999V1099.7Z" fill="white"/>
    <path d="M67.4001 1099.7H65.6001V1101.5H67.4001V1099.7Z" fill="white"/>
    <path d="M83.1999 1099.7H81.3999V1101.5H83.1999V1099.7Z" fill="white"/>
    <path d="M99.0002 1099.7H97.2002V1101.5H99.0002V1099.7Z" fill="white"/>
    <path d="M114.8 1099.7H113V1101.5H114.8V1099.7Z" fill="white"/>
    <path d="M130.6 1099.7H128.8V1101.5H130.6V1099.7Z" fill="white"/>
    <path d="M146.3 1099.7H144.5V1101.5H146.3V1099.7Z" fill="white"/>
    <path d="M162.1 1099.7H160.3V1101.5H162.1V1099.7Z" fill="white"/>
    <path d="M177.9 1099.7H176.1V1101.5H177.9V1099.7Z" fill="white"/>
    </g>
    <g opacity="0.3">
    <path d="M665.7 1053.9H663.9V1055.7H665.7V1053.9Z" fill="white"/>
    <path d="M681.5 1053.9H679.7V1055.7H681.5V1053.9Z" fill="white"/>
    <path d="M697.3 1053.9H695.5V1055.7H697.3V1053.9Z" fill="white"/>
    <path d="M713.1 1053.9H711.3V1055.7H713.1V1053.9Z" fill="white"/>
    <path d="M728.8 1053.9H727V1055.7H728.8V1053.9Z" fill="white"/>
    <path d="M744.6 1053.9H742.8V1055.7H744.6V1053.9Z" fill="white"/>
    <path d="M760.4 1053.9H758.6V1055.7H760.4V1053.9Z" fill="white"/>
    <path d="M776.2 1053.9H774.4V1055.7H776.2V1053.9Z" fill="white"/>
    <path d="M792 1053.9H790.2V1055.7H792V1053.9Z" fill="white"/>
    <path d="M807.7 1053.9H805.9V1055.7H807.7V1053.9Z" fill="white"/>
    <path d="M665.7 1069.1H663.9V1070.9H665.7V1069.1Z" fill="white"/>
    <path d="M681.5 1069.1H679.7V1070.9H681.5V1069.1Z" fill="white"/>
    <path d="M697.3 1069.1H695.5V1070.9H697.3V1069.1Z" fill="white"/>
    <path d="M713.1 1069.1H711.3V1070.9H713.1V1069.1Z" fill="white"/>
    <path d="M728.8 1069.1H727V1070.9H728.8V1069.1Z" fill="white"/>
    <path d="M744.6 1069.1H742.8V1070.9H744.6V1069.1Z" fill="white"/>
    <path d="M760.4 1069.1H758.6V1070.9H760.4V1069.1Z" fill="white"/>
    <path d="M776.2 1069.1H774.4V1070.9H776.2V1069.1Z" fill="white"/>
    <path d="M792 1069.1H790.2V1070.9H792V1069.1Z" fill="white"/>
    <path d="M807.7 1069.1H805.9V1070.9H807.7V1069.1Z" fill="white"/>
    <path d="M665.7 1084.4H663.9V1086.2H665.7V1084.4Z" fill="white"/>
    <path d="M681.5 1084.4H679.7V1086.2H681.5V1084.4Z" fill="white"/>
    <path d="M697.3 1084.4H695.5V1086.2H697.3V1084.4Z" fill="white"/>
    <path d="M713.1 1084.4H711.3V1086.2H713.1V1084.4Z" fill="white"/>
    <path d="M728.8 1084.4H727V1086.2H728.8V1084.4Z" fill="white"/>
    <path d="M744.6 1084.4H742.8V1086.2H744.6V1084.4Z" fill="white"/>
    <path d="M760.4 1084.4H758.6V1086.2H760.4V1084.4Z" fill="white"/>
    <path d="M776.2 1084.4H774.4V1086.2H776.2V1084.4Z" fill="white"/>
    <path d="M792 1084.4H790.2V1086.2H792V1084.4Z" fill="white"/>
    <path d="M807.7 1084.4H805.9V1086.2H807.7V1084.4Z" fill="white"/>
    <path d="M665.7 1099.7H663.9V1101.5H665.7V1099.7Z" fill="white"/>
    <path d="M681.5 1099.7H679.7V1101.5H681.5V1099.7Z" fill="white"/>
    <path d="M697.3 1099.7H695.5V1101.5H697.3V1099.7Z" fill="white"/>
    <path d="M713.1 1099.7H711.3V1101.5H713.1V1099.7Z" fill="white"/>
    <path d="M728.8 1099.7H727V1101.5H728.8V1099.7Z" fill="white"/>
    <path d="M744.6 1099.7H742.8V1101.5H744.6V1099.7Z" fill="white"/>
    <path d="M760.4 1099.7H758.6V1101.5H760.4V1099.7Z" fill="white"/>
    <path d="M776.2 1099.7H774.4V1101.5H776.2V1099.7Z" fill="white"/>
    <path d="M792 1099.7H790.2V1101.5H792V1099.7Z" fill="white"/>
    <path d="M807.7 1099.7H805.9V1101.5H807.7V1099.7Z" fill="white"/>
    </g>
    <g opacity="0.3">
    <path d="M786.394 774.489V772.189H784.094V774.489H786.394Z" fill="white"/>
    <path d="M786.386 794.681V792.381H784.086V794.681H786.386Z" fill="white"/>
    <path d="M786.378 814.872V812.572H784.078V814.872H786.378Z" fill="white"/>
    <path d="M786.37 835.064V832.764H784.07V835.064H786.37Z" fill="white"/>
    <path d="M786.362 855.256V852.956H784.062V855.256H786.362Z" fill="white"/>
    <path d="M786.354 875.448V873.148H784.053V875.448H786.354Z" fill="white"/>
    <path d="M786.345 895.64V893.34H784.045V895.64H786.345Z" fill="white"/>
    <path d="M786.337 915.832V913.532H784.037V915.832H786.337Z" fill="white"/>
    <path d="M786.329 936.024V933.724H784.029V936.024H786.329Z" fill="white"/>
    <path d="M786.321 956.215V953.915H784.021V956.215H786.321Z" fill="white"/>
    <path d="M766.859 774.424V772.124H764.559V774.424H766.859Z" fill="white"/>
    <path d="M766.851 794.616V792.316H764.551V794.616H766.851Z" fill="white"/>
    <path d="M766.842 814.808V812.508H764.542V814.808H766.842Z" fill="white"/>
    <path d="M766.834 835V832.7H764.534V835H766.834Z" fill="white"/>
    <path d="M766.826 855.192V852.892H764.526V855.192H766.826Z" fill="white"/>
    <path d="M766.818 875.383V873.083H764.518V875.383H766.818Z" fill="white"/>
    <path d="M766.81 895.575V893.275H764.51V895.575H766.81Z" fill="white"/>
    <path d="M766.802 915.767V913.467H764.502V915.767H766.802Z" fill="white"/>
    <path d="M766.793 935.959V933.659H764.493V935.959H766.793Z" fill="white"/>
    <path d="M766.785 956.151V953.851H764.485V956.151H766.785Z" fill="white"/>
    <path d="M747.323 774.46V772.16H745.023V774.46H747.323Z" fill="white"/>
    <path d="M747.315 794.652V792.352H745.015V794.652H747.315Z" fill="white"/>
    <path d="M747.307 814.843V812.543H745.007V814.843H747.307Z" fill="white"/>
    <path d="M747.299 835.036V832.736H744.999V835.036H747.299Z" fill="white"/>
    <path d="M747.291 855.227V852.927H744.991V855.227H747.291Z" fill="white"/>
    <path d="M747.282 875.419V873.119H744.982V875.419H747.282Z" fill="white"/>
    <path d="M747.274 895.611V893.311H744.974V895.611H747.274Z" fill="white"/>
    <path d="M747.266 915.803V913.503H744.966V915.803H747.266Z" fill="white"/>
    <path d="M747.258 935.995V933.695H744.958V935.995H747.258Z" fill="white"/>
    <path d="M747.25 956.187V953.887H744.95V956.187H747.25Z" fill="white"/>
    <path d="M727.787 774.496V772.196H725.487V774.496H727.787Z" fill="white"/>
    <path d="M727.779 794.687V792.387H725.479V794.687H727.779Z" fill="white"/>
    <path d="M727.771 814.879V812.579H725.471V814.879H727.771Z" fill="white"/>
    <path d="M727.763 835.071V832.771H725.463V835.071H727.763Z" fill="white"/>
    <path d="M727.755 855.263V852.963H725.455V855.263H727.755Z" fill="white"/>
    <path d="M727.747 875.455V873.155H725.447V875.455H727.747Z" fill="white"/>
    <path d="M727.739 895.647V893.347H725.439V895.647H727.739Z" fill="white"/>
    <path d="M727.73 915.839V913.539H725.43V915.839H727.73Z" fill="white"/>
    <path d="M727.722 936.03V933.73H725.422V936.03H727.722Z" fill="white"/>
    <path d="M727.714 956.222V953.922H725.414V956.222H727.714Z" fill="white"/>
    </g>
    <g opacity="0.3">
    <path d="M123.646 157.362V155.062H121.346V157.362H123.646Z" fill="white"/>
    <path d="M123.638 177.553V175.253H121.338V177.553H123.638Z" fill="white"/>
    <path d="M123.73 197.745V195.445H121.43V197.745H123.73Z" fill="white"/>
    <path d="M123.722 217.937V215.637H121.422V217.937H123.722Z" fill="white"/>
    <path d="M123.714 238.129V235.829H121.414V238.129H123.714Z" fill="white"/>
    <path d="M123.706 258.321V256.021H121.406V258.321H123.706Z" fill="white"/>
    <path d="M123.698 278.513V276.213H121.398V278.513H123.698Z" fill="white"/>
    <path d="M123.689 298.705V296.405H121.389V298.705H123.689Z" fill="white"/>
    <path d="M123.681 318.896V316.596H121.381V318.896H123.681Z" fill="white"/>
    <path d="M123.673 339.088V336.788H121.373V339.088H123.673Z" fill="white"/>
    <path d="M104.111 157.397V155.097H101.811V157.397H104.111Z" fill="white"/>
    <path d="M104.103 177.589V175.289H101.803V177.589H104.103Z" fill="white"/>
    <path d="M104.195 197.781V195.481H101.895V197.781H104.195Z" fill="white"/>
    <path d="M104.187 217.973V215.673H101.887V217.973H104.187Z" fill="white"/>
    <path d="M104.178 238.164V235.865H101.878V238.164H104.178Z" fill="white"/>
    <path d="M104.17 258.356V256.056H101.87V258.356H104.17Z" fill="white"/>
    <path d="M104.162 278.548V276.248H101.862V278.548H104.162Z" fill="white"/>
    <path d="M104.154 298.74V296.44H101.854V298.74H104.154Z" fill="white"/>
    <path d="M104.146 318.932V316.632H101.846V318.932H104.146Z" fill="white"/>
    <path d="M104.138 339.124V336.824H101.838V339.124H104.138Z" fill="white"/>
    <path d="M84.5752 157.333V155.033H82.2752V157.333H84.5752Z" fill="white"/>
    <path d="M84.5674 177.525V175.225H82.2674V177.525H84.5674Z" fill="white"/>
    <path d="M84.6592 197.716V195.417H82.3592V197.716H84.6592Z" fill="white"/>
    <path d="M84.6509 217.908V215.608H82.3509V217.908H84.6509Z" fill="white"/>
    <path d="M84.6426 238.1V235.8H82.3426V238.1H84.6426Z" fill="white"/>
    <path d="M84.6348 258.292V255.992H82.3348V258.292H84.6348Z" fill="white"/>
    <path d="M84.6265 278.484V276.184H82.3265V278.484H84.6265Z" fill="white"/>
    <path d="M84.6182 298.676V296.376H82.3181V298.676H84.6182Z" fill="white"/>
    <path d="M84.6104 318.868V316.568H82.3104V318.868H84.6104Z" fill="white"/>
    <path d="M84.6021 339.06V336.76H82.302V339.06H84.6021Z" fill="white"/>
    <path d="M65.0396 157.368V155.068H62.7396V157.368H65.0396Z" fill="white"/>
    <path d="M65.0312 177.56V175.26H62.7312V177.56H65.0312Z" fill="white"/>
    <path d="M65.1235 197.752V195.452H62.8235V197.752H65.1235Z" fill="white"/>
    <path d="M65.1152 217.944V215.644H62.8152V217.944H65.1152Z" fill="white"/>
    <path d="M65.1069 238.136V235.836H62.8069V238.136H65.1069Z" fill="white"/>
    <path d="M65.0991 258.328V256.028H62.7991V258.328H65.0991Z" fill="white"/>
    <path d="M65.0908 278.519V276.219H62.7908V278.519H65.0908Z" fill="white"/>
    <path d="M65.0825 298.711V296.411H62.7825V298.711H65.0825Z" fill="white"/>
    <path d="M65.0742 318.903V316.603H62.7742V318.903H65.0742Z" fill="white"/>
    <path d="M65.0664 339.095V336.795H62.7664V339.095H65.0664Z" fill="white"/>
    </g>
    <path d="M63.84 68V59.42H65.784L71.856 65.588V59.42H73.776V68H71.832L65.76 61.82V68H63.84ZM75.4533 68V59.42H84.6213V60.98H77.3733V63.356H83.6853V64.916H77.3733V68H75.4533ZM85.6416 63.764V59.42H96.2016V63.764H94.2576V60.98H91.6416V68H89.7216V60.98H87.5856V63.764H85.6416Z" fill="white"/>
    <path d="M142.84 68V59.42H150.028C150.916 59.42 151.604 59.644 152.092 60.092C152.588 60.54 152.836 61.22 152.836 62.132C152.836 63.044 152.588 63.724 152.092 64.172C151.604 64.62 150.916 64.844 150.028 64.844H144.76V68H142.84ZM149.8 60.98H144.76V63.272L149.8 63.284C150.152 63.284 150.42 63.196 150.604 63.02C150.796 62.844 150.892 62.548 150.892 62.132C150.892 61.708 150.796 61.412 150.604 61.244C150.42 61.068 150.152 60.98 149.8 60.98ZM154.031 68V59.42H155.951V62.936H161.999V59.42H163.919V68H161.999V64.496H155.951V68H154.031ZM169.93 68.06C168.402 68.06 167.218 67.696 166.378 66.968C165.538 66.232 165.118 65.144 165.118 63.704C165.118 62.272 165.538 61.192 166.378 60.464C167.218 59.728 168.43 59.36 170.014 59.36H172.174C173.758 59.36 174.97 59.728 175.81 60.464C176.65 61.192 177.07 62.272 177.07 63.704C177.07 65.144 176.65 66.232 175.81 66.968C174.97 67.696 173.778 68.06 172.234 68.06H169.93ZM170.146 60.92C169.258 60.92 168.566 61.08 168.07 61.4C167.574 61.72 167.262 62.228 167.134 62.924H175.054C174.926 62.228 174.614 61.72 174.118 61.4C173.622 61.08 172.93 60.92 172.042 60.92H170.146ZM170.182 66.5H172.042C172.938 66.5 173.63 66.34 174.118 66.02C174.614 65.7 174.926 65.188 175.054 64.484H167.134C167.262 65.188 167.574 65.7 168.07 66.02C168.566 66.34 169.27 66.5 170.182 66.5ZM178.266 68V59.42H180.21L186.282 65.588V59.42H188.202V68H186.258L180.186 61.82V68H178.266ZM189.879 68V59.42H199.287V60.98H191.799V62.876H198.591V64.436H191.799V66.44H199.287V68H189.879Z" fill="white"/>
    </svg>    
          `

  //   const loader = new SVGLoader()
  //   const svgData = loader.parse(svg)
  //   const shapePaths = svgData.paths

  //   useEffect(() => {
  //       const shapes = []
  //       const svgGroup = new THREE.Group()

  //       shapePaths.forEach((path) => {
  //           const shapesInPath = SVGLoader.createShapes(path)
  //           shapes.push(...shapesInPath)
  //       })


  //       shapes.forEach((shape) => {
  //           const material = new THREE.MeshNormalMaterial()

  //           const geometry = new THREE.ExtrudeGeometry(shape, {
  //             depth: 2,
  //             bevelEnabled: false
  //           })        

  //           const mesh = new THREE.Mesh(geometry, material)

  //           mesh.position.set(-14, 21.1, 0)
  //           mesh.scale.set(.04, .04, .04)
  //           mesh.rotation.set(Math.PI, 0.10, 0)

  //           svgGroup.add(mesh)
  //       })
  //       scene.add(svgGroup)
  // }, [shapePaths])


    // function toggleWireframe(model, isWireframe, opacity, duration) {
    //     model.traverse(function(child) {
    //       if (child.isMesh && child.material) {
    //         gsap.to(child.material, {
    //           opacity: opacity,
    //           duration: duration || 1, 
    //           onUpdate: function() {
    //             child.material.wireframe = isWireframe;
    //             child.material.transparent = true;
    //           }
    //         });
    //       }
    //     });
    //   }

    useGSAP(() => {

        const tl = gsap.timeline()
        tl.from(phone.current.rotation, { y: 5, duration: 2, ease: 'power1.inOut' })
        tl.from(phone.current.position, { y: 50, duration: 2, ease: 'power1.inOut' }, '<')

        // toggleWireframe(modelScene, false, 1, 2)
    })

    return (
        <>
        <Float>
        <primitive ref={phone} object={modelScene} position={[ 0, -4.5, 0 ]} scale={[10, 10, 10]} rotation={[ 0, -0.15, 0 ]} opacity="0" wireframe="true"> 
        <Html 
            occlude={[phone]} 
            distanceFactor={1.19}
            position={[0.13, 0.23, 0.09]}
            rotation={[ 0, 0, 0 ]}
            transform 
            >
                <iframe
                className='rounded-[68px] bg-[#222531]'
                height={1077}
                width={510}
                ref={frame}              
                src="http://zagorouiko.com/nfts"        
                />
            </Html>
        </primitive>
        </Float>
        </>
    )
  }
  
  export default Phone
  