import React, { isValidElement, useEffect, useState } from 'react';
import axios from 'axios'
import './Single.css'
import { value } from './Data';
import { useNavigate, useParams } from 'react-router-dom';

const SinglePokemon = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [posts, setPost] = useState([])
  const [able, setable] = useState([])
  const [movesr, setMoves] = useState([])
  const [sats, setSats] = useState([])
  const [ima, setIma] = useState([])

  useEffect(() => {
    const hello = async () => {
      const { data } = await axios.get(`${value}/${id}/`)
      setPost(data);
      const ability = data.abilities.flat(Infinity)
      setable(ability)
      const setsa = data.stats.flat(Infinity)
      setSats(setsa)
      const mobs = data.moves.flat(Infinity)
      setMoves(mobs)
      const im = data.sprites.other.dream_world.front_default
      setIma(im)
    }
    hello();
  }, [])
const home = async() => {
await navigate('/')
}
  return (
    <>
      <div className='conatiner-fluid bg-success text-center'>
        <h1 className='text-danger  bg-primary  p-3 text-bold'>{posts.name}</h1>
        <img id="poki" className='singleImage text-center col col-12 col-m-5 col-p-5 m-5' src={ima} alt={posts.name} style={{ width: '250px', height: '250px' }} />
        <div className='row text-center m-5'>
          <div className='col-12 col-sm-6'>
            <h2 className='m-1 p-1'>Height :{posts.height}</h2>
          </div>
          <div className='col-12 col-sm-6 mt-5 mt-sm-0'>
            <h2 className='m-1 p-1'>Weight:{posts.weight}</h2>

          </div>
        </div>
        <div className='row ml-5 mr-5 mb-5 bg-success'>
          <div className='col-12 col-sm-6'>
            <h1>Ability & Slot</h1>
            {able.map((rl) => (
              <>
                <div className='col'>
                  <div className='d-inline-flex'>
                    <h4 className='p-1 m-1'>Name: {rl.ability.name}  </h4>
                  </div>
                  <h4 className='p-1 m-1'>Slot : {rl.slot}  </h4>
                </div>
              </>
            ))}
          </div>
          <div className='col-12 col-sm-6 mt-5 mt-sm-0'>
            <h1>Sats_Name </h1>
            {sats.map((rl) => (
              <>
                <div className='d-inline-flex'>
                  <h4 className='p-1 m-1'>{rl.stat.name}  </h4>
                </div>
              </>
            ))}
          </div>
        </div>
        <h1>Moves</h1>
        {movesr.map((rl, i) => (
          <div id="move" className='move d-inline-flex bg-primary m-2 p-2'>
            <>
              <h5 className='m-2 p-2'>{rl.move.name}</h5>
            </>
        </div>
        ))}
    <div>

      <button className='home mt-5 text-bg-success bg-primary text-right' onClick={home}>See All Pokimon</button>
    </div>
      </div>
    </>
  )
}

export default SinglePokemon
