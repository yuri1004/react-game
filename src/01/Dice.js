import Dic01 from './assets/red_1.svg';
import Dic02 from './assets/red_2.svg';
import Dic03 from './assets/red_3.svg';
import Dic04 from './assets/red_4.svg';
import Dic05 from './assets/red_5.svg';
import Dic06 from './assets/red_6.svg';

const DicNum =[Dic01,Dic02,Dic03,Dic04,Dic05,Dic06];
// console.log(DicNum);

export default function Dice({num}){
    const src = DicNum[num - 1];
    const alt = 'Dic01'
    return(
        <img src={src} alt={alt} />
    )
}