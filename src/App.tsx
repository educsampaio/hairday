import { Container } from './components/ui/container'
import { Text } from './components/ui/text'

export function App() {
  return (
    <Container as="main" className="gap-3">
      <div className="space-y-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>
    </Container>
  )
}
