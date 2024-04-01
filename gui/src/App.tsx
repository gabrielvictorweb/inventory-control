import ProvidersApplication from '@/providers';
import RouterConfig from '@/routes';
import { GlobalStyle } from '@/styles/global';

function App() {
  return (
    <ProvidersApplication>
      <RouterConfig />

      <GlobalStyle />
    </ProvidersApplication>
  );
}

export default App;
