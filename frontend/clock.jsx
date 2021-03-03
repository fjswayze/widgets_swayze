import React, {useState, useEffect} from 'react'


export default function Clock(){
    const [time, setTime] = useState(new Date()); 
    const months = {
        1: 'Jan', 
        2: 'Feb', 
        3: 'Mar', 
        4: 'April', 
        5: 'May', 
        6: 'Jun', 
        7: 'Jul', 
        8: 'Aug', 
        9: 'Sep', 
        10: 'Oct', 
        11: 'Nov', 
        12: 'Dec'
    }

    const days = {
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        7: 'Sun'
    }

    function tick(){
        setTime(new Date()); 
    } 

    function addZero(number){
        if(number.toString().length < 2){
            return '0' + number.toString(); 
        } else{
            return number;
        }
    }

    useEffect(() => {
        setInterval(tick, 1000); 
    }, [])


    return(
        <div>
            <h1>Clock</h1>
            <div className='clock-box'>
                <div className='row-1'>
                    <div className='col-1'>
                        Time: 
                    </div>
                    <div className='col-2'>
                        {addZero(time.getHours())}:{addZero(time.getMinutes())}:{addZero(time.getSeconds())}
                    </div>
                </div>
                <div className='row-2'>
                    <div className='col-1'>
                        Date:
                    </div>
                    <div className='col-2'>
                        {days[time.getDay()]} {months[time.getMonth()]} {addZero(time.getDate())} {addZero(time.getFullYear())}
                    </div>
                </div>
            </div>
        </div>
    )
}