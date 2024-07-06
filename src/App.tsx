function App() {
  const getText = () => {
    if (true) {
      return "Vite + React";
    }
    return "Not reachable";
  };
  return (
    <>
      <h1>{getText()}</h1>
    </>
  );
}

export default App;
