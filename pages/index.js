import Head from 'next/head'
import { useEffect, useReducer, useState } from 'react'
import Header from "../components /Header"
import TodoSection from '../components /TodoSection';
import FooterStyles from '../styles/FooterStyles';
import defaultData from '../lib/defaultData';
import reducer from '../lib/reducer';
import ActionsSection from '../components /ActionSection';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/Theme";
import { useDarkMode } from '../lib/darkMode';

export default function Home() {
  const [todoList, dispatch] = useReducer(reducer, defaultData);

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window);
  }, []);

  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      {
        isBrowser ? (
          <div className='home'>
            <Head>
              <title>Todo App</title>
              <meta name="description" content="A classic todo app where you can create, read, update and delete your todo list" />
              <meta name="robots" content='index, no-follow'/>
            </Head>
            <main className='app'>
              <Header dispatch={dispatch} toggleTheme={toggleTheme} theme={theme}/>
              <TodoSection todoList={todoList} dispatch={dispatch}/>
              <ActionsSection/>
            </main>
            <FooterStyles>
              <span>Coded by<strong> Amzat</strong></span>
            </FooterStyles>
          </div>
        ) : null
      }
      </>
    </ThemeProvider>
  )
}
