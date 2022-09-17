interface ButtonProps {
  title: string
}

function Button({title}: ButtonProps) {
  return (
    <>
      <button>{title}</button>
    </>
  );
}

export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button title="Send" />
    </>
  );
}
