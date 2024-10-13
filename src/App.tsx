import React from 'react'
import Calculator from './components/calculator/Calculator'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Subheader from './components/Subheader/Subheader'
import VentilationSystems from './components/ventilationSystem/VentilationSystems'
import './style/style.css'

const App: React.FC = () => {
	return (
		<>
			<div>
				<Header />
				<Subheader />
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Sidebar />
					<Sidebar />
					<Sidebar />
					<Sidebar />
				</div>
				<div className='main-content'>
					<main>
						<VentilationSystems />
						<Calculator />
					</main>
				</div>
			</div>
		</>
	)
}

export default App
