import React, { useState } from 'react'
import './style.scss'

const Start = () => {
    const [mail, setmail] = useState('')
    const [pass, setpass] = useState('')
    const [mesage, setmesage] = useState('')
    const [alerttext, setalerttext] = useState('')
    const [border, setborder] = useState('')

    const submit = (e) => {
        e.preventDefault();
        if (mail === '' || pass === '') {
            setalerttext('One or more fields have an error. Please check and try again.');
            setborder('danger');

        } else {
            setalerttext('Thank you for your message. It has been sent.');
            setborder('success');

        }
    }
    return (
        <div className='start'>
            <img className='banner' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/doggo_banner.jpg" alt="" />

            <div className="all">
                <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                <h1  >LET’S GET <br />
                    STARTED ?</h1>
                <form onSubmit={submit} >
                    <div className="input"  >
                        <input type="text" placeholder='Your Name or Brand' onChange={e => { setpass(e.target.value) }} />
                        <input type="email" placeholder='Your Contact E-mail' onChange={e => { setmail(e.target.value) }} />
                    </div>
                    <div >
                        <textarea placeholder='Your Question' cols={63} rows={10} onChange={e => { setmesage(e.target.value) }} />
                    </div>
                    <p className={`border border-${border}`}>{alerttext}</p>
                    <button type="submit">Send a Question </button>

                </form>
            </div>

        </div>
    )
}

export default Start
