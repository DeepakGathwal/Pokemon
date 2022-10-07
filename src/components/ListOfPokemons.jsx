import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './listofPokemons.css'
import { Image, value } from './Data';
import { Link } from 'react-router-dom'

const SinglePokimon = () => {
  const [posts, setPost] = useState([])
  const [page, setPage] = useState(0)
  const [searchPolki, setSearchPoki] = useState('')

  useEffect(() => {
    const hello = async () => {
      const { data } = await axios.get(`${value}?offset=${page}&limit=20`)
      setPost(data.results);
    }
    hello();
  }, [page])

  return (
    <>
      <div className='conatiner '>
        <div className='section  bg-white-50'>
          <h1 className='text-danger  bg-primary text-center p-3'>My Pokemon World</h1>
          <div className='row text-center m-2'>
            <input
            type='search'
            placeholder='Search Your Faviout Pokemon'
            onChange={(e) => setSearchPoki(e.target.value)}
            />
            <i className="fas fa-search icon"></i>
{posts.filter((obj) => {
if(obj == ''){
  return obj;
}else if(obj.name.toLowerCase().includes(searchPolki.toLowerCase())){
  return obj;
}
}).map((value, i) =>
              <>
                <div className='col-12 col-sm-3 bg-white'>
                  <Link to={`/singlePokemon/${value.url.split('/')[6]}/#poki`} style={{ textDecoration: 'none' }}>
                    <div className='flex'>
                      <div className='bg-white-50 ml-1 mr-1 mt-3'>
                        <img src={`${Image}/${value.url.split('/')[6]}.png`} alt={value.name} style={{ width: '200px', height: "200px" }} />
                        <p className='p-1'>
                          <h2>{value.name}</h2>
                          <h6 >{value.url.split('/')[6] < 10 ? <>#00{value.url.split('/')[6]}</> : <>#0{value.url.split('/')[6]}</>}</h6>

                        </p>
                      </div>
                    </div>

                  </Link>
                </div>

              </>
            )}
          </div>
        </div>
        <div className='row text-center'>
          <div className='col'>
            {
              page > 0 && <button className='m-1 text-center text-bg-danger text-righ ' onClick={() => { (page == 0) ? (setPage(0)) : setPage(page - 20) }}>Previous</button>

            }
          </div>
          <div className='col'>
            <button className='m-1 text-bg-success text-right' onClick={() => setPage(page + 20)}>Next</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default SinglePokimon
