import React from 'react'

function Footer(props) {
    const RED = '#ff0000'
    const BLUE = '#0000ff'
    const GRAY = '#678c89'

    let submitThemeColor = (color) => {

    }

    return (
        <div className='footer'>
            <div className='vertical-center'>
                <span>Choose theme</span>
                <button onClick={()=>submitThemeColor(RED)} className='dot red' />
                <button onClick={()=>submitThemeColor(BLUE)} className='dot blue'/>
                <button onClick={()=>submitThemeColor(GRAY)} className='dot gray'/>
            </div>
        </div>
    )

}

export default Footer
