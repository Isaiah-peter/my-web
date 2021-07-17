import React from 'react'

function skill() {
    return (
        <div>
            <h1 className='skills__discription-head mb-5'>skills</h1>
            <p className='skills__text'>Far far away,
             behind the word mountains,
              far from the countries Vokalia and Consonantia, 
              there live the blind texts.
               Separated they live in Bookmarksgrove
                right at the coast of the Semantics,
                a large language ocean.</p>

                <div className='grid-2 mt-3'>
                    <div>
                        <div className='achivements'>
                            <h3 className='achivements__name'>HTML</h3>
                            <h3 className='achivements__value'>80%</h3>
                        </div>
                        <div className='achivement__board mt-2'>
                            <div className='achivement__gauge-html'></div>
                        </div>
                    </div>
                    <div>
                        <div className='achivements'>
                            <h3 className='achivements__name'>css</h3>
                            <h3 className='achivements__value'>70%</h3>
                        </div>
                        <div className='achivement__board mt-2'>
                            <div className='achivement__gauge-css'></div>
                        </div>
                    </div>
                    <div>
                        <div className='achivements'>
                            <h3 className='achivements__name'>javascript</h3>
                            <h3 className='achivements__value'>50%</h3>
                        </div>
                        <div className='achivement__board mt-2'>
                            <div className='achivement__gauge-jav'></div>
                        </div>
                    </div>
                    <div>
                        <div className='achivements'>
                            <h3 className='achivements__name'>react</h3>
                            <h3 className='achivements__value'>70%</h3>
                        </div>
                        <div className='achivement__board mt-2'>
                            <div className='achivement__gauge-react'></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default skill




