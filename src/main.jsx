import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
//import { Login } from './components/login/login.jsx';
import { Login } from './css/login.jsx';
import { Databinding } from './components/databinding/databinding.jsx';
import { DateType } from './components/Date-type/Date-type.jsx';
import { Flipkart } from './components/flipkart/flipkart.jsx';
import { Nasa } from './components/nasa-api/nasa-api.jsx';
import { FormDemo } from './components/form-demo/form-demo.jsx';
import { FormComponentDemo } from './components/FormComponentDemo/FormComponentDemo.jsx';
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx';
import { ControlledDemo } from './components/controlled-demo/controlled-demo.jsx';
import { ContextDemo } from './components/context-demo/context-demo.jsx';
import { TransportDemo } from './components/transport-demo/transport-demo.jsx';
import { SearchProducts } from './fakestore/search-products';
import { FormikComponentDemo } from './components/FormikComponentDemo/FormikComponentDemo.jsx';
import { LifeCycleDemo } from './components/component-life-cycle/component-life-cycle.jsx';
import { TutorialIndex } from './routing/tutorial-index.jsx';
import { HookFormDemo } from './components/React-Hook-Form/React-Hook-Form.jsx';
import { Muidemo } from './components/mui-demo/mui-demo.jsx';
import { Muifirst } from './components/mui-demo/mui-first.jsx';
import { FakestoreIndex } from './components/Search-Parameters/fakestore-index.jsx';
createRoot(document.getElementById('root')).render(
  
    <Login/>
  
)
