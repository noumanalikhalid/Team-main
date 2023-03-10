import React from 'react'
import style from '../../../../../style/Dashboard.module.css'
import { Sidebar } from '../../Sidebar/Sidebar'
export const Insert = ()=>{
    return(
        <>
        <div className={style.dashboardmain}>
            <div className={style.dashboardleft}>
                <Sidebar/>
            </div>
            <div className={style.dashboardRight}>
                <form enctype="multipart/form-data">
                    <div>
                        <label>Name </label>
                        <input type="text" placeholder='Enter the Name' required/>
                    </div>
                    <div>
                        <label>Color</label>
                        <input type="text" placeholder='Enter the Name' required/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" placeholder='Enter the Name' required/>
                    </div>
                    <div>
                        <label>Milage</label>
                        <input type="text" placeholder='Enter the Name' required/>
                    </div>
                    <div>
                        <label>Max Power</label>
                        <input type="text" placeholder='Enter the Name' required/>
                    </div>
                    <div>
                        <label>Color Images</label>
                        <input type="file"  required/>
                    </div>
                    <div>
                        <label>Wheel Images</label>
                        <input type="file" accept='image/*' multiple required/>
                    </div>
                    <div>
                        <label>Interior Images</label>
                        <input type="file" multiple required/>
                    </div>
                    <div>
                        <label>Light Images</label>
                        <input type="file" multiple required/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
        </>
    )
}