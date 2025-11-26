import { Sidebar } from './components/sidebar'
import { Container } from './components/ui/container'
import { Appointments } from './components/appointments'

import logo from './assets/images/logo.svg'
import { AppointmentsProvider } from './contexts/appointments-context'

export function App() {
  return (
    <AppointmentsProvider>
      <Container as="main" className="gap-3 relative">
        <div className="absolute top-0 left-0 bg-gray-600 px-5 py-3 rounded-br-xl">
          <img src={logo} alt="HairDay" />
        </div>
        <Sidebar />
        <Appointments />
      </Container>
    </AppointmentsProvider>
  )
}
