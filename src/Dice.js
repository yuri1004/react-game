import Red01 from './assets/red_1.svg';
import Red02 from './assets/red_2.svg';
import Red03 from './assets/red_3.svg';
import Red04 from './assets/red_4.svg';
import Red05 from './assets/red_5.svg';
import Red06 from './assets/red_6.svg';
import Blue01 from './assets/blue-1.svg';
import Blue02 from './assets/blue-2.svg';
import Blue03 from './assets/blue-3.svg';
import Blue04 from './assets/blue-4.svg';
import Blue05 from './assets/blue-5.svg';
import Blue06 from './assets/blue-6.svg';

const DicNum = {
    blue:[Blue01,Blue02,Blue03,Blue04,Blue05,Blue06],
    red:[Red01,Red02,Red03,Red04,Red05,Red06]
}
export default function Dice({color,num=1}){
    const src = DicNum[color][num-1]
    const alt = `${color}${num}`
    return(
        <img src={src} alt={alt} />
    )
}