import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Spinner from './components/layout/Spinner'

import Movie from "./components/home/Movie";

import store from "./store";

import {lazy, Suspense} from 'react';
//import Navbar from "./components/layout/Navbar"; foi aplicado o lazy loading
//import Footer from "./components/layout/Footer"; foi aplicado o lazy loading
//import Landing from "./components/home/Landing"; foi aplicado o lazy loading

const Navbar = lazy(() => import('./components/layout/Navbar')) //aplicação lazy loading 
const Footer = lazy(() => import('./components/layout/Footer')) //aplicação lazy loading 
const Landing = lazy(() => import('./components/home/Landing')) //aplicação lazy loading 

const CompSSR = lazy(() => import('./compSSR'))


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
					<Suspense fallback={ <Spinner/> }>
						<Navbar />
                    </Suspense>

					<Suspense fallback={ <Spinner/> }>
						<CompSSR />;
                    </Suspense>

					<Suspense fallback={ <Spinner/> }>
						<Route exact path="/" component={Landing} />
                    </Suspense>

						<Route exact path="/movie/:id" component={Movie} />

					<Suspense fallback={ <Spinner/> }>
						<Footer />;
                    </Suspense>

				

				     

					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
