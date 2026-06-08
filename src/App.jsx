import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { ProgressBar } from "./components/ProgressBar";
import { Savings } from "./components/Savings";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant="h1"> Olá, Matheus</Typography>
            <Typography variant="body">Veja como estão as suas finanças hoje.</Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch">
            {/* Primeiro card */}
            <Card>
              <Card.header>Orçamento diário disponível:</Card.header>
              <Card.body>
                <DailyBudget value={42}></DailyBudget>
              </Card.body>
            </Card>
            {/* segundo card */}
            <Card>
              <Card.header>Progresso da meta Financeira</Card.header>
              <Card.body>
                <Savings></Savings>
                <ProgressBar percent={50}></ProgressBar>
              </Card.body>
            </Card>
            {/* terceiro card */}
            <Card>
              <Card.header>Movimentação financeira</Card.header>
              <Card.body>200</Card.body>
            </Card>
            {/* quarto card */}
            <Card>
              <Card.header>Minhas contas</Card.header>
              <Card.body>200</Card.body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
