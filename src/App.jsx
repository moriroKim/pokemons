import { useEffect } from 'react';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, []);

    return (
        <>
            <h1 className="text-[40px] text-center">포켓몬 도감</h1>
            <nav className="flex gap-[10px] justify-center">
                <Link to={'/'}>메인</Link>
                <Link to={'/detail/1'}>상세정보</Link>
                <Link to={'/search'}>검색</Link>
                <Link to={'/favorite'}>찜목록</Link>
            </nav>
            <main className="flex flex-wrap justify-center gap-[20px] pt-[20px]">
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/detail/:pokemonId" element={<Detail />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/favorite" element={<Favorite />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
