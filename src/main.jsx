import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./font/qd_iconfont.woff"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Provider} from 'react-redux'
import { store } from './app/store'
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </ChakraProvider>
  </React.StrictMode>
)
