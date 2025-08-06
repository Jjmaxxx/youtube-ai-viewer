import { Routes, Route } from 'react-router-dom';
import { ChannelSearch, ChannelDetailsPage } from '@/features/youtube/pages';
import { DefaultLayout } from '@/layouts';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<ChannelSearch />} />
        <Route path='/channel/:id' element={<ChannelDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
