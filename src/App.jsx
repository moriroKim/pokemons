import { Suspense, lazy, useEffect } from 'react';
import './App.scss';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';

const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, []);

    return (
        <>
            <h1 className="border-t-[30px] border-t-[red] bg-black text-[50px] text-center text-white">포켓몬 도감</h1>
            <nav className="flex gap-[10px] justify-center py-[10px] border-b-[3px] border-b-black">
                <Link to={'/'}>메인</Link>
                <Link to={'/favorite'}>찜목록</Link>
                <span>🔎</span>
                <input
                    onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
                    type="text"
                    className="w-[120px] border-b border-[darkgray] px-2"
                />
            </nav>
            <main className="bg-[gray] flex flex-wrap justify-center gap-[20px] pt-[20px] pb-[20px]">
                <Suspense fallback={<div>로딩중...</div>}>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/detail/:pokemonId" element={<Detail />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/favorite" element={<Favorite />}></Route>
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
