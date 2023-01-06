import React from "react"
import Grid5x5 from "../components/Grid5x5"
import Link from 'next/link'; 
import { useRouter } from 'next/router';
function Home({name, lobby, setName, setLobby, socket}) {
    
    const router = useRouter();
    const joinLobby = () => {
        console.log("lobby")
        if (lobby !== '' && name !== '') {
          socket.emit('join_lobby', { name, lobby});
          router.push(`/game/${lobby}`);
        }
    }; 
    return (
        <div className="h-100 position-absolute container-fluid d-flex flex-column">
            <header className="text-center display-1 font-weight-bold text-white title">Pixel Vision </header>
            <div className="row flex-fill justify-content-center">
                <div className="col-sm-5 d-flex justify-content-center align-items-center">
                    <Grid5x5 />
                </div>

                <div className="col-sm-5 d-flex flex-column justify-content-center">
                    <div className="h-40 bg-light rounded shadow mx-5 d-flex flex-column justify-content-around">
                        <div className="">
                            <div className="input-group input-group-lg p-2">
                                <span className="input-group-text px-3">NAME</span>
                                <input className="form-control" type="text" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="input-group input-group-lg p-2">
                                <input className="form-control" type="text" placeholder="CODE" onChange={(e) => setLobby(e.target.value)}/>
                                <button className="btn btn-success" type="button" onClick={joinLobby}>JOIN</button>
                            </div>
                        </div>

                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/game/ABCD"> 
                          <div className="d-grid">
                              <input className="mt-2 create-room-button btn btn-lg btn-success mx-2 w-auto" type="button" value="CREATE ROOM" />
                          </div>
                        </Link>

                    </div>
                </div>
            </div>

        </div>)
}

export default Home;