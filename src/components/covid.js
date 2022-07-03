import React, { useEffect, useState } from "react"
const Covid =() => {

    const[data,setData] = useState([]);
   
  const getCovidData = async () =>{
    
         fetch('https://disease.sh/v3/covid-19/countries')
         .then(res=>res.json())
         .then(data =>{
            console.log(data[94]);
            setData(data[94])
          })
  }
  
  useEffect(() =>{
        getCovidData();
    }, [])
 
    return (
    <>
<section>
    <h1>🔴LIVE</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>

    <ul>
       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>OUR</span>COUNTRY</p>
                <p className="card__total card__small">INDIA</p>
            </div>

        </div>

       </li>

       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>RECOVERED</p>
                <p className="card__total card__small">{data.recovered}</p>
            </div>

        </div>

       </li>

       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>CRITICAL</p>
                <p className="card__total card__small">{data.critical}</p>
            </div>

        </div>

       </li>

       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>DEATH</p>
                <p className="card__total card__small">{data.deaths}</p>
            </div>

        </div>

       </li>

       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>TOTAL</span>ACTIVE</p>
                <p className="card__total card__small">{data.active}</p>
            </div>

        </div>

       </li>

       <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name"><span>LAST</span>UPDATED</p>
                <p className="card__total card__small">{Date(data.updated)}</p>
            </div>

        </div>

       </li>
    </ul>
</section>
    </>

  )
}

export default Covid;