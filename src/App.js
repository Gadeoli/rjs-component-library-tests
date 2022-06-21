import React, { Suspense } from 'react';
import { 
  ThemeContext,
  themeValuesPattern,
  
  GlobalStyle
} from '@gadeoli/rjs-component-library-themed';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import { darkThemeStyle, lightThemeStyle } from './helpers/style';

const appLightThemeStyle = lightThemeStyle(themeValuesPattern);
const appDarkThemeStyle = darkThemeStyle(themeValuesPattern);

const Home = React.lazy(() => import('./pages/Home'));
const Test1 = React.lazy(() => import('./pages/Test1'));
const Test2 = React.lazy(() => import('./pages/Test2'));
const Test3 = React.lazy(() => import('./pages/Test3'));
const Test4 = React.lazy(() => import('./pages/Test4'));
const Test5 = React.lazy(() => import('./pages/Test5'));
const Test6 = React.lazy(() => import('./pages/Test6'));
const Test7Form01 = React.lazy(() => import('./pages/Test7Form01'));
const Test7Form02 = React.lazy(() => import('./pages/Test7Form02'));
const Test7Form03 = React.lazy(() => import('./pages/Test7Form03'));
const Test7Form04 = React.lazy(() => import('./pages/Test7Form04'));
const Test7Form05 = React.lazy(() => import('./pages/Test7Form05'));
const Test7Form06 = React.lazy(() => import('./pages/Test7Form06'));
const Test7Form07 = React.lazy(() => import('./pages/Test7Form07'));

function App() {
  return (
    <div>
      <ThemeContext.Consumer>
        {({mode, theme, setMode, setDarkValues, setLightValues}) => { 
            setTimeout(() => {
                setDarkValues(appDarkThemeStyle);
                setLightValues(appLightThemeStyle);
            }, 1000);
            
            return <GlobalStyle />;
        }}
      </ThemeContext.Consumer>

      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Routes path="/">
            <Route index element={<Home/>}/>
            <Route exact path="/test1" element={<Test1/>} />
            <Route exact path="/test2" element={<Test2/>} />
            <Route exact path="/test3" element={<Test3/>} />
            <Route exact path="/test4" element={<Test4/>} />
            <Route exact path="/test5" element={<Test5/>} />
            <Route exact path="/test6" element={<Test6/>} />
            <Route exact path="/test7" element={<Test7Form01/>} />
            <Route exact path="/test7_2" element={<Test7Form02/>} />
            <Route exact path="/test7_3" element={<Test7Form03/>} />
            <Route exact path="/test7_4" element={<Test7Form04/>} />
            <Route exact path="/test7_5" element={<Test7Form05/>} />
            <Route exact path="/test7_6" element={<Test7Form06/>} />
            <Route exact path="/test7_7" element={<Test7Form07/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
