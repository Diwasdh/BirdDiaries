import React ,{useState} from 'react'
import './style.scss'
import '../../global/variable.scss'
import data from '../../global/data.json'

export const Birds = () => {
    const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const [Letter, setLetter] = useState('A');
    return (
        <div className='wrap'>
            <h1>
                Birds
            </h1>
            <div className="table">
                <div className="letters">
                    {
                        arr.map(array=><a onClick={()=>setLetter(c=> array)}>{array}</a>)
                    }
                </div>
                <div className="butterflies" id='flies'>
                {
                data.map((details,index)=>{
                if(details.commonName.charAt(0)==Letter)
                {
                    return <h5> • {details.commonName} </h5>
                }else{
                     return null
                    }
                })
                }
                </div>
            </div>
        </div>
    )
}


